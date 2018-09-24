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
      <h2>Unde votează alegătorii români cu domiciliul sau reședința în țară?</h2>\n\
      <ul>\n\
        <li>Alegătorii votează numai la secţia de votare la care este arondată strada sau localitatea unde îşi au domiciliul ori reşedinţa.</li>\n\
        <li>În cazul în care, în ziua votării, alegătorii se află în altă unitate administrativ-teritorială din cadrul aceleiaşi circumscripţii electorale, aceştia pot vota la orice secţie de votare din cadrul circumscripţiei electorale unde îşi au domiciliul sau reşedinţa. [Art. 84 alin. (1) din Legea nr. 208/2015]</li>\n\
        <li>Fiecare alegător are dreptul la un singur vot pentru alegerea Senatului şi la un singur vot pentru alegerea Camerei Deputaţilor. Fiecare alegător îşi exprimă votul personal. Exercitarea votului în numele altui alegător este interzisă. [Art. 3 alin. (1) și (2) din Legea nr. 208/2015]</li>\n\
      </ul>\n\
      <h2>Cu ce acte de identitate se poate vota la secțiile de votare organizate în România?</h2>\n\
      <p>Cetăţenii români cu domiciliul sau reşedinţa în România care în ziua votării se află în ţară îşi pot exercita dreptul de vot la secţiile de votare organizate în România în baza unuia dintre următoarele acte de identitate, valabile în ziua votării:</p>\n\
      <ul>\n\
        <li>cartea de identitate;</li>\n\
        <li>cartea electronică de identitate;</li>\n\
        <li>cartea de identitate provizorie;</li>\n\
        <li>buletinul de identitate;</li>\n\
        <li>paşaportul diplomatic;</li>\n\
        <li>paşaportul diplomatic electronic;</li>\n\
        <li>paşaportul de serviciu;</li>\n\
        <li>paşaportul de serviciu electronic;</li>\n\
        <li>carnetul de serviciu militar, în cazul elevilor din şcolile militare. [Art. 83 alin. (1) din Legea nr. 208/2015]</li>\n\
      </ul>\n\
      <h2>Unde pot vota membrii birourilor electorale ale secţiilor de votare şi operatorii de calculator?</h2>\n\
      <p>Membrii birourilor electorale ale secţiilor de votare şi operatorii de calculator pot vota în secția de votare în care activează, dacă au domiciliul sau reşedinţa pe raza circumscripţiei electorale în care se află secţia de votare respectivă. [Art. 51 alin. (2) lit. d) din Legea nr. 208/2015]</p>\n\
      <h2>Unde pot vota candidații?</h2>\n\
      <p>Candidaţii pot vota în orice secție de votare de pe raza circumscripției electorale în care candidează. [Art. 51 alin. (2) lit. f) din Legea nr. 208/2015]</p>\n\
      <h2>Cum puteți afla la ce secție de votare sunteți arondat?</h2>\n\
      <p>Accesați <a href="http://www.registrulelectoral.ro" target="_blank">www.registrulelectoral.ro</a> și introduceți datele personale solicitate pentru a afla secția de votare la care ați fost arondați, inclusiv adresa acesteia.</p>',
  },
  {
    titlu: 'Programul de votare',
    id: 3,
    icon: 'clock',
    content: '<h1>Programul de votare</h1>\n\
      <p>Votarea se desfășoară duminică, 11 decembrie 2016, între orele 7.00 şi 21.00.</p>\n\
      <p>La ora 21.00, preşedintele biroului electoral al secţiei de votare declară votarea încheiată şi dispune închiderea localului secţiei de vot. [Art. 88 alin. (1) din Legea nr. 208/2015]</p>\n\
      <p>Alegătorilor care la ora 21.00 se află în sala unde se votează li se permite să îşi exercite dreptul de vot. [Art. 88 alin. (2) din Legea nr. 208/2015]</p>',
  },
  {
    titlu: 'Sistemul informatic',
    id: 4,
    icon: 'system',
    content: '<h1>Sistemul informatic (SIMPV)</h1>\n\
      <p>Accesul alegătorilor în sala de votare are loc în serii corespunzătoare numărului cabinelor. Fiecare alegător prezintă actul de identitate şi, după caz, documentul care dovedeşte reşedinţa operatorului de calculator al biroului electoral al secţiei de votare, care înscrie codul numeric personal al alegătorului în Sistemul informatic de monitorizare a prezenţei la vot şi de prevenire a votului ilegal. [Art. 84 alin. (2) din Legea nr. 208/2015]</p>\n\
      <p>În cazul în care alegătorul nu figurează în lista electorală permanentă existentă în secţia de votare respectivă.</p>\n\
      <p>Sistemul informatic de monitorizare a prezenţei la vot şi de prevenire a votului ilegal semnalează dacă:</p>\n\
      <ul>\n\
        <li>persoana care s-a prezentat la vot a împlinit vârsta de 18 ani până în ziua votării inclusiv;</li>\n\
        <li>persoana care s-a prezentat la vot şi-a pierdut drepturile electorale;</li>\n\
        <li>persoana care s-a prezentat la vot este arondată la altă secţie de votare;</li>\n\
        <li>persoana care s-a prezentat la vot este omisă din lista electorală permanentă, are domiciliul sau reşedinţa în raza teritorială a secţiei de votare respective şi dacă a formulat o solicitare de a fi înscrisă în Registrul electoral cu adresa de reşedinţă;</li>\n\
        <li>persoana care s-a prezentat la vot şi-a mai exercitat dreptul de vot la acelaşi scrutin.</li>\n\
      </ul>\n\
      <p>În baza rezultatelor generate de Sistemul informatic de monitorizare a prezenţei la vot şi de prevenire a votului ilegal, a comunicărilor efectuate prin intermediul acestuia şi a verificării actului de identitate, preşedintele biroului electoral al secţiei de votare:</p>\n\
      <ul>\n\
        <li>opreşte de la votare persoana care nu a împlinit vârsta de 18 ani până în ziua votării, persoana care şi-a pierdut drepturile electorale şi persoana care a optat să voteze prin corespondenţă;</li>\n\
        <li>îndrumă alegătorul să voteze la secţia de votare la care este arondat, în cazul în care este arondat la altă secţie de votare;</li>\n\
        <li>îndrumă alegătorul să voteze la secţia de votare unde a fost arondat conform reşedinţei, în cazul în care acesta a fost înscris în Registrul electoral cu adresa de reşedinţă; Ghidul alegătorului român cu domiciliul sau reşedinţa în ţară</li>\n\
        <li>înscrie în lista electorală suplimentară persoana care s-a prezentat la vot, este omisă din lista electorală permanentă, are domiciliul sau reşedinţa în raza teritorială a secţiei de votare respective; în cazul în care persoana omisă este înscrisă în lista electorală permanentă existentă la altă secţie de votare, preşedintele biroului electoral al acelei secţii de votare va fi notificat de către sistemul informatic în acest sens şi va radia persoana respectivă din lista electorală permanentă; după ce alegătorul semnează în lista electorală suplimentară îi încredinţează buletinele de vot şi ştampila cu menţiunea "VOTAT";</li>\n\
        <li>înscrie în lista electorală suplimentară persoana care s-a prezentat la vot, are domiciliul sau reşedinţa în altă unitate administrativ-teritorială din cadrul aceleiaşi circumscripţii electorale;</li>\n\
        <li>permite alegătorului care îndeplineşte condiţiile prevăzute de lege şi este înscris în lista electorală permanentă să voteze; în acest sens, după ce alegătorul semnează în lista electorală permanentă îi încredinţează buletinele de vot şi ştampila cu menţiunea "VOTAT". [Art. 84 alin. (3) – (4) din Legea nr. 208/2015]</li>\n\
      </ul>\n\
      <h2>Ce se întâmplă în cazul unei disfuncționalități a SIMPV?</h2>\n\
      <p>Disfuncţionalitatea Sistemului informatic de monitorizare a prezenţei la vot şi de prevenire a votului ilegal nu poate determina suspendarea sau întreruperea votării. În această situaţie, alegătorii prezintă actul de identitate operatorului de calculator sau membrului biroului electoral al secţiei de votare desemnat de preşedintele acestuia, care consemnează pe suport electronic sau de hârtie, după caz, codurile numerice personale ale alegătorilor şi ora la care s-au prezentat la vot. [Art. 87 alin. (1) din Legea nr. 208/2015]</p>\n\
      <p>Pe perioada disfuncţionalităţii SIMPV, în cazul în care terminalul informatic este funcţional, alegătorii prezintă actele de identitate operatorului de calculator care consemnează în ADV, în modul off-line, codurile numerice personale ale alegătorilor care se prezintă la vot.</p>\n\
      <p>Pe perioada disfuncţionalităţii SIMPV, în cazul în care terminalul informatic nu este funcţional, alegătorii prezintă actele de identitate membrului biroului electoral al secţiei de votare desemnat de preşedintele acestuia, care consemnează într-un formular codurile numerice personale ale alegătorilor şi ora la care s-au prezentat la vot.</p>\n\
      <p>După încetarea disfuncţionalităţii terminalului informatic sau după înlocuirea acestuia de către Serviciul de Telecomunicaţii Speciale, până la ora 21.00 a zilei votării, operatorul de calculator va introduce codurile numerice personale ale alegătorilor care s-au prezentat la vot pe perioada disfuncţionalităţii acestuia.</p>\n\
      <p>După încetarea disfuncţionalităţii SIMPV, în cazul în care terminalul informatic este funcţional, datele înscrise în ADV în modul off-line sunt transmise automat către Sistemul informatic central. [Art. 25 alin. (1) – (4) din Hotărârea AEP nr. 9/2015, cu modificările și completările ulterioare]</p>',
  },
  {
    titlu: 'Votarea',
    id: 5,
    icon: 'vote',
    content: '<h1>Votarea</h1>\n\
      <p>Alegătorii votează separat, în cabine închise, aplicând ştampila cu menţiunea "VOTAT" în patrulaterul care cuprinde lista de candidaţi sau numele candidatului pe care îl votează.</p>\n\
      <p>Ştampila cu menţiunea "VOTAT" trebuie să fie rotundă şi astfel dimensionată încât să fie mai mică decât patrulaterul în care se aplică.</p>\n\
      <p>După ce au votat, alegătorii îndoaie buletinele de vot astfel ca pagina albă care poartă ştampila de control să rămână în afară şi le introduc în urnă, având grijă să nu se deschidă. Îndoirea greşită a buletinului de vot nu atrage nulitatea votului, dacă secretul votului este asigurat. </p>\n\
      <p>În cazul în care buletinul de vot se deschide în aşa fel încât secretul votului nu mai este asigurat, acesta se anulează şi se dă alegătorului, numai o singură dată, un nou buletin de vot, făcându-se menţiune despre aceasta în procesul verbal al operaţiunilor de votare.</p>\n\
      <p>Ştampila cu menţiunea "VOTAT", încredinţată pentru votare, se restituie preşedintelui, care o aplică pe actul de identitate, menţionând şi data scrutinului. În cazul alegătorilor care votează pe baza cărţii de identitate, pe versoul acesteia se aplică un timbru autocolant cu menţiunea "VOTAT" şi data scrutinului. [Art. 84 alin. (6) – (10) din Legea nr. 208/2015]</p>\n\
      <h2>Ce se întâmplă dacă alegătorul nu poate să semneze în lista electorală?</h2>\n\
      <p>În situaţia în care alegătorul, din motive bine întemeiate, constatate de către preşedintele biroului electoral al secţiei de votare, nu poate semna în lista electorală permanentă, preşedintele face o menţiune în lista electorală, confirmată prin semnătura sa şi a unui alt membru al biroului electoral. [Art. 84 alin. (5) din Legea nr. 208/2015]</p>',
  },
  {
    titlu: 'Urna specială',
    id: 6,
    icon: 'box',
    content: '<h1>Urna specială</h1>\n\
      <p>Cetăţenii cu drept de vot din circumscripţia electorală respectivă care nu se pot deplasa la sediul secţiei de votare din cauză de boală sau invaliditate. Preşedintele biroului electoral al secţiei de votare poate aproba, la cererea scrisă a acestora, însoţită de copii ale actelor din care rezultă starea de sănătate ori de invaliditate, înregistrată la cea mai apropiată secţie de votare de locul în care se află în ziua votării, ca o echipă formată din cel puţin 2 membri ai biroului electoral să se deplaseze cu o urnă specială şi cu materialul necesar votării – ştampilă cu menţiunea "VOTAT" şi buletine de vot – la locul unde se află alegătorul, pentru a se efectua votarea. În cazul cetăţenilor care nu se pot deplasa la sediul secţiei de votare, cererile scrise se pot transmite prin intermediul altor persoane sau prin intermediul personalului de specialitate din unităţile medicale unde se află internaţi, după caz. [Art. 85 alin. (10) din Legea nr. 208/2015] </p>\n\
      <p>Persoanele reţinute, deţinute în baza unui mandat de arestare preventivă ori asupra cărora s-a dispus măsura preventivă a arestului la domiciliu sau persoanele care execută o pedeapsă privativă de libertate, dar care nu şi-au pierdut drepturile electorale. Procedura de exercitare a dreptului de vot de către această categorie de alegători este stabilită prin decizie a Biroului Electoral Central. În aceste condiții pot vota numai persoanele care sunt înscrise în listele electorale permanente ale circumscripţiei electorale în care au loc alegeri. [Art. 117 alin. (2) și (3) din Legea nr. 208/2015]</p>',
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
