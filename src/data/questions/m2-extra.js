/**
 * Extra frågebank för Modul 2 – Farmakologi (fördjupning).
 *
 * 100 helt nya frågor som kompletterar m2.js utan att upprepa dess innehåll.
 * Fördelade på modulens fyra ämnesområden och tre svårighetsnivåer
 * (grund, intermediar, avancerad). Förbyggt innehåll – ingen API/kostnad.
 *
 * Fält per fråga:
 *   id          – stabil nyckel (m2b-001 ... m2b-100)
 *   topic       – 'farmakokinetik' | 'farmakodynamik' | 'lakemedelsgrupper' | 'sakerhet'
 *   difficulty  – 'grund' | 'intermediar' | 'avancerad'
 *   q           – frågetext
 *   options     – fyra svarsalternativ (blandas vid visning)
 *   answer      – index i options för rätt svar
 *   explanation – kort förklaring som visas efter svar
 *
 * Fördelning: farmakokinetik 25, farmakodynamik 25, lakemedelsgrupper 30, sakerhet 20.
 */

export const M2_QUESTIONS_EXTRA = [
  // ---------------- FARMAKOKINETIK ----------------
  {
    id: 'm2b-001',
    topic: 'farmakokinetik',
    difficulty: 'grund',
    q: 'Vad innebär det att ett läkemedel ges subkutant?',
    options: [
      'Det sprutas in i underhudsfettet',
      'Det sprutas direkt in i en ven',
      'Det sprutas in i en muskel',
      'Det stryks på huden som en kräm',
    ],
    answer: 0,
    explanation:
      'Subkutan injektion ges i fettvävnaden under huden, vilket ger ett relativt långsamt och jämnt upptag. Insulin ges ofta subkutant.',
  },
  {
    id: 'm2b-002',
    topic: 'farmakokinetik',
    difficulty: 'grund',
    q: 'Vad kännetecknar en transdermal beredning, till exempel ett plåster?',
    options: [
      'Läkemedlet sväljs och tas upp i tarmen',
      'Läkemedlet tas upp genom huden och ut i blodet',
      'Läkemedlet andas in i lungorna',
      'Läkemedlet injiceras i ryggmärgsvätskan',
    ],
    answer: 1,
    explanation:
      'Ett transdermalt plåster avger läkemedel som tas upp genom huden, vilket ger en jämn tillförsel över längre tid utan förstapassagemetabolism.',
  },
  {
    id: 'm2b-003',
    topic: 'farmakokinetik',
    difficulty: 'grund',
    q: 'Vilken administreringsväg används främst för läkemedel vid astma, som ska verka lokalt i luftvägarna?',
    options: [
      'Rektal tillförsel',
      'Intramuskulär injektion',
      'Inhalation',
      'Transdermalt plåster',
    ],
    answer: 2,
    explanation:
      'Inhalation gör att läkemedlet når luftvägarna direkt, vilket ger snabb lokal effekt och lägre risk för biverkningar i resten av kroppen.',
  },
  {
    id: 'm2b-004',
    topic: 'farmakokinetik',
    difficulty: 'grund',
    q: 'Vad betyder det att ett läkemedel ges rektalt?',
    options: [
      'Det sprutas in i en muskel i skinkan',
      'Det läggs under tungan',
      'Det dryps i ögat',
      'Det förs in i ändtarmen, till exempel som stolpiller',
    ],
    answer: 3,
    explanation:
      'Rektal tillförsel sker via ändtarmen, ofta som suppositorium. Det kan vara praktiskt vid illamående eller hos små barn som inte kan svälja tabletter.',
  },
  {
    id: 'm2b-005',
    topic: 'farmakokinetik',
    difficulty: 'grund',
    q: 'Vad menas med distribution inom farmakokinetiken?',
    options: [
      'Hur läkemedlet sprids från blodet ut till olika vävnader i kroppen',
      'Hur läkemedlet tillverkas och förpackas',
      'Hur läkemedlet bryts ner till inaktiva ämnen',
      'Hur läkemedlet säljs på apotek',
    ],
    answer: 0,
    explanation:
      'Distribution är hur läkemedlet fördelar sig från blodbanan ut till kroppens vävnader och organ efter att det absorberats.',
  },
  {
    id: 'm2b-006',
    topic: 'farmakokinetik',
    difficulty: 'grund',
    q: 'Vad innebär det att lägga en tablett under tungan (sublingualt)?',
    options: [
      'Läkemedlet sväljs och bryts ner i magsäcken',
      'Läkemedlet tas upp via slemhinnan i munnen och slipper passera levern först',
      'Läkemedlet sprutas in i tungan',
      'Läkemedlet andas in i lungorna',
    ],
    answer: 1,
    explanation:
      'Sublingual tillförsel innebär upptag via munslemhinnan rakt ut i blodet, vilket ger snabb effekt och undviker förstapassagemetabolismen i levern.',
  },
  {
    id: 'm2b-007',
    topic: 'farmakokinetik',
    difficulty: 'grund',
    q: 'Var sprutas ett läkemedel in vid en intramuskulär (im) injektion?',
    options: [
      'I en ven',
      'I underhudsfettet',
      'I en muskel',
      'I leden',
    ],
    answer: 2,
    explanation:
      'Intramuskulär injektion ges i en muskel, ofta i överarm eller skinka. Upptaget är vanligen snabbare än subkutant men långsammare än intravenöst.',
  },
  {
    id: 'm2b-008',
    topic: 'farmakokinetik',
    difficulty: 'grund',
    q: 'Vad är en prodrug?',
    options: [
      'Ett läkemedel som verkar utan att brytas ner',
      'Ett läkemedel som bara säljs på recept',
      'Ett läkemedel som tillverkas av växter',
      'Ett läkemedel som är inaktivt tills kroppen omvandlar det till sin aktiva form',
    ],
    answer: 3,
    explanation:
      'En prodrug ges i en inaktiv form och omvandlas i kroppen, ofta i levern, till den aktiva substansen som ger effekten.',
  },
  {
    id: 'm2b-009',
    topic: 'farmakokinetik',
    difficulty: 'grund',
    q: 'Vad menas med eliminationen av ett läkemedel?',
    options: [
      'Hur läkemedlet lämnar kroppen, främst via nedbrytning och utsöndring',
      'Hur läkemedlet binder till sin receptor',
      'Hur läkemedlet absorberas från tarmen',
      'Hur läkemedlet fördelas till hjärnan',
    ],
    answer: 0,
    explanation:
      'Elimination omfattar de processer som avlägsnar läkemedlet ur kroppen, framför allt metabolism i levern och utsöndring via njurarna.',
  },
  {
    id: 'm2b-010',
    topic: 'farmakokinetik',
    difficulty: 'intermediar',
    q: 'Varför har många läkemedel svårt att nå hjärnan?',
    options: [
      'Hjärnan saknar helt blodkärl',
      'Blod-hjärnbarriären begränsar vilka ämnen som kan passera in i hjärnvävnaden',
      'Hjärnan bryter ner alla läkemedel direkt',
      'Hjärnan har inga receptorer',
    ],
    answer: 1,
    explanation:
      'Blod-hjärnbarriären är ett selektivt skydd som hindrar många ämnen från att nå hjärnan. Främst små, fettlösliga molekyler passerar lätt.',
  },
  {
    id: 'm2b-011',
    topic: 'farmakokinetik',
    difficulty: 'intermediar',
    q: 'Vad menas med steady state (jämviktskoncentration) vid upprepad dosering?',
    options: [
      'Det ögonblick då den första dosen är helt absorberad',
      'Den högsta koncentration som någonsin kan uppnås',
      'Tillståndet då tillförd mängd läkemedel motsvarar den mängd som elimineras, så koncentrationen blir stabil',
      'Den punkt då läkemedlet slutar verka',
    ],
    answer: 2,
    explanation:
      'Vid steady state är tillförsel och elimination i balans, så plasmakoncentrationen pendlar kring en jämn nivå. Det nås vanligen efter 4–5 halveringstider.',
  },
  {
    id: 'm2b-012',
    topic: 'farmakokinetik',
    difficulty: 'intermediar',
    q: 'Varför har ett peroralt läkemedel ofta lägre biotillgänglighet än samma dos intravenöst?',
    options: [
      'Tabletter innehåller en svagare variant av substansen',
      'Magsäcken förstärker effekten',
      'Intravenösa läkemedel bryts ner snabbare',
      'Ofullständig absorption och förstapassagemetabolism minskar mängden som når blodet',
    ],
    answer: 3,
    explanation:
      'Vid peroralt intag kan en del av dosen inte absorberas och en del bryts ner i tarm och lever före cirkulationen, vilket sänker biotillgängligheten.',
  },
  {
    id: 'm2b-013',
    topic: 'farmakokinetik',
    difficulty: 'intermediar',
    q: 'Vad innebär det att ett läkemedel har hög fettlöslighet (lipofilt)?',
    options: [
      'Det passerar lätt cellmembran och kan lagras i fettvävnad',
      'Det utsöndras snabbt och oförändrat via njurarna',
      'Det stannar kvar i blodbanan och når därför inte hjärnan',
      'Det binder inte till några receptorer',
    ],
    answer: 0,
    explanation:
      'Fettlösliga läkemedel passerar lättare genom cellmembran och blod-hjärnbarriären, men kan också lagras i fettvävnad och få längre effekt.',
  },
  {
    id: 'm2b-014',
    topic: 'farmakokinetik',
    difficulty: 'intermediar',
    q: 'Hur påverkar hög grad av proteinbindning i plasma ett läkemedels effekt?',
    options: [
      'Proteinbundet läkemedel verkar starkare på receptorn',
      'Endast den fria delen är aktiv, så en kraftig proteinbindning innebär att en stor andel är tillfälligt inaktiv',
      'Proteinbindning påskyndar njurarnas filtration av läkemedlet',
      'Proteinbindning gör läkemedlet helt overksamt',
    ],
    answer: 1,
    explanation:
      'Det är den fria, obundna fraktionen som kan binda till receptorer och elimineras. Proteinbundet läkemedel fungerar som en tillfällig depå.',
  },
  {
    id: 'm2b-015',
    topic: 'farmakokinetik',
    difficulty: 'intermediar',
    q: 'Vad innebär en depotberedning (förlängd frisättning)?',
    options: [
      'Hela dosen frisätts omedelbart vid intag',
      'Läkemedlet måste ges intravenöst',
      'Läkemedlet frisätts långsamt över tid så att dosintervallet kan förlängas',
      'Läkemedlet förvaras i kylskåp',
    ],
    answer: 2,
    explanation:
      'En depotberedning frisätter den verksamma substansen gradvis, vilket ger jämnare koncentration och färre doseringstillfällen per dygn.',
  },
  {
    id: 'm2b-016',
    topic: 'farmakokinetik',
    difficulty: 'intermediar',
    q: 'Hur påverkas eliminationen av ett läkemedel som främst utsöndras via njurarna om njurfunktionen är nedsatt?',
    options: [
      'Eliminationen blir snabbare',
      'Läkemedlet slutar absorberas',
      'Halveringstiden blir kortare',
      'Eliminationen blir långsammare och läkemedlet kan ansamlas i kroppen',
    ],
    answer: 3,
    explanation:
      'Vid nedsatt njurfunktion utsöndras renalt eliminerade läkemedel långsammare, vilket kan ge ansamling och toxicitet om dosen inte justeras.',
  },
  {
    id: 'm2b-017',
    topic: 'farmakokinetik',
    difficulty: 'intermediar',
    q: 'Varför kan grapefruktjuice påverka vissa läkemedels koncentration i blodet?',
    options: [
      'Den hämmar enzymet CYP3A4 i tarmen så att mer läkemedel når blodet',
      'Den ökar njurarnas utsöndring',
      'Den binder läkemedlet i tarmen',
      'Den gör läkemedlet inaktivt',
    ],
    answer: 0,
    explanation:
      'Grapefruktjuice hämmar CYP3A4 i tarmväggen, vilket minskar nedbrytningen av vissa läkemedel och kan höja deras koncentration och biverkningsrisk.',
  },
  {
    id: 'm2b-018',
    topic: 'farmakokinetik',
    difficulty: 'avancerad',
    q: 'Vad innebär enzyminduktion i samband med CYP-enzymer?',
    options: [
      'Ett ämne blockerar enzymet helt',
      'Ett ämne ökar mängden eller aktiviteten av enzymet, vilket snabbar på nedbrytningen av andra läkemedel',
      'Ett ämne binder till receptorn istället för enzymet',
      'Ett ämne minskar njurarnas filtration',
    ],
    answer: 1,
    explanation:
      'Vid enzyminduktion ökar leverns nedbrytningskapacitet, så att substrat-läkemedel bryts ner snabbare och deras koncentration och effekt minskar.',
  },
  {
    id: 'm2b-019',
    topic: 'farmakokinetik',
    difficulty: 'avancerad',
    q: 'Vad beskriver distributionsvolymen (Vd) som farmakokinetiskt begrepp?',
    options: [
      'Den exakta mängd blod i kroppen',
      'Hur stor tablett man behöver',
      'Ett teoretiskt mått på hur väl ett läkemedel fördelar sig ut i vävnaderna i förhållande till blodet',
      'Den tid det tar att absorbera dosen',
    ],
    answer: 2,
    explanation:
      'Distributionsvolymen är ett beräknat mått: ett högt värde tyder på att läkemedlet i hög grad lämnat blodet och fördelats ut i vävnaderna.',
  },
  {
    id: 'm2b-020',
    topic: 'farmakokinetik',
    difficulty: 'avancerad',
    q: 'Vad är skillnaden mellan första ordningens och nollte ordningens elimination?',
    options: [
      'Första ordningen sker bara i njurarna och nollte ordningen bara i levern',
      'Nollte ordningen gäller endast intravenösa läkemedel',
      'Det finns ingen skillnad, begreppen är synonyma',
      'Vid första ordningen elimineras en konstant andel per tidsenhet, vid nollte ordningen en konstant mängd',
    ],
    answer: 3,
    explanation:
      'Vid första ordningens kinetik elimineras en fast procentandel per tidsenhet. Vid nollte ordningen (mättad metabolism) elimineras en fast mängd, t.ex. alkohol.',
  },
  {
    id: 'm2b-021',
    topic: 'farmakokinetik',
    difficulty: 'avancerad',
    q: 'Hur kan kraftigt nedsatt leverfunktion påverka ett läkemedel med hög förstapassagemetabolism?',
    options: [
      'Biotillgängligheten kan öka kraftigt eftersom mindre bryts ner vid passagen',
      'Läkemedlet absorberas inte alls',
      'Halveringstiden förkortas och effekten avtar snabbare',
      'Läkemedlet utsöndras helt via lungorna istället',
    ],
    answer: 0,
    explanation:
      'Vid nedsatt leverfunktion minskar förstapassagemetabolismen, så att en större andel av ett peroralt läkemedel når cirkulationen – risk för överdosering.',
  },
  {
    id: 'm2b-022',
    topic: 'farmakokinetik',
    difficulty: 'avancerad',
    q: 'Varför ger man ibland en högre laddningsdos i början av en behandling?',
    options: [
      'För att läkemedlet ska smaka bättre',
      'För att snabbare nå terapeutisk koncentration utan att vänta på att steady state byggs upp',
      'För att minska den totala kostnaden',
      'För att förlänga halveringstiden',
    ],
    answer: 1,
    explanation:
      'En laddningsdos fyller snabbt distributionsvolymen så att effektiv koncentration nås tidigt; därefter ges lägre underhållsdoser.',
  },
  {
    id: 'm2b-023',
    topic: 'farmakokinetik',
    difficulty: 'avancerad',
    q: 'Vad innebär enterohepatisk cirkulation?',
    options: [
      'Läkemedel cirkulerar enbart i hjärtat',
      'Läkemedel filtreras flera gånger i njurarna',
      'Läkemedel utsöndras via gallan till tarmen, återupptas och förlänger därmed sin närvaro i kroppen',
      'Läkemedel andas ut och in på nytt',
    ],
    answer: 2,
    explanation:
      'Vid enterohepatisk cirkulation utsöndras läkemedlet med gallan, återabsorberas i tarmen och förs tillbaka till levern, vilket kan förlänga effekten.',
  },
  {
    id: 'm2b-024',
    topic: 'farmakokinetik',
    difficulty: 'intermediar',
    q: 'Vad är fördelen med intravenös infusion jämfört med en intravenös bolusdos?',
    options: [
      'Infusion ger snabbare maxeffekt än en bolusdos',
      'Infusion kräver ingen venkateter',
      'Infusion gör läkemedlet fettlösligt',
      'Infusion ger en jämnare och mer kontrollerad koncentration över tid',
    ],
    answer: 3,
    explanation:
      'En kontinuerlig infusion håller koncentrationen jämn, medan en bolusdos ger en snabb topp. Infusion är att föredra när man vill undvika kraftiga koncentrationstoppar.',
  },
  {
    id: 'm2b-025',
    topic: 'farmakokinetik',
    difficulty: 'grund',
    q: 'Vad innebär det att ett läkemedel utsöndras i oförändrad form?',
    options: [
      'Det lämnar kroppen utan att först ha brutits ner i levern',
      'Det binds permanent till en receptor',
      'Det omvandlas till en aktiv metabolit i levern',
      'Det lagras i fettvävnaden i stället för att utsöndras',
    ],
    answer: 0,
    explanation:
      'Vissa läkemedel metaboliseras inte utan utsöndras oförändrade, ofta via njurarna. Då är njurfunktionen särskilt viktig för eliminationen.',
  },
  // ---------------- FARMAKODYNAMIK ----------------
  {
    id: 'm2b-026',
    topic: 'farmakodynamik',
    difficulty: 'grund',
    q: 'Vad menas med ett läkemedels verkningsmekanism?',
    options: [
      'Hur dyrt läkemedlet är att tillverka',
      'Hur läkemedlet på molekylär nivå åstadkommer sin effekt i kroppen',
      'Hur tabletten är formad',
      'Hur länge läkemedlet är hållbart',
    ],
    answer: 1,
    explanation:
      'Verkningsmekanismen beskriver hur läkemedlet ger sin effekt, t.ex. genom att binda till en receptor, hämma ett enzym eller blockera en jonkanal.',
  },
  {
    id: 'm2b-027',
    topic: 'farmakodynamik',
    difficulty: 'grund',
    q: 'Förutom receptorer – vilken annan vanlig måltyp kan läkemedel påverka?',
    options: [
      'Hårsäckar',
      'Skelettben',
      'Enzymer',
      'Tandemalj',
    ],
    answer: 2,
    explanation:
      'Många läkemedel verkar genom att hämma eller aktivera enzymer. Andra angreppspunkter är jonkanaler och transportproteiner.',
  },
  {
    id: 'm2b-028',
    topic: 'farmakodynamik',
    difficulty: 'grund',
    q: 'Vad menas med ett läkemedels effekt (efficacy) i farmakodynamisk mening?',
    options: [
      'Hur snabbt läkemedlet absorberas',
      'Hur länge läkemedlet finns kvar i blodet',
      'Priset per tablett',
      'Den maximala effekt läkemedlet kan ge när det binder till receptorn',
    ],
    answer: 3,
    explanation:
      'Effekt (efficacy) anger hur stor maximal respons ett läkemedel kan framkalla. En full agonist har hög efficacy, en antagonist saknar egen efficacy.',
  },
  {
    id: 'm2b-029',
    topic: 'farmakodynamik',
    difficulty: 'grund',
    q: 'Vad betyder det att ett läkemedel har hög potens?',
    options: [
      'Det krävs en låg dos för att uppnå en given effekt',
      'Det ger en starkare maxeffekt än andra läkemedel',
      'Det har inga biverkningar',
      'Det verkar mycket snabbt',
    ],
    answer: 0,
    explanation:
      'Potens handlar om vilken dos som behövs för en viss effekt. Ett högpotent läkemedel verkar vid låga doser, men säger inget om maximal effektstorlek.',
  },
  {
    id: 'm2b-030',
    topic: 'farmakodynamik',
    difficulty: 'grund',
    q: 'Vad är en placeboeffekt?',
    options: [
      'En allvarlig allergisk reaktion',
      'En förbättring som beror på förväntan om behandling snarare än en farmakologisk verkan',
      'En interaktion mellan två läkemedel',
      'En effekt som bara uppstår vid överdos',
    ],
    answer: 1,
    explanation:
      'Placeboeffekten är en mätbar förbättring som uppstår på grund av patientens förväntningar, även utan aktiv substans. Den är viktig att ta hänsyn till i kliniska studier.',
  },
  {
    id: 'm2b-031',
    topic: 'farmakodynamik',
    difficulty: 'grund',
    q: 'Vad gör ett läkemedel som hämmar ett enzym?',
    options: [
      'Det ökar enzymets aktivitet så att reaktionen går snabbare',
      'Det förvandlar enzymet till en receptor',
      'Det minskar eller stoppar enzymets förmåga att utföra sin reaktion',
      'Det bygger upp nya enzymer',
    ],
    answer: 2,
    explanation:
      'En enzymhämmare binder till enzymet och minskar dess aktivitet. Många vanliga läkemedel, som ACE-hämmare och statiner, verkar på detta sätt.',
  },
  {
    id: 'm2b-032',
    topic: 'farmakodynamik',
    difficulty: 'intermediar',
    q: 'Vad menas med takyfylaxi?',
    options: [
      'En allergisk reaktion som kommer långsamt',
      'Att läkemedlet absorberas extra snabbt',
      'Att effekten ökar för varje dos',
      'Snabbt avtagande effekt efter upprepade doser under kort tid',
    ],
    answer: 3,
    explanation:
      'Takyfylaxi är en snabbt insättande tolerans där effekten minskar redan efter några doser, ofta på grund av att kroppens lager av signalämnen töms.',
  },
  {
    id: 'm2b-033',
    topic: 'farmakodynamik',
    difficulty: 'intermediar',
    q: 'Vad är en invers agonist?',
    options: [
      'Ett läkemedel som ger motsatt effekt mot en agonist genom att minska receptorns grundaktivitet',
      'En agonist som verkar baklänges i tarmen',
      'En antagonist som saknar effekt',
      'En agonist som bara verkar på natten',
    ],
    answer: 0,
    explanation:
      'En invers agonist binder till en receptor med viss grundaktivitet och sänker den under basnivån, till skillnad från en neutral antagonist som bara blockerar.',
  },
  {
    id: 'm2b-034',
    topic: 'farmakodynamik',
    difficulty: 'intermediar',
    q: 'Vad menas med en selektiv receptoragonist?',
    options: [
      'Ett läkemedel som påverkar alla receptorer lika',
      'Ett läkemedel som främst påverkar en viss receptortyp och därmed ger färre oönskade effekter',
      'Ett läkemedel som bara verkar i levern',
      'Ett läkemedel utan effekt',
    ],
    answer: 1,
    explanation:
      'Selektivitet innebär att läkemedlet huvudsakligen verkar på en viss receptortyp. Hög selektivitet kan ge en mer riktad effekt och färre biverkningar.',
  },
  {
    id: 'm2b-035',
    topic: 'farmakodynamik',
    difficulty: 'intermediar',
    q: 'Vad innebär uppreglering (upregulation) av receptorer?',
    options: [
      'Cellen tar bort alla sina receptorer',
      'Receptorerna binder läkemedlet svagare',
      'Cellen ökar antalet receptorer, t.ex. vid långvarig blockad eller låg stimulering',
      'Läkemedlet utsöndras snabbare',
    ],
    answer: 2,
    explanation:
      'Vid ihållande låg stimulering eller blockad kan cellen bilda fler receptorer (uppreglering). Detta kan bidra till abstinens om en blockerare sätts ut för snabbt.',
  },
  {
    id: 'm2b-036',
    topic: 'farmakodynamik',
    difficulty: 'intermediar',
    q: 'Hur skiljer sig effekten av en agonist från kroppens egna signalämnen (transmittorer)?',
    options: [
      'En agonist bryter ner transmittorn',
      'En agonist hindrar transmittorn från att bildas',
      'En agonist har inget med transmittorer att göra',
      'En agonist efterliknar transmittorns effekt genom att binda till och aktivera samma receptor',
    ],
    answer: 3,
    explanation:
      'En agonist binder till receptorn och utlöser samma typ av svar som kroppens egna signalämnen, och kan därmed förstärka eller efterlikna en naturlig effekt.',
  },
  {
    id: 'm2b-037',
    topic: 'farmakodynamik',
    difficulty: 'intermediar',
    q: 'Vad innebär en additiv effekt när två läkemedel kombineras?',
    options: [
      'Den sammanlagda effekten motsvarar ungefär summan av de enskilda effekterna',
      'Effekten blir mångdubbelt större än summan',
      'Det ena läkemedlet upphäver det andra',
      'Effekten motsvarar det starkaste läkemedlets effekt ensamt',
    ],
    answer: 0,
    explanation:
      'Vid additiv effekt motsvarar resultatet summan av läkemedlens enskilda effekter. Vid synergi blir effekten större än summan.',
  },
  {
    id: 'm2b-038',
    topic: 'farmakodynamik',
    difficulty: 'intermediar',
    q: 'Vad kännetecknar en jonkanal som angreppspunkt för läkemedel?',
    options: [
      'Det är ett enzym i levern',
      'Det är en por i cellmembranet som släpper igenom joner och kan öppnas eller blockeras',
      'Det är ett transportprotein i blodet',
      'Det är en typ av antikropp',
    ],
    answer: 1,
    explanation:
      'Jonkanaler reglerar jonflödet över cellmembranet. Läkemedel som påverkar dem kan t.ex. dämpa nervaktivitet eller styra hjärtats rytm.',
  },
  {
    id: 'm2b-039',
    topic: 'farmakodynamik',
    difficulty: 'avancerad',
    q: 'Hur skiljer sig en icke-kompetitiv (irreversibel) antagonist från en kompetitiv antagonist?',
    options: [
      'En icke-kompetitiv antagonist binder lösare till receptorn',
      'En icke-kompetitiv antagonist aktiverar receptorn',
      'En icke-kompetitiv antagonist kan inte trängas undan genom att öka agonistdosen',
      'Det finns ingen praktisk skillnad mellan dem',
    ],
    answer: 2,
    explanation:
      'En icke-kompetitiv (ofta irreversibel) antagonist binder så hårt eller på annat ställe att effekten inte kan övervinnas genom att höja agonistkoncentrationen.',
  },
  {
    id: 'm2b-040',
    topic: 'farmakodynamik',
    difficulty: 'avancerad',
    q: 'Vad menas med EC50 på en dos-responskurva?',
    options: [
      'Den dos som är dödlig för 50 % av populationen',
      'Den tid det tar att eliminera halva dosen',
      'Den andel som binder till plasmaproteiner',
      'Den koncentration som ger 50 % av läkemedlets maximala effekt',
    ],
    answer: 3,
    explanation:
      'EC50 är koncentrationen vid vilken halva den maximala effekten uppnås och används som ett mått på potens – lägre EC50 betyder högre potens.',
  },
  {
    id: 'm2b-041',
    topic: 'farmakodynamik',
    difficulty: 'avancerad',
    q: 'Vad innebär begreppet reservreceptorer (spare receptors)?',
    options: [
      'Maximal effekt kan nås utan att alla receptorer är ockuperade av agonisten',
      'Receptorer som bara finns hos äldre',
      'Receptorer som bara aktiveras vid överdosering',
      'Extra receptorer som kroppen kasserar',
    ],
    answer: 0,
    explanation:
      'Förekomsten av reservreceptorer innebär att en submaximal receptorbindning kan ge maximal respons, vilket ökar känsligheten för agonisten.',
  },
  {
    id: 'm2b-042',
    topic: 'farmakodynamik',
    difficulty: 'avancerad',
    q: 'Vad är en allosterisk modulator?',
    options: [
      'Ett ämne som binder till exakt samma plats som agonisten',
      'Ett ämne som binder till en annan plats än det aktiva stället och ändrar receptorns svar på agonisten',
      'Ett ämne som bryter ner receptorn',
      'Ett ämne som bara verkar på enzymer',
    ],
    answer: 1,
    explanation:
      'En allosterisk modulator binder vid sidan av det aktiva sätet och kan förstärka eller försvaga receptorns respons på den kroppsegna eller tillförda agonisten.',
  },
  {
    id: 'm2b-043',
    topic: 'farmakodynamik',
    difficulty: 'avancerad',
    q: 'Varför kan korstolerans uppstå mellan besläktade läkemedel?',
    options: [
      'De har exakt samma kemiska namn',
      'De tillverkas i samma fabrik',
      'De verkar på samma receptorsystem, så tolerans mot ett ger minskad effekt även av det andra',
      'De innehåller samma verksamma substans i olika styrka',
    ],
    answer: 2,
    explanation:
      'Korstolerans uppstår när läkemedel delar verkningsmekanism eller receptorsystem; toleransen mot det ena medför då minskad känslighet även för det andra.',
  },
  {
    id: 'm2b-044',
    topic: 'farmakodynamik',
    difficulty: 'grund',
    q: 'Vad menas med ett läkemedels önskade huvudeffekt?',
    options: [
      'Den oönskade biverkan',
      'Hur tabletten smakar',
      'Den tid det tar att absorberas',
      'Den terapeutiska effekt man eftersträvar med behandlingen',
    ],
    answer: 3,
    explanation:
      'Huvudeffekten är den avsedda, terapeutiska effekten, t.ex. smärtlindring eller blodtryckssänkning, medan biverkningar är oönskade tilläggseffekter.',
  },
  {
    id: 'm2b-045',
    topic: 'farmakodynamik',
    difficulty: 'intermediar',
    q: 'Vad menas med att en effekt är dosberoende?',
    options: [
      'Effektens storlek förändras när dosen ändras',
      'Effekten avgörs av läkemedlets halveringstid snarare än av dosen',
      'Effekten beror enbart på tidpunkten på dygnet',
      'Effekten uppstår bara vid en enda fast dos',
    ],
    answer: 0,
    explanation:
      'En dosberoende effekt ökar (eller minskar) med dosen, vilket avbildas i en dos-responskurva. Detta är grunden för individuell dosanpassning.',
  },
  {
    id: 'm2b-046',
    topic: 'farmakodynamik',
    difficulty: 'intermediar',
    q: 'Vad är skillnaden mellan potens och effekt (efficacy)?',
    options: [
      'De är två ord för exakt samma sak',
      'Potens handlar om vilken dos som krävs, efficacy om hur stor maximal effekt som kan uppnås',
      'Potens gäller bara antibiotika',
      'Efficacy gäller bara biverkningar',
    ],
    answer: 1,
    explanation:
      'Ett högpotent läkemedel verkar vid låg dos; ett läkemedel med hög efficacy kan ge en stor maximal respons. De två egenskaperna är oberoende av varandra.',
  },
  {
    id: 'm2b-047',
    topic: 'farmakodynamik',
    difficulty: 'avancerad',
    q: 'Varför kan en kompetitiv antagonist förskjuta dos-responskurvan för en agonist åt höger?',
    options: [
      'Antagonisten gör agonisten mer potent',
      'Antagonisten ökar antalet receptorer',
      'Det krävs en högre agonistkoncentration för att uppnå samma effekt när antagonisten konkurrerar om receptorn',
      'Antagonisten sänker den maximala effekten permanent',
    ],
    answer: 2,
    explanation:
      'En kompetitiv antagonist konkurrerar om bindningsstället, så mer agonist krävs för samma effekt. Maxeffekten kan dock nås, vilket ger en högerförskjuten kurva.',
  },
  {
    id: 'm2b-048',
    topic: 'farmakodynamik',
    difficulty: 'grund',
    q: 'Vad innebär det att ett läkemedel verkar lokalt?',
    options: [
      'Effekten sprids genom hela kroppen',
      'Läkemedlet verkar bara på natten',
      'Läkemedlet måste sväljas för att kunna verka',
      'Effekten begränsas i huvudsak till det område där det appliceras',
    ],
    answer: 3,
    explanation:
      'En lokal effekt är begränsad till appliceringsstället, t.ex. en hudkräm eller ögondroppar, till skillnad från systemisk effekt i hela kroppen.',
  },
  {
    id: 'm2b-049',
    topic: 'farmakodynamik',
    difficulty: 'intermediar',
    q: 'Vad menas med en systemisk effekt?',
    options: [
      'En effekt som verkar i hela kroppen efter att läkemedlet nått blodomloppet',
      'En effekt som bara finns vid injektionsstället',
      'En effekt som enbart sker i magsäcken',
      'En effekt som kräver ljus för att uppstå',
    ],
    answer: 0,
    explanation:
      'En systemisk effekt uppstår när läkemedlet fördelas via blodet och kan påverka organ i hela kroppen, vilket är vanligt vid peroral och intravenös tillförsel.',
  },
  {
    id: 'm2b-050',
    topic: 'farmakodynamik',
    difficulty: 'avancerad',
    q: 'Varför ger receptorblockad ibland en överkänslighet om läkemedlet sätts ut tvärt?',
    options: [
      'Receptorerna försvinner helt vid utsättning',
      'Långvarig blockad kan uppreglera receptorerna, så att kroppens egna signalämnen plötsligt får en förstärkt effekt',
      'Läkemedlet finns kvar i åratal',
      'Kroppen slutar bilda signalämnen permanent',
    ],
    answer: 1,
    explanation:
      'Vid långvarig blockad kompenserar cellen med fler receptorer. Sätts blockeraren ut abrupt kan den ökade receptormängden ge en överskjutande effekt (rebound).',
  },
  // ---------------- LÄKEMEDELSGRUPPER ----------------
  {
    id: 'm2b-051',
    topic: 'lakemedelsgrupper',
    difficulty: 'grund',
    q: 'Vad används diuretika (urindrivande läkemedel) främst till?',
    options: [
      'Att stoppa diarré',
      'Att höja blodtrycket',
      'Att öka urinproduktionen och minska vätskeansamling, t.ex. vid högt blodtryck och hjärtsvikt',
      'Att lindra hosta',
    ],
    answer: 2,
    explanation:
      'Diuretika ökar njurarnas utsöndring av salt och vatten, vilket minskar vätskemängden i kroppen och sänker blodtrycket samt lindrar ödem.',
  },
  {
    id: 'm2b-052',
    topic: 'lakemedelsgrupper',
    difficulty: 'grund',
    q: 'Vad används protonpumpshämmare (PPI) mot?',
    options: [
      'Att sänka blodtrycket',
      'Att behandla bakterieinfektioner',
      'Att lindra ledvärk',
      'Att minska magsyraproduktionen, t.ex. vid sura uppstötningar och magsår',
    ],
    answer: 3,
    explanation:
      'Protonpumpshämmare som omeprazol minskar magsäckens syraproduktion och används vid reflux, magsår och för att skydda magslemhinnan.',
  },
  {
    id: 'm2b-053',
    topic: 'lakemedelsgrupper',
    difficulty: 'grund',
    q: 'Vad används antihistaminer främst mot?',
    options: [
      'Allergiska besvär',
      'Bakterieinfektioner',
      'Högt kolesterol',
      'Depression',
    ],
    answer: 0,
    explanation:
      'Antihistaminer blockerar histaminets effekt och lindrar allergisymtom som klåda, nysningar och rinnsnuva. Vissa har även en sövande effekt.',
  },
  {
    id: 'm2b-054',
    topic: 'lakemedelsgrupper',
    difficulty: 'grund',
    q: 'Vad används bensodiazepiner vanligen mot?',
    options: [
      'Bakterieinfektioner',
      'Ångest, sömnsvårigheter och kramper',
      'Högt blodtryck',
      'Allergi',
    ],
    answer: 1,
    explanation:
      'Bensodiazepiner är ångestdämpande, sömngivande och kramplösande. De har dock risk för tolerans och beroende vid längre tids användning.',
  },
  {
    id: 'm2b-055',
    topic: 'lakemedelsgrupper',
    difficulty: 'grund',
    q: 'Vad används metformin främst mot?',
    options: [
      'Högt blodtryck',
      'Infektioner',
      'Typ 2-diabetes',
      'Allergier',
    ],
    answer: 2,
    explanation:
      'Metformin är förstahandsbehandling vid typ 2-diabetes. Det sänker blodsockret bl.a. genom att minska leverns sockerproduktion och öka insulinkänsligheten.',
  },
  {
    id: 'm2b-056',
    topic: 'lakemedelsgrupper',
    difficulty: 'grund',
    q: 'Vad används kalciumblockerare (kalciumantagonister) bland annat mot?',
    options: [
      'Bakterieinfektioner',
      'Allergisk snuva',
      'Magsår',
      'Högt blodtryck och kärlkramp',
    ],
    answer: 3,
    explanation:
      'Kalciumblockerare hämmar inflödet av kalcium i hjärt- och kärlmuskelceller, vilket vidgar blodkärlen och sänker blodtrycket samt lindrar kärlkramp.',
  },
  {
    id: 'm2b-057',
    topic: 'lakemedelsgrupper',
    difficulty: 'grund',
    q: 'Vad är acetylsalicylsyra (ASA) i låg dos ett exempel på?',
    options: [
      'Ett trombocythämmande (blodförtunnande) läkemedel',
      'Ett antibiotikum',
      'Ett antidepressivt läkemedel',
      'Ett blodtryckshöjande läkemedel',
    ],
    answer: 0,
    explanation:
      'I låg dos hämmar acetylsalicylsyra blodplättarnas (trombocyternas) förmåga att klumpa ihop sig och används för att förebygga blodproppar.',
  },
  {
    id: 'm2b-058',
    topic: 'lakemedelsgrupper',
    difficulty: 'grund',
    q: 'Vad används antivirala läkemedel mot?',
    options: [
      'Alla typer av infektioner inklusive bakterier',
      'Virusinfektioner, t.ex. herpes eller influensa',
      'Högt blodtryck',
      'Allergier',
    ],
    answer: 1,
    explanation:
      'Antivirala läkemedel hämmar virus förmåga att föröka sig. De är riktade mot virus och har ingen effekt mot bakterier.',
  },
  {
    id: 'm2b-059',
    topic: 'lakemedelsgrupper',
    difficulty: 'intermediar',
    q: 'Hur sänker betablockerare hjärtats arbete?',
    options: [
      'De vidgar luftrören',
      'De ökar mängden adrenalin',
      'De blockerar betareceptorer så att adrenalinets effekt på hjärtat minskar, vilket sänker puls och slagkraft',
      'De blockerar kalciuminflödet i njurarna',
    ],
    answer: 2,
    explanation:
      'Betablockerare hindrar adrenalin och noradrenalin från att stimulera hjärtats betareceptorer, vilket sänker hjärtfrekvens och blodtryck.',
  },
  {
    id: 'm2b-060',
    topic: 'lakemedelsgrupper',
    difficulty: 'intermediar',
    q: 'Vad är skillnaden mellan ett baktericidt och ett bakteriostatiskt antibiotikum?',
    options: [
      'Baktericida verkar bara mot virus',
      'Bakteriostatiska dödar bakterierna snabbare',
      'Det finns ingen skillnad',
      'Baktericida dödar bakterierna, bakteriostatiska hämmar deras tillväxt',
    ],
    answer: 3,
    explanation:
      'Baktericida antibiotika avdödar bakterierna direkt, medan bakteriostatiska hämmar deras förökning så att immunförsvaret kan ta hand om resten.',
  },
  {
    id: 'm2b-061',
    topic: 'lakemedelsgrupper',
    difficulty: 'intermediar',
    q: 'Hur verkar en ARB (angiotensinreceptorblockerare) jämfört med en ACE-hämmare?',
    options: [
      'ARB blockerar angiotensin II:s receptor, medan ACE-hämmare minskar bildningen av angiotensin II',
      'ARB ökar bildningen av angiotensin II',
      'ARB och ACE-hämmare är samma sak',
      'ARB verkar genom att blockera betareceptorer',
    ],
    answer: 0,
    explanation:
      'Båda sänker blodtrycket via renin-angiotensinsystemet, men ARB blockerar receptorn för angiotensin II medan ACE-hämmare hämmar enzymet som bildar det. ARB ger sällan rethosta.',
  },
  {
    id: 'm2b-062',
    topic: 'lakemedelsgrupper',
    difficulty: 'intermediar',
    q: 'Hur verkar opioider smärtstillande?',
    options: [
      'De hämmar COX-enzymet i perifer vävnad',
      'De binder till opioidreceptorer i centrala nervsystemet och dämpar smärtsignalering',
      'De blockerar histaminreceptorer',
      'De sänker blodtrycket genom kärlvidgning',
    ],
    answer: 1,
    explanation:
      'Opioider verkar via opioidreceptorer i hjärnan och ryggmärgen, vilket dämpar upplevelsen och vidareledningen av smärta. De kan ge andningsdepression och beroende.',
  },
  {
    id: 'm2b-063',
    topic: 'lakemedelsgrupper',
    difficulty: 'intermediar',
    q: 'Hur verkar NSAID på molekylär nivå?',
    options: [
      'De blockerar opioidreceptorer',
      'De hämmar bakteriers cellvägg',
      'De hämmar cyklooxygenas (COX), vilket minskar bildningen av prostaglandiner',
      'De ökar serotoninnivåerna',
    ],
    answer: 2,
    explanation:
      'NSAID hämmar COX-enzymerna och minskar därmed prostaglandiner, vilket ger smärtlindring och dämpad inflammation men även risk för magbesvär.',
  },
  {
    id: 'm2b-064',
    topic: 'lakemedelsgrupper',
    difficulty: 'intermediar',
    q: 'Hur skiljer sig insulinets verkan från övriga blodsockersänkande tablettläkemedel?',
    options: [
      'Insulin ges som tablett tillsammans med maten',
      'Insulin höjer blodsockret',
      'Insulin är ett antibiotikum',
      'Insulin är ett hormon som ges som injektion och får cellerna att ta upp socker från blodet',
    ],
    answer: 3,
    explanation:
      'Insulin är ett hormon som måste injiceras eftersom det bryts ner i magtarmkanalen. Det sänker blodsockret genom att öka cellernas glukosupptag.',
  },
  {
    id: 'm2b-065',
    topic: 'lakemedelsgrupper',
    difficulty: 'intermediar',
    q: 'Vad är vanlig verkningsmekanism för astmaläkemedel av typen luftrörsvidgare (beta-2-agonister)?',
    options: [
      'De stimulerar beta-2-receptorer i luftvägarna så att den glatta muskulaturen slappnar av',
      'De blockerar histaminreceptorer i huden',
      'De hämmar magsyraproduktionen',
      'De dödar bakterier i lungorna',
    ],
    answer: 0,
    explanation:
      'Beta-2-agonister som salbutamol vidgar luftrören genom att slappna av muskulaturen kring luftvägarna, vilket snabbt lindrar astmasymtom.',
  },
  {
    id: 'm2b-066',
    topic: 'lakemedelsgrupper',
    difficulty: 'intermediar',
    q: 'Varför ger man ofta inhalationssteroider som underhållsbehandling vid astma?',
    options: [
      'De ger omedelbar luftrörsvidgning vid akut astma',
      'De dämpar den underliggande inflammationen i luftvägarna över tid',
      'De dödar virus i lungorna',
      'De höjer blodtrycket',
    ],
    answer: 1,
    explanation:
      'Inhalationssteroider verkar antiinflammatoriskt och minskar den kroniska inflammationen i luftvägarna. De förebygger besvär men ger inte akut symtomlindring.',
  },
  {
    id: 'm2b-067',
    topic: 'lakemedelsgrupper',
    difficulty: 'intermediar',
    q: 'Vad är ett vanligt användningsområde för SNRI och tricykliska antidepressiva utöver depression?',
    options: [
      'Bakterieinfektioner',
      'Högt kolesterol',
      'Vissa typer av långvarig (neuropatisk) smärta',
      'Allergisk snuva',
    ],
    answer: 2,
    explanation:
      'Flera antidepressiva, t.ex. SNRI och tricykliska, används även vid långvarig nervsmärta eftersom de påverkar smärtsignaleringen i centrala nervsystemet.',
  },
  {
    id: 'm2b-068',
    topic: 'lakemedelsgrupper',
    difficulty: 'intermediar',
    q: 'Vad skiljer antikoagulantia från trombocythämmare?',
    options: [
      'De är exakt samma sak',
      'Antikoagulantia höjer blodtrycket',
      'Trombocythämmare dödar bakterier',
      'Antikoagulantia påverkar koagulationsfaktorerna, trombocythämmare påverkar blodplättarnas funktion',
    ],
    answer: 3,
    explanation:
      'Antikoagulantia (t.ex. warfarin, DOAK) hämmar koagulationskaskaden, medan trombocythämmare (t.ex. ASA) minskar blodplättarnas förmåga att klumpa ihop sig.',
  },
  {
    id: 'm2b-069',
    topic: 'lakemedelsgrupper',
    difficulty: 'avancerad',
    q: 'Varför kräver behandling med warfarin regelbundna blodprov (INR)?',
    options: [
      'Warfarin har smalt terapeutiskt fönster och stor variation mellan individer, så dosen måste styras efter koagulationsvärdet',
      'Warfarin höjer blodsockret kraftigt',
      'Warfarin förstör röda blodkroppar',
      'Warfarin måste ges intravenöst',
    ],
    answer: 0,
    explanation:
      'Warfarins effekt varierar med kost, andra läkemedel och individuella faktorer. INR-prov gör att dosen kan justeras för att hålla blodförtunningen lagom kraftig.',
  },
  {
    id: 'm2b-070',
    topic: 'lakemedelsgrupper',
    difficulty: 'avancerad',
    q: 'Hur verkar antikoagulantia av typen DOAK (t.ex. faktor Xa-hämmare)?',
    options: [
      'De hämmar vitamin K-beroende faktorer via levern',
      'De hämmar specifika koagulationsfaktorer direkt och kräver vanligen inte rutinmässig dosmonitorering',
      'De hämmar blodplättarnas COX-enzym',
      'De löser upp redan bildade proppar',
    ],
    answer: 1,
    explanation:
      'DOAK (direktverkande orala antikoagulantia) blockerar t.ex. faktor Xa eller trombin direkt. De har mer förutsägbar effekt än warfarin och kräver oftast ingen INR-kontroll.',
  },
  {
    id: 'm2b-071',
    topic: 'lakemedelsgrupper',
    difficulty: 'avancerad',
    q: 'Varför fungerar paracetamol dåligt som antiinflammatoriskt läkemedel jämfört med NSAID?',
    options: [
      'Paracetamol binder till opioidreceptorer',
      'Paracetamol verkar bara i njurarna',
      'Paracetamol har liten perifer antiinflammatorisk effekt och den smärtstillande mekanismen är inte fullt klarlagd',
      'Paracetamol är ett antibiotikum',
    ],
    answer: 2,
    explanation:
      'Paracetamol lindrar smärta och sänker feber men har liten perifer antiinflammatorisk effekt. Flera centrala mekanismer har föreslagits, bland annat påverkan på prostaglandiner och serotonerga system, men den exakta smärtstillande mekanismen är inte fullt klarlagd.',
  },
  {
    id: 'm2b-072',
    topic: 'lakemedelsgrupper',
    difficulty: 'avancerad',
    q: 'Varför kallas atypiska (andra generationens) antipsykotika ibland för det?',
    options: [
      'De saknar helt effekt på dopaminreceptorer',
      'De används bara mot allergi',
      'De ger färre metabola biverkningar än äldre preparat',
      'De påverkar både dopamin- och serotoninreceptorer och ger ofta mindre rörelsebiverkningar än äldre preparat',
    ],
    answer: 3,
    explanation:
      'Atypiska antipsykotika blockerar både dopamin- och serotoninreceptorer. De ger ofta färre extrapyramidala (rörelse-) biverkningar men kan ge metabola effekter som viktuppgång.',
  },
  {
    id: 'm2b-073',
    topic: 'lakemedelsgrupper',
    difficulty: 'avancerad',
    q: 'Varför ges loopdiuretika och tiaziddiuretika vid olika situationer?',
    options: [
      'De verkar på olika delar av njurtubuli och har olika kraft; loopdiuretika är kraftfullare och används bl.a. vid hjärtsvikt',
      'Loopdiuretika höjer blodtrycket medan tiazider sänker det',
      'Tiazider dödar bakterier',
      'De har identisk verkningsplats och effekt',
    ],
    answer: 0,
    explanation:
      'Loopdiuretika verkar i Henles slynga och ger kraftig vätskedrivning, medan tiazider verkar längre fram i tubuli med svagare effekt och används mest vid hypertoni.',
  },
  {
    id: 'm2b-074',
    topic: 'lakemedelsgrupper',
    difficulty: 'avancerad',
    q: 'Varför kombineras penicillin ibland med en betalaktamashämmare?',
    options: [
      'Den gör penicillinet sötare',
      'Betalaktamashämmaren skyddar penicillinet från att brytas ner av bakteriers enzym som annars ger resistens',
      'Den ökar penicillinets absorption i hjärnan',
      'Den förvandlar penicillinet till ett virusmedel',
    ],
    answer: 1,
    explanation:
      'Vissa bakterier bildar betalaktamas som bryter ner penicillin. En betalaktamashämmare blockerar detta enzym så att antibiotikat åter blir verksamt.',
  },
  {
    id: 'm2b-075',
    topic: 'lakemedelsgrupper',
    difficulty: 'grund',
    q: 'Vad är ett vaccin tänkt att göra?',
    options: [
      'Direkt döda alla bakterier i kroppen',
      'Sänka blodtrycket',
      'Tillföra antigen, ett försvagat smittämne eller instruktioner för ett antigen så att immunologiskt minne bildas',
      'Ersätta kroppens egna hormoner',
    ],
    answer: 2,
    explanation:
      'Vacciner kan innehålla antigen eller försvagade smittämnen, eller ge celler instruktioner att tillverka ett antigen, som i mRNA- och vissa vektorvacciner. Immunförsvaret bygger då upp ett minne inför en senare smitta.',
  },
  {
    id: 'm2b-076',
    topic: 'lakemedelsgrupper',
    difficulty: 'intermediar',
    q: 'Vad kännetecknar ett generiskt läkemedel?',
    options: [
      'Det innehåller en helt annan verksam substans',
      'Det tillverkas av samma företag som originalet',
      'Det saknar verksam substans',
      'Det innehåller samma verksamma substans som originalet och säljs efter att patentet gått ut',
    ],
    answer: 3,
    explanation:
      'Ett generiskt läkemedel har samma aktiva substans, styrka och effekt som originalpreparatet men säljs ofta billigare efter att patentskyddet upphört.',
  },
  {
    id: 'm2b-077',
    topic: 'lakemedelsgrupper',
    difficulty: 'intermediar',
    q: 'Vad är ett biologiskt läkemedel?',
    options: [
      'Ett läkemedel som framställs av eller i levande celler, ofta stora proteinmolekyler som antikroppar',
      'Ett läkemedel som framställs genom kemisk syntes i fabrik',
      'Ett läkemedel utan verksam substans',
      'Ett växtbaserat kosttillskott',
    ],
    answer: 0,
    explanation:
      'Biologiska läkemedel tillverkas i levande system och är ofta stora, komplexa molekyler som monoklonala antikroppar. De ges vanligen som injektion eller infusion.',
  },
  {
    id: 'm2b-078',
    topic: 'lakemedelsgrupper',
    difficulty: 'avancerad',
    q: 'Hur verkar monoklonala antikroppar som läkemedel ofta?',
    options: [
      'De bryter ner allt protein i blodet',
      'De binder mycket specifikt till en viss målmolekyl, t.ex. en receptor eller ett signalämne',
      'De ersätter kroppens röda blodkroppar',
      'De verkar genom att sänka magsyran',
    ],
    answer: 1,
    explanation:
      'Monoklonala antikroppar är designade att binda till en specifik målstruktur, vilket ger en riktad effekt vid t.ex. cancer, inflammation eller autoimmuna sjukdomar.',
  },
  {
    id: 'm2b-079',
    topic: 'lakemedelsgrupper',
    difficulty: 'grund',
    q: 'Vad menas med ett receptfritt läkemedel (OTC)?',
    options: [
      'Ett läkemedel som bara finns på sjukhus',
      'Ett läkemedel som lämnas ut kostnadsfritt på apotek',
      'Ett läkemedel som får köpas utan recept för egenvård',
      'Ett läkemedel utan verksam substans',
    ],
    answer: 2,
    explanation:
      'Receptfria läkemedel bedöms som tillräckligt säkra för egenvård och kan köpas utan recept, men ska ändå användas enligt instruktionerna.',
  },
  {
    id: 'm2b-080',
    topic: 'lakemedelsgrupper',
    difficulty: 'intermediar',
    q: 'Varför ger man ibland kortisonkur i nedtrappande dos istället för att avsluta tvärt?',
    options: [
      'Kortison ger annars en allergisk reaktion',
      'Nedtrappning gör läkemedlet billigare',
      'Kortison absorberas bara vid nedtrappning',
      'Långvarig kortisonbehandling kan dämpa kroppens egen kortisolproduktion, som behöver tid att återhämta sig',
    ],
    answer: 3,
    explanation:
      'Tillfört kortison kan hämma binjurarnas egen produktion. En gradvis nedtrappning ger kroppen tid att återuppta den, vilket minskar risken för binjurebarksvikt.',
  },
  // ---------------- SÄKERHET ----------------
  {
    id: 'm2b-081',
    topic: 'sakerhet',
    difficulty: 'grund',
    q: 'Vad menas med en kontraindikation?',
    options: [
      'En omständighet då ett läkemedel inte bör användas på grund av risk',
      'En garanterad biverkning',
      'Den lägsta verksamma dosen',
      'Ett annat namn på huvudeffekten',
    ],
    answer: 0,
    explanation:
      'En kontraindikation är ett tillstånd eller en faktor (t.ex. en sjukdom eller graviditet) som gör att ett läkemedel inte ska användas eftersom riskerna överväger.',
  },
  {
    id: 'm2b-082',
    topic: 'sakerhet',
    difficulty: 'grund',
    q: 'Vad betyder adherens (följsamhet, compliance) i läkemedelsbehandling?',
    options: [
      'Hur snabbt läkemedlet absorberas',
      'I vilken grad patienten tar sitt läkemedel som ordinerat',
      'Hur väl läkemedlet binder till receptorn',
      'Hur länge läkemedlet är hållbart',
    ],
    answer: 1,
    explanation:
      'Adherens beskriver hur väl patienten följer ordinationen vad gäller dos och tidpunkt. Bristande följsamhet är en vanlig orsak till utebliven effekt.',
  },
  {
    id: 'm2b-083',
    topic: 'sakerhet',
    difficulty: 'grund',
    q: 'Vem kan rapportera misstänkta biverkningar till Läkemedelsverket i Sverige?',
    options: [
      'Endast läkare',
      'Endast läkemedelsföretag',
      'Både hälso- och sjukvårdspersonal och privatpersoner/patienter',
      'Ingen, biverkningar rapporteras inte',
    ],
    answer: 2,
    explanation:
      'I Sverige kan både vårdpersonal och patienter själva rapportera misstänkta biverkningar till Läkemedelsverket, vilket är en del av farmakovigilansen.',
  },
  {
    id: 'm2b-084',
    topic: 'sakerhet',
    difficulty: 'grund',
    q: 'Varför bör man läsa bipacksedeln innan man använder ett läkemedel?',
    options: [
      'Den anger läkemedlets pris',
      'Den ersätter recept',
      'Den krävs för att tabletten ska verka',
      'Den innehåller viktig information om dosering, biverkningar och varningar',
    ],
    answer: 3,
    explanation:
      'Bipacksedeln informerar om hur läkemedlet ska användas, möjliga biverkningar, interaktioner och när det inte bör tas, vilket bidrar till säker användning.',
  },
  {
    id: 'm2b-085',
    topic: 'sakerhet',
    difficulty: 'intermediar',
    q: 'Vad kännetecknar en typ A-biverkning?',
    options: [
      'Den är dosberoende och kan förutsägas utifrån läkemedlets kända farmakologi',
      'Den är oförutsägbar och oberoende av dos',
      'Den beror på en immunologisk reaktion mot läkemedlet',
      'Den uppstår bara hos barn',
    ],
    answer: 0,
    explanation:
      'Typ A-biverkningar (augmented) är en förstärkning av läkemedlets normala effekt, dosberoende och förutsägbara, t.ex. blödning av blodförtunnande läkemedel.',
  },
  {
    id: 'm2b-086',
    topic: 'sakerhet',
    difficulty: 'intermediar',
    q: 'Vad kännetecknar en typ B-biverkning?',
    options: [
      'Den är dosberoende och går att förutse utifrån farmakologin',
      'Den är oförutsägbar, ofta dosoberoende, t.ex. en allergisk reaktion',
      'Den uppstår vid första dosen och avtar sedan med tiden',
      'Den beror på för låg dos',
    ],
    answer: 1,
    explanation:
      'Typ B-biverkningar (bizarre) är oförutsägbara och hänger inte ihop med dosen på samma sätt, t.ex. överkänslighetsreaktioner. De kan vara allvarliga men är ovanligare.',
  },
  {
    id: 'm2b-087',
    topic: 'sakerhet',
    difficulty: 'intermediar',
    q: 'Vad är en farmakodynamisk interaktion?',
    options: [
      'Ett läkemedel ändrar nedbrytningen av ett annat i levern',
      'Ett läkemedel ändrar absorptionen av ett annat i tarmen',
      'Två läkemedel påverkar samma fysiologiska system så att effekten förstärks eller motverkas',
      'Två tabletter klibbar ihop i förpackningen',
    ],
    answer: 2,
    explanation:
      'Vid en farmakodynamisk interaktion verkar läkemedlen på samma system eller receptorer, t.ex. två dämpande medel som tillsammans ger kraftig trötthet.',
  },
  {
    id: 'm2b-088',
    topic: 'sakerhet',
    difficulty: 'intermediar',
    q: 'Vad är en farmakokinetisk interaktion?',
    options: [
      'Två läkemedel binder till samma receptor',
      'Två läkemedel ger samma typ av effekt',
      'Ett läkemedel byter färg av ett annat',
      'Ett läkemedel påverkar ett annats absorption, distribution, metabolism eller elimination',
    ],
    answer: 3,
    explanation:
      'Vid en farmakokinetisk interaktion ändras koncentrationen av ett läkemedel, t.ex. genom hämmad eller inducerad metabolism, vilket påverkar effekt och biverkningsrisk.',
  },
  {
    id: 'm2b-089',
    topic: 'sakerhet',
    difficulty: 'intermediar',
    q: 'Varför kan amning innebära en risk vid läkemedelsbehandling?',
    options: [
      'Vissa läkemedel kan passera över i bröstmjölken och nå barnet',
      'Amning gör alla läkemedel verkningslösa',
      'Läkemedel bryts ner i bröstmjölken innan barnet får i sig dem',
      'Amning påskyndar läkemedlets nedbrytning hos modern',
    ],
    answer: 0,
    explanation:
      'En del läkemedel utsöndras i bröstmjölken och kan påverka det ammade barnet. Nytta och risk behöver därför bedömas, ibland med val av annat preparat.',
  },
  {
    id: 'm2b-090',
    topic: 'sakerhet',
    difficulty: 'intermediar',
    q: 'Varför kan dosen behöva justeras vid nedsatt leverfunktion?',
    options: [
      'Levern absorberar läkemedel istället för tarmen',
      'Försämrad metabolism kan göra att läkemedel som bryts ner i levern ansamlas',
      'Nedsatt leverfunktion ökar utsöndringen via njurarna',
      'Leverfunktionen påverkar bara läkemedel som ges intravenöst',
    ],
    answer: 1,
    explanation:
      'Levern metaboliserar många läkemedel. Vid leversvikt kan nedbrytningen bli långsammare så att koncentrationen stiger – dosen kan då behöva sänkas.',
  },
  {
    id: 'm2b-091',
    topic: 'sakerhet',
    difficulty: 'intermediar',
    q: 'Vad innebär en läkemedelsgenomgång hos äldre patienter?',
    options: [
      'En kontroll av enbart receptfria läkemedel',
      'En mätning av blodtryck',
      'En systematisk granskning av patientens samtliga läkemedel för att hitta olämpliga preparat och interaktioner',
      'Ett byte av apotek',
    ],
    answer: 2,
    explanation:
      'Vid en läkemedelsgenomgång granskas hela patientens läkemedelslista för att upptäcka onödiga, olämpliga eller riskabla kombinationer, särskilt viktigt vid polyfarmaci hos äldre.',
  },
  {
    id: 'm2b-092',
    topic: 'sakerhet',
    difficulty: 'grund',
    q: 'Varför kan det vara farligt att kombinera lugnande/sömnmedel med alkohol?',
    options: [
      'Alkohol gör läkemedlet verkningslöst',
      'Kombinationen höjer blodtrycket farligt',
      'Alkohol förbättrar effekten på ett säkert sätt',
      'Båda dämpar centrala nervsystemet och förstärker varandras effekt, vilket kan ge kraftig sedering',
    ],
    answer: 3,
    explanation:
      'Lugnande medel och alkohol är båda CNS-dämpande. Tillsammans kan de ge farligt kraftig dämpning, inklusive andningsdepression.',
  },
  {
    id: 'm2b-093',
    topic: 'sakerhet',
    difficulty: 'grund',
    q: 'Varför ska man följa den ordinerade behandlingstiden med antibiotika?',
    options: [
      'Behandlingstiden är vald för infektionen och bör inte ändras utan vårdens råd',
      'Det gör tabletterna dyrare',
      'Antibiotika blir farligt efter halva kuren',
      'Det påverkar inte behandlingen alls',
    ],
    answer: 0,
    explanation:
      'Att symtomen förbättras betyder inte alltid att infektionen är färdigbehandlad. Den kortaste effektiva behandlingstiden beror på infektionen, och onödigt lång behandling kan ge biverkningar och öka resistenspressen. Följ ordinationen och kontakta vården innan behandlingstiden ändras.',
  },
  {
    id: 'm2b-094',
    topic: 'sakerhet',
    difficulty: 'avancerad',
    q: 'Hur kan en enzyminducerare påverka säkerheten hos ett annat läkemedel?',
    options: [
      'Den höjer koncentrationen av det andra läkemedlet till toxiska nivåer',
      'Den snabbar på nedbrytningen så att det andra läkemedlets koncentration och effekt minskar, t.ex. p-piller som blir mindre tillförlitliga',
      'Den påverkar bara absorptionen i tarmen',
      'Den har ingen säkerhetsmässig betydelse',
    ],
    answer: 1,
    explanation:
      'En enzyminducerare ökar leverns nedbrytning av andra läkemedel, vilket sänker deras nivåer. Det kan ge terapisvikt, t.ex. minskad effekt av p-piller.',
  },
  {
    id: 'm2b-095',
    topic: 'sakerhet',
    difficulty: 'avancerad',
    q: 'Vad är serotonergt syndrom ett exempel på?',
    options: [
      'En bakterieinfektion i tarmen',
      'En normal effekt av ett enda SSRI',
      'En potentiellt allvarlig reaktion vid kombination av flera läkemedel som ökar serotoninnivåerna',
      'En allergi mot penicillin',
    ],
    answer: 2,
    explanation:
      'Serotonergt syndrom kan uppstå när flera serotoninhöjande läkemedel kombineras och ger symtom som oro, feber, muskelryckningar och förändrat medvetande – en farmakodynamisk interaktion.',
  },
  {
    id: 'm2b-096',
    topic: 'sakerhet',
    difficulty: 'avancerad',
    q: 'Varför är barn inte bara "små vuxna" när det gäller läkemedelsmetabolism?',
    options: [
      'Barn saknar helt enzymer',
      'Barn bryter ner alla läkemedel snabbare än vuxna',
      'Barn har samma farmakokinetik som vuxna i alla avseenden',
      'Deras enzymsystem och organfunktion är inte fullt utvecklade, vilket påverkar nedbrytning och utsöndring',
    ],
    answer: 3,
    explanation:
      'Hos barn, särskilt spädbarn, är lever- och njurfunktion samt enzymsystem omogna. Det påverkar hur läkemedel hanteras och kräver särskild dosering, ofta efter vikt.',
  },
  {
    id: 'm2b-097',
    topic: 'sakerhet',
    difficulty: 'avancerad',
    q: 'Vad är teratogenicitet?',
    options: [
      'Ett ämnes förmåga att orsaka fosterskador',
      'Ett ämnes förmåga att döda bakterier',
      'Ett ämnes förmåga att sänka blodtrycket',
      'Ett ämnes förmåga att höja blodsockret',
    ],
    answer: 0,
    explanation:
      'Teratogena läkemedel kan skada fostret, särskilt under tidig graviditet. Sådana läkemedel är ofta kontraindicerade eller kräver mycket noggrann nytta-riskbedömning.',
  },
  {
    id: 'm2b-098',
    topic: 'sakerhet',
    difficulty: 'avancerad',
    q: 'Varför kan en kraftig proteinbindning vara betydelsefull vid interaktioner med läkemedel med smalt terapeutiskt fönster?',
    options: [
      'Proteinbindning gör läkemedlet helt overksamt',
      'Den fria fraktionen kan öka tillfälligt, men betydelsen beror också på distribution, clearance och terapeutisk marginal',
      'Proteinbindning saknar betydelse för effekten',
      'Proteinbindningen skyddar mot toxicitet vid samtidig medicinering',
    ],
    answer: 1,
    explanation:
      'När ett läkemedel trängs undan från plasmaproteiner kan den fria fraktionen öka tillfälligt. Ökad distribution och clearance motverkar ofta förändringen, så den kliniska betydelsen beror på hela farmakokinetiken och är störst för vissa läkemedel med smal terapeutisk marginal.',
  },
  {
    id: 'm2b-099',
    topic: 'sakerhet',
    difficulty: 'intermediar',
    q: 'Varför är det viktigt att vårdgivaren har en aktuell och fullständig läkemedelslista?',
    options: [
      'För att kunna fakturera patienten rätt',
      'För att veta vilket apotek patienten brukar besöka',
      'För att kunna upptäcka interaktioner, dubbelmedicinering och anpassa behandlingen säkert',
      'Det har ingen praktisk betydelse',
    ],
    answer: 2,
    explanation:
      'En korrekt läkemedelslista är grunden för säker förskrivning; den gör det möjligt att se hela bilden och undvika skadliga kombinationer och onödiga preparat.',
  },
  {
    id: 'm2b-100',
    topic: 'sakerhet',
    difficulty: 'grund',
    q: 'Vad bör man göra med läkemedel som blivit för gamla eller inte längre används?',
    options: [
      'Spola ner dem i toaletten',
      'Slänga dem i vanliga hushållssoporna',
      'Ge dem vidare till andra med liknande besvär',
      'Lämna in dem till apotek för säker destruktion',
    ],
    answer: 3,
    explanation:
      'Överblivna läkemedel ska lämnas till apotek för säker hantering. Det skyddar både miljön och förhindrar att läkemedel används felaktigt av andra.',
  },
]
