export interface Service {
  slug: string;
  title: string;
  short: string;
  price: string;
  features: string[];
  contentHtml: string;
  image: string;
}

export const services: Service[] = [
  {
    slug: 'strategia-smm',
    title: 'Strategia SMM',
    short: 'Kompleksowa strategia mediów społecznościowych dostosowana do Twojej marki',
    price: 'Od 2500 PLN',
    features: [
      'Analiza konkurencji i rynku',
      'Określenie grupy docelowej',
      'Kalendarz publikacji',
      'KPI i metryki sukcesu',
      'Strategia content marketingu'
    ],
    contentHtml: `
      <h2>Strategia SMM - Fundament Sukcesu w Mediach Społecznościowych</h2>
      
      <p>Skuteczna strategia social media to podstawa każdej udanej kampanii. Nasze podejście opiera się na dogłębnej analizie Twojej marki, konkurencji oraz grupy docelowej. Tworzymy spersonalizowane plany działania, które przynoszą wymierne rezultaty.</p>

      <h3>Co obejmuje nasza strategia?</h3>
      
      <p><strong>Analiza sytuacji wyjściowej:</strong> Rozpoczynamy od szczegółowego audytu Twoich obecnych działań w mediach społecznościowych. Badamy, co działa, a co wymaga poprawy. Analizujemy konkurencję, identyfikujemy luki rynkowe i możliwości rozwoju.</p>

      <p><strong>Definicja celów i KPI:</strong> Ustalamy konkretne, mierzalne cele biznesowe. Czy chcesz zwiększyć zasięg, zaangażowanie, sprzedaż, czy budować świadomość marki? Definiujemy kluczowe wskaźniki efektywności (KPI), które pozwolą śledzić postępy.</p>

      <p><strong>Persona i grupa docelowa:</strong> Tworzymy szczegółowe profile Twoich idealnych klientów. Badamy ich zachowania, potrzeby, preferencje i punkty bólu. To pozwala nam tworzyć treści, które naprawdę rezonują z odbiorcami.</p>

      <p><strong>Wybór platform:</strong> Nie każda platforma jest odpowiednia dla każdej marki. Pomagamy wybrać kanały, na których Twoja grupa docelowa jest najbardziej aktywna - czy to Instagram, LinkedIn, TikTok, Facebook czy Twitter.</p>

      <p><strong>Kalendarz treści:</strong> Opracowujemy szczegółowy plan publikacji, uwzględniający optymalne godziny, częstotliwość i rodzaje treści. Każdy post ma swój cel i miejsce w większej narracji marki.</p>

      <p><strong>Ton komunikacji:</strong> Definiujemy głos marki - czy ma być profesjonalna, przyjazna, zabawna czy inspirująca? Spójny ton buduje rozpoznawalność i zaufanie.</p>

      <p><strong>Budget i zasoby:</strong> Planujemy budżet na content, reklamy i narzędzia. Określamy, jakie zasoby będą potrzebne do realizacji strategii.</p>

      <h3>Dlaczego strategia jest kluczowa?</h3>
      
      <p>Bez strategii działania w social media są chaotyczne i nieskuteczne. Strategia daje kierunek, pozwala mierzyć postępy i optymalizować działania. To różnica między losowym publikowaniem a budowaniem silnej obecności online.</p>

      <h3>Proces tworzenia strategii</h3>
      
      <p>Nasz proces składa się z kilku etapów: warsztatów z klientem, badań rynku, analizy danych, opracowania strategii i prezentacji. Cały proces trwa zazwyczaj 2-4 tygodnie i kończy się kompleksowym dokumentem strategicznym oraz planem działań.</p>

      <p>Strategia to żywy dokument - regularnie ją aktualizujemy w oparciu o wyniki i zmieniające się trendy rynkowe.</p>
    `,
    image: '/src/assets/service-strategy.jpg'
  },
  {
    slug: 'tworzenie-tresci',
    title: 'Tworzenie Treści',
    short: 'Profesjonalna produkcja contentu - grafiki, wideo, copywriting',
    price: 'Od 1800 PLN',
    features: [
      'Grafiki na social media',
      'Produkcja wideo',
      'Copywriting i storytelling',
      'Fotografia produktowa',
      'Animacje i motion design'
    ],
    contentHtml: `
      <h2>Tworzenie Treści - Content, Który Angażuje</h2>
      
      <p>W świecie przesyconej informacji, jakość treści decyduje o sukcesie. Tworzymy content, który nie tylko przyciąga uwagę, ale także buduje zaangażowanie i konwersję. Nasz zespół składa się z grafików, wideografów, copywriterów i strategów contentu.</p>

      <h3>Rodzaje treści, które tworzymy</h3>
      
      <p><strong>Grafiki na social media:</strong> Projektujemy eye-catching grafiki dopasowane do każdej platformy. Od prostych postów informacyjnych, przez karuzele edukacyjne, po złożone infografiki. Każdy design jest zgodny z identyfikacją wizualną marki.</p>

      <p><strong>Produkcja wideo:</strong> Wideo to najpotężniejszy format w social media. Tworzymy krótkie wideo (Reels, TikToki, Stories), dłuższe materiały edukacyjne, wywiady, relacje z eventów. Zajmujemy się wszystkim - od scenariusza, przez nagranie, po postprodukcję.</p>

      <p><strong>Copywriting:</strong> Słowa mają moc. Nasi copywriterzy tworzą teksty, które sprzedają, angażują i budują relacje. Od krótkich captionów, przez artykuły blogowe, po skrypty wideo. Każde słowo ma znaczenie.</p>

      <p><strong>Fotografia:</strong> Profesjonalne zdjęcia produktowe, lifestyle'owe, eventowe. Organizujemy sesje zdjęciowe, dobieramy modelki/modeli, lokacje i rekwizyty. Efekt? Wysokiej jakości materiały wizualne.</p>

      <p><strong>Animacje:</strong> Motion design to sposób na wyróżnienie się. Tworzymy animowane logo, explainer videos, GIF-y, animowane infografiki i inne dynamiczne treści.</p>

      <h3>Proces produkcji</h3>
      
      <p>Każdy projekt zaczyna się od briefu. Poznajemy Twoje cele, grupę docelową i oczekiwania. Następnie opracowujemy koncepcję, którą przedstawiamy do akceptacji. Po zatwierdzeniu przechodzimy do produkcji. Finalne materiały dostarczamy w odpowiednich formatach, gotowe do publikacji.</p>

      <h3>Pakiety contentowe</h3>
      
      <p>Oferujemy miesięczne pakiety contentu - od pakietu podstawowego (10-15 postów miesięcznie) po premium (30+ postów + wideo). Możesz też zamówić pojedyncze materiały wedle potrzeb.</p>

      <p>Content to inwestycja w Twoją markę. Jakościowe materiały budują profesjonalny wizerunek, zwiększają zaangażowanie i konwertują followersów w klientów.</p>
    `,
    image: '/src/assets/service-content.jpg'
  },
  {
    slug: 'marketing-influencerow',
    title: 'Marketing Influencerów',
    short: 'Kampanie z influencerami - dotrzemy do właściwej grupy odbiorców',
    price: 'Od 3000 PLN',
    features: [
      'Dobór influencerów',
      'Negocjacje i kontrakty',
      'Zarządzanie kampanią',
      'Raportowanie wyników',
      'Strategia współpracy długoterminowej'
    ],
    contentHtml: `
      <h2>Marketing Influencerów - Autentyczne Polecenia, Realne Wyniki</h2>
      
      <p>Influencer marketing to jeden z najskuteczniejszych sposobów dotarcia do nowych odbiorców. Współpracujemy z setkami twórców - od mikro-influencerów po duże nazwiska. Dobieramy partnerów idealnie dopasowanych do Twojej marki i celów.</p>

      <h3>Jak działamy?</h3>
      
      <p><strong>Analiza i strategia:</strong> Zaczynamy od określenia celów kampanii. Czy chcesz zwiększyć świadomość marki, zbudować zaufanie, czy może wprost zwiększyć sprzedaż? Na podstawie celów dobieramy strategię i formaty współpracy.</p>

      <p><strong>Scouting influencerów:</strong> Mamy dostęp do rozbudowanej bazy twórców z różnych nisz. Analizujemy nie tylko liczby (followersów, zasięgi), ale przede wszystkim jakość społeczności, autentyczność i zgodność z wartościami marki. Sprawdzamy historię współprac, wskaźniki zaangażowania i demografię odbiorców.</p>

      <p><strong>Outreach i negocjacje:</strong> Kontaktujemy się z wybranymi twórcami, przedstawiamy brief i negocjujemy warunki. Zajmujemy się całą korespondencją, ustalaniem terminów, budżetów i deliverables. Wszystko formalizujemy w przejrzystych umowach.</p>

      <p><strong>Zarządzanie kampanią:</strong> W trakcie kampanii jesteśmy stale w kontakcie z influencerami. Dostarczamy briefy, materiały, udzielamy wsparcia. Pilnujemy terminów publikacji i jakości treści. Monitorujemy wyniki w czasie rzeczywistym.</p>

      <p><strong>Raportowanie:</strong> Po kampanii dostarczamy szczegółowe raporty z wynikami - zasięgi, zaangażowanie, konwersje, ROI. Analizujemy, co zadziałało najlepiej i wyciągamy wnioski na przyszłość.</p>

      <h3>Rodzaje współprac</h3>
      
      <p>Organizujemy różne formy współprac: posty sponsorowane, Stories, unboxingi, recenzje, konkursy, przejęcia kont, ambasadorstwa długoterminowe, uczestnictwo w eventach. Dobieramy formaty najlepiej pasujące do Twojego produktu i budżetu.</p>

      <h3>Micro vs Macro influencerzy</h3>
      
      <p>Często mikro-influencerzy (10-100k followersów) dają lepsze wyniki niż gwiazdy z milionami obserwujących. Mają bardziej zaangażowane społeczności i wyższy poziom zaufania. Doradzamy, jaka strategia będzie najskuteczniejsza w Twoim przypadku.</p>

      <p>Influencer marketing to nie tylko zasięgi - to budowanie autentycznych relacji i rekomendacji, które konwertują.</p>
    `,
    image: '/src/assets/service-influencer.jpg'
  },
  {
    slug: 'analityka-social-media',
    title: 'Analityka Social Media',
    short: 'Mierzenie efektów i optymalizacja działań w oparciu o dane',
    price: 'Od 1200 PLN',
    features: [
      'Konfiguracja narzędzi analitycznych',
      'Regularne raporty wyników',
      'Analiza konkurencji',
      'Rekomendacje optymalizacyjne',
      'Dashboard z metrykami na żywo'
    ],
    contentHtml: `
      <h2>Analityka Social Media - Decyzje Oparte na Danych</h2>
      
      <p>Nie zgadujemy - mierzymy. Analityka to fundament skutecznego działania w social media. Dzięki danym wiemy, co działa, co wymaga poprawy i gdzie inwestować budżet. Pomagamy zrozumieć liczby i przekuć je w konkretne działania.</p>

      <h3>Co analizujemy?</h3>
      
      <p><strong>Metryki zaangażowania:</strong> Likes, komentarze, udostępnienia, saves - każda interakcja ma znaczenie. Analizujemy, które posty generują największe zaangażowanie i dlaczego. Badamy, w jakich godzinach i dniach Twoja społeczność jest najbardziej aktywna.</p>

      <p><strong>Zasięgi i impresje:</strong> Śledzim organiczne i płatne zasięgi. Analizujemy growth followersów, reach vs impressions, unique viewers. Identyfikujemy czynniki wpływające na wiralność treści.</p>

      <p><strong>Demografia odbiorców:</strong> Kim są Twoi obserwatorzy? Wiek, płeć, lokalizacja, zainteresowania. Te dane pozwalają tworzyć lepiej dopasowany content i targetować reklamy precyzyjniej.</p>

      <p><strong>Analiza contentu:</strong> Które formaty działają najlepiej? Stories, Reels, karuzele, pojedyncze zdjęcia? Jakie tematy generują największe zaangażowanie? Jakie hashtagi są najskuteczniejsze?</p>

      <p><strong>Benchmarking konkurencji:</strong> Monitorujemy działania konkurentów. Analizujemy ich strategie, content, performance. Identyfikujemy luki i szanse.</p>

      <p><strong>Konwersje i ROI:</strong> Najważniejsze - mierzymy biznesowe efekty działań w social media. Śledzmy kliki, leady, sprzedaż. Liczymy ROI i ROAS kampanii.</p>

      <h3>Narzędzia, które wykorzystujemy</h3>
      
      <p>Pracujemy na profesjonalnych narzędziach: Meta Business Suite, Instagram Insights, LinkedIn Analytics, YouTube Analytics, Google Analytics, narzędzia do social listening (Brand24, Mention). Tworzymy też custom dashboardy w Google Data Studio czy Power BI.</p>

      <h3>Raporty i rekomendacje</h3>
      
      <p>Dostarczamy regularne raporty (miesięczne, kwartalne) w przystępnej formie. Nie tylko pokazujemy liczby - wyciągamy wnioski i formułujemy konkretne rekomendacje. Co poprawić? W co inwestować? Jakie nowe formaty testować?</p>

      <p>Analityka to proces ciągły. Regularnie sprawdzamy wyniki, testujemy hipotezy, optymalizujemy. To różnica między działaniem intuicyjnym a opartym na danych.</p>
    `,
    image: '/src/assets/service-strategy.jpg'
  },
  {
    slug: 'zarzadzanie-spolecznoscia',
    title: 'Zarządzanie Społecznością',
    short: 'Community management - budowanie zaangażowanej społeczności wokół marki',
    price: 'Od 2000 PLN',
    features: [
      'Moderacja komentarzy i wiadomości',
      'Budowanie zaangażowania',
      'Obsługa kryzysów wizerunkowych',
      'Organizacja konkursów',
      'Raportowanie nastrojów społeczności'
    ],
    contentHtml: `
      <h2>Zarządzanie Społecznością - Buduj Lojalną Społeczność</h2>
      
      <p>Społeczność to najcenniejszy asset marki w social media. To nie tylko liczba followersów, ale zaangażowani ludzie, którzy wchodzą w interakcje, rekomendują Twoją markę i stają się jej ambasadorami. Pomagamy budować i pielęgnować takie społeczności.</p>

      <h3>Zakres naszych działań</h3>
      
      <p><strong>Codzienne zarządzanie:</strong> Jesteśmy Twoim głosem w social media. Odpowiadamy na komentarze, wiadomości prywatne, reakcje. Każda interakcja to szansa na zbudowanie relacji. Reagujemy szybko, profesjonalnie i zgodnie z tonem komunikacji marki.</p>

      <p><strong>Budowanie zaangażowania:</strong> Aktywnie angażujemy społeczność - zadajemy pytania, organizujemy ankiety, zachęcamy do dyskusji. Tworzymy treści, które prowokują do interakcji. Reagujemy na UGC (user-generated content), repostujemy i doceniamy najbardziej aktywnych członków społeczności.</p>

      <p><strong>Moderacja:</strong> Dbamy o bezpieczeństwo i pozytywną atmosferę. Moderujemy komentarze, usuwamy spam i nieodpowiednie treści. Reagujemy na troll-i i hejt zgodnie z ustaloną polityką. Chronimy wizerunek marki.</p>

      <p><strong>Crisis management:</strong> Gdy pojawia się kryzys wizerunkowy, reagujemy natychmiast. Mamy wypracowane procedury zarządzania kryzysem - od monitorowania sytuacji, przez przygotowanie odpowiedzi, po działania naprawcze. Czas reakcji jest kluczowy.</p>

      <p><strong>Konkursy i akcje:</strong> Organizujemy konkursy, giveaway-e, challenge-e. To świetny sposób na zwiększenie zaangażowania i pozyskanie nowych obserwatorów. Zajmujemy się wszystkim - od koncepcji, przez regulamin, po losowanie zwycięzców.</p>

      <p><strong>Social listening:</strong> Monitorujemy, co mówi się o Twojej marce w sieci - nie tylko na Twoich profilach. Śledzimy wzmianki, hashtagi, nastroje. To cenne źródło insightów i szansa na włączenie się do rozmów.</p>

      <h3>Narzędzia i proces</h3>
      
      <p>Korzystamy z profesjonalnych narzędzi do zarządzania social media (Hootsuite, Sprout Social, Buffer), które pozwalają nam szybko reagować i mieć wszystko pod kontrolą. Ustawiamy alerty, tworzymy procedury odpowiedzi, przygotowujemy banki odpowiedzi na FAQ.</p>

      <h3>Raportowanie</h3>
      
      <p>Regularnie raportujemy aktywność społeczności - liczba interakcji, czas odpowiedzi, sentiment komentarzy, najczęściej zadawane pytania. Analizujemy, co budzi emocje, jakie tematy są gorące.</p>

      <p>Silna społeczność to konkurencyjna przewaga. To źródło feedbacku, pomysłów, rekomendacji i sprzedaży.</p>
    `,
    image: '/src/assets/service-content.jpg'
  },
  {
    slug: 'platne-kampanie-social',
    title: 'Płatne Kampanie Social',
    short: 'Facebook Ads, Instagram Ads, LinkedIn Ads - reklamy, które konwertują',
    price: 'Od 2500 PLN + budget reklamowy',
    features: [
      'Strategia kampanii reklamowych',
      'Targeting i optymalizacja odbiorców',
      'Tworzenie kreacji reklamowych',
      'A/B testing i optymalizacja',
      'Szczegółowe raportowanie ROI'
    ],
    contentHtml: `
      <h2>Płatne Kampanie Social - Reklamy, Które Przynoszą Wyniki</h2>
      
      <p>Organiczny zasięg w social media stale spada. Płatne kampanie to sposób na dotarcie do szerszej, ale jednocześnie precyzyjnie targetowanej grupy odbiorców. Prowadzimy kampanie reklamowe na wszystkich głównych platformach, z mierzalnym ROI.</p>

      <h3>Platformy, na których reklamujemy</h3>
      
      <p><strong>Meta Ads (Facebook & Instagram):</strong> Najpopularniejsza platforma reklamowa. Oferuje ogromne możliwości targetowania - demografia, zainteresowania, zachowania, lookalike audiences. Różnorodne formaty: image ads, video ads, carousel, collection, stories ads, reels ads. Świetna do budowania świadomości marki i generowania leadów oraz sprzedaży.</p>

      <p><strong>LinkedIn Ads:</strong> Najlepsza platforma dla B2B. Targetowanie po stanowiskach, branżach, firmach, umiejętnościach. Idealna do generowania wysokiej jakości leadów biznesowych, promocji usług B2B, employer brandingu.</p>

      <p><strong>TikTok Ads:</strong> Platforma z najmłodszą, najbardziej zaangażowaną społecznością. Świetna dla marek targetujących Gen Z. Formaty reklamowe dopasowane do specyfiki platformy - in-feed ads, TopView, branded hashtag challenges.</p>

      <p><strong>Twitter (X) Ads:</strong> Platforma do budowania świadomości, angażowania się w real-time conversations. Dobra do promocji eventów, newsjackingu.</p>

      <p><strong>Pinterest Ads:</strong> Platforma z wysokim conversion intent - ludzie przychodzą tutaj szukać inspiracji i planować zakupy. Świetna dla e-commerce, szczególnie fashion, home decor, food.</p>

      <h3>Proces prowadzenia kampanii</h3>
      
      <p><strong>Strategia:</strong> Rozpoczynamy od określenia celów kampanii - awareness, consideration czy conversion? Jaki jest funnel sprzedażowy? Kto jest grupą docelową? Jaki budżet? Na podstawie tego budujemy strategię kampanii.</p>

      <p><strong>Setup kampanii:</strong> Konfigurujemy kampanie w Ads Managerze - strukturę kampanii, grupy reklam, targeting, budżety, harmonogram. Ustawiamy pixele i konwersje. Integrujemy z Google Analytics i innymi narzędziami.</p>

      <p><strong>Kreacje reklamowe:</strong> Tworzymy lub adaptujemy kreacje - grafiki, wideo, copywriting. Przygotowujemy wiele wariantów do testowania. Dbamy o zgodność z best practices każdej platformy.</p>

      <p><strong>Testowanie:</strong> Prowadzimy A/B testy - różne kreacje, nagłówki, CTA, audiences, placements. Testujemy systematycznie, wyciągamy wnioski, skalujemy to, co działa.</p>

      <p><strong>Optymalizacja:</strong> Codziennie monitorujemy wyniki kampanii. Optymalizujemy stawki, audiences, placements, budżety. Wyłączamy to, co nie działa, wzmacniamy zwycięzców. Ciągłe doskonalenie.</p>

      <p><strong>Raportowanie:</strong> Regularne raporty z wynikami - impressions, reach, clicks, CTR, CPC, conversions, cost per conversion, ROAS, ROI. Analizujemy efektywność i formułujemy rekomendacje.</p>

      <h3>Nasze podejście</h3>
      
      <p>Nie marnujemy budżetu. Każda złotówka musi pracować. Skupiamy się na metrikach, które mają znaczenie dla Twojego biznesu. Ciągle testujemy, uczym się, optymalizujemy. Płatne kampanie to nauka i inwestycja, która z czasem przynosi coraz lepsze wyniki.</p>
    `,
    image: '/src/assets/service-influencer.jpg'
  }
];
