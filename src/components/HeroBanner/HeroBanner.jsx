import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Descubre la Nueva Colección</h1>
        <p>Estilo y calidad que te definen. Explora nuestros catálogos.</p>
        <a href="#catalogos" className="btn btn--primary">Ver Catálogos</a>
      </div>
    </section>
  );
};

export default HeroBanner;