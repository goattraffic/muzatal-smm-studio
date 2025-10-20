import { useState, useEffect } from 'react';

const CMPBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const tcString = generateTCString(true, true, true);
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      tcString,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const tcString = generateTCString(true, false, false);
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      tcString,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const tcString = generateTCString(preferences.necessary, preferences.analytics, preferences.marketing);
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...preferences,
      tcString,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const generateTCString = (necessary: boolean, analytics: boolean, marketing: boolean) => {
    return `TC-${necessary ? '1' : '0'}${analytics ? '1' : '0'}${marketing ? '1' : '0'}-${Date.now()}`;
  };

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        .cmp-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10000;
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-accent);
          box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.3);
          padding: 1.5rem;
          animation: slideUp 0.4s ease-out;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .cmp-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .cmp-text {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
          font-size: 0.95rem;
        }

        .cmp-text a {
          color: var(--accent-cyan);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .cmp-text a:hover {
          color: var(--accent-teal);
        }

        .cmp-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .cmp-button {
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-md);
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          border: none;
        }

        .cmp-button-primary {
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-teal));
          color: white;
        }

        .cmp-button-primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--glow-cyan);
        }

        .cmp-button-secondary {
          background-color: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
        }

        .cmp-button-secondary:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .cmp-settings {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }

        .cmp-checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .cmp-checkbox {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .cmp-checkbox input {
          width: 18px;
          height: 18px;
          cursor: pointer;
        }

        .cmp-checkbox label {
          color: var(--text-primary);
          cursor: pointer;
          font-size: 0.95rem;
        }

        .cmp-checkbox-description {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin-left: 1.75rem;
        }

        @media (max-width: 768px) {
          .cmp-banner {
            padding: 1.25rem;
          }

          .cmp-buttons {
            flex-direction: column;
          }

          .cmp-button {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <div className="cmp-banner">
        <div className="cmp-content">
          <p className="cmp-text">
            Używamy cookies, aby poprawić Twoje doświadczenie na naszej stronie. Możesz zaakceptować wszystkie cookies, odrzucić opcjonalne lub dostosować preferencje. 
            Więcej informacji w naszej <a href="/#/polityka-prywatnosci">Polityce prywatności</a> i <a href="/#/cookie-policy">Cookie Policy</a>.
          </p>

          {!showSettings ? (
            <div className="cmp-buttons">
              <button className="cmp-button cmp-button-primary" onClick={handleAcceptAll}>
                Akceptuj wszystkie
              </button>
              <button className="cmp-button cmp-button-secondary" onClick={handleRejectAll}>
                Odrzuć opcjonalne
              </button>
              <button className="cmp-button cmp-button-secondary" onClick={() => setShowSettings(true)}>
                Ustawienia
              </button>
            </div>
          ) : (
            <div className="cmp-settings">
              <div className="cmp-checkbox-group">
                <div>
                  <div className="cmp-checkbox">
                    <input 
                      type="checkbox" 
                      id="necessary" 
                      checked={true}
                      disabled
                    />
                    <label htmlFor="necessary">Niezbędne cookies (wymagane)</label>
                  </div>
                  <p className="cmp-checkbox-description">
                    Te cookies są konieczne do prawidłowego działania strony i nie mogą być wyłączone.
                  </p>
                </div>

                <div>
                  <div className="cmp-checkbox">
                    <input 
                      type="checkbox" 
                      id="analytics" 
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                    />
                    <label htmlFor="analytics">Cookies analityczne</label>
                  </div>
                  <p className="cmp-checkbox-description">
                    Pomagają nam zrozumieć, jak użytkownicy korzystają z naszej strony, abyśmy mogli ją ulepszać.
                  </p>
                </div>

                <div>
                  <div className="cmp-checkbox">
                    <input 
                      type="checkbox" 
                      id="marketing" 
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                    />
                    <label htmlFor="marketing">Cookies marketingowe</label>
                  </div>
                  <p className="cmp-checkbox-description">
                    Używane do dostarczania spersonalizowanych reklam i śledzenia skuteczności kampanii.
                  </p>
                </div>
              </div>

              <div className="cmp-buttons">
                <button className="cmp-button cmp-button-primary" onClick={handleSavePreferences}>
                  Zapisz preferencje
                </button>
                <button className="cmp-button cmp-button-secondary" onClick={() => setShowSettings(false)}>
                  Wróć
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CMPBanner;
