/**
 * Frågebank för Modul 3 – Sjukdomslära.
 *
 * 50 frågor fördelade på modulens fem ämnesområden och tre svårighetsnivåer
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
 * positionsmässigt förutsägbart trots att `answer` varierar i datan.
 */

export const M3_QUESTIONS = [
  // ---------------- INTERNMEDICIN ----------------
  {
    id: 'm3-01',
    topic: 'internmedicin',
    difficulty: 'grund',
    q: 'Vad kännetecknar diabetes mellitus?',
    options: [
      'Förhöjt blodsocker (glukos) i blodet',
      'För lågt blodtryck',
      'För få röda blodkroppar',
      'För hög kroppstemperatur',
    ],
    answer: 0,
    explanation:
      'Diabetes innebär ett kroniskt förhöjt blodsocker, antingen på grund av brist på insulin eller nedsatt effekt av insulin.',
  },
  {
    id: 'm3-02',
    topic: 'internmedicin',
    difficulty: 'grund',
    q: 'Vad är den viktigaste skillnaden mellan typ 1- och typ 2-diabetes?',
    options: [
      'Vid typ 1 producerar kroppen nästan inget insulin, vid typ 2 är effekten av insulin nedsatt',
      'Typ 1 drabbar bara äldre, typ 2 bara barn',
      'Typ 1 beror på för mycket socker i kosten, typ 2 är ärftlig',
      'Det finns ingen egentlig skillnad mellan dem',
    ],
    answer: 0,
    explanation:
      'Vid typ 1 förstörs de insulinproducerande cellerna och insulin saknas. Vid typ 2 finns ofta insulin kvar men cellerna svarar sämre (insulinresistens).',
  },
  {
    id: 'm3-03',
    topic: 'internmedicin',
    difficulty: 'grund',
    q: 'Vad menas med hypertoni?',
    options: ['Lågt blodtryck', 'Hög puls', 'Högt blodtryck', 'Högt blodsocker'],
    answer: 2,
    explanation:
      'Hypertoni betyder förhöjt blodtryck. Det är en viktig riskfaktor för stroke, hjärtinfarkt och njurskada.',
  },
  {
    id: 'm3-04',
    topic: 'internmedicin',
    difficulty: 'grund',
    q: 'Vilken behandling är central vid typ 1-diabetes?',
    options: [
      'Endast kostomläggning',
      'Tillförsel av insulin',
      'Antibiotika',
      'Blodtryckssänkande tabletter',
    ],
    answer: 1,
    explanation:
      'Eftersom kroppen vid typ 1-diabetes inte själv bildar insulin måste det tillföras, vanligen via injektioner eller pump.',
  },
  {
    id: 'm3-05',
    topic: 'internmedicin',
    difficulty: 'grund',
    q: 'Vad är astma?',
    options: [
      'En kronisk luftvägssjukdom med varierande symtom och varierande begränsning av luftflödet vid utandning',
      'En permanent förstoring av hjärtat',
      'En infektion i njurarna',
      'En sjukdom som bara drabbar äldre',
    ],
    answer: 0,
    explanation:
      'Astma kännetecknas av varierande luftvägssymtom, exempelvis pipande andning, andnöd och hosta, tillsammans med varierande begränsning av luftflödet vid utandning. Begränsningen är ofta reversibel men kan med tiden bli mer bestående.',
  },
  {
    id: 'm3-06',
    topic: 'internmedicin',
    difficulty: 'intermediar',
    q: 'Vad står förkortningen KOL för?',
    options: [
      'Kronisk obesitas och leversjukdom',
      'Kardiell obstruktion av lungartären',
      'Kroniskt obstruktiv lungsjukdom',
      'Kortvarig obegränsad lunginflammation',
    ],
    answer: 2,
    explanation:
      'KOL = kroniskt obstruktiv lungsjukdom. Den orsakas oftast av långvarig rökning och ger en bestående försämring av luftflödet.',
  },
  {
    id: 'm3-07',
    topic: 'internmedicin',
    difficulty: 'intermediar',
    q: 'Vad innebär hjärtsvikt?',
    options: [
      'Hjärtat orkar inte pumpa tillräckligt med blod för kroppens behov',
      'Hjärtat slutar slå helt och hållet',
      'Hjärtat slår oregelbundet på grund av störda elsignaler',
      'En infektion i hjärtmuskeln',
    ],
    answer: 0,
    explanation:
      'Vid hjärtsvikt är hjärtats pumpförmåga nedsatt. Vanliga symtom är andfåddhet, trötthet och vätskeansamling (t.ex. svullna ben).',
  },
  {
    id: 'm3-08',
    topic: 'internmedicin',
    difficulty: 'intermediar',
    q: 'Vilken är den vanligaste enskilda orsaken till KOL?',
    options: ['Tobaksrökning', 'Högt blodtryck', 'Övervikt', 'Brist på D-vitamin'],
    answer: 0,
    explanation:
      'Rökning är den helt dominerande orsaken till KOL. Även luftföroreningar och vissa yrkesexponeringar kan bidra.',
  },
  {
    id: 'm3-09',
    topic: 'internmedicin',
    difficulty: 'intermediar',
    q: 'Vad är reumatoid artrit (RA)?',
    options: [
      'En autoimmun sjukdom som ger inflammation i lederna',
      'En infektion i ett enstaka ben',
      'Slitage i lederna på grund av ålder',
      'En form av benskörhet',
    ],
    answer: 0,
    explanation:
      'RA är en autoimmun sjukdom där immunförsvaret angriper kroppens egna leder, vilket ger inflammation, smärta och med tiden ledskador.',
  },
  {
    id: 'm3-10',
    topic: 'internmedicin',
    difficulty: 'intermediar',
    q: 'Vilket av följande är en typisk akut komplikation vid mycket högt blodsocker?',
    options: [
      'Uttorkning och illamående',
      'Förbättrad syn',
      'Sänkt kroppstemperatur som enda symtom',
      'Plötslig viktuppgång',
    ],
    answer: 0,
    explanation:
      'Kraftigt förhöjt blodsocker ger ökad urinmängd, törst och uttorkning. Vid typ 1 kan det leda till ketoacidos, ett allvarligt akut tillstånd.',
  },
  {
    id: 'm3-11',
    topic: 'internmedicin',
    difficulty: 'avancerad',
    q: 'Varför sägs reumatoid artrit ofta drabba lederna "symmetriskt"?',
    options: [
      'Den tenderar att engagera samma leder på båda kroppshalvorna',
      'Den drabbar bara höger sida av kroppen',
      'Den sprider sig jämnt uppifrån och ned i kroppen',
      'Den ger lika ont oavsett vilken led det gäller',
    ],
    answer: 0,
    explanation:
      'Ett typiskt drag vid RA är att exempelvis båda händernas småleder engageras samtidigt, alltså ett symmetriskt mönster.',
  },
  {
    id: 'm3-12',
    topic: 'internmedicin',
    difficulty: 'grund',
    q: 'Vilket organ producerar insulin?',
    options: ['Levern', 'Mjälten', 'Bukspottkörteln (pankreas)', 'Sköldkörteln'],
    answer: 2,
    explanation:
      'Insulin bildas i de så kallade betacellerna i bukspottkörtelns langerhanska öar.',
  },
  {
    id: 'm3-13',
    topic: 'internmedicin',
    difficulty: 'avancerad',
    q: 'Varför är obehandlad hypertoni farlig på lång sikt?',
    options: [
      'Det ökar risken för stroke, hjärtinfarkt och njurskada',
      'Det leder framför allt till för lågt blodsocker',
      'Det orsakar i första hand hudutslag',
      'Det påverkar bara synen och inget annat',
    ],
    answer: 0,
    explanation:
      'Långvarigt högt blodtryck sliter på kärl och organ och är en av de viktigaste riskfaktorerna för hjärt-kärlsjukdom och njursvikt.',
  },

  // ---------------- ONKOLOGI ----------------
  {
    id: 'm3-14',
    topic: 'onkologi',
    difficulty: 'grund',
    q: 'Vad är cancer i grunden?',
    options: [
      'Okontrollerad celltillväxt där celler delar sig utan styrning',
      'En infektion orsakad av bakterier',
      'En brist på vitaminer',
      'En kronisk inflammation som gradvis bryter ner vävnad',
    ],
    answer: 0,
    explanation:
      'Cancer uppstår när celler börjar dela sig okontrollerat och undgår kroppens normala kontroll av celldelning och celldöd.',
  },
  {
    id: 'm3-15',
    topic: 'onkologi',
    difficulty: 'grund',
    q: 'Vad är skillnaden mellan en benign och en malign tumör?',
    options: [
      'En benign tumör sprider sig långsammare i kroppen',
      'En benign tumör är godartad, en malign är elakartad (cancer)',
      'En malign tumör är ofarlig',
      'Det finns ingen skillnad, orden betyder samma sak',
    ],
    answer: 1,
    explanation:
      'Benign = godartad och växer oftast lokalt utan att sprida sig. Malign = elakartad, kan växa in i omgivande vävnad och sprida sig (cancer).',
  },
  {
    id: 'm3-16',
    topic: 'onkologi',
    difficulty: 'grund',
    q: 'Vad menas med en metastas?',
    options: [
      'En dottertumör som bildats när cancerceller spridit sig till en annan plats',
      'En godartad knöl i huden',
      'Ett ärr efter en operation',
      'En tillfällig svullnad efter en infektion',
    ],
    answer: 0,
    explanation:
      'Metastaser är dottertumörer som uppstår när cancerceller sprider sig via blod eller lymfa till andra delar av kroppen.',
  },
  {
    id: 'm3-17',
    topic: 'onkologi',
    difficulty: 'grund',
    q: 'Vilken av följande är en vanlig behandlingsform vid cancer?',
    options: ['Antibiotika', 'Cytostatika (cellgifter)', 'Insulin', 'Blodtryckssänkare'],
    answer: 1,
    explanation:
      'Cytostatika är läkemedel som hämmar celldelning och används ofta mot cancer. Kirurgi och strålning är andra grundpelare.',
  },
  {
    id: 'm3-18',
    topic: 'onkologi',
    difficulty: 'intermediar',
    q: 'Vad är huvudsyftet med stadieindelning av cancer?',
    options: [
      'Att beskriva hur stor tumören är och hur mycket den spridit sig',
      'Att avgöra patientens ålder',
      'Att mäta blodtrycket',
      'Att bestämma vilken färg tumören har',
    ],
    answer: 0,
    explanation:
      'Stadieindelning beskriver tumörens storlek och utbredning samt eventuell spridning. Det styr val av behandling och säger något om prognosen.',
  },
  {
    id: 'm3-19',
    topic: 'onkologi',
    difficulty: 'intermediar',
    q: 'Hur fungerar strålbehandling mot cancer i princip?',
    options: [
      'Den värmer upp hela kroppen för att döda bakterier',
      'Den tillför extra syre till tumören',
      'Joniserande strålning skadar cancercellernas DNA så att de inte kan dela sig',
      'Den ersätter sjuka celler med friska donatorceller',
    ],
    answer: 2,
    explanation:
      'Strålbehandling använder joniserande strålning som skadar cellernas arvsmassa. Cancerceller är ofta känsligare än frisk vävnad.',
  },
  {
    id: 'm3-20',
    topic: 'onkologi',
    difficulty: 'intermediar',
    q: 'Vad innebär målriktad terapi (targeted therapy) vid cancer?',
    options: [
      'Läkemedel som riktar sig mot specifika molekyler eller mekanismer i cancercellerna',
      'Strålning mot hela kroppen',
      'Behandling med vanliga smärtstillande tabletter',
      'En operation där tumören avlägsnas med god marginal',
    ],
    answer: 0,
    explanation:
      'Målriktad terapi angriper specifika egenskaper hos cancercellerna, vilket kan ge effekt med mindre påverkan på friska celler än traditionell cytostatika.',
  },
  {
    id: 'm3-21',
    topic: 'onkologi',
    difficulty: 'avancerad',
    q: 'Varför kan kirurgi ensamt ibland vara otillräckligt vid malign cancer?',
    options: [
      'Enstaka cancerceller kan redan ha spridit sig utanför det område som opereras bort',
      'Tumören sprider sig när den kommer i kontakt med luft',
      'Ärrvävnaden efter ingreppet utvecklas ofta till ny cancer',
      'Maligna tumörer kan inte avlägsnas kirurgiskt',
    ],
    answer: 0,
    explanation:
      'Vid maligna tumörer kan mikroskopisk spridning redan ha skett. Därför kombineras kirurgi ofta med strålning eller läkemedelsbehandling.',
  },
  {
    id: 'm3-22',
    topic: 'onkologi',
    difficulty: 'avancerad',
    q: 'Vad är en typisk egenskap hos tumörceller jämfört med normala celler?',
    options: [
      'De fortsätter dela sig trots signaler som normalt skulle stoppa celldelning',
      'De delar sig långsammare än kroppens friska celler',
      'De saknar helt arvsmassa',
      'De kan inte ta upp näring',
    ],
    answer: 0,
    explanation:
      'Tumörceller kringgår de normala kontrollsystemen för celldelning och celldöd, vilket gör att de kan föröka sig okontrollerat.',
  },
  {
    id: 'm3-23',
    topic: 'onkologi',
    difficulty: 'avancerad',
    q: 'Vad är immunterapi vid cancer ett exempel på?',
    options: [
      'Behandling som hjälper kroppens eget immunförsvar att angripa cancercellerna',
      'En typ av strålbehandling',
      'Ett antibiotikum mot tumörbakterier',
      'En metod för att mäta tumörens storlek',
    ],
    answer: 0,
    explanation:
      'Immunterapi syftar till att aktivera eller förstärka immunförsvaret så att det känner igen och bekämpar cancercellerna.',
  },

  // ---------------- NEUROLOGI ----------------
  {
    id: 'm3-24',
    topic: 'neurologi',
    difficulty: 'grund',
    q: 'Vad är en stroke?',
    options: [
      'En akut störning av blodflödet till en del av hjärnan',
      'En infektion i ryggmärgen',
      'En tillfällig huvudvärk utan följder',
      'En sjukdom i ögats näthinna',
    ],
    answer: 0,
    explanation:
      'Vid stroke störs blodflödet i hjärnan, antingen av en blodpropp eller en blödning, vilket gör att hjärnceller skadas.',
  },
  {
    id: 'm3-25',
    topic: 'neurologi',
    difficulty: 'grund',
    q: 'Vilka är de två huvudtyperna av stroke?',
    options: [
      'Infektion och inflammation',
      'Migrän och epilepsi',
      'Tumör och cysta',
      'Propp (blodpropp) och blödning',
    ],
    answer: 3,
    explanation:
      'De flesta stroke orsakas av en blodpropp som täpper till ett kärl (ischemisk stroke). En mindre andel beror på en hjärnblödning.',
  },
  {
    id: 'm3-26',
    topic: 'neurologi',
    difficulty: 'grund',
    q: 'Vad är typiskt för migrän?',
    options: [
      'Återkommande anfall av ofta ensidig, pulserande huvudvärk',
      'Ständig feber',
      'Molande huvudvärk som pågår dygnet runt',
      'Hudutslag över hela kroppen',
    ],
    answer: 0,
    explanation:
      'Migrän ger anfall av kraftig, ofta ensidig och pulserande huvudvärk, ibland med illamående och känslighet för ljus och ljud.',
  },
  {
    id: 'm3-27',
    topic: 'neurologi',
    difficulty: 'intermediar',
    q: 'Vad är en TIA?',
    options: [
      'En kronisk hjärnblödning',
      'En övergående störning av blodflödet i hjärnan där symtomen går över helt',
      'En typ av epileptiskt anfall',
      'En permanent förlamning efter stroke',
    ],
    answer: 1,
    explanation:
      'TIA (transitorisk ischemisk attack) ger strokeliknande symtom som går över inom kort tid. Den är en viktig varningssignal för framtida stroke.',
  },
  {
    id: 'm3-28',
    topic: 'neurologi',
    difficulty: 'intermediar',
    q: 'Vilken signalsubstans har det blivit brist på vid Parkinsons sjukdom?',
    options: ['Insulin', 'Adrenalin', 'Dopamin', 'Histamin'],
    answer: 2,
    explanation:
      'Vid Parkinson dör nervceller som bildar dopamin i ett område i hjärnan, vilket ger skakningar, stelhet och långsamma rörelser.',
  },
  {
    id: 'm3-29',
    topic: 'neurologi',
    difficulty: 'intermediar',
    q: 'Vad kännetecknar epilepsi?',
    options: [
      'Återkommande anfall orsakade av onormal elektrisk aktivitet i hjärnan',
      'Brist på röda blodkroppar',
      'Kronisk inflammation i lederna',
      'En sjukdom som bara ger huvudvärk',
    ],
    answer: 0,
    explanation:
      'Epilepsi innebär en benägenhet för upprepade anfall som beror på plötsliga, onormala elektriska urladdningar i hjärnan.',
  },
  {
    id: 'm3-30',
    topic: 'neurologi',
    difficulty: 'intermediar',
    q: 'Vad drabbas i första hand vid multipel skleros (MS)?',
    options: [
      'Det isolerande myelinhöljet runt nervtrådar i centrala nervsystemet',
      'Hjärtmuskeln',
      'Lederna i händerna',
      'Magsäckens slemhinna',
    ],
    answer: 0,
    explanation:
      'Vid MS angriper immunförsvaret myelinet, det isolerande höljet runt nervtrådarna, vilket stör nervsignalerna i hjärna och ryggmärg.',
  },
  {
    id: 'm3-31',
    topic: 'neurologi',
    difficulty: 'avancerad',
    q: 'Varför är det viktigt att snabbt skilja propp från blödning vid stroke?',
    options: [
      'Behandlingen skiljer sig helt åt, och proppupplösande läkemedel kan vara skadligt vid en blödning',
      'Det spelar ingen roll, behandlingen är densamma',
      'Blödning måste opereras akut, medan propp kan vänta',
      'Skillnaden påverkar bara prognosen, inte behandlingen',
    ],
    answer: 0,
    explanation:
      'Proppupplösande behandling kan rädda hjärnvävnad vid en propp, men förvärrar en blödning. Därför görs ofta en bilddiagnostik (DT) först.',
  },
  {
    id: 'm3-32',
    topic: 'neurologi',
    difficulty: 'avancerad',
    q: 'Varför kallas MS ibland en sjukdom med "skov"?',
    options: [
      'Symtomen kommer ofta i perioder med försämring som följs av hela eller delvisa förbättringar',
      'Den ger en jämn, långsam försämring utan variation',
      'Skov syftar på att symtomen vandrar mellan olika kroppsdelar',
      'Skov betyder att sjukdomen smittar mellan personer',
    ],
    answer: 0,
    explanation:
      'Den vanligaste formen av MS är skovvis, där episoder med nya eller förvärrade symtom växlar med perioder av förbättring.',
  },
  {
    id: 'm3-33',
    topic: 'neurologi',
    difficulty: 'avancerad',
    q: 'Vilket av följande är ett typiskt motoriskt symtom vid Parkinsons sjukdom?',
    options: [
      'Skakningar (tremor) i vila',
      'Plötslig feber',
      'Förlust av hörsel',
      'Hudrodnad i ansiktet',
    ],
    answer: 0,
    explanation:
      'Vilotremor, muskelstelhet och långsamma rörelser (bradykinesi) hör till de klassiska motoriska symtomen vid Parkinson.',
  },

  // ---------------- PSYKIATRI ----------------
  {
    id: 'm3-34',
    topic: 'psykiatri',
    difficulty: 'grund',
    q: 'Vad kännetecknar en depression?',
    options: [
      'Nedstämdhet och minskad lust eller intresse under en längre period',
      'Tillfällig glädje efter en god nyhet',
      'En kortvarig huvudvärk',
      'Hög feber och frossa',
    ],
    answer: 0,
    explanation:
      'Depression innebär nedstämdhet och/eller förlorat intresse och glädje under minst två veckor, ofta med trötthet, sömn- och aptitförändringar.',
  },
  {
    id: 'm3-35',
    topic: 'psykiatri',
    difficulty: 'grund',
    q: 'Vad är ett ångestsyndrom?',
    options: [
      'En infektion i nervsystemet',
      'En form av diabetes',
      'Ett tillstånd med överdriven eller långvarig oro och ångest som påverkar vardagen',
      'En tillfällig nervositet inför en tentamen',
    ],
    answer: 2,
    explanation:
      'Vid ångestsyndrom är oron och ångesten så uttalad eller långvarig att den påverkar vardagsfunktion och livskvalitet.',
  },
  {
    id: 'm3-36',
    topic: 'psykiatri',
    difficulty: 'grund',
    q: 'Vad kännetecknar bipolär sjukdom?',
    options: [
      'Perioder av förhöjt stämningsläge (mani/hypomani) som växlar med nedstämdhet',
      'Ständigt oförändrat humör',
      'Endast återkommande feberperioder',
      'En sjukdom som bara ger fysisk smärta',
    ],
    answer: 0,
    explanation:
      'Bipolär sjukdom innebär växlingar mellan perioder av förhöjt stämningsläge (mani eller hypomani) och perioder av depression.',
  },
  {
    id: 'm3-37',
    topic: 'psykiatri',
    difficulty: 'intermediar',
    q: 'Vad menas med en psykos?',
    options: [
      'Ett tillstånd där verklighetsuppfattningen är förändrad, t.ex. med vanföreställningar eller hallucinationer',
      'En tillfällig nedstämdhet',
      'En form av huvudvärk',
      'En lindrig oro inför sociala situationer',
    ],
    answer: 0,
    explanation:
      'Psykos innebär en förändrad verklighetsuppfattning som kan omfatta hallucinationer (t.ex. att höra röster) och vanföreställningar.',
  },
  {
    id: 'm3-38',
    topic: 'psykiatri',
    difficulty: 'intermediar',
    q: 'Vilken läkemedelsgrupp används ofta vid behandling av depression?',
    options: ['Antidepressiva läkemedel', 'Antibiotika', 'Antihistaminer', 'Blodförtunnande läkemedel'],
    answer: 0,
    explanation:
      'Antidepressiva läkemedel, t.ex. SSRI, påverkar signalsubstanser i hjärnan och används tillsammans med t.ex. psykoterapi vid depression.',
  },
  {
    id: 'm3-39',
    topic: 'psykiatri',
    difficulty: 'intermediar',
    q: 'Schizofreni räknas till vilken grupp av psykiska sjukdomar?',
    options: ['Ångestsyndrom', 'Ätstörningar', 'Psykossjukdomar', 'Sömnsjukdomar'],
    answer: 2,
    explanation:
      'Schizofreni är en psykossjukdom som kan ge bland annat hallucinationer, vanföreställningar och tankestörningar under längre tid.',
  },
  {
    id: 'm3-40',
    topic: 'psykiatri',
    difficulty: 'avancerad',
    q: 'Vad är ett rimligt sätt att beskriva orsaken till många psykiatriska tillstånd?',
    options: [
      'De uppstår oftast genom ett samspel mellan biologiska, psykologiska och sociala faktorer',
      'De beror på en enskild kemisk obalans i hjärnan',
      'De orsakas uteslutande av bristande viljestyrka',
      'De avgörs av ärftliga anlag mer än av livshändelser',
    ],
    answer: 0,
    explanation:
      'Psykiatriska tillstånd förklaras ofta utifrån en biopsykosocial modell, där arv, hjärnans funktion, livshändelser och omgivning samverkar.',
  },
  {
    id: 'm3-41',
    topic: 'psykiatri',
    difficulty: 'avancerad',
    q: 'Vilken typ av läkemedel används ofta för att stabilisera stämningsläget vid bipolär sjukdom?',
    options: ['Stämningsstabiliserande läkemedel', 'Antibiotika', 'Smärtstillande läkemedel', 'Slemlösande läkemedel'],
    answer: 0,
    explanation:
      'Vid bipolär sjukdom används stämningsstabiliserande läkemedel (t.ex. litium) för att jämna ut humörsvängningarna och förebygga nya episoder.',
  },

  // ---------------- INFEKTION ----------------
  {
    id: 'm3-42',
    topic: 'infektion',
    difficulty: 'grund',
    q: 'Vilken typ av läkemedel är verksamt mot bakterier?',
    options: ['Antivirala läkemedel', 'Antibiotika', 'Antihistaminer', 'Insulin'],
    answer: 1,
    explanation:
      'Antibiotika verkar mot bakterier. Mot virus behövs antivirala läkemedel, och antibiotika har ingen effekt mot virusinfektioner.',
  },
  {
    id: 'm3-43',
    topic: 'infektion',
    difficulty: 'grund',
    q: 'Hjälper antibiotika mot en vanlig virusinfektion som förkylning?',
    options: [
      'Nej, antibiotika har ingen effekt mot virus',
      'Ja, antibiotika botar alla infektioner',
      'Ja, men bara om man tar dubbel dos',
      'Ja, antibiotika är särskilt effektivt mot virus',
    ],
    answer: 0,
    explanation:
      'Förkylning orsakas av virus, och antibiotika verkar bara mot bakterier. Onödig antibiotikaanvändning bidrar dessutom till resistens.',
  },
  {
    id: 'm3-44',
    topic: 'infektion',
    difficulty: 'grund',
    q: 'Vilken av följande orsakas av ett virus?',
    options: ['Influensa', 'Urinvägsinfektion (oftast)', 'Fotsvamp', 'Malaria'],
    answer: 0,
    explanation:
      'Influensa orsakas av virus. Urinvägsinfektion orsakas oftast av bakterier, fotsvamp av svamp och malaria av en parasit.',
  },
  {
    id: 'm3-45',
    topic: 'infektion',
    difficulty: 'grund',
    q: 'Vad orsakar fotsvamp?',
    options: ['En bakterie', 'Ett virus', 'En svamp', 'En parasit'],
    answer: 2,
    explanation:
      'Fotsvamp är en svampinfektion i huden och behandlas med svampdödande (antimykotiska) läkemedel, inte antibiotika.',
  },
  {
    id: 'm3-46',
    topic: 'infektion',
    difficulty: 'intermediar',
    q: 'Vad menas med antibiotikaresistens?',
    options: [
      'Att bakterier blivit motståndskraftiga mot ett eller flera antibiotika',
      'Att en person blir allergisk mot antibiotika',
      'Att antibiotika slutat tillverkas',
      'Att kroppen vänjer sig vid att bli frisk snabbare',
    ],
    answer: 0,
    explanation:
      'Antibiotikaresistens innebär att bakterier överlever trots antibiotika. Det gör infektioner svårare att behandla och är ett växande hälsoproblem.',
  },
  {
    id: 'm3-47',
    topic: 'infektion',
    difficulty: 'intermediar',
    q: 'Vilken organismtyp orsakar malaria?',
    options: ['En bakterie', 'Ett virus', 'En svamp', 'En parasit'],
    answer: 3,
    explanation:
      'Malaria orsakas av en parasit (av släktet Plasmodium) som sprids via myggor. Den behandlas med särskilda malarialäkemedel.',
  },
  {
    id: 'm3-48',
    topic: 'infektion',
    difficulty: 'intermediar',
    q: 'Vilket är ett vanligt sätt på vilket smittsamma infektioner sprids?',
    options: [
      'Via droppar och kontakt, t.ex. genom host, nys och händer',
      'Enbart genom maten man äter',
      'Enbart genom ärftlighet från föräldrar',
      'Enbart via solljus',
    ],
    answer: 0,
    explanation:
      'Många luftvägsinfektioner sprids via droppar och kontaktsmitta. God handhygien är därför ett effektivt sätt att minska smittspridning.',
  },
  {
    id: 'm3-49',
    topic: 'infektion',
    difficulty: 'avancerad',
    q: 'Vad är rätt förhållningssätt till den ordinerade behandlingstiden med antibiotika?',
    options: [
      'Följ ordinationen och ändra inte behandlingstiden utan vårdens råd',
      'För att antibiotika smakar bättre i slutet av kuren',
      'För att läkemedlet annars blir giftigt',
      'Det spelar ingen roll hur länge man tar antibiotika',
    ],
    answer: 0,
    explanation:
      'Den kortaste effektiva behandlingstiden varierar mellan infektioner. För kort behandling kan vara otillräcklig, medan onödigt lång behandling kan ge biverkningar och öka resistenspressen. Ändra därför inte behandlingstiden utan råd från vården.',
  },
  {
    id: 'm3-50',
    topic: 'infektion',
    difficulty: 'avancerad',
    q: 'Varför är virusinfektioner generellt svårare att behandla med läkemedel än bakterieinfektioner?',
    options: [
      'Virus förökar sig inuti kroppens egna celler, vilket gör det svårt att angripa dem utan att skada cellerna',
      'Virus är mycket större än bakterier och därför svåråtkomliga',
      'Det finns inga läkemedel alls mot virus',
      'Virus omges av ett hölje som läkemedel inte tränger igenom',
    ],
    answer: 0,
    explanation:
      'Virus använder kroppens egna celler för att föröka sig. Det gör det svårare att slå mot viruset utan att samtidigt skada de friska cellerna.',
  },
]
