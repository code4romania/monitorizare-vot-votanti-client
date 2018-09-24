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
    titlu: 'Organismele electorale',
    id: 7,
    icon: 'building',
    content: '<h1>Organismele electorale</h1>\n\
      <p>În perioada alegerilor organizate în țară se formează următoarele organisme electorale:</p>\n\
      <ul>\n\
        <li>Biroul Electoral Central;</li>\n\
        <li>birourile electorale de circumscripţie, la nivel judeţean și al municipiului Bucureşti;</li>\n\
        <li>oficiile electorale ale sectoarelor municipiului Bucureşti;</li>\n\
        <li>birourile electorale ale secţiilor de votare.</li>\n\
      </ul>\n\
      <p>[Art. 7 alin. (1) din Legea nr. 208/2015]</p>',
  },
  {
    titlu: 'Infracțiuni electorale',
    id: 8,
    icon: 'police',
    content: '<h1>Infracțiuni electorale</h1>\n\
      <h2>Cine și unde poate sesiza comiterea unei infracțiuni electorale? </h2>\n\
      <p>Orice persoană poate sesiza organele de cercetare penală sau organele de urmărire penală, după regulile generale de sesizare, prevăzute în art. 289 și art. 290 din Codul de procedură penală.</p>\n\
      <h2>Cine și în ce condiții poate cere anularea alegerilor pentru fraudă electorală?</h2>\n\
      <p>Cererea de anulare a alegerilor dintr-o secţie de votare sau circumscripţie electorală pentru fraudă electorală se poate face numai de către competitorii electorali care au participat la alegeri în circumscripţia electorală respectivă. Cererea se depune la Biroul Electoral Central în termen de cel mult 48 de ore de la data încheierii votării, sub sancţiunea decăderii. Cererea trebuie temeinic motivată şi însoţită de dovezile pe care se întemeiază. Lipsa probelor atrage respingerea cererii. [Art. 12 alin. (3) din Legea nr. 208/2015]</p>\n\
      <h3>INFRACŢIUNI CONFORM CODULUI PENAL</h3>\n\
      <h2>ART. 385 - Împiedicarea exercitării drepturilor electorale</h2>\n\
      <p>(1) Împiedicarea, prin orice mijloace, a liberului exerciţiu al dreptului de a alege sau de a fi ales se pedepseşte cu închisoarea de la 6 luni la 3 ani.</p>\n\
      <p>(2) Atacul, prin orice mijloace, asupra localului secţiei de votare se pedepseşte cu închisoarea de la 2 la 7 ani şi interzicerea exercitării unor drepturi.</p>\n\
      <h2>ART. 386 – Coruperea alegătorilor</h2>\n\
      <p>(1) Oferirea sau darea de bani, de bunuri ori de alte foloase în scopul determinării alegătorului să voteze sau să nu voteze o anumită listă de candidaţi ori un anumit candidat se pedepseşte cu închisoarea de la 6 luni la 3 ani şi interzicerea exercitării unor drepturi.</p>\n\
      <p>(2) Nu intră în categoria bunurilor prevăzute în alin. (1) bunurile cu valoare simbolică, inscripţionate cu însemnele unei formaţiuni politice.</p>\n\
      <h2>ART. 387 – Frauda la vot</h2>\n\
      <p>(1) Fapta persoanei care votează:</p>\n\
      <p>a) fără a avea acest drept;<br/>\n\
      b) de două sau mai multe ori;<br/>\n\
      c) prin introducerea în urnă a mai multor buletine de vot decât are dreptul un alegător se pedepseşte cu închisoare de la 6 luni la 3 ani sau cu amendă şi interzicerea exercitării unor drepturi.</p>\n\
      <p>(2) Cu aceeaşi pedeapsă se sancţionează utilizarea unei cărţi de alegător sau a unui act de identitate nul ori fals sau a unui buletin de vot fals.</p>\n\
      <h2>ART. 389 – Violarea confidenţialităţii votului</h2>\n\
      <p>(1) Violarea prin orice mijloace a secretului votului se pedepseşte cu amendă.</p>\n\
      <p>(2) Dacă fapta a fost comisă de un membru al biroului electoral al secţiei de votare, pedeapsa este închisoare de la 6 luni la 3 ani sau amendă şi interzicerea exercitării unor drepturi.</p>\n\
      <h2>ART. 390 – Nerespectarea regimului urnei de vot</h2>\n\
      <p>(1) Deschiderea urnelor, înainte de ora stabilită pentru închiderea votării, se pedepseşte cu închisoare de la unu la 3 ani sau cu amendă şi interzicerea exercitării unor drepturi.</p>\n\
      <p>(2) Încredinţarea urnei speciale altor persoane decât membrilor biroului electoral al secţiei de votare ori transportarea acesteia de către alte persoane sau în alte condiţii decât cele prevăzute de lege se pedepseşte cu închisoare de la 3 luni la 2 ani sau cu amendă şi interzicerea exercitării unor drepturi.</p>\n\
      <h2>ART. 391 – Falsificarea documentelor şi evidenţelor electorale</h2>\n\
      <p>(1) Falsificarea prin orice mijloace a înscrisurilor de la birourile electorale se pedepseşte cu închisoarea de la unu la 5 ani şi interzicerea exercitării unor drepturi.</p>\n\
      <p>(2) Cu aceeaşi pedeapsă se sancţionează şi înscrierea în copia de pe lista electorală permanentă ori de pe lista electorală complementară a unor persoane care nu figurează în această listă.</p>\n\
      <p>(3) Introducerea în uz sau folosirea unui program informatic cu vicii care alterează înregistrarea ori însumarea rezultatelor obţinute în secţiile de votare sau determină repartizarea mandatelor în afara prevederilor legii se pedepseşte cu închisoarea de la 2 la 7 ani şi interzicerea exercitării unor drepturi.</p>\n\
      <p>(4) Cu aceeaşi pedeapsă se sancţionează introducerea de date, informaţii sau proceduri care duc la alterarea sistemului informaţional naţional necesar stabilirii rezultatelor alegerilor.</p>\n\
      <h2>ART. 393 – Sancţionarea tentativei</h2>\n\
      <p>Tentativa la infracţiunile prevăzute în art. 385 şi art. 387 – 391 se pedepseşte.</p>',
  },
];

export default rules;
