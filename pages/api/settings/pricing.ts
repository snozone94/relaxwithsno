import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

/**
 * Update the creator's subscription price. The price should be provided
 * in dollars as a string or number and will be converted to cents on
 * persistence. Expects a JSON body with `userId` and `price` fields.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { userId, price } = req.body ?? {};
  if (!userId || price === undefined) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const priceNumber = typeof price === 'string' ? parseFloat(price) : Number(price);
  if (Number.isNaN(priceNumber) || priceNumber < 0) {
    return res.status(400).json({ error: 'Invalid price' });
  }
  const priceCents = Math.round(priceNumber * 100);
  try {
    const updated = await prisma.creatorProfile.update({
      where: { userId: String(userId) },
      data: {
        subscriptionPriceCents: priceCents,
      },
    });
    return res.status(200).json({ profile: updated });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to update pricing' });
  }
}
