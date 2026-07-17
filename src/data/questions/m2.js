/**
 * Frågebank för Modul 2 – Farmakologi.
 *
 * 50 frågor fördelade på modulens fyra ämnesområden och tre svårighetsnivåer
 * (grund, intermediar, avancerad). Förbyggt innehåll – ingen API/kostnad.
 *
 * Fält per fråga:
 *   id          – stabil nyckel (för viktad repetition i localStorage)
 *   topic       – matchar topic.id i modules.js
 *   difficulty  – 'grund' | 'intermediar' | 'avancerad'
 *   q           – frågetext
 *   options     – fyra svarsalternativ (blandas vid visning)
 *   answer      – index i options för rätt svar
 *   explanation – kort förklaring som visas efter svar
 *
 * Svarsalternativen blandas vid presentation, så rätt svar är inte
 * positionsmässigt förutsägbart trots att `answer` ofta är 0 i datan.
 */

export const M2_QUESTIONS = [
  // ---------------- FARMAKOKINETIK ----------------
  {
    id: 'm2-01',
    topic: 'farmakokinetik',
    difficulty: 'grund',
    q: 'Vad står förkortningen ADME för inom farmakokinetiken?',
    options: [
      'Absorption, distribution, metabolism och elimination',
      'Aktivering, dosering, mätning och effekt',
      'Affinitet, distribution, mottaglighet och elimination',
      'Absorption, dosering, metabolism och effekt',
    ],
    answer: 0,
    explanation:
      'Farmakokinetiken beskriver vad kroppen gör med läkemedlet: absorption, distribution, metabolism och elimination (ADME).',
  },
  {
    id: 'm2-02',
    topic: 'farmakokinetik',
    difficulty: 'grund',
    q: 'Vad menas med ett läkemedels absorption?',
    options: [
      'Hur läkemedlet tas upp i blodet från intagsstället',
      'Hur läkemedlet bryts ner i levern',
      'Hur läkemedlet binder till sin receptor',
      'Hur läkemedlet utsöndras via njurarna',
    ],
    answer: 0,
    explanation:
      'Absorptionen är upptaget av läkemedlet från t.ex. tarmen till blodet. Den påverkas av administreringsväg och beredningsform.',
  },
  {
    id: 'm2-03',
    topic: 'farmakokinetik',
    difficulty: 'grund',
    q: 'Vilken administreringsväg innebär att läkemedlet sväljs?',
    options: ['Peroral (per os)', 'Intravenös', 'Subkutan', 'Transdermal'],
    answer: 0,
    explanation:
      'Peroral (per os, p.o.) betyder via munnen, dvs. att tabletten eller kapseln sväljs. Intravenös ges direkt i en ven.',
  },
  {
    id: 'm2-04',
    topic: 'farmakokinetik',
    difficulty: 'grund',
    q: 'Vilken administreringsväg ger snabbast och mest fullständigt upptag i blodet?',
    options: ['Intravenös injektion', 'Tablett som sväljs', 'Plåster på huden', 'Stolpiller (rektalt)'],
    answer: 0,
    explanation:
      'Vid intravenös tillförsel hamnar hela dosen direkt i blodet, vilket ger 100 % biotillgänglighet och snabb effekt.',
  },
  {
    id: 'm2-05',
    topic: 'farmakokinetik',
    difficulty: 'grund',
    q: 'I vilket organ sker den största delen av läkemedelsmetabolismen?',
    options: ['Levern', 'Njurarna', 'Hjärtat', 'Mjälten'],
    answer: 0,
    explanation:
      'Levern är kroppens viktigaste metaboliserande organ och bryter ner de flesta läkemedel, bl.a. med hjälp av CYP-enzymer.',
  },
  {
    id: 'm2-06',
    topic: 'farmakokinetik',
    difficulty: 'grund',
    q: 'Via vilket organ utsöndras de flesta vattenlösliga läkemedel och deras nedbrytningsprodukter?',
    options: ['Njurarna (via urinen)', 'Huden (via svett)', 'Lungorna (via utandning)', 'Mjälten'],
    answer: 0,
    explanation:
      'Njurarna är den viktigaste eliminationsvägen. Vattenlösliga ämnen filtreras ut och lämnar kroppen med urinen.',
  },
  {
    id: 'm2-07',
    topic: 'farmakokinetik',
    difficulty: 'intermediar',
    q: 'Vad innebär ett läkemedels halveringstid (t½)?',
    options: [
      'Tiden det tar för koncentrationen i blodet att sjunka till hälften',
      'Tiden tills läkemedlet börjar verka',
      'Tiden tills halva dosen har absorberats',
      'Tiden tills effekten är som starkast',
    ],
    answer: 0,
    explanation:
      'Halveringstiden är tiden för plasmakoncentrationen att halveras. Den styr hur ofta ett läkemedel behöver doseras.',
  },
  {
    id: 'm2-08',
    topic: 'farmakokinetik',
    difficulty: 'intermediar',
    q: 'Vad menas med förstapassagemetabolism (first-pass)?',
    options: [
      'Att en del av läkemedlet bryts ner i lever/tarm innan det når den allmänna cirkulationen',
      'Att läkemedlet passerar blod-hjärnbarriären första gången',
      'Att den första dosen bryts ner snabbare än efterföljande doser',
      'Att läkemedlet filtreras en första gång i njurarna',
    ],
    answer: 0,
    explanation:
      'Perorala läkemedel passerar levern via portådern innan de når blodomloppet. Förstapassageeffekten kan minska mängden aktivt läkemedel betydligt.',
  },
  {
    id: 'm2-09',
    topic: 'farmakokinetik',
    difficulty: 'intermediar',
    q: 'Vad beskriver begreppet biotillgänglighet?',
    options: [
      'Andelen av en given dos som når den systemiska cirkulationen i oförändrad form',
      'Hur starkt läkemedlet binder till sin receptor',
      'Hur snabbt läkemedlet utsöndras',
      'Hur stor andel som binder till plasmaproteiner',
    ],
    answer: 0,
    explanation:
      'Biotillgängligheten anger hur stor del av dosen som faktiskt når blodet. Vid intravenös tillförsel är den per definition 100 %.',
  },
  {
    id: 'm2-10',
    topic: 'farmakokinetik',
    difficulty: 'intermediar',
    q: 'Många läkemedel binder i blodet till ett plasmaprotein. Vilket är det viktigaste?',
    options: ['Albumin', 'Hemoglobin', 'Fibrinogen', 'Insulin'],
    answer: 0,
    explanation:
      'Albumin är det vanligaste transportproteinet i plasma. Endast den fria (obundna) andelen av läkemedlet är farmakologiskt aktiv.',
  },
  {
    id: 'm2-11',
    topic: 'farmakokinetik',
    difficulty: 'intermediar',
    q: 'Vilken enzymfamilj i levern står för en stor del av läkemedelsmetabolismen?',
    options: ['Cytokrom P450 (CYP450)', 'Amylas', 'Lipas', 'Pepsin'],
    answer: 0,
    explanation:
      'Cytokrom P450-enzymerna (t.ex. CYP3A4) metaboliserar en majoritet av alla läkemedel och är en vanlig orsak till interaktioner.',
  },
  {
    id: 'm2-12',
    topic: 'farmakokinetik',
    difficulty: 'avancerad',
    q: 'Ungefär hur många halveringstider krävs för att ett läkemedel ska anses i princip helt eliminerat?',
    options: ['Cirka 4–5 halveringstider', 'Cirka 1 halveringstid', 'Cirka 10–12 halveringstider', 'Cirka 20 halveringstider'],
    answer: 0,
    explanation:
      'Efter 4–5 halveringstider återstår mindre än 5 % av läkemedlet, varför det räknas som praktiskt taget eliminerat.',
  },
  {
    id: 'm2-13',
    topic: 'farmakokinetik',
    difficulty: 'avancerad',
    q: 'Vad beskriver begreppet clearance?',
    options: [
      'Den volym blod som renas helt från läkemedel per tidsenhet',
      'Den totala mängd läkemedel i kroppen',
      'Tiden tills läkemedlet börjar verka',
      'Andelen läkemedel som binder till receptorn',
    ],
    answer: 0,
    explanation:
      'Clearance är ett mått på kroppens förmåga att eliminera ett läkemedel, uttryckt som renad blodvolym per tidsenhet (t.ex. ml/min).',
  },

  // ---------------- FARMAKODYNAMIK ----------------
  {
    id: 'm2-14',
    topic: 'farmakodynamik',
    difficulty: 'grund',
    q: 'Vad handlar farmakodynamik om?',
    options: [
      'Vad läkemedlet gör med kroppen och hur effekten uppstår',
      'Vad kroppen gör med läkemedlet (upptag och nedbrytning)',
      'Hur läkemedel tillverkas i fabrik',
      'Hur läkemedel förvaras på apotek',
    ],
    answer: 0,
    explanation:
      'Farmakodynamik beskriver läkemedlets effekt på kroppen, t.ex. via receptorer. Farmakokinetik beskriver tvärtom vad kroppen gör med läkemedlet.',
  },
  {
    id: 'm2-15',
    topic: 'farmakodynamik',
    difficulty: 'grund',
    q: 'Vad är en receptor i farmakologisk mening?',
    options: [
      'En målstruktur (ofta ett protein) som läkemedlet binder till och påverkar',
      'Ett enzym i levern som bryter ner läkemedel',
      'En typ av blodkropp',
      'Ett organ som lagrar läkemedel',
    ],
    answer: 0,
    explanation:
      'En receptor är en målstruktur, ofta ett protein, dit läkemedlet binder. Bindningen utlöser eller blockerar en cellulär effekt.',
  },
  {
    id: 'm2-16',
    topic: 'farmakodynamik',
    difficulty: 'grund',
    q: 'Vad gör en agonist?',
    options: [
      'Binder till receptorn och aktiverar den',
      'Binder till receptorn och blockerar den',
      'Bryter ner receptorn',
      'Hindrar läkemedlet från att tas upp i tarmen',
    ],
    answer: 0,
    explanation:
      'En agonist binder till receptorn och utlöser ett svar, ungefär som kroppens egna signalämnen. En antagonist blockerar istället.',
  },
  {
    id: 'm2-17',
    topic: 'farmakodynamik',
    difficulty: 'grund',
    q: 'Vad gör en antagonist?',
    options: [
      'Binder till receptorn och blockerar dess aktivering',
      'Binder till receptorn och aktiverar den kraftigt',
      'Ökar mängden receptorer',
      'Snabbar på läkemedlets nedbrytning',
    ],
    answer: 0,
    explanation:
      'En antagonist binder till receptorn utan att aktivera den och hindrar därmed agonister (eller kroppens egna signalämnen) från att verka.',
  },
  {
    id: 'm2-18',
    topic: 'farmakodynamik',
    difficulty: 'grund',
    q: 'Vad menas med en dos-responskurva?',
    options: [
      'Sambandet mellan dosens storlek och effektens styrka',
      'Sambandet mellan pris och effekt',
      'Tiden från intag till utsöndring',
      'Förhållandet mellan tabletter och kapslar',
    ],
    answer: 0,
    explanation:
      'En dos-responskurva visar hur effekten förändras när dosen ökar. Vid en viss nivå nås ofta en platå där mer dos inte ger mer effekt.',
  },
  {
    id: 'm2-19',
    topic: 'farmakodynamik',
    difficulty: 'intermediar',
    q: 'Vad menas med ett läkemedels affinitet till en receptor?',
    options: [
      'Hur starkt läkemedlet binder till receptorn',
      'Hur snabbt läkemedlet utsöndras',
      'Hur stor dos som krävs för förgiftning',
      'Hur länge tabletten håller i förpackningen',
    ],
    answer: 0,
    explanation:
      'Affiniteten beskriver bindningsstyrkan mellan läkemedel och receptor. Hög affinitet innebär att det binder lätt och stannar kvar.',
  },
  {
    id: 'm2-20',
    topic: 'farmakodynamik',
    difficulty: 'intermediar',
    q: 'Vad innebär ett läkemedels terapeutiska fönster?',
    options: [
      'Dosintervallet mellan tillräcklig effekt och begynnande toxicitet',
      'Tiden på dygnet då läkemedlet ska tas',
      'Den period under vilken läkemedlet är hållbart',
      'Den tid det tar innan effekten märks',
    ],
    answer: 0,
    explanation:
      'Det terapeutiska fönstret är spannet mellan minsta verksamma dos och den dos där biverkningar/toxicitet uppstår.',
  },
  {
    id: 'm2-21',
    topic: 'farmakodynamik',
    difficulty: 'intermediar',
    q: 'Ett läkemedel med smalt terapeutiskt fönster innebär att:',
    options: [
      'Skillnaden mellan verksam och toxisk dos är liten och kräver noggrann dosering',
      'Läkemedlet kan ges i mycket varierande doser utan risk',
      'Läkemedlet saknar biverkningar',
      'Läkemedlet verkar bara under ett kort tidsfönster efter intaget',
    ],
    answer: 0,
    explanation:
      'Vid smalt terapeutiskt fönster ligger verksam och toxisk dos nära varandra, t.ex. warfarin och litium, vilket ofta kräver kontroller.',
  },
  {
    id: 'm2-22',
    topic: 'farmakodynamik',
    difficulty: 'intermediar',
    q: 'Vad menas med tolerans mot ett läkemedel?',
    options: [
      'Att samma dos kan ge mindre effekt efter upprepad användning',
      'Att kroppen blir allergisk mot läkemedlet',
      'Att läkemedlet slutar absorberas i tarmen',
      'Att läkemedlet börjar verka snabbare över tid',
    ],
    answer: 0,
    explanation:
      'Tolerans innebär att samma dos kan ge mindre effekt efter upprepad användning. En dos ska inte höjas automatiskt; dosändringar ska göras i samråd med förskrivaren.',
  },
  {
    id: 'm2-23',
    topic: 'farmakodynamik',
    difficulty: 'intermediar',
    q: 'Vad menas med en partiell agonist?',
    options: [
      'Ett läkemedel som aktiverar receptorn men ger svagare maxeffekt än en full agonist',
      'Ett läkemedel som bara blockerar receptorn',
      'Ett läkemedel som binder till hälften av kroppens receptorer',
      'Ett läkemedel som verkar i halva kroppen',
    ],
    answer: 0,
    explanation:
      'En partiell agonist binder och aktiverar receptorn, men når aldrig samma maximala effekt som en full agonist även vid hög dos.',
  },
  {
    id: 'm2-24',
    topic: 'farmakodynamik',
    difficulty: 'avancerad',
    q: 'Vad beskriver det terapeutiska indexet?',
    options: [
      'Förhållandet mellan toxisk dos och verksam dos – ett mått på säkerhetsmarginal',
      'Antalet receptorer ett läkemedel binder till',
      'Hur snabbt ett läkemedel absorberas',
      'Priset per verksam dos',
    ],
    answer: 0,
    explanation:
      'Det terapeutiska indexet (ungefär toxisk dos delat med verksam dos) anger säkerhetsmarginalen. Ett högt index betyder större marginal.',
  },
  {
    id: 'm2-25',
    topic: 'farmakodynamik',
    difficulty: 'avancerad',
    q: 'Vad innebär nedreglering (downregulation) av receptorer?',
    options: [
      'Att cellen minskar antalet receptorer vid långvarig stimulering',
      'Att receptorerna binder läkemedlet starkare',
      'Att läkemedlet utsöndras snabbare',
      'Att fler receptorer bildas direkt',
    ],
    answer: 0,
    explanation:
      'Vid ihållande stimulering kan cellen minska antalet receptorer (nedreglering), vilket är en mekanism bakom tolerans.',
  },
  {
    id: 'm2-26',
    topic: 'farmakodynamik',
    difficulty: 'avancerad',
    q: 'Vad kännetecknar en kompetitiv (reversibel) antagonist?',
    options: [
      'Den konkurrerar med agonisten om samma bindningsställe och kan trängas undan av högre agonistdos',
      'Den binder irreversibelt och trängs inte undan av en högre agonistdos',
      'Den ökar agonistens effekt',
      'Den binder till ett helt annat organ',
    ],
    answer: 0,
    explanation:
      'En kompetitiv antagonist tävlar med agonisten om receptorn. Effekten kan därför övervinnas genom att öka agonistkoncentrationen.',
  },

  // ---------------- LÄKEMEDELSGRUPPER ----------------
  {
    id: 'm2-27',
    topic: 'lakemedelsgrupper',
    difficulty: 'grund',
    q: 'Vad används betablockerare främst mot?',
    options: [
      'Högt blodtryck och vissa hjärtsjukdomar',
      'Infektioner orsakade av bakterier',
      'Depression',
      'Magsår',
    ],
    answer: 0,
    explanation:
      'Betablockerare dämpar effekten av adrenalin på hjärtat, vilket sänker puls och blodtryck. De används bl.a. vid hypertoni och kärlkramp.',
  },
  {
    id: 'm2-28',
    topic: 'lakemedelsgrupper',
    difficulty: 'grund',
    q: 'Vad används statiner till?',
    options: [
      'Att sänka blodfetterna (kolesterol)',
      'Att höja blodsockret',
      'Att behandla allergier',
      'Att lindra magsmärtor',
    ],
    answer: 0,
    explanation:
      'Statiner hämmar leverns kolesterolproduktion och sänker LDL-kolesterolet, vilket minskar risken för hjärt-kärlsjukdom.',
  },
  {
    id: 'm2-29',
    topic: 'lakemedelsgrupper',
    difficulty: 'grund',
    q: 'Vilket är ett mycket vanligt febernedsättande och smärtstillande läkemedel som vanligen inte räknas som NSAID?',
    options: ['Paracetamol', 'Ibuprofen', 'Naproxen', 'Diklofenak'],
    answer: 0,
    explanation:
      'Paracetamol är smärtstillande och febernedsättande men har endast svag antiinflammatorisk effekt och räknas inte till NSAID-gruppen.',
  },
  {
    id: 'm2-30',
    topic: 'lakemedelsgrupper',
    difficulty: 'grund',
    q: 'Vad är ibuprofen och diklofenak exempel på?',
    options: ['NSAID (antiinflammatoriska smärtstillande)', 'Antibiotika', 'Opioider', 'Antidepressiva'],
    answer: 0,
    explanation:
      'NSAID (icke-steroida antiinflammatoriska läkemedel) verkar smärtstillande, febernedsättande och antiinflammatoriskt genom att hämma COX-enzymer.',
  },
  {
    id: 'm2-31',
    topic: 'lakemedelsgrupper',
    difficulty: 'grund',
    q: 'Vad används antibiotika mot?',
    options: [
      'Bakteriella infektioner',
      'Virusinfektioner som förkylning',
      'Högt blodtryck',
      'Depression',
    ],
    answer: 0,
    explanation:
      'Antibiotika verkar mot bakterier, inte virus. Därför har de ingen effekt mot vanlig förkylning eller influensa.',
  },
  {
    id: 'm2-32',
    topic: 'lakemedelsgrupper',
    difficulty: 'grund',
    q: 'Vilken läkemedelsgrupp tillhör morfin och oxikodon?',
    options: ['Opioider', 'NSAID', 'Antibiotika', 'Statiner'],
    answer: 0,
    explanation:
      'Morfin och oxikodon är opioider, starka smärtstillande läkemedel som verkar på opioidreceptorer i centrala nervsystemet.',
  },
  {
    id: 'm2-33',
    topic: 'lakemedelsgrupper',
    difficulty: 'intermediar',
    q: 'Hur sänker ACE-hämmare blodtrycket?',
    options: [
      'De minskar bildningen av angiotensin II, vilket vidgar blodkärlen',
      'De ökar hjärtfrekvensen',
      'De blockerar betareceptorer i hjärtat',
      'De ökar mängden kolesterol i blodet',
    ],
    answer: 0,
    explanation:
      'ACE-hämmare blockerar enzymet som bildar angiotensin II. Mindre angiotensin II ger vidgade kärl och lägre blodtryck.',
  },
  {
    id: 'm2-34',
    topic: 'lakemedelsgrupper',
    difficulty: 'intermediar',
    q: 'Vilken är en vanlig och typisk biverkning av ACE-hämmare?',
    options: ['Rethosta (torrhosta)', 'Förstoppning', 'Håravfall', 'Förhöjt blodsocker'],
    answer: 0,
    explanation:
      'En torr rethosta är en känd biverkning av ACE-hämmare och beror på ökade nivåer av bradykinin. Den kan motivera byte av läkemedel.',
  },
  {
    id: 'm2-35',
    topic: 'lakemedelsgrupper',
    difficulty: 'intermediar',
    q: 'Vad är SSRI för en typ av läkemedel?',
    options: [
      'Antidepressiva som ökar tillgången på serotonin i hjärnan',
      'Antibiotika med brett spektrum',
      'Blodtryckssänkande av betablockerartyp',
      'Smärtstillande av opioidtyp',
    ],
    answer: 0,
    explanation:
      'SSRI (selektiva serotoninåterupptagshämmare) ökar mängden serotonin i synapsen och används mot depression och ångest.',
  },
  {
    id: 'm2-36',
    topic: 'lakemedelsgrupper',
    difficulty: 'intermediar',
    q: 'Vad är skillnaden mellan ett smalspektrumantibiotikum och ett bredspektrumantibiotikum?',
    options: [
      'Smalt spektrum verkar mot få bakteriearter, brett spektrum mot många',
      'Smalt spektrum betyder att antibiotikat ges i låg dos, brett spektrum i hög dos',
      'Brett spektrum verkar bara mot virus',
      'Smalt spektrum ges i tablettform medan brett spektrum ges som injektion',
    ],
    answer: 0,
    explanation:
      'Smalspektrumantibiotika riktar sig mot ett fåtal bakteriearter, medan bredspektrum träffar många. Smalt spektrum föredras ofta för att minska resistensutveckling.',
  },
  {
    id: 'm2-37',
    topic: 'lakemedelsgrupper',
    difficulty: 'intermediar',
    q: 'Vad används kortison (glukokortikoider) främst för?',
    options: [
      'Att dämpa inflammation och immunförsvar',
      'Att döda bakterier',
      'Att sänka blodfetterna',
      'Att höja blodtrycket vid lågt blodtryck',
    ],
    answer: 0,
    explanation:
      'Glukokortikoider (t.ex. prednisolon) har kraftig antiinflammatorisk och immundämpande effekt och används vid bl.a. astma, allergi och reumatiska sjukdomar.',
  },
  {
    id: 'm2-38',
    topic: 'lakemedelsgrupper',
    difficulty: 'avancerad',
    q: 'Hur verkar statiner på cellnivå för att sänka kolesterolet?',
    options: [
      'De hämmar enzymet HMG-CoA-reduktas i leverns kolesterolsyntes',
      'De binder gallsyror i tarmen',
      'De blockerar upptaget av kolesterol i njurarna',
      'De ökar utsöndringen av kolesterol via svetten',
    ],
    answer: 0,
    explanation:
      'Statiner hämmar HMG-CoA-reduktas, det hastighetsbestämmande enzymet i leverns kolesterolproduktion, vilket sänker LDL-nivåerna.',
  },
  {
    id: 'm2-39',
    topic: 'lakemedelsgrupper',
    difficulty: 'avancerad',
    q: 'Penicilliner och liknande betalaktamantibiotika dödar bakterier genom att:',
    options: [
      'Störa uppbyggnaden av bakteriens cellvägg',
      'Blockera bakteriens andning helt',
      'Lösa upp bakteriens DNA omedelbart',
      'Hindra människans celler från att dela sig',
    ],
    answer: 0,
    explanation:
      'Betalaktamantibiotika som penicillin hämmar syntesen av bakteriens cellvägg, vilket gör att bakterien brister. Mänskliga celler saknar cellvägg och skadas inte.',
  },
  {
    id: 'm2-40',
    topic: 'lakemedelsgrupper',
    difficulty: 'avancerad',
    q: 'Vad kännetecknar ett typiskt antipsykotiskt läkemedels verkningsmekanism?',
    options: [
      'Det blockerar i hög grad dopaminreceptorer (särskilt D2) i hjärnan',
      'Det ökar serotoninåterupptaget kraftigt',
      'Det hämmar bakteriers proteinsyntes',
      'Det vidgar blodkärlen i hjärnan',
    ],
    answer: 0,
    explanation:
      'Antipsykotika dämpar psykossymtom främst genom att blockera dopamin-D2-receptorer. Blockaden förklarar även flera av biverkningarna.',
  },

  // ---------------- SÄKERHET ----------------
  {
    id: 'm2-41',
    topic: 'sakerhet',
    difficulty: 'grund',
    q: 'Vad är en biverkning?',
    options: [
      'En oönskad effekt av ett läkemedel vid normal användning',
      'Den önskade huvudeffekten av läkemedlet',
      'Ett fel i tillverkningen av tabletten',
      'En allergi mot maten man äter',
    ],
    answer: 0,
    explanation:
      'En biverkning är en skadlig och oavsedd reaktion på ett läkemedel som ges i normala doser. Alla läkemedel kan ge biverkningar.',
  },
  {
    id: 'm2-42',
    topic: 'sakerhet',
    difficulty: 'grund',
    q: 'Vad innebär en läkemedelsinteraktion?',
    options: [
      'Att två läkemedel (eller läkemedel och föda) påverkar varandras effekt',
      'Att ett läkemedel byter färg i förpackningen',
      'Att läkemedlet inte längre är hållbart',
      'Att patienten glömmer att ta sin dos',
    ],
    answer: 0,
    explanation:
      'En interaktion uppstår när ett ämne förändrar ett annat läkemedels effekt – effekten kan bli starkare, svagare eller medföra ökad risk för biverkningar.',
  },
  {
    id: 'm2-43',
    topic: 'sakerhet',
    difficulty: 'grund',
    q: 'Vad kallas verksamheten som bevakar och utvärderar läkemedels säkerhet efter att de godkänts?',
    options: ['Farmakovigilans', 'Farmakognosi', 'Farmakogenetik', 'Farmaceutik'],
    answer: 0,
    explanation:
      'Farmakovigilans är arbetet med att övervaka och rapportera biverkningar för att fortlöpande bedöma läkemedels nytta och risk.',
  },
  {
    id: 'm2-44',
    topic: 'sakerhet',
    difficulty: 'grund',
    q: 'Varför måste man ofta vara extra försiktig med läkemedelsdoser till barn?',
    options: [
      'Dosen behöver oftast anpassas efter barnets vikt och utvecklingsgrad',
      'Barn får samma dos som vuxna men uppdelad på fler tillfällen',
      'Barns lever och njurar är färdigutvecklade redan vid ett års ålder',
      'Läkemedel verkar inte alls på barn',
    ],
    answer: 0,
    explanation:
      'Barn är inte små vuxna; deras organ och ämnesomsättning är inte fullt utvecklade. Doseringen anpassas därför vanligen efter kroppsvikt och ålder.',
  },
  {
    id: 'm2-45',
    topic: 'sakerhet',
    difficulty: 'intermediar',
    q: 'Varför är äldre personer ofta känsligare för läkemedel och biverkningar?',
    options: [
      'Lever- och njurfunktionen avtar med åldern, vilket gör att läkemedel bryts ner och utsöndras långsammare',
      'Äldre har en högre andel kroppsvatten, vilket späder ut läkemedlen',
      'Äldre bryter ner läkemedel snabbare i levern och behöver därför högre doser',
      'Äldre saknar receptorer för läkemedel',
    ],
    answer: 0,
    explanation:
      'Med åldern minskar ofta lever- och njurfunktionen, vilket kan ge högre läkemedelskoncentrationer. Äldre använder dessutom ofta flera läkemedel samtidigt.',
  },
  {
    id: 'm2-46',
    topic: 'sakerhet',
    difficulty: 'intermediar',
    q: 'Vad betyder begreppet polyfarmaci?',
    options: [
      'Att en patient använder många läkemedel samtidigt',
      'Att ett läkemedel har flera olika namn',
      'Att läkemedlet tillverkas av flera företag',
      'Att läkemedlet ges flera gånger per dag',
    ],
    answer: 0,
    explanation:
      'Polyfarmaci innebär samtidig användning av många läkemedel, vilket ökar risken för interaktioner och biverkningar, särskilt hos äldre.',
  },
  {
    id: 'm2-47',
    topic: 'sakerhet',
    difficulty: 'intermediar',
    q: 'Varför är man särskilt restriktiv med läkemedel under graviditet?',
    options: [
      'Vissa läkemedel kan passera moderkakan och påverka fostret',
      'Läkemedel slutar verka under graviditet',
      'Gravida bryter ner alla läkemedel direkt',
      'Läkemedel kan inte absorberas under graviditet',
    ],
    answer: 0,
    explanation:
      'En del läkemedel passerar moderkakan och kan påverka fostrets utveckling. Nytta och risk måste därför vägas särskilt noga under graviditet.',
  },
  {
    id: 'm2-48',
    topic: 'sakerhet',
    difficulty: 'intermediar',
    q: 'Vad är en allergisk läkemedelsreaktion ett exempel på?',
    options: [
      'En överkänslighetsreaktion där immunförsvaret reagerar mot läkemedlet',
      'En förväntad doseffekt',
      'En interaktion mellan två födoämnen',
      'Ett tillverkningsfel',
    ],
    answer: 0,
    explanation:
      'Vid läkemedelsallergi reagerar immunförsvaret mot substansen. Reaktionen kan variera från hudutslag till livshotande anafylaxi.',
  },
  {
    id: 'm2-49',
    topic: 'sakerhet',
    difficulty: 'avancerad',
    q: 'Hur kan en CYP-hämmare orsaka en interaktion med ett annat läkemedel?',
    options: [
      'Genom att bromsa nedbrytningen av det andra läkemedlet så att dess koncentration stiger',
      'Genom att öka absorptionen i tarmen till det dubbla',
      'Genom att binda till samma receptor och blockera den',
      'Genom att färga urinen',
    ],
    answer: 0,
    explanation:
      'En CYP-hämmare minskar leverns nedbrytning av läkemedel som metaboliseras av samma enzym. Då stiger koncentrationen, vilket kan ge toxiska effekter.',
  },
  {
    id: 'm2-50',
    topic: 'sakerhet',
    difficulty: 'avancerad',
    q: 'Varför ska man vanligen inte kombinera NSAID med blodförtunnande läkemedel utan att rådgöra med läkare?',
    options: [
      'Kombinationen ökar risken för blödningar, bl.a. i magtarmkanalen',
      'NSAID gör att det blodförtunnande läkemedlet inte längre absorberas',
      'Kombinationen höjer blodsockret farligt',
      'NSAID förstör det blodförtunnande läkemedlet i förpackningen',
    ],
    answer: 0,
    explanation:
      'NSAID kan både skada magslemhinnan och påverka blodplättarna. Tillsammans med blodförtunnande läkemedel ökar därför blödningsrisken påtagligt.',
  },
]
