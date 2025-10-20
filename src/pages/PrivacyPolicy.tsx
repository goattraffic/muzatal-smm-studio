const PrivacyPolicy = () => {
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
        <h1>Polityka Prywatności</h1>
        <p><strong>Data aktualizacji:</strong> {new Date().toLocaleDateString('pl-PL')}</p>
        
        <h2>1. Administrator danych</h2>
        <p>Administratorem danych osobowych jest Muzatal.</p>
        
        <h2>2. Jakie dane zbieramy</h2>
        <p>Zbieramy dane podane w formularzach kontaktowych: imię, nazwisko, email, numer telefonu.</p>
        
        <h2>3. Cel przetwarzania danych</h2>
        <p>Dane przetwarzane są w celu kontaktu handlowego, obsługi zapytań i świadczenia usług.</p>
        
        <h2>4. Podstawa prawna</h2>
        <p>Zgoda użytkownika (art. 6 ust. 1 lit. a RODO) oraz uzasadniony interes administratora.</p>
        
        <h2>5. Udostępnianie danych</h2>
        <p>Dane nie są udostępniane podmiotom trzecim bez zgody użytkownika.</p>
        
        <h2>6. Twoje prawa</h2>
        <p>Przysługuje Ci prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz przenoszenia danych.</p>
        
        <h2>7. Cookies</h2>
        <p>Strona wykorzystuje pliki cookies zgodnie z naszą Cookie Policy.</p>
        
        <h2>8. Kontakt</h2>
        <p>W sprawach dotyczących danych osobowych skontaktuj się z nami poprzez formularz kontaktowy.</p>
      </main>
    </>
  );
};

export default PrivacyPolicy;
