import { useState } from 'react';
import logo from '../assets/esl_color.webp';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="header">
      <div className='header-icon'>
        <img src={logo} alt="Logo" />
      </div>
      <div className="header-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`header-menu-icon ${menuOpen ? 'open' : ''}`}>
          <span className="header-menu-icon-line"></span>
          <span className="header-menu-icon-line"></span>
          <span className="header-menu-icon-line"></span>
        </div>
        <div className={`header-menu-options ${menuOpen ? 'show' : ''}`}>
          <ul>
            <li>
              <Link to="/login" onClick={() => setMenuOpen(false)}><span>Entrar</span></Link>
            </li>
            <li>
              <Link to="/" onClick={() => { handleScroll('home'); setMenuOpen(false) }}>Home</Link>
            </li>
            <li>
              <a href="/#mapa" onClick={() => { handleScroll('Map'); setMenuOpen(false) }}>Mapa</a>
            </li>
            <li>
              <a href="/#times" onClick={() => { handleScroll('teams'); setMenuOpen(false) }}>Times</a>
            </li>
            <li>
              <a href="/#programacao" onClick={() => { handleScroll('schedule'); setMenuOpen(false) }}>Programação</a>
            </li>
            <li>
              <a href="/#servicos" onClick={() => { handleScroll('services'); setMenuOpen(false) }}>Serviços</a>
            </li>
            <li>
              <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-pc">
        <ul className="header-nav">
          <li>
            <Link id='nav-color' to="/" onClick={() => { handleScroll('home'); setMenuOpen(false) }}>HOME</Link>
          </li>
          <li>
            <a id='nav-color' href="/#mapa" onClick={() => { handleScroll('Map'); setMenuOpen(false) }}>MAPA</a>
          </li>
          <li>
            <a id='nav-color' href="/#times" onClick={() => { handleScroll('teams'); setMenuOpen(false) }}>TIMES</a>
          </li>
          <li>
            <a id='nav-color' href="/#programacao" onClick={() => { handleScroll('schedule'); setMenuOpen(false) }}>PROGRAMAÇÃO</a>
          </li>
          <li>
          <a id='nav-color' href="/#servicos" onClick={() => { handleScroll('services'); setMenuOpen(false) }}>SERVIÇOS</a>
          </li>
          <li>
            <Link id='nav-color' to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
          </li>
        </ul>
        <div className="header-entrar">
          <Link id='nav-color' to="/login">ENTRAR</Link>
        </div>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          top: 0;
          left: 0;
          width: 100%;
          background-color: rgb(16, 28, 102);
          padding: 10px;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
        }

        .header-icon {
          margin-left: 10px;
          width: 140px;
          height: 45px;
          overflow: hidden;
          
        }

        .header-icon img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          
        }

        .header-menu {
          display: none; 
        }

        @media (max-width: 1024px) {
          .header-menu {
            display: flex;
            align-items: center;
            cursor: pointer;
          }
          

          .header-pc {
            display: none; 
          }
        }

        @media (min-width: 1025px) {
          .header-pc {
            display: flex;
            width: 100%;
            align-items: center;
          }

          .header-menu {
            display: none; 
          }
        }

        .header-menu-icon {
          position: relative;
          right: 18px;
          width: 40px;
          height: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: transform 0.3s ease;
        }

        .header-menu-icon.open .header-menu-icon-line:nth-child(1) {
          transform: translateY(10px) rotate(45deg);
        }

        .header-menu-icon.open .header-menu-icon-line:nth-child(2) {
          opacity: 0;
        }

        .header-menu-icon.open .header-menu-icon-line:nth-child(3) {
          transform: translateY(-15px) rotate(-45deg);
        }

        .header-menu-icon-line {
          width: 80%;
          height: 3px;
          background-color: #fff;
          margin: 5px 0;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .header-menu-options {
          position: absolute;
          top: 60px;
          left: 0;
          width: 100vw;
          height: 65vh;
          border-radius: 10px;
          background-color: rgba(16, 28, 102, 0.98);
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 5px rgb(1, 1, 40) solid;
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          pointer-events: none;
        }

        .header-menu-options.show {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .header-menu-options ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .header-menu-options li {
          margin: 20px;
          color: #fff;
        }

        .header-menu-options a {
          text-decoration: none;
          color: #fff;
          font-size: 25px;
        }

        .header-nav {
          display: flex;
          gap: 40px;
          list-style: none;
          padding: 0;
          margin: 0;
          flex-grow: 1; 
          justify-content: center; 
          padding-top: 5px;
        }

        .header-nav li {
          color: #fff;
          cursor: pointer;
          font-size: 19px;
        }
        
        .header-entrar {
          margin-right: 25px;
          color: #FFA500;
          cursor: pointer;
          font-size: 19px;
        }
        
        #nav-color {
          color: #fff;
        }

        @media (max-width: 375px) {
          .header-menu-options{
            width: 104vw;
            height: 80vh;
          }


          

      `}</style>
    </header>
  );
}

export default Header;
