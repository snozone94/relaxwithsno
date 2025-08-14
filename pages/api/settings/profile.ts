import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

/**
 * Update a creator's profile information.
 *
 * Expects a JSON body with `userId`, `displayName` and `bio` fields. The
 * `userId` corresponds to the parent User record of the CreatorProfile.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { userId, displayName, bio } = req.body ?? {};
  if (!userId || typeof displayName !== 'string') {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    const updated = await prisma.creatorProfile.update({
      where: { userId: String(userId) },
      data: {
        displayName: displayName.trim(),
        bio: bio ?? null,
      },
    });
    return res.status(200).json({ profile: updated });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to update profile' });
  }
}
