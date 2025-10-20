import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Services = () => {
  return (
    <>
      <style>{`
        .services-hero {
          padding: 5rem 0 3rem;
          background-color: var(--bg-secondary);
          text-align: center;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .services-hero h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .services-hero p {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .services-list {
          padding: 5rem 0;
        }

        .services-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          transition: all var(--transition-smooth);
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-teal));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity var(--transition-smooth);
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card:hover {
          transform: translateY(-5px);
        }

        .service-card h2 {
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          color: var(--text-primary);
        }

        .service-card p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .service-price {
          color: var(--accent-cyan);
          font-weight: 600;
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .service-features {
          list-style: none;
          margin-bottom: 2rem;
        }

        .service-features li {
          color: var(--text-secondary);
          padding: 0.75rem 0;
          padding-left: 1.75rem;
          position: relative;
          font-size: 1rem;
        }

        .service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent-teal);
          font-weight: 600;
          font-size: 1.2rem;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-teal));
          color: white;
          text-decoration: none;
          border-radius: var(--radius-md);
          font-weight: 500;
          transition: all var(--transition-smooth);
        }

        .service-link:hover {
          transform: translateY(-2px);
          box-shadow: var(--glow-cyan);
        }

        @media (max-width: 768px) {
          .services-hero h1 {
            font-size: 2.5rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <main>
        <section className="services-hero">
          <div className="services-container">
            <h1>Nasze Usługi</h1>
            <p>
              Kompleksowe rozwiązania SMM i marketingu influencerów dostosowane do Twoich celów biznesowych
            </p>
          </div>
        </section>

        <section className="services-list">
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.slug} className="service-card">
                <h2>{service.title}</h2>
                <p>{service.short}</p>
                <div className="service-price">{service.price}</div>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link to={`/uslugi/${service.slug}`} className="service-link">
                  Szczegóły usługi
                  <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
