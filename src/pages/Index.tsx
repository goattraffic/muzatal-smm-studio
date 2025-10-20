import { Link } from 'react-router-dom';
import { services } from '../data/services';
import heroImage from '../assets/hero-smm.jpg';

const Index = () => {
  const scrollToForm = () => {
    document.getElementById('contactForm')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-text h1 {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .hero-gradient {
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-teal));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-text p {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-cta {
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
          display: inline-block;
        }

        .hero-cta:hover {
          transform: translateY(-3px);
          box-shadow: var(--glow-cyan);
        }

        .hero-visual {
          position: relative;
        }

        .hero-image {
          width: 100%;
          height: auto;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-accent);
        }

        .metrics-section {
          padding: 5rem 0;
          background-color: var(--bg-secondary);
        }

        .metrics-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .metric-card {
          text-align: center;
          padding: 2rem;
          background-color: var(--bg-tertiary);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
          transition: all var(--transition-smooth);
        }

        .metric-card:hover {
          border-color: var(--accent-cyan);
          transform: translateY(-5px);
        }

        .metric-number {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-teal));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .metric-label {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .services-section {
          padding: 5rem 0;
        }

        .section-header {
          max-width: 1200px;
          margin: 0 auto 3rem;
          padding: 0 1.5rem;
          text-align: center;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .section-header p {
          font-size: 1.15rem;
          color: var(--text-secondary);
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
          padding: 2rem;
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

        .service-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
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
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .service-features {
          list-style: none;
          margin-bottom: 1.5rem;
        }

        .service-features li {
          color: var(--text-secondary);
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
          font-size: 0.95rem;
        }

        .service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent-teal);
          font-weight: 600;
        }

        .service-link {
          display: inline-block;
          color: var(--accent-cyan);
          text-decoration: none;
          font-weight: 500;
          transition: color var(--transition-fast);
        }

        .service-link:hover {
          color: var(--accent-teal);
        }

        .cta-section {
          padding: 5rem 0;
          background-color: var(--bg-secondary);
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1.5rem;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .cta-content p {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
        }

        .contact-form {
          max-width: 600px;
          margin: 3rem auto 0;
          padding: 2.5rem;
          background-color: var(--bg-tertiary);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          color: var(--text-primary);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .form-group input {
          width: 100%;
          padding: 0.875rem;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 1rem;
          transition: border-color var(--transition-fast);
        }

        .form-group input:focus {
          outline: none;
          border-color: var(--accent-cyan);
        }

        .form-checkbox {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .form-checkbox input {
          margin-top: 0.25rem;
          width: 18px;
          height: 18px;
          cursor: pointer;
        }

        .form-checkbox label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.5;
          cursor: pointer;
        }

        .form-checkbox label a {
          color: var(--accent-cyan);
          text-decoration: none;
        }

        .submit-button {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-teal));
          color: white;
          border: none;
          border-radius: var(--radius-md);
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-smooth);
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: var(--glow-cyan);
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .testimonials-section {
          padding: 5rem 0;
        }

        .testimonials-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .testimonial-card {
          background-color: var(--bg-secondary);
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
        }

        .testimonial-rating {
          color: #FFA500;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .testimonial-text {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .testimonial-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-teal));
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 1.2rem;
        }

        .testimonial-info h4 {
          color: var(--text-primary);
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .testimonial-info p {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-text p {
            font-size: 1.1rem;
          }

          .services-grid,
          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .section-header h2,
          .cta-content h2 {
            font-size: 2rem;
          }
        }

        .error-message {
          color: #EF4444;
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }

        .success-message {
          color: var(--accent-teal);
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }
      `}</style>

      <main>
        {/* Hero Section */}
        <section className="hero-section grid-bg">
          <div className="hero-content fade-in">
            <div className="hero-text">
              <h1>
                Łączymy <span className="hero-gradient">marki</span> z ich <span className="hero-gradient">społecznością</span>
              </h1>
              <p>
                Profesjonalne strategie SMM, kreacja contentu i kampanie influencerów, które przynoszą wymierne rezultaty.
              </p>
              <button className="hero-cta" onClick={scrollToForm}>
                Rozpocznij kampanię SMM
              </button>
            </div>
            <div className="hero-visual scan-line">
              <img src={heroImage} alt="SMM Dashboard" className="hero-image" />
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="metrics-section">
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-number">500+</div>
              <div className="metric-label">Zadowolonych klientów</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">2M+</div>
              <div className="metric-label">Zasięg miesięczny</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">95%</div>
              <div className="metric-label">Wzrost zaangażowania</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">24/7</div>
              <div className="metric-label">Wsparcie dla klientów</div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="section-header">
            <h2>Nasze Usługi</h2>
            <p>Kompleksowe rozwiązania SMM dostosowane do Twoich potrzeb</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.slug} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <div className="service-price">{service.price}</div>
                <ul className="service-features">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link to={`/uslugi/${service.slug}`} className="service-link">
                  Dowiedz się więcej →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="section-header">
            <h2>Co mówią nasi klienci</h2>
            <p>Opinie firm, które nam zaufały</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Muzatal całkowicie zmienił naszą obecność w social media. Wzrost zaangażowania o 200% w 3 miesiące!"
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">AK</div>
                <div className="testimonial-info">
                  <h4>Anna Kowalska</h4>
                  <p>CEO, TechStart</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Profesjonalizm i kreatywność na najwyższym poziomie. Kampania z influencerami przerosła nasze oczekiwania."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">MN</div>
                <div className="testimonial-info">
                  <h4>Marek Nowak</h4>
                  <p>Marketing Manager, FashionHub</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Najlepsza inwestycja w marketing, jaką mogliśmy poczynić. ROI przekroczył 400%!"
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">KW</div>
                <div className="testimonial-info">
                  <h4>Katarzyna Wiśniewska</h4>
                  <p>Founder, BeautyBox</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA & Contact Form Section */}
        <section className="cta-section" id="contactForm">
          <div className="cta-content">
            <h2>Gotowy na rozwój w social media?</h2>
            <p>
              Skontaktuj się z nami i rozpocznij swoją kampanię SMM już dziś. Wypełnij formularz, a nasz zespół skontaktuje się z Tobą w ciągu 24 godzin.
            </p>

            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
};

const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    submitButton.disabled = true;
    submitButton.textContent = 'Wysyłanie...';

    try {
      const response = await fetch('/api/lead.php', {
        method: 'POST',
        headers: {
          'X-Requested-With': 'fetch'
        },
        body: formData
      });

      const result = await response.json();

      if (result.ok) {
        window.location.hash = '#/dziekujemy';
      } else {
        alert(result.error || 'Wystąpił błąd podczas wysyłania formularza.');
        submitButton.disabled = false;
        submitButton.textContent = 'Wyślij zapytanie';
      }
    } catch (error) {
      alert('Wystąpił błąd połączenia. Spróbuj ponownie.');
      submitButton.disabled = false;
      submitButton.textContent = 'Wyślij zapytanie';
    }
  };

  return (
    <form className="contact-form" id="leadForm" onSubmit={handleSubmit}>
      <input type="hidden" name="__hp" value="" />
      
      <div className="form-group">
        <label htmlFor="first_name">Imię *</label>
        <input 
          type="text" 
          id="first_name" 
          name="first_name" 
          required 
          minLength={2}
        />
      </div>

      <div className="form-group">
        <label htmlFor="last_name">Nazwisko *</label>
        <input 
          type="text" 
          id="last_name" 
          name="last_name" 
          required 
          minLength={2}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Telefon *</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          required 
          pattern="[0-9+\s\-()]+"
        />
      </div>

      <div className="form-checkbox">
        <input 
          type="checkbox" 
          id="consent" 
          name="consent" 
          required 
        />
        <label htmlFor="consent">
          Zgadzam się na przetwarzanie moich danych osobowych zgodnie z{' '}
          <a href="/#/polityka-prywatnosci">Polityką prywatności</a> *
        </label>
      </div>

      <button type="submit" className="submit-button">
        Wyślij zapytanie
      </button>
    </form>
  );
};

export default Index;
