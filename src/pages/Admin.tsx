// src/pages/Admin.tsx
import React from "react";

const Admin: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard Admin</h1>
      <p>Di sini admin bisa mengelola data pemesanan dan destinasi wisata.</p>

      <div style={{ marginTop: "20px" }}>
        <h2>Data Pemesanan</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Nama</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Destinasi</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tanggal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>John Doe</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>Bali</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>2024-12-10</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>Jane Smith</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>Yogyakarta</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>2024-12-12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
