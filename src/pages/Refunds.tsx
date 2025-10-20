const Refunds = () => {
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
        <h1>Polityka Zwrotów</h1>
        <p><strong>Data aktualizacji:</strong> {new Date().toLocaleDateString('pl-PL')}</p>
        
        <h2>1. Zwroty</h2>
        <p>Ze względu na charakter usług (usługi cyfrowe, personalizowane), zwroty są możliwe jedynie przed rozpoczęciem realizacji projektu.</p>
        
        <h2>2. Anulowanie</h2>
        <p>Klient może anulować zlecenie przed rozpoczęciem prac z pełnym zwrotem wpłaconej zaliczki.</p>
        
        <h2>3. Po rozpoczęciu prac</h2>
        <p>Po rozpoczęciu realizacji, zwrot nie jest możliwy. W uzasadnionych przypadkach możliwa jest negocjacja warunków.</p>
        
        <h2>4. Reklamacje</h2>
        <p>W przypadku niezgodności usługi z umową, klient może zgłosić reklamację w ciągu 14 dni.</p>
        
        <h2>5. Kontakt</h2>
        <p>Zgłoszenia zwrotów i reklamacji przyjmujemy poprzez formularz kontaktowy.</p>
      </main>
    </>
  );
};

export default Refunds;
