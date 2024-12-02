// src/pages/api/midtrans-notification.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const notification = req.body;

    try {
      // Validasi notifikasi dari Midtrans
      const isValid = validateMidtransNotification(notification);
      if (!isValid) {
        return res.status(400).json({ message: 'Invalid notification' });
      }

      // Lakukan proses sesuai status pembayaran
      if (notification.transaction_status === 'capture' && notification.fraud_status === 'accept') {
        console.log('Transaction successful:', notification);
      } else if (notification.transaction_status === 'cancel') {
        console.log('Transaction canceled:', notification);
      } else if (notification.transaction_status === 'expire') {
        console.log('Transaction expired:', notification);
      }

      res.status(200).json({ message: 'Notification received successfully' });
    } catch (error) {
      console.error('Error processing notification:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// Validasi notifikasi dari Midtrans
function validateMidtransNotification(notification: any): boolean {
  // Tambahkan logika validasi berdasarkan kebutuhan (e.g., server key, order_id)
  return true;
}
