const About = () => {
  return (
    <>
      <style>{`
        .about-hero {
          padding: 5rem 0 3rem;
          background-color: var(--bg-secondary);
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .about-hero h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .about-hero p {
          font-size: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .about-content {
          padding: 5rem 0;
        }

        .content-section {
          margin-bottom: 4rem;
        }

        .content-section h2 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .content-section p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 1.25rem;
          font-size: 1.05rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .value-card {
          background-color: var(--bg-secondary);
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
        }

        .value-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--accent-cyan);
        }

        .value-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .faq-section {
          padding: 5rem 0;
          background-color: var(--bg-secondary);
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .faq-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .faq-item {
          background-color: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
          overflow: hidden;
        }

        .faq-question {
          width: 100%;
          padding: 1.5rem;
          text-align: left;
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: color var(--transition-fast);
        }

        .faq-question:hover {
          color: var(--accent-cyan);
        }

        .faq-answer {
          padding: 0 1.5rem 1.5rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about-hero h1 {
            font-size: 2.5rem;
          }

          .faq-header h2 {
            font-size: 2rem;
          }
        }
      `}</style>

      <main>
        <section className="about-hero">
          <div className="about-container">
            <h1>O Muzatal</h1>
            <p>
              Jesteśmy agencją SMM, która łączy marki z ich społecznościami poprzez autentyczne treści i skuteczne strategie marketingowe.
            </p>
          </div>
        </section>

        <section className="about-content">
          <div className="about-container">
            <div className="content-section">
              <h2>Nasza Misja</h2>
              <p>
                W Muzatal wierzymy, że social media to nie tylko kanał promocji - to przestrzeń do budowania prawdziwych relacji między markami a ich odbiorcami. Nasza misja to pomagać firmom w tworzeniu autentycznej obecności w mediach społecznościowych, która przekłada się na realne wyniki biznesowe.
              </p>
              <p>
                Każdy klient jest dla nas unikalny. Nie stosujemy szablonowych rozwiązań - zamiast tego tworzymy strategie dopasowane do Twojej marki, celów i grupy docelowej. Od pierwszego kontaktu po realizację kampanii, stawiamy na transparentność, kreatywność i mierzalne rezultaty.
              </p>
            </div>

            <div className="content-section">
              <h2>Jak Działamy</h2>
              <p>
                Nasz proces rozpoczyna się od głębokiego zrozumienia Twojego biznesu. Analizujemy konkurencję, badamy rynek, poznajemy Twoją grupę docelową. Na tej podstawie budujemy strategię, która nie tylko wyróżni Cię na tle konkurencji, ale przede wszystkim przyniesie wymierne rezultaty.
              </p>
              <p>
                Pracujemy w oparciu o dane - każda decyzja jest podejmowana na podstawie analiz i testów. Regularnie raportujemy wyniki, optymalizujemy działania i dostosowujemy strategię do zmieniających się warunków rynkowych. Twój sukces to nasz sukces.
              </p>
            </div>

            <div className="content-section">
              <h2>Nasze Wartości</h2>
              <div className="values-grid">
                <div className="value-card">
                  <h3>Autentyczność</h3>
                  <p>
                    Wierzymy w szczerą komunikację i budowanie prawdziwych relacji. Nie obiecujemy złotych gór - dostarczamy realne rezultaty.
                  </p>
                </div>
                <div className="value-card">
                  <h3>Kreatywność</h3>
                  <p>
                    Wyróżniamy się oryginalnymi pomysłami i świeżym spojrzeniem. Nie kopiujemy - tworzymy content, który przyciąga uwagę.
                  </p>
                </div>
                <div className="value-card">
                  <h3>Profesjonalizm</h3>
                  <p>
                    Dotrzymujemy terminów, dbamy o szczegóły i stawiamy najwyższe standardy jakości w każdym aspekcie naszej pracy.
                  </p>
                </div>
                <div className="value-card">
                  <h3>Partnerstwo</h3>
                  <p>
                    Traktujemy klientów jak partnerów biznesowych. Ich sukces to nasz sukces, dlatego angażujemy się w każdy projekt w 100%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="faq-container">
            <div className="faq-header">
              <h2>Często Zadawane Pytania</h2>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                Jak długo trwa realizacja kampanii SMM?
                <span>▼</span>
              </button>
              <div className="faq-answer">
                Czas realizacji zależy od zakresu projektu. Strategia SMM zajmuje zazwyczaj 2-4 tygodnie, miesięczna obsługa social media to działania ciągłe, a kampanie influencerskie trwają od 4 do 12 tygodni.
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                Czy oferujecie pakiety dla małych firm?
                <span>▼</span>
              </button>
              <div className="faq-answer">
                Tak! Mamy elastyczne pakiety dostosowane do budżetu małych i średnich firm. Możemy również przygotować ofertę na miarę Twoich potrzeb i możliwości finansowych.
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                Na jakich platformach social media pracujecie?
                <span>▼</span>
              </button>
              <div className="faq-answer">
                Specjalizujemy się we wszystkich głównych platformach: Instagram, Facebook, LinkedIn, TikTok, Twitter (X), Pinterest i YouTube. Dobieramy platformy zgodnie z Twoją grupą docelową i celami biznesowymi.
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                Czy muszę podpisać długoterminową umowę?
                <span>▼</span>
              </button>
              <div className="faq-answer">
                Nie. Oferujemy zarówno współpracę projektową (jednorazowe kampanie), jak i miesięczne pakiety subskrypcyjne. Możesz zacząć od testowego miesiąca i zdecydować o dalszej współpracy.
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                Jak mierzcie efektywność kampanii?
                <span>▼</span>
              </button>
              <div className="faq-answer">
                Używamy zaawansowanych narzędzi analitycznych do śledzenia wszystkich kluczowych metryk: zasięgi, zaangażowanie, konwersje, ROI, ROAS. Dostarczamy szczegółowe raporty i rekomendacje optymalizacyjne.
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                Czy tworzycie content w języku polskim?
                <span>▼</span>
              </button>
              <div className="faq-answer">
                Tak, mamy zespół native speakerów polskich copywriterów i content creatorów. Tworzymy treści w języku polskim na najwyższym poziomie, dopasowane do lokalnego rynku i kultury.
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
