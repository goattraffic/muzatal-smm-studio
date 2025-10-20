import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <>
      <style>{`
        .main-footer {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          padding: 3rem 0 1.5rem;
          margin-top: 5rem;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-section h3 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .footer-logo img {
          width: 35px;
          height: 35px;
        }

        .footer-logo span {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .footer-description {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          transition: color var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--accent-cyan);
        }

        .footer-hours {
          color: var(--text-secondary);
          line-height: 1.8;
          font-size: 0.95rem;
        }

        .footer-hours strong {
          color: var(--text-primary);
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>

      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="footer-logo">
                <img src={logo} alt="Muzatal" />
                <span>Muzatal</span>
              </div>
              <p className="footer-description">
                Profesjonalna agencja SMM i marketingu influencerów. Tworzymy strategie, które łączą marki z ich odbiorcami.
              </p>
            </div>

            <div className="footer-section">
              <h3>Menu</h3>
              <ul className="footer-links">
                <li><Link to="/">Główna</Link></li>
                <li><Link to="/o-nas">O nas</Link></li>
                <li><Link to="/uslugi">Usługi</Link></li>
                <li><Link to="/kontakt">Kontakt</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Polityka</h3>
              <ul className="footer-links">
                <li><Link to="/polityka-prywatnosci">Polityka prywatności</Link></li>
                <li><Link to="/regulamin">Regulamin</Link></li>
                <li><Link to="/polityka-zwrotow">Polityka zwrotów</Link></li>
                <li><Link to="/cookie-policy">Cookie Policy</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Godziny pracy</h3>
              <div className="footer-hours">
                <p><strong>Poniedziałek - Piątek:</strong><br />9:00 - 18:00</p>
                <p><strong>Sobota - Niedziela:</strong><br />Zamknięte</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Muzatal. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
