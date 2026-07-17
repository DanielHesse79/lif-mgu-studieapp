/**
 * Frågebank för Modul 1 – Grundvetenskap.
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
 * positionsmässigt förutsägbart trots att `answer` ofta är 0 i datan.
 */

export const M1_QUESTIONS = [
  // ---------------- ANATOMI ----------------
  {
    id: 'm1-an-01',
    topic: 'anatomi',
    difficulty: 'grund',
    q: 'Vad betyder den anatomiska termen "proximal"?',
    options: [
      'Närmare bålen eller en struktur fästpunkt',
      'Längst ut från bålen',
      'På framsidan av kroppen',
      'På baksidan av kroppen',
    ],
    answer: 0,
    explanation:
      'Proximal betyder närmare bålen/fästet, distal betyder längre bort. T.ex. är axeln proximal i förhållande till handen.',
  },
  {
    id: 'm1-an-02',
    topic: 'anatomi',
    difficulty: 'grund',
    q: 'Vilket snittplan delar kroppen i en höger och en vänster halva?',
    options: ['Medianplanet (midsagittalplanet)', 'Frontalplanet', 'Transversalplanet', 'Horisontalplanet'],
    answer: 0,
    explanation:
      'Medianplanet, även kallat midsagittalplanet, delar kroppen i lika stora höger- och vänsterhalvor. Andra sagittalplan delar kroppen i höger och vänster delar som inte behöver vara lika stora.',
  },
  {
    id: 'm1-an-03',
    topic: 'anatomi',
    difficulty: 'grund',
    q: 'Vilket av följande är INTE ett organsystem?',
    options: [
      'Mitokondriesystemet',
      'Cirkulationssystemet',
      'Nervsystemet',
      'Andningssystemet',
    ],
    answer: 0,
    explanation:
      'Mitokondrier är organeller inuti celler, inte ett organsystem. De övriga är riktiga organsystem.',
  },
  {
    id: 'm1-an-04',
    topic: 'anatomi',
    difficulty: 'grund',
    q: 'Vad kallas luftstrupen med ett medicinskt ord?',
    options: ['Trakea', 'Esofagus', 'Larynx', 'Faryx'],
    answer: 0,
    explanation:
      'Trakea = luftstrupe. Esofagus = matstrupe, larynx = struphuvud, farynx = svalg.',
  },
  {
    id: 'm1-an-05',
    topic: 'anatomi',
    difficulty: 'grund',
    q: 'Vilken kroppshåla innehåller hjärnan?',
    options: ['Kraniehålan', 'Brösthålan', 'Bukhålan', 'Bäckenhålan'],
    answer: 0,
    explanation: 'Hjärnan ligger skyddad i kraniehålan (skallen).',
  },
  {
    id: 'm1-an-06',
    topic: 'anatomi',
    difficulty: 'intermediar',
    q: 'Skelettmuskler fäster vid skelettet med hjälp av?',
    options: ['Senor', 'Ligament', 'Brosk', 'Fascia'],
    answer: 0,
    explanation:
      'Senor binder muskel till ben. Ligament binder ben till ben och stabiliserar leder.',
  },
  {
    id: 'm1-an-07',
    topic: 'anatomi',
    difficulty: 'intermediar',
    q: 'Vilken typ av led är knäleden?',
    options: ['Gångjärnsled', 'Kulled', 'Vridled', 'Plan led'],
    answer: 0,
    explanation:
      'Knät är en gångjärnsled (böj/sträck). Höften och axeln är kulleder med rörelse i flera plan.',
  },
  {
    id: 'm1-an-08',
    topic: 'anatomi',
    difficulty: 'intermediar',
    q: 'Vad heter utrymmet mellan lungorna där hjärtat ligger?',
    options: ['Mediastinum', 'Peritoneum', 'Pleura', 'Diafragma'],
    answer: 0,
    explanation:
      'Mediastinum är området mellan lungorna. Pleura är lungsäcken och peritoneum bukhinnan.',
  },
  {
    id: 'm1-an-09',
    topic: 'anatomi',
    difficulty: 'intermediar',
    q: 'I vilken ordning passerar maten genom mag-tarmkanalen?',
    options: [
      'Matstrupe → magsäck → tunntarm → tjocktarm',
      'Magsäck → matstrupe → tjocktarm → tunntarm',
      'Matstrupe → tunntarm → magsäck → tjocktarm',
      'Magsäck → tunntarm → tjocktarm → matstrupe',
    ],
    answer: 0,
    explanation:
      'Maten går matstrupe → magsäck → tunntarm (där mest näring tas upp) → tjocktarm (vatten tas upp).',
  },
  {
    id: 'm1-an-10',
    topic: 'anatomi',
    difficulty: 'avancerad',
    q: 'Vad heter den första delen av aortan, direkt efter vänster kammare?',
    options: ['Aorta ascendens', 'Aortabågen', 'Aorta descendens', 'Bukaorta'],
    answer: 0,
    explanation:
      'Ordningen är aorta ascendens (uppåtgående) → aortabågen → aorta descendens → bukaorta.',
  },
  {
    id: 'm1-an-11',
    topic: 'anatomi',
    difficulty: 'intermediar',
    q: 'Vad kallas njurens minsta funktionella enhet?',
    options: ['Nefron', 'Alveol', 'Neuron', 'Hepatocyt'],
    answer: 0,
    explanation:
      'Nefronet filtrerar blodet och bildar urin. Varje njure har ungefär en miljon nefron.',
  },
  {
    id: 'm1-an-12',
    topic: 'anatomi',
    difficulty: 'grund',
    q: 'Vilket är kroppens största organ räknat till ytan?',
    options: ['Huden', 'Levern', 'Lungorna', 'Tarmen'],
    answer: 0,
    explanation:
      'Huden är kroppens största organ och fungerar bl.a. som barriär mot omvärlden.',
  },

  // ---------------- CELLBIOLOGI ----------------
  {
    id: 'm1-ce-01',
    topic: 'cellbiologi',
    difficulty: 'grund',
    q: 'Vilken organell brukar kallas cellens "kraftverk"?',
    options: ['Mitokondrien', 'Ribosomen', 'Cellkärnan', 'Golgiapparaten'],
    answer: 0,
    explanation: 'Mitokondrien producerar det mesta av cellens energi i form av ATP.',
  },
  {
    id: 'm1-ce-02',
    topic: 'cellbiologi',
    difficulty: 'grund',
    q: 'Var finns huvuddelen av cellens DNA?',
    options: ['I cellkärnan', 'I cytoplasman', 'I cellmembranet', 'I ribosomerna'],
    answer: 0,
    explanation:
      'DNA finns främst i cellkärnan. En liten mängd eget DNA finns även i mitokondrierna.',
  },
  {
    id: 'm1-ce-03',
    topic: 'cellbiologi',
    difficulty: 'grund',
    q: 'Vad består cellmembranet huvudsakligen av?',
    options: [
      'Ett dubbelt lager av fosfolipider',
      'Cellulosa',
      'Kollagenfibrer',
      'Kalciumkristaller',
    ],
    answer: 0,
    explanation:
      'Cellmembranet är ett dubbelt fosfolipidlager med inbäddade proteiner som styr vad som passerar.',
  },
  {
    id: 'm1-ce-04',
    topic: 'cellbiologi',
    difficulty: 'grund',
    q: 'Vad kallas processen då en cell delar sig i två identiska celler?',
    options: ['Mitos', 'Meios', 'Apoptos', 'Osmos'],
    answer: 0,
    explanation:
      'Mitos ger två identiska celler. Meios bildar könsceller med halva kromosomuppsättningen.',
  },
  {
    id: 'm1-ce-05',
    topic: 'cellbiologi',
    difficulty: 'intermediar',
    q: 'Vilken struktur i cellen tillverkar proteiner?',
    options: ['Ribosomen', 'Lysosomen', 'Mitokondrien', 'Cellkärnan'],
    answer: 0,
    explanation: 'Ribosomerna sätter ihop aminosyror till proteiner enligt mRNA:s instruktioner.',
  },
  {
    id: 'm1-ce-06',
    topic: 'cellbiologi',
    difficulty: 'intermediar',
    q: 'Transport av ett ämne från hög till låg koncentration utan att cellen förbrukar energi kallas?',
    options: ['Diffusion', 'Aktiv transport', 'Endocytos', 'Exocytos'],
    answer: 0,
    explanation:
      'Diffusion (passiv transport) sker längs koncentrationsgradienten utan energi. Aktiv transport kräver ATP.',
  },
  {
    id: 'm1-ce-07',
    topic: 'cellbiologi',
    difficulty: 'intermediar',
    q: 'Vad kallas processen då DNA kopieras till mRNA?',
    options: ['Transkription', 'Translation', 'Replikation', 'Mutation'],
    answer: 0,
    explanation:
      'Transkription = DNA → mRNA i kärnan. Translation = mRNA → protein vid ribosomen.',
  },
  {
    id: 'm1-ce-08',
    topic: 'cellbiologi',
    difficulty: 'avancerad',
    q: 'Natrium-kaliumpumpen i cellmembranet är ett exempel på?',
    options: ['Aktiv transport', 'Passiv diffusion', 'Osmos', 'Filtration'],
    answer: 0,
    explanation:
      'Pumpen flyttar joner mot deras koncentrationsgradient och förbrukar ATP – alltså aktiv transport.',
  },
  {
    id: 'm1-ce-09',
    topic: 'cellbiologi',
    difficulty: 'avancerad',
    q: 'Vad kallas steget då mRNA översätts till en kedja av aminosyror?',
    options: ['Translation', 'Transkription', 'Replikation', 'Translokation'],
    answer: 0,
    explanation: 'Translation sker vid ribosomen, där mRNA-koden avläses och proteinet byggs.',
  },
  {
    id: 'm1-ce-10',
    topic: 'cellbiologi',
    difficulty: 'intermediar',
    q: 'Vilken förkortning används för cellens viktigaste energimolekyl?',
    options: ['ATP', 'DNA', 'RNA', 'NaCl'],
    answer: 0,
    explanation: 'ATP (adenosintrifosfat) är den molekyl som driver de flesta energikrävande processer.',
  },

  // ---------------- GENETIK ----------------
  {
    id: 'm1-ge-01',
    topic: 'genetik',
    difficulty: 'grund',
    q: 'Vad är gener uppbyggda av?',
    options: ['DNA', 'Protein', 'Fett', 'Kolhydrater'],
    answer: 0,
    explanation: 'En gen är en avgränsad bit DNA som innehåller instruktioner, oftast för ett protein.',
  },
  {
    id: 'm1-ge-02',
    topic: 'genetik',
    difficulty: 'grund',
    q: 'Hur många kromosomer har en normal mänsklig kroppscell?',
    options: ['46', '23', '92', '22'],
    answer: 0,
    explanation: '46 kromosomer = 23 par. Könscellerna (ägg och spermie) har 23 stycken.',
  },
  {
    id: 'm1-ge-03',
    topic: 'genetik',
    difficulty: 'grund',
    q: 'Vad kallas DNA:s byggstenar?',
    options: ['Nukleotider', 'Aminosyror', 'Fettsyror', 'Monosackarider'],
    answer: 0,
    explanation:
      'DNA byggs av nukleotider. Aminosyror är proteinernas byggstenar, monosackarider sockrens.',
  },
  {
    id: 'm1-ge-04',
    topic: 'genetik',
    difficulty: 'intermediar',
    q: 'Vilka kvävebaser paras ihop med varandra i DNA?',
    options: [
      'A med T, och C med G',
      'A med C, och G med T',
      'A med G, och C med T',
      'A med U, och C med G',
    ],
    answer: 0,
    explanation: 'I DNA paras adenin (A) med tymin (T) och cytosin (C) med guanin (G). U finns i RNA.',
  },
  {
    id: 'm1-ge-05',
    topic: 'genetik',
    difficulty: 'intermediar',
    q: 'Vad kallas en förändring i DNA-sekvensen?',
    options: ['Mutation', 'Replikation', 'Transkription', 'Translation'],
    answer: 0,
    explanation:
      'En mutation är en förändring i arvsmassan. Den kan vara harmlös, skadlig eller ibland fördelaktig.',
  },
  {
    id: 'm1-ge-06',
    topic: 'genetik',
    difficulty: 'intermediar',
    q: 'Vad kallar man en person som bär en sjukdomsvariant för en autosomalt recessiv sjukdom utan att själv vara sjuk?',
    options: ['Anlagsbärare', 'Homozygot för anlaget', 'Mutant', 'Fenotyp'],
    answer: 0,
    explanation:
      'En anlagsbärare har vanligen en sjukdomsvariant i enkel uppsättning och får därför oftast inte den autosomalt recessiva sjukdomen, men kan föra varianten vidare. Vid exempelvis X-bunden nedärvning kan förutsättningarna vara annorlunda.',
  },
  {
    id: 'm1-ge-07',
    topic: 'genetik',
    difficulty: 'avancerad',
    q: 'Vid autosomalt recessiv nedärvning blir ett barn sjukt när det ärver anlaget?',
    options: [
      'Från båda föräldrarna',
      'Endast från en av föräldrarna',
      'Endast från modern',
      'Endast via en helt ny mutation',
    ],
    answer: 0,
    explanation:
      'Vid recessiv nedärvning krävs två kopior av anlaget – en från vardera föräldern – för att sjukdomen ska bryta ut.',
  },
  {
    id: 'm1-ge-08',
    topic: 'genetik',
    difficulty: 'avancerad',
    q: 'Vad handlar epigenetik om?',
    options: [
      'Förändringar i genuttryck utan att DNA-sekvensen ändras',
      'Förändringar i själva DNA-sekvensen',
      'Antalet kromosomer i en cell',
      'Hur celler delar sig',
    ],
    answer: 0,
    explanation:
      'Epigenetik styr om gener slås på eller av (t.ex. via metylering) utan att bokstäverna i DNA ändras.',
  },

  // ---------------- FYSIOLOGI ----------------
  {
    id: 'm1-fy-01',
    topic: 'fysiologi',
    difficulty: 'grund',
    q: 'Vad kallas kroppens strävan att hålla en stabil inre miljö?',
    options: ['Homeostas', 'Metabolism', 'Diffusion', 'Osmos'],
    answer: 0,
    explanation:
      'Homeostas är balansen i t.ex. temperatur, blodsocker och pH. Många läkemedel påverkar just sådana system.',
  },
  {
    id: 'm1-fy-02',
    topic: 'fysiologi',
    difficulty: 'grund',
    q: 'Vilket blodkärl för syrerikt blod från hjärtat ut i kroppen?',
    options: ['Aortan', 'Stora hålvenen', 'Lungartären', 'Portådern'],
    answer: 0,
    explanation:
      'Aortan är kroppens största artär. Lungartären för tvärtom syrefattigt blod från hjärtat till lungorna.',
  },
  {
    id: 'm1-fy-03',
    topic: 'fysiologi',
    difficulty: 'grund',
    q: 'Vad kallas nervceller med ett annat ord?',
    options: ['Neuron', 'Nefron', 'Hepatocyt', 'Erytrocyt'],
    answer: 0,
    explanation: 'Neuron = nervcell. Nefron finns i njuren, hepatocyt i levern, erytrocyt = röd blodkropp.',
  },
  {
    id: 'm1-fy-04',
    topic: 'fysiologi',
    difficulty: 'grund',
    q: 'Var produceras hormoner i kroppen?',
    options: [
      'I endokrina körtlar och hormonproducerande celler i andra organ',
      'Endast i skelettmusklerna',
      'Endast i röda blodkroppar',
      'Endast i senorna',
    ],
    answer: 0,
    explanation:
      'Hormoner produceras både i endokrina körtlar, exempelvis sköldkörteln och hypofysen, och i hormonproducerande celler i bland annat bukspottkörteln, mag-tarmkanalen och hjärtat.',
  },
  {
    id: 'm1-fy-05',
    topic: 'fysiologi',
    difficulty: 'intermediar',
    q: 'Vilket värde anger blodtrycket när hjärtat drar ihop sig?',
    options: ['Det systoliska trycket', 'Det diastoliska trycket', 'Pulstrycket', 'Det venösa trycket'],
    answer: 0,
    explanation:
      'Systoliskt tryck (det övre värdet) mäts vid hjärtats sammandragning, diastoliskt (det undre) vid vila.',
  },
  {
    id: 'm1-fy-06',
    topic: 'fysiologi',
    difficulty: 'intermediar',
    q: 'Var i lungorna sker själva gasutbytet mellan luft och blod?',
    options: ['I alveolerna', 'I bronkerna', 'I trakea', 'I pleuran'],
    answer: 0,
    explanation:
      'Alveolerna (lungblåsorna) har tunna väggar där syre tas upp och koldioxid lämnas av.',
  },
  {
    id: 'm1-fy-07',
    topic: 'fysiologi',
    difficulty: 'intermediar',
    q: 'Vilket hormon sänker blodsockret?',
    options: ['Insulin', 'Glukagon', 'Adrenalin', 'Kortisol'],
    answer: 0,
    explanation:
      'Insulin sänker blodsockret genom att låta cellerna ta upp glukos. Glukagon höjer det istället.',
  },
  {
    id: 'm1-fy-08',
    topic: 'fysiologi',
    difficulty: 'intermediar',
    q: 'Var överförs signalen från en nervcell till nästa?',
    options: ['I synapsen', 'I axonet', 'I dendriten', 'I myelinet'],
    answer: 0,
    explanation:
      'Synapsen är kontaktpunkten mellan nervceller. Här frisätts signalsubstanser som för signalen vidare.',
  },
  {
    id: 'm1-fy-09',
    topic: 'fysiologi',
    difficulty: 'avancerad',
    q: 'Vad händer med diafragman vid inandning?',
    options: [
      'Den drar ihop sig och plattas ut nedåt',
      'Den slappnar av och välver sig uppåt',
      'Den står helt still',
      'Den vrider sig åt sidan',
    ],
    answer: 0,
    explanation:
      'När diafragman dras ihop och sänks ökar brösthålans volym, trycket sjunker och luft sugs in.',
  },
  {
    id: 'm1-fy-10',
    topic: 'fysiologi',
    difficulty: 'avancerad',
    q: 'Vilket hormon hjälper njurarna att spara vatten och koncentrera urinen?',
    options: ['ADH (vasopressin)', 'Insulin', 'Testosteron', 'Tyroxin'],
    answer: 0,
    explanation:
      'ADH (antidiuretiskt hormon) gör att njurarna återtar mer vatten, vilket minskar urinmängden.',
  },
  {
    id: 'm1-fy-11',
    topic: 'fysiologi',
    difficulty: 'avancerad',
    q: 'Signalsubstanser som dopamin och serotonin frisätts i synapsen och kallas?',
    options: ['Neurotransmittorer', 'Hormoner', 'Enzymer', 'Antikroppar'],
    answer: 0,
    explanation:
      'I synapsen kallas signalmolekylerna neurotransmittorer. Många psykofarmaka påverkar just dessa.',
  },
  {
    id: 'm1-fy-12',
    topic: 'fysiologi',
    difficulty: 'grund',
    q: 'Vilket hormon höjer blodsockret?',
    options: ['Glukagon', 'Insulin', 'ADH', 'Melatonin'],
    answer: 0,
    explanation:
      'Glukagon frisätter glukos från levern och höjer blodsockret – motsatsen till insulin.',
  },

  // ---------------- IMMUNOLOGI ----------------
  {
    id: 'm1-im-01',
    topic: 'immunologi',
    difficulty: 'grund',
    q: 'Vad kallas det immunförsvar vi föds med och som reagerar snabbt och ospecifikt?',
    options: [
      'Det medfödda immunförsvaret',
      'Det adaptiva immunförsvaret',
      'Det endokrina systemet',
      'Lymfsystemet',
    ],
    answer: 0,
    explanation:
      'Det medfödda försvaret är första linjen (t.ex. hud och vissa vita blodkroppar). Det adaptiva är specifikt och har minne.',
  },
  {
    id: 'm1-im-02',
    topic: 'immunologi',
    difficulty: 'grund',
    q: 'Vad kallas ett främmande ämne som immunförsvaret reagerar mot?',
    options: ['Antigen', 'Antikropp', 'Antibiotika', 'Antioxidant'],
    answer: 0,
    explanation:
      'Ett antigen är det som utlöser immunsvaret. Antikroppar är det immunförsvaret bildar som svar.',
  },
  {
    id: 'm1-im-03',
    topic: 'immunologi',
    difficulty: 'grund',
    q: 'De klassiska tecknen på inflammation är rodnad, värme, svullnad och?',
    options: ['Smärta', 'Klåda', 'Blekhet', 'Frossa'],
    answer: 0,
    explanation:
      'De fyra klassiska tecknen är rodnad, värme, svullnad och smärta (ibland nämns även nedsatt funktion).',
  },
  {
    id: 'm1-im-04',
    topic: 'immunologi',
    difficulty: 'intermediar',
    q: 'Vilka celler tillverkar antikroppar?',
    options: ['B-lymfocyter (plasmaceller)', 'Röda blodkroppar', 'Blodplättar', 'Leverceller'],
    answer: 0,
    explanation:
      'B-lymfocyter mognar till plasmaceller som producerar antikroppar mot ett specifikt antigen.',
  },
  {
    id: 'm1-im-05',
    topic: 'immunologi',
    difficulty: 'intermediar',
    q: 'Antikroppar tillhör vilken grupp av molekyler?',
    options: ['Proteiner', 'Fetter', 'Kolhydrater', 'Nukleinsyror'],
    answer: 0,
    explanation: 'Antikroppar är proteiner (immunglobuliner) som känner igen och binder antigen.',
  },
  {
    id: 'm1-im-06',
    topic: 'immunologi',
    difficulty: 'intermediar',
    q: 'Hur fungerar ett vaccin i princip?',
    options: [
      'Det tillför antigen, ett försvagat smittämne eller instruktioner för ett antigen så att immunologiskt minne bildas',
      'Det tillför färdiga antibiotika till kroppen',
      'Det dödar alla bakterier i kroppen direkt',
      'Det sänker kroppstemperaturen vid infektion',
    ],
    answer: 0,
    explanation:
      'Vacciner kan innehålla antigen eller försvagade smittämnen, eller ge celler instruktioner att tillverka ett antigen, som i mRNA- och vissa vektorvacciner. Immunförsvaret bygger då upp ett minne som ger ett snabbare svar vid senare smitta.',
  },
  {
    id: 'm1-im-07',
    topic: 'immunologi',
    difficulty: 'avancerad',
    q: 'Vilken celltyp dödar virusinfekterade celler direkt?',
    options: ['Cytotoxiska T-celler', 'B-celler', 'Röda blodkroppar', 'Blodplättar'],
    answer: 0,
    explanation:
      'Cytotoxiska T-celler (T-mördarceller) känner igen och avdödar infekterade celler. B-celler bildar antikroppar.',
  },
  {
    id: 'm1-im-08',
    topic: 'immunologi',
    difficulty: 'avancerad',
    q: 'Vad innebär immunologiskt minne?',
    options: [
      'Kroppen reagerar snabbare och kraftigare vid ny kontakt med samma antigen',
      'Kroppen glömmer tidigare infektioner',
      'Antikropparna försvinner direkt efter en infektion',
      'Endast det medfödda försvaret aktiveras',
    ],
    answer: 0,
    explanation:
      'Minnesceller från en tidigare infektion eller vaccination gör att andra mötet med antigenet bemöts mycket snabbare.',
  },
]
