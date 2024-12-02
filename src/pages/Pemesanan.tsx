// src/pages/Pemesanan.tsx
import React, { useState } from "react";

const Pemesanan: React.FC = () => {
  const [nama, setNama] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [destinasi, setDestinasi] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pemesanan berhasil untuk ${nama} di ${destinasi} pada ${tanggal}');
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Pemesanan Tiket Wisata</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nama" style={{ display: "block" }}>Nama:</label>
          <input
            id="nama"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
            style={{ padding: "8px", marginBottom: "10px", width: "100%" }}
          />
        </div>

        <div>
          <label htmlFor="tanggal" style={{ display: "block" }}>Tanggal:</label>
          <input
            id="tanggal"
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            required
            style={{ padding: "8px", marginBottom: "10px", width: "100%" }}
          />
        </div>

        <div>
          <label htmlFor="destinasi" style={{ display: "block" }}>Destinasi:</label>
          <select
            id="destinasi"
            value={destinasi}
            onChange={(e) => setDestinasi(e.target.value)}
            required
            style={{ padding: "8px", marginBottom: "10px", width: "100%" }}
          >
            <option value="">Candi</option>
            <option value="Bali">Air Terjun</option>
            <option value="Yogyakarta">Wukir Negoro</option>
            <option value="Lombok">Wahana Permainan</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#228B22",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Pesan Tiket
        </button>
      </form>
    </div>
  );
};

export default Pemesanan;
