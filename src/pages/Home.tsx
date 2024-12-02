// src/pages/Home.tsx
import React from "react";

const Home: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Selamat datang di Explore, Chill, Repeat!</h1>
      <p>
        Temukan destinasi wisata menarik, pesan tiket, dan nikmati pengalaman
        liburanmu dengan mudah!
      </p>
      <img
        src="https://via.placeholder.com/800x400"
        alt="Destinasi Wisata"
        style={{ width: "100%", borderRadius: "8px" }}
      />
    </div>
  );
};

export default Home;
