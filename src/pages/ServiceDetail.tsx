import { Link, useParams, Navigate } from 'react-router-dom';
import { services } from '../data/services';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/uslugi" replace />;
  }

  const scrollToForm = () => {
    window.location.hash = '#/kontakt';
  };

  return (
    <>
      <style>{`
        .service-detail-hero {
          padding: 5rem 0 3rem;
          background-color: var(--bg-secondary);
        }

        .breadcrumbs {
          max-width: 1200px;
          margin: 0 auto 2rem;
          padding: 0 1.5rem;
        }

        .breadcrumbs a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .breadcrumbs a:hover {
          color: var(--accent-cyan);
        }

        .breadcrumbs span {
          color: var(--text-muted);
          margin: 0 0.5rem;
        }

        .service-detail-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .service-detail-header {
          margin-bottom: 3rem;
        }

        .service-detail-header h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .service-detail-header .price {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--accent-cyan);
          margin-bottom: 2rem;
          display: block;
        }

        .service-detail-content {
          padding: 3rem 0;
        }

        .features-box {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          margin: 3rem 0;
        }

        .features-box h3 {
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .features-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .features-list li {
          color: var(--text-secondary);
          padding-left: 2rem;
          position: relative;
          font-size: 1.05rem;
        }

        .features-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent-teal);
          font-weight: 700;
          font-size: 1.3rem;
        }

        .content-html {
          color: var(--text-secondary);
          line-height: 1.8;
          font-size: 1.05rem;
        }

        .content-html h2 {
          color: var(--text-primary);
          font-size: 2rem;
          font-weight: 600;
          margin: 2.5rem 0 1.5rem;
        }

        .content-html h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin: 2rem 0 1rem;
        }

        .content-html p {
          margin-bottom: 1.5rem;
        }

        .content-html strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .cta-box {
          background: linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(20, 184, 166, 0.1));
          border: 1px solid var(--border-accent);
          border-radius: var(--radius-lg);
          padding: 3rem;
          margin: 4rem 0;
          text-align: center;
        }

        .cta-box h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .cta-box p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .cta-button {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-teal));
          color: white;
          border: none;
          border-radius: var(--radius-md);
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-smooth);
          text-decoration: none;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: var(--glow-cyan);
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-cyan);
          text-decoration: none;
          margin-bottom: 2rem;
          transition: color var(--transition-fast);
        }

        .back-link:hover {
          color: var(--accent-teal);
        }

        @media (max-width: 768px) {
          .service-detail-header h1 {
            font-size: 2.5rem;
          }

          .features-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <main>
        <section className="service-detail-hero">
          <div className="breadcrumbs">
            <Link to="/">Główna</Link>
            <span>/</span>
            <Link to="/uslugi">Usługi</Link>
            <span>/</span>
            <span>{service.title}</span>
          </div>

          <div className="service-detail-container">
            <Link to="/uslugi" className="back-link">
              ← Powrót do listy usług
            </Link>

            <div className="service-detail-header">
              <h1>{service.title}</h1>
              <span className="price">{service.price}</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', lineHeight: '1.6' }}>
                {service.short}
              </p>
            </div>
          </div>
        </section>

        <section className="service-detail-content">
          <div className="service-detail-container">
            <div className="features-box">
              <h3>Co obejmuje ta usługa?</h3>
              <ul className="features-list">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div 
              className="content-html" 
              dangerouslySetInnerHTML={{ __html: service.contentHtml }}
            />

            <div className="cta-box" id="orderFormAnchor">
              <h3>Zainteresowany tą usługą?</h3>
              <p>Skontaktuj się z nami i rozpocznij swoją kampanię już dziś</p>
              <button className="cta-button" onClick={scrollToForm}>
                Wyślij zapytanie
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServiceDetail;
