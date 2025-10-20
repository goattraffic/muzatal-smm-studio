const Contact = () => {
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
        submitButton.textContent = 'Wyślij wiadomość';
      }
    } catch (error) {
      alert('Wystąpił błąd połączenia. Spróbuj ponownie.');
      submitButton.disabled = false;
      submitButton.textContent = 'Wyślij wiadomość';
    }
  };

  return (
    <>
      <style>{`
        .contact-hero {
          padding: 5rem 0 3rem;
          background-color: var(--bg-secondary);
          text-align: center;
        }

        .contact-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .contact-hero h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .contact-hero p {
          font-size: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .contact-content {
          padding: 5rem 0;
        }

        .contact-form {
          max-width: 600px;
          margin: 0 auto;
          padding: 3rem;
          background-color: var(--bg-secondary);
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-color);
        }

        .form-group {
          margin-bottom: 1.75rem;
        }

        .form-group label {
          display: block;
          color: var(--text-primary);
          font-weight: 500;
          margin-bottom: 0.75rem;
          font-size: 1.05rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 1rem;
          font-family: inherit;
          transition: border-color var(--transition-fast);
        }

        .form-group textarea {
          min-height: 150px;
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-cyan);
        }

        .form-checkbox {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .form-checkbox input {
          margin-top: 0.25rem;
          width: 18px;
          height: 18px;
          cursor: pointer;
        }

        .form-checkbox label {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
          cursor: pointer;
        }

        .form-checkbox label a {
          color: var(--accent-cyan);
          text-decoration: none;
        }

        .submit-button {
          width: 100%;
          padding: 1.125rem;
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

        .info-box {
          margin-top: 3rem;
          padding: 2rem;
          background-color: var(--bg-secondary);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
          text-align: center;
        }

        .info-box h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .info-box p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .contact-hero h1 {
            font-size: 2.5rem;
          }

          .contact-form {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>

      <main>
        <section className="contact-hero">
          <div className="contact-container">
            <h1>Skontaktuj się z nami</h1>
            <p>
              Masz pytania? Chcesz rozpocząć kampanię? Wypełnij formularz, a nasz zespół odpowie w ciągu 24 godzin.
            </p>
          </div>
        </section>

        <section className="contact-content">
          <div className="contact-container">
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
                  placeholder="Wpisz swoje imię"
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
                  placeholder="Wpisz swoje nazwisko"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="twoj@email.pl"
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
                  placeholder="+48 123 456 789"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Wiadomość (opcjonalnie)</label>
                <textarea 
                  id="message" 
                  name="message"
                  placeholder="Opisz swoje potrzeby..."
                ></textarea>
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
                Wyślij wiadomość
              </button>
            </form>

            <div className="info-box">
              <h3>Godziny pracy</h3>
              <p>
                <strong>Poniedziałek - Piątek:</strong> 9:00 - 18:00<br />
                <strong>Sobota - Niedziela:</strong> Zamknięte
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
