import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/iem-logo.png';

function Footer() {

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 60; // Ajuste para a altura do seu cabeçalho
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>
        <div className="quick-links">
          <h4>Links Rápidos</h4>
          <ul>
            <li><Link to="/" onClick={() => { handleScroll('home'); setMenuOpen(false) }}>Início</Link></li>
            <li><a href="/#programacao" onClick={() => { handleScroll('schedule'); setMenuOpen(false) }}>Programação</a></li>
            <li><a href="https://www.mundo-ticket.com/pt/evento/iem-rio-2024" target="_blank" rel="noopener noreferrer">Comprar Ingressos</a></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="location">
          <h4>Localização</h4>
          <p>Farmasi Arena, Rio de Janeiro, Brasil</p>
          <a href="https://goo.gl/maps/link_para_o_local" target="_blank" rel="noopener noreferrer">Ver no Google Maps</a>
        </div>

        <div className="social-media">
          <h4>Redes Sociais</h4>
          <ul>
            <li><a href="https://facebook.com/iem" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/iem" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com/iem" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>

        <div className="footer-note">
          <p>© 2024 Intel Extreme Masters. Todos os direitos reservados.</p>
          <p><Link to="#privacy-policy">Política de Privacidade</Link> | <Link to="#terms">Termos de Uso</Link></p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: rgb(16, 28, 102);
          color: #fff;
          padding: 20px;
          text-align: center;
        }

        .footer-content {
          max-width: 1000px;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .logo {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
          margin-top: 20px;
          width: 270px;
        }

        .logo img {
          width: 100%;
          max-width: 270px;
          height: auto;
        }

        .footer h4 {
          margin-bottom: 10px;
          font-size: 18px;
          color: #FFA500;
        }

        .footer p, .footer a {
          color: #fff;
          font-size: 14px;
          line-height: 1.5;
          margin: 5px 0;
          text-decoration: none;
        }

        .footer a:hover {
          color: #ff6600;
        }

        .footer ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer ul li {
          margin: 5px 0;
        }

        .footer-note {
          text-align: center;
          margin-top: 20px;
          font-size: 12px;
        }

        .footer-note a {
          color: #fff;
          text-decoration: underline;
        }

        .footer-note a:hover {
          color: #ff6600;
        }
      `}</style>
    </footer>
  );
}

export default Footer;