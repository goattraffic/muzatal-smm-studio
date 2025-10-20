const Terms = () => {
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
        <h1>Regulamin</h1>
        <p><strong>Data aktualizacji:</strong> {new Date().toLocaleDateString('pl-PL')}</p>
        
        <h2>1. Postanowienia ogólne</h2>
        <p>Niniejszy regulamin określa zasady korzystania ze strony Muzatal oraz świadczonych usług.</p>
        
        <h2>2. Usługi</h2>
        <p>Oferujemy usługi SMM, tworzenia contentu, marketingu influencerów i zarządzania kampaniami.</p>
        
        <h2>3. Zasady współpracy</h2>
        <p>Współpraca rozpoczyna się po podpisaniu umowy i wpłacie zaliczki. Szczegóły określa indywidualna oferta.</p>
        
        <h2>4. Płatności</h2>
        <p>Płatności realizowane są przelewem bankowym zgodnie z fakturą.</p>
        
        <h2>5. Odpowiedzialność</h2>
        <p>Dokładamy wszelkich starań, aby usługi były świadczone profesjonalnie. Nie odpowiadamy za działania platform społecznościowych poza naszą kontrolą.</p>
        
        <h2>6. Zmiana regulaminu</h2>
        <p>Zastrzegamy prawo do zmiany regulaminu. Zmiany wchodzą w życie po publikacji na stronie.</p>
      </main>
    </>
  );
};

export default Terms;
