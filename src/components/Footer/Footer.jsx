import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__column">
            <h4>Mi Tienda</h4>
            <p>La mejor calidad al mejor precio. Tu estilo, nuestra pasión.</p>
          </div>
          <div className="footer__column">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#">Buscar</a></li>
              <li><a href="#">Política de Devoluciones</a></li>
              <li><a href="#">Términos de Servicio</a></li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Contáctanos</h4>
            <ul>
              <li><a href="#">Email</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Suscríbete</h4>
            <p>Recibe ofertas y novedades directamente en tu correo.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="tu@email.com" aria-label="Email" />
              <button type="submit" className="btn btn--primary">Enviar</button>
            </form>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()}, Mi Tienda. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;