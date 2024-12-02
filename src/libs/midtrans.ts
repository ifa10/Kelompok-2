import midtransClient from "midtrans-client";

// Inisialisasi Snap dengan mengambil Server Key dari environment variable
const snap = new midtransClient.Snap({
  isProduction: false, // Ubah ke `true` jika di production
  serverKey: process.env.MIDTRANS_SERVER_KEY!,
  clientKey: process.env.MIDTRANS_CLIENT_KEY!,
});

export default snap;
