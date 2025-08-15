import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

/**
 * Update notification preferences for a user.
 *
 * Expects a JSON body with `userId`, `emailNotifications` and
 * `pushNotifications` booleans. All fields are required.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { userId, emailNotifications, pushNotifications } = req.body ?? {};
  if (!userId || typeof emailNotifications !== 'boolean' || typeof pushNotifications !== 'boolean') {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }
  try {
    const updated = await prisma.user.update({
      where: { id: String(userId) },
      data: {
        emailNotifications,
        pushNotifications,
      },
    });
    return res.status(200).json({ user: updated });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to update notification preferences' });
  }
}
