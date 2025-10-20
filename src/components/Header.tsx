import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.hash === `#${path}` ? 'active' : '';
  };

  return (
    <>
      <style>{`
        .main-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background-color: rgba(10, 14, 20, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
        }

        .logo-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 600;
          font-size: 1.25rem;
          transition: opacity var(--transition-fast);
        }

        .logo-link:hover {
          opacity: 0.8;
        }

        .logo-image {
          width: 40px;
          height: 40px;
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color var(--transition-fast);
          position: relative;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--accent-cyan);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-cyan), var(--accent-teal));
          transition: width var(--transition-smooth);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;
        }

        .menu-toggle span {
          width: 25px;
          height: 2px;
          background-color: var(--text-primary);
          transition: all var(--transition-fast);
        }

        .menu-toggle.open span:nth-child(1) {
          transform: rotate(45deg) translate(7px, 7px);
        }

        .menu-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .menu-toggle.open span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            flex-direction: column;
            background-color: var(--bg-secondary);
            padding: 2rem 1.5rem;
            gap: 1.5rem;
            border-bottom: 1px solid var(--border-color);
            transform: translateY(-100%);
            opacity: 0;
            transition: transform var(--transition-smooth), opacity var(--transition-smooth);
            pointer-events: none;
          }

          .nav-menu.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }

          .menu-toggle {
            display: flex;
          }
        }

        .spacer {
          height: 70px;
        }
      `}</style>

      <header className="main-header">
        <div className="header-container">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Muzatal" className="logo-image" />
            <span>Muzatal</span>
          </Link>

          <nav>
            <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
              <li>
                <Link 
                  to="/" 
                  className={`nav-link ${isActive('/')}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Główna
                </Link>
              </li>
              <li>
                <Link 
                  to="/o-nas" 
                  className={`nav-link ${isActive('/o-nas')}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  O nas
                </Link>
              </li>
              <li>
                <Link 
                  to="/uslugi" 
                  className={`nav-link ${isActive('/uslugi')}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Usługi
                </Link>
              </li>
              <li>
                <Link 
                  to="/kontakt" 
                  className={`nav-link ${isActive('/kontakt')}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <div className="spacer"></div>
    </>
  );
};

export default Header;
