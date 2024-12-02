import React from "react";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";

const Home: React.FC = () => {
  const router = useRouter(); // Untuk navigasi

  return (
    <div>
      <Navbar />
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          padding: "50px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative", 
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          ), url('/images/teh 3.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Kontainer konten */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "30px",
            borderRadius: "15px",
            maxWidth: "600px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h1
            style={{
              color: "#333",
              fontSize: "2.5rem",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            <p>Selamat Datang Di Website Kami!</p></h1>
                   
          <p
            style={{
              color: "#555",
              fontSize: "1.2rem",
              marginBottom: "30px",
              lineHeight: "1.6",
            }}
          >
            Siap-siap untuk menjelajahi keajaiban Wisata Sirah Kencong
            dan temukan berbagai layanan seru yang bikin petualanganmu makin berkesan!
          </p>
             <div>
            <button
              style={{
                padding: "12px 25px",
                margin: "10px",
                backgroundColor: "#3E4D32",
                color: "white",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "bold",
                transition: "background-color 0.3s ease, transform 0.2s ease",
                boxShadow: "0px 4px 10px rgba(0, 112, 243, 0.3)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#556B2")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#556B2F")
              }
              onClick={() => router.push("/wisata")}
            >
              Tentang Wisata
            </button>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
