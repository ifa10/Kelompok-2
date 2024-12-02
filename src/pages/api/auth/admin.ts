import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Contoh validasi Admin (gunakan token atau session sebenarnya di implementasi nyata)
  const { role } = req.headers; // Misalnya, kirim "role" di header request

  if (role === 'admin') {
    return res.status(200).json({ message: 'Authorized as Admin' });
  }

  return res.status(403).json({ error: 'Forbidden: You are not an Admin' });
}
