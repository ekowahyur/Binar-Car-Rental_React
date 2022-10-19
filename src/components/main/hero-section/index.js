import React from 'react';
import HeroThumbnail from './assets/img_car.png';
import './style.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero-section">
      <div className="container">
        <div className="col-lg-6">
          <div className="hero-content">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
              Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <a href="find-car.html" target="_blank" className="btn btn-success">Mulai Sewa Mobil</a>
          </div>
        </div>
      </div>
      <div className="hero-thumbnail">
        <img src={HeroThumbnail} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;