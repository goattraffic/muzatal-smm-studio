const CookiePolicy = () => {
  return (
    <>
      <style>{`
        .policy-page {
          padding: 5rem 0;
          max-width: 900px;
          margin: 0 auto;
        }
        .policy-page h1 {
          font-size: 2.5rem;
          color: var(--text-primary);
          margin-bottom: 2rem;
        }
        .policy-page h2 {
          font-size: 1.75rem;
          color: var(--text-primary);
          margin: 2rem 0 1rem;
        }
        .policy-page p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 1rem;
        }
      `}</style>
      <main className="policy-page container">
        <h1>Polityka Cookies</h1>
        <p><strong>Data aktualizacji:</strong> {new Date().toLocaleDateString('pl-PL')}</p>
        
        <h2>1. Czym są cookies</h2>
        <p>Cookies to małe pliki tekstowe przechowywane na Twoim urządzeniu podczas odwiedzania stron internetowych.</p>
        
        <h2>2. Jakie cookies używamy</h2>
        <p><strong>Niezbędne cookies:</strong> Wymagane do prawidłowego funkcjonowania strony.</p>
        <p><strong>Cookies analityczne:</strong> Pomagają nam zrozumieć, jak użytkownicy korzystają ze strony.</p>
        <p><strong>Cookies marketingowe:</strong> Służą do dostarczania spersonalizowanych reklam.</p>
        
        <h2>3. Zarządzanie cookies</h2>
        <p>Możesz zarządzać ustawieniami cookies poprzez banner zgody wyświetlany przy pierwszej wizycie lub ustawienia przeglądarki.</p>
        
        <h2>4. Zgodność z TCF 2.2</h2>
        <p>Nasza strona jest zgodna ze standardem IAB Transparency & Consent Framework w wersji 2.2.</p>
      </main>
    </>
  );
};

export default CookiePolicy;
