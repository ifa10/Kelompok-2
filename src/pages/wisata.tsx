import React from "react";

const Wisata: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "50px",
        backgroundColor: "#f0f8ff",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "#2c3e50",
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "30px",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Destinasi Wisata
      </h1>

      {/* Deskripsi tentang wisata */}
      <p
        style={{
          color: "#34495e",
          fontSize: "1.2rem",
          marginBottom: "30px",
          padding: "0 20px",
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: "1.6",
        }}
      >
        Ingin liburan seru? Datang ke Sirah Kencong Wlingi Blitar! Kamu bisa trekking ke air terjun, berburu foto,
        atau sekadar bersantai menikmati pemandangan sambil mencicipi teh segar.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px", // Menjaga jarak antar kotak
          justifyContent: "center",
          flexWrap: "nowrap", // Mengatur agar tetap 1 baris
          marginTop: "20px",
          overflowX: "auto", // Agar konten bisa digulirkan secara horizontal jika diperlukan
        }}
      >
        {/* Kartu Wisata A */}
        <div
          className="card"
          style={{
            width: "250px", // Lebar tiap kotak
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
          }}
        >
          <h3
            style={{
              color: "#34495e",
              fontSize: "1.8rem",
              marginBottom: "10px",
            }}
          >
            Candi
          </h3>
          <p style={{ color: "#7f8c8d", fontSize: "1rem", marginBottom: "20px" }}>
            Deskripsi singkat tentang wisata A. Rasakan pengalaman seru di sini!
          </p>
          <a
            href="#"
            className="button"
            style={{
              textDecoration: "none",
              color: "#fff",
              backgroundColor: "#2ecc71",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "1rem",
              fontWeight: "bold",
              transition: "background-color 0.3s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#27ae60";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#2ecc71";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Selengkapnya
          </a>
        </div>

        {/* Kartu Wisata B */}
        <div
          className="card"
          style={{
            width: "250px", // Lebar tiap kotak
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
          }}
        >
          <h3
            style={{
              color: "#34495e",
              fontSize: "1.8rem",
              marginBottom: "10px",
            }}
          >
            Air Terjun
          </h3>
          <p style={{ color: "#7f8c8d", fontSize: "1rem", marginBottom: "20px" }}>
            Deskripsi singkat tentang wisata B. Jelajahi destinasi menakjubkan ini!
          </p>
          <a
            href="#"
            className="button"
            style={{
              textDecoration: "none",
              color: "#fff",
              backgroundColor: "#3498db",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "1rem",
              fontWeight: "bold",
              transition: "background-color 0.3s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#2980b9";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#3498db";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Selengkapnya
          </a>
        </div>

        {/* Kartu Wisata C */}
        <div
          className="card"
          style={{
            width: "250px", // Lebar tiap kotak
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
          }}
        >
          <h3
            style={{
              color: "#34495e",
              fontSize: "1.8rem",
              marginBottom: "10px",
            }}
          >
            Wukir Negoro
          </h3>
          <p style={{ color: "#7f8c8d", fontSize: "1rem", marginBottom: "20px" }}>
            Deskripsi singkat tentang wisata C. Nikmati pemandangan indah dan suasana tenang!
          </p>
          <a
            href="#"
            className="button"
            style={{
              textDecoration: "none",
              color: "#fff",
              backgroundColor: "#e67e22",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "1rem",
              fontWeight: "bold",
              transition: "background-color 0.3s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#d35400";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#e67e22";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Selengkapnya
          </a>
        </div>

        {/* Kartu Wisata D */}
        <div
          className="card"
          style={{
            width: "250px", // Lebar tiap kotak
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
          }}
        >
          <h3
            style={{
              color: "#34495e",
              fontSize: "1.8rem",
              marginBottom: "10px",
            }}
          >
            Wahana Permainan
          </h3>
          <p style={{ color: "#7f8c8d", fontSize: "1rem", marginBottom: "20px" }}>
            Deskripsi singkat tentang wisata D. Menyajikan panorama alam yang luar biasa!
          </p>
          <a
            href="#"
            className="button"
            style={{
              textDecoration: "none",
              color: "#fff",
              backgroundColor: "#9b59b6",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "1rem",
              fontWeight: "bold",
              transition: "background-color 0.3s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#8e44ad";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#9b59b6";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Selengkapnya
          </a>
        </div>
      </div>
    </div>
        );
    };

    export default Wisata;