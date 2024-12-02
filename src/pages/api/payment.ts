// src/pages/api/payment.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import snap from '@/libs/midtrans';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { orderId, amount, customerName, email } = req.body;

    if (!orderId || !amount || !customerName || !email) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      // Buat transaksi di Midtrans
      const transaction = await snap.createTransaction({
        transaction_details: {
          order_id: orderId, // Pastikan unik setiap kali
          gross_amount: amount, // Total nominal pembayaran
        },
        customer_details: {
          first_name: customerName,
          email,
        },
      });

      return res.status(200).json(transaction); // Kirim URL pembayaran kembali ke frontend
    } catch (error) {
      console.error('Error creating transaction:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
