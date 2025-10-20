import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <>
      <style>{`
        .thankyou-section {
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 1.5rem;
        }

        .thankyou-content {
          max-width: 600px;
          text-align: center;
          background-color: var(--bg-secondary);
          padding: 4rem 3rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-accent);
        }

        .thankyou-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 2rem;
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-teal));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          animation: scaleIn 0.5s ease-out;
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .thankyou-content h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .thankyou-content p {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .thankyou-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .thankyou-link {
          padding: 1rem 2rem;
          border-radius: var(--radius-md);
          text-decoration: none;
          font-weight: 500;
          transition: all var(--transition-smooth);
        }

        .link-primary {
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-teal));
          color: white;
        }

        .link-primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--glow-cyan);
        }

        .link-secondary {
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
        }

        .link-secondary:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        @media (max-width: 768px) {
          .thankyou-content {
            padding: 3rem 2rem;
          }

          .thankyou-content h1 {
            font-size: 2rem;
          }

          .thankyou-links {
            flex-direction: column;
          }

          .thankyou-link {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <main>
        <section className="thankyou-section">
          <div className="thankyou-content">
            <div className="thankyou-icon">✓</div>
            <h1>Dziękujemy!</h1>
            <p>
              Twoje dane zostały pomyślnie wysłane. Nasz zespół skontaktuje się z Tobą w ciągu 24 godzin roboczych.
            </p>
            <div className="thankyou-links">
              <Link to="/" className="thankyou-link link-primary">
                Wróć na stronę główną
              </Link>
              <Link to="/uslugi" className="thankyou-link link-secondary">
                Zobacz nasze usługi
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ThankYou;
