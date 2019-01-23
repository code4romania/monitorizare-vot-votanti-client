/* eslint-disable no-multi-str */

const rules = [
  {
    titlu: 'Informații generale',
    id: 1,
    icon: 'info',
    content: '<h1>Informații generale</h1>\n\
      <h2>Cine are dreptul de a vota la referendumul pentru familie 2018?</h2>\n\
      <p>\n\
        Au dreptul de a participa la referendum toți cetățenii români care au împlinit vârsta de 18 ani până în ziua referendumului inclusiv, cu excepția debililor sau a alienaților mintal puși sub interdicție, precum și a persoanelor condamnate prin hotărâre judecătorească definitivă la pierderea drepturilor electorale.<br/>\n\
        Art 4 din Legea 3/2000\n\
      </p>',
  },
  {
    titlu: 'Unde votăm',
    id: 2,
    icon: 'location',
    content: '<h1>Unde votăm</h1>\n\
      <h2>Dacă vă aflați pe teritoriul României în timpul referendumului pentru familie 2018:</h2>\n\
      <ul>\n\
        <li>Veţi vota la secția unde sunteţi arondat, pe care o puteți afla pe de pagina web <a href="http://www.registrulelectoral.ro" target="_blank">www.registrulelectoral.ro</a>. Dacă nu vă aflaţi în localitatea de domiciliu în ziua alegerilor, puteți vota la orice secție, pe lista suplimentară.</li>\n\
        <li>Cetățeanul care, în ziua referendumului național, se află într-o altă localitate decât cea în care este înscris în lista electorală poate să își exercite dreptul de vot în localitatea respectivă, la orice secție de votare, urmând a fi înscris într-o listă suplimentară de către președintele biroului electoral al secției de votare, pe baza actului de identitate sau a adeverinței care ține loc de act de identitate.</li>\n\
      </ul>\n\
      <p>\n\
        Art 21, Legea 3/2000<br/>\n\
        Dacă sunteţi omis/ă din lista permanentă, veţi fi înscris/ă pe lista suplimentară.<br/>\n\
        Lista cu secțiile de votare poate fi <a href="http://www.roaep.ro/logistica/geografie-electorala/registrul-sectiilor-de-votare/" target="_blank">găsită aici.</a>\n\
      </p>\n\
      <h2>Dacă vă aflați în diaspora în timpul referendumului pentru familie 2018:</h2>\n\
      <p>\n\
        Puteți vota la oricare din secțiile de votare deschise pe lângă ambasade, consulate sau institute culturale, pe liste suplimentare. Votul nu este condiționat de înscrierea în Registrul electoral și nu vor exista liste permanente. Conform OUG 86/2018 se pot înființa și alte secții de votare, cu acordul autorităților străine.\n\
      </p>\n\
      <p>\n\
        Harta secțiilor de votare din străinătate poate fi <a href="http://www.mae.ro/locatiile_sec%C5%A3iilor_de_votare" target="_blank">consultată aici</a>.\n\
      </p>',
  },
  {
    titlu: 'Programul de votare',
    id: 3,
    icon: 'clock',
    content: '<h1>Programul de votare</h1>\n\
      <p>Referendumul pentru familie se desfășoară pe parcursul a două zile - pe 6 și 7 octombrie 2018, iar secțiile de votare sunt deschise între orele 7:00 și 21:00. La ora 21:00 mai pot vota doar alegătorii care se află în sala unde se votează.</p>',
  },
  {
    titlu: 'Buletinul de vot',
    id: 4,
    icon: 'system',
    content: '<h2>Cum arată un buletin de vot nul</h2>\n\
      <p>Sunt nule buletinele de vot care:</p>\n\
      <ul>\n\
        <li>nu poartă ștampila de control a secției de votare</li>\n\
        <li>buletinele de un alt model decât cel legal aprobat,</li>\n\
        <li>cele pe care ștampila „Votat” a fost aplicată în ambele pătrate sau nu a fost aplicată pe nici unul dintre ele.</li>\n\
      </ul>\n\
      <p>\n\
        Dacă ștampila depășește laturile pătratului, însă opțiunea este evidentă, buletinul nu va fi socotit nul.<br/>\n\
        Buletinele nule nu intră în calculul voturilor valabil exprimate.\n\
      </p>',
  },
  {
    titlu: 'Votarea',
    id: 5,
    icon: 'vote',
    content: '<h2>Cum votezi?</h2>\n\
      <ul>\n\
        <li>În secția de votare vei prezenta actul de identitate sau adeverința înlocuitoare membrilor secției de votare</li>\n\
        <li>După verificarea prezenței pe lista permanentă sau înscrierea în lista suplimentară va înmâna un buletin de vot</li>\n\
        <li>Înainte de a intra în cabina de vot, asiguraţi-vă că pe spatele buletinului de vot este aplicată ștampila de control a secției de votare. Dacă aceasta lipsește, votul va fi declarat nul!</li>\n\
        <li>Dacă este aglomerație și credeţi că secretul votului dumneavoastră poate fi violat, mai bine mai așteptaţi sau înștiințaţi președintele secției de votare. Accesul alegătorilor în sala de votare trebuie să aibă loc în serii corespunzătoare numărului cabinelor.</li>\n\
        <li>Aplicaţi ştampila cu menţiunea “VOTAT” înăuntrul unuia dintre cele 2 patrulatere</li>\n\
        <li>Îndoiţi buletinul, astfel încât pagina goală care poartă ştampila de control a secției de votare [vezi model] să rămână în afară, și introduceţi-l apoi în urnă astfel încât să nu se deschidă; îndoirea greşită a buletinului de vot nu atrage nulitatea votului, dacă secretul votului este asigurat.</li>\n\
        <li>Restituiţi ștampila și primiţi înapoi actul de identitate, pe care trebuie să fie aplicată ştampila cu menţiunea “VOTAT” (buletine) sau un timbru autocolant (cărțile de identitate) – <a href="http://www.roaep.ro/legislatie/wp-content/uploads/2018/09/Hot_AEP_441.pdf" target="_blank">vezi aici modelul timbrului</a></li>\n\
      </ul>\n\
      <p>\n\
        Art 37 din Legea 3/2000<br/>\n\
        Alegătorul care din motive temeinice nu poate vota singur poate fi însoțit în cabina de vot. Însoțitorul nu ar trebuie să fie din rândul persoanelor acreditate, al membrilor biroului electoral al secţiei de votare sau al candidaţilor.<br/>\n\
        Art 39 (2) din Legea 3/2000\n\
      </p>\n\
      <h2>Rețineți că:</h2>\n\
      <ul>\n\
        <li>Preşedintele biroului electoral al secţiei de votare este obligat să ia măsurile necesare pentru ca alegerile să decurgă în bune condiţii. Atribuţiile acestuia, în această privinţă, se întind și în afara localului de vot, în curtea acestuia, la intrările în curte, în jurul localului de vot, precum și pe străzi și în piețe publice, până la o distanță de 500 de metri – Art 33 (2)</li>\n\
        <li>Pentru motive întemeiate votarea se poate suspenda la decizia preşedintelui BESV. Suspendarea nu poate depăşi o oră în total şi trebuie afişată pe uşa secţiei de votare imediat. În timpul suspendării urnele de votare, ștampilele, buletinele de vot și toate lucrările biroului electoral vor rămâne sub pază permanentă. Art 38</li>\n\
        <li>În afară de membrii biroului electoral al secției de votare și de delegații acreditați de Biroul Electoral Central nici o altă persoană nu poate staționa în locurile publice din zona de votare sau în localul de vot peste timpul necesar pentru efectuarea operațiunii de votare. – Art 33 (3)</li>\n\
        <li>Comercializarea şi consumul băuturilor alcoolice în jurul secției de votare sunt interzise</li>\n\
        <li>Campania în ziua referendumului este interzisă sub orice formă, în special în secția de votare. Dacă găsiţi afișe electorale în secția de votare sau pe clădirea unde este amplasată, raportaţi președintelui biroului electoral al secției de votare. Acesta dispune îndepărtarea materialelor de propagandă electorală de orice tip din şi de pe clădirea sediului secţiei de votare.</li>\n\
        <li>Votul este secret; nu dezvăluţi cu cine aţi votat și nici nu permiteţi nimănui să violeze secretul opțiunii dumneavoastră. Nu fotografiaţi buletinul de vot și evitaţi fotografierea sau filmarea în secția de votare.</li>\n\
      </ul>',
  },
  {
    titlu: 'Urna specială',
    id: 6,
    icon: 'box',
    content: '<h1>Solicitarea urnei speciale</h1>\n\
      <p>\n\
        Alegătorii care nu se pot deplasa la secția de votare din cauză de boală sau invaliditate pot solicita urna specială (mobilă) de la secţia de votare cea mai apropiată de locul în care se află în ziua alegerilor printr-o cerere scrisă însoțită de documente justificative. În ziua alegerilor, o echipă formată din doi membri ai biroului electoral se va deplasa sub paza personalului MAI la locul unde se află alegătorul, cu urna specială și materialele necesare votării. Fiecare secție de votare are o singură urnă specială, care trebuie să fie la ora 21:00 înapoi la secția de votare. Alegătorii care nu se pot deplasa la sediul secţiei de votare pot trimite cererile scrise prin intermediul altor persoane sau prin intermediul personalului de specialitate din unităţile medicale unde se află internaţi.\n\
      </p>\n\
      <p>\n\
        Având în vedere că legea nu specifică clar termenele limită pentru depunerea cererilor pentru urna specială, vă sfătuim să le depuneți pe 5 octombrie, seara, între 18 și 20, când membrii biroului electoral al secției de votare se întrunesc la sediul acesteia. Din experiențele trecute, unii președinți de secții de votare nu acceptă cereri în ziua votului.\n\
      </p>\n\
      <p>\n\
        Art 31 (4) din Legea 3/2000<br/>\n\
        Pentru persoanele netransportabile din cauză de boală sau invaliditate, la cererea celor aflați în această situație sau la cererea organelor de conducere ale instituțiilor sanitare sau de ocrotiri sociale, în care cei netransportabili se află internați, președintele biroului electoral al secției de votare desemnează din cadrul biroului un număr de membri care se deplasează cu o urnă specială și cu materialul necesar votării la locul unde se află cel în cauză, pentru a se efectua votarea.<br/>\n\
        Art 40 din Legea 3/2000\n\
      </p>',
  },
  {
    titlu: 'Documente necesare',
    id: 7,
    icon: 'building',
    content: '<h2>De ce documente am nevoie ca sa pot vota</h2>\n\
      <p>În ţară, alegătorii votează în baza</p>\n\
      <ul>\n\
        <li>cărţii de identitate</li>\n\
        <li>a cărţii de identitate provizorie</li>\n\
        <li>buletinului de identitate.</li>\n\
        <li>nu se poate vota cu pașaportul în țară</li>\n\
        <li>Elevii din şcolile militare votează în baza carnetului de serviciu militar.</li>\n\
      </ul>\n\
      <p>\n\
        În străinătate:\n\
      </p>\n\
      <ul>\n\
        <li>Cetățenii români cu domiciul în străinătate votează pe baza pașaportului simplu, cu mențiunea privind stabilirea domiciului în străinătate</li>\n\
        <li>Cetățenii români cu domiciul în România votează pe baza paşaportului simplu, a paşaportului de serviciu, a paşaportului diplomatic sau a cărţii de identitate</li>\n\
      </ul>',
  },
  {
    titlu: 'Tipuri de infracțiuni',
    id: 8,
    icon: 'police',
    content: '<p>În timpul campaniei pentru referendum, probabil cea mai frecventă problemă întâlnită va fi cea legată de utilizarea unor mesaje instigatoare la ură sau care promovează valori care încalcă principiile democrației și drepturile omului. Dacă auzi de astfel de incidente, de campanie în școli sau în instituții publice, de presiuni ale angajatorilor sau ale autorităților locale, te rugăm să ne informezi cât mai rapid. Problemele legate de campanie le poți reclama la birourile electorale de circumscripție județeană.</p>\n\
      <h2>Care sunt cele mai frecvente nereguli care pot apărea pe parcursul votului la referendum: Presiuni ale administrației locale sau ale altor instituții / aglomerație la secția de votare</h2>\n\
      <ul>\n\
        <li>Prezenţa reprezentanţilor poliţiei sau autorităţilor locale în vecinătatea secţiei de votare poate fi un instrument de intimidare, deoarece poate sugera că autorităţile monitorizează prezentarea sau neprezentarea alegătorilor la vot.</li>\n\
        <li>Acţiuni inoportune din partea forţelor de ordine şi/sau poliţiei, ca de exemplu notarea sau raportarea prin telefon a datelor privind prezenţa la vot sau rezultatelor.</li>\n\
        <li>Prezenţa unor grupuri numeroase de alegători în vecinătatea secţiilor de votare poate indica faptul că participarea acestora la vot este coordonată şi/sau nu rezultă din voinţa proprie;</li>\n\
      </ul>\n\
      <h2>Indicii pentru potențiale fraude/abuzuri</h2>\n\
      <ul>\n\
        <li>Votarea în grup, votul multiplu</li>\n\
        <li>Introducerea în urnă a mai multor buletine de vot decât cele la care au dreptul alegătorii</li>\n\
        <li>Buletine de vot dinainte marcate</li>\n\
        <li>Invalidarea arbitrară sau inconsecventă a buletinelor de vot</li>\n\
        <li>Pierderea unor buletine sau urne de vot</li>\n\
        <li>Utilizarea neregulamentară sau abuzivă a urnelor mobile; număr semnificativ de cereri privind urna mobilă; presiuni privind votul cu urna mobilă în spitale sau închisori</li>\n\
        <li>Cazurile în care secretul votului nu este asigurat, cabine de vot deschise</li>\n\
        <li>Limitarea dreptului alegătorilor de a-şi exprima votul din motive nejustificate</li>\n\
        <li>Înlocuirea urnei de vot cu o altă urnă de vot</li>\n\
        <li>Numărarea voturilor sau înregistrarea rezultatelor intenţionat incorectă</li>\n\
        <li>Adăugarea unor buletine de vot după deschiderea urnei de vot</li>\n\
        <li>Procesele verbale ce conţin rezultatele referendumului nu sunt completate la secţia de votare sau sunt completate cu creionul şi nu cu cerneală</li>\n\
        <li>Falsificarea sau înlocuirea proceselor verbale</li>\n\
      </ul>\n\
      <h2>Listele electorale</h2>\n\
      <ul>\n\
        <li>Înscrieri fictive în listele suplimentare sau înscrierea unui număr anormal de mare de persoane</li>\n\
        <li>Inadvertenţe în listele de alegători</li>\n\
      </ul>\n\
      <h2>Legate de secția de votare/ziua votului</h2>\n\
      <ul>\n\
        <li>Deschiderea cu întârziere a secţiilor de votare, întârzieri excesive în administrarea votării</li>\n\
        <li>Absenţa materialelor electorale necesare (tuș, ștampile, urna mobilă, cabine de vot etc)</li>\n\
        <li>Urnă nesigilată sau sigilată necorespunzător (nu există un model standard pentru sigiliu, deci fiecare secție de votare are propriile metode; în general este o bandă albă, peste care se aplică ștampila de control a secției de votare)</li>\n\
        <li>Confuzie sau lipsă de organizare, cazuri în care membrii comisiilor de votare nu urmează procedurile</li>\n\
        <li>Prezenţa persoanelor neautorizate în secţiile de votare (primari, consilieri locali, membri de partid etc)</li>\n\
        <li>Cazurile în care identitatea alegătorilor nu este verificată</li>\n\
        <li>Activităţi inoportune din partea reprezentanţilor candidaţilor sau partidelor politice, imixtiuni în activitatea birourilor electorale sau observatorilor</li>\n\
        <li>Păstrarea în condiţii precare a buletinelor de vot neutilizate</li>\n\
        <li>Excluderea unor membri ai comisiilor de votare sau unor observatori pe motive nejustificate</li>\n\
        <li>Însoțirea frecventă de către membri ai birourilor electorale, observatori sau alte persoane a unor persoane care au dificultăți în a vota</li>\n\
      </ul>\n\
      <h2>Numărarea voturilor (pentru persoanele acreditate)</h2>\n\
      <ul>\n\
        <li>Proceduri dezordonate de numărare a voturilor</li>\n\
        <li>Personal insuficient pentru efectuarea şi supravegherea numărării voturilor</li>\n\
        <li>Transportarea materialelor electorale la biroul electoral de circumscriptie nu se efectuează în condiţii de siguranţă</li>\n\
        <li>Lipsa transparenţei sau proceduri nereglementare constatate în cursul centralizării voturilor</li>\n\
        <li>Participarea la numărarea voturilor a persoanelor neautorizate (membri de partid, primar, parlamentari, observatori etc)</li>\n\
      </ul>\n\
      <p>Informații preluate parțial din <a href="https://www.osce.org/ro/odihr/elections/70293?download=true" target="_blank">Manualul de observare a alegerilor, OSCE/ODIHR</a>; completate cu informații din experiențele anterioare de observare. Vezi și <a href="https://votcorect.ro/wp-content/uploads/2016/12/Manualul-Observatorului.pdf" target="_blank">Manualul Observatorului</a>.</p>',
  },
];

export default rules;
