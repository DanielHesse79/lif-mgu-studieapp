/**
 * Extra frågebank för Modul 3 – Sjukdomslära.
 *
 * 100 NYA frågor (inga dubbletter av m3.js) fördelade på modulens fem
 * ämnesområden och tre svårighetsnivåer (grund, intermediar, avancerad).
 * Förbyggt innehåll – ingen API/kostnad.
 *
 * Fält per fråga:
 *   id          – stabil nyckel (m3b-001 ... m3b-100)
 *   topic       – internmedicin | onkologi | neurologi | psykiatri | infektion
 *   difficulty  – 'grund' | 'intermediar' | 'avancerad'
 *   q           – frågetext
 *   options     – fyra svarsalternativ (blandas vid visning)
 *   answer      – index i options för rätt svar
 *   explanation – kort förklaring som visas efter svar
 *
 * Rätt svars position varierar i datan (answer 0–3). Fördelning per topic:
 * internmedicin 26, onkologi 20, neurologi 20, psykiatri 14, infektion 20.
 */

export const M3_QUESTIONS_EXTRA = [
  // ---------------- INTERNMEDICIN ----------------
  {
    id: 'm3b-001',
    topic: 'internmedicin',
    difficulty: 'grund',
    q: 'Vilket av följande är ett klassiskt tidigt symtom vid diabetes med högt blodsocker?',
    options: [
      'Förbättrad nattsyn',
      'Minskad puls i vila',
      'Ökad törst och stora urinmängder',
      'Ökad muskelmassa',
    ],
    answer: 2,
    explanation:
      'Högt blodsocker gör att socker följer med ut i urinen och drar med sig vatten, vilket ger stora urinmängder och därmed ökad törst.',
  },
  {
    id: 'm3b-002',
    topic: 'internmedicin',
    difficulty: 'grund',
    q: 'Vad är hypoglykemi?',
    options: [
      'För lågt blodsocker',
      'För högt blodsocker',
      'För lågt blodtryck',
      'För hög kroppstemperatur',
    ],
    answer: 0,
    explanation:
      'Hypoglykemi betyder för lågt blodsocker och kan ge svettningar, skakningar, hunger och förvirring. En vaken person kan få snabba kolhydrater. Ge aldrig något genom munnen till en medvetslös person; ge glukagon om det finns och du vet hur det används, ring 112 och lägg personen i stabilt sidoläge.',
  },
  {
    id: 'm3b-003',
    topic: 'internmedicin',
    difficulty: 'grund',
    q: 'Vilken folksjukdom innebär att kärlväggarna utsätts för ett ständigt förhöjt tryck?',
    options: [
      'Astma',
      'Hypertoni',
      'Anemi',
      'Diabetes typ 1',
    ],
    answer: 1,
    explanation:
      'Hypertoni (högt blodtryck) innebär att blodet trycker hårdare mot kärlväggarna än normalt, vilket på sikt sliter på kärl och organ.',
  },
  {
    id: 'm3b-004',
    topic: 'internmedicin',
    difficulty: 'grund',
    q: 'Vad är ett typiskt symtom vid hjärtsvikt?',
    options: [
      'Förhöjd syn på långt håll',
      'Ökad aptit och viktnedgång',
      'Torr hud utan andra besvär',
      'Andfåddhet och svullna ben',
    ],
    answer: 3,
    explanation:
      'När hjärtat pumpar sämre samlas vätska i kroppen. Det ger andfåddhet (vätska i lungorna) och svullnad, ofta i benen.',
  },
  {
    id: 'm3b-005',
    topic: 'internmedicin',
    difficulty: 'grund',
    q: 'Vad kallas bröstsmärta som uppstår vid ansträngning på grund av otillräckligt blodflöde till hjärtmuskeln?',
    options: [
      'Migrän',
      'Kärlkramp (angina pectoris)',
      'Hjärtsvikt',
      'Lunginflammation',
    ],
    answer: 1,
    explanation:
      'Kärlkramp beror på att hjärtmuskeln tillfälligt får för lite syre, oftast vid ansträngning, på grund av förträngda kranskärl.',
  },
  {
    id: 'm3b-006',
    topic: 'internmedicin',
    difficulty: 'grund',
    q: 'Vad innebär förmaksflimmer?',
    options: [
      'En oregelbunden och ofta snabb hjärtrytm',
      'Att hjärtat slutar slå helt',
      'Att blodtrycket blir för lågt',
      'En infektion i hjärtsäcken',
    ],
    answer: 0,
    explanation:
      'Förmaksflimmer är en vanlig rytmrubbning där förmaken slår oregelbundet och okoordinerat, vilket ger en ojämn puls.',
  },
  {
    id: 'm3b-007',
    topic: 'internmedicin',
    difficulty: 'grund',
    q: 'Vilken körtel styr ämnesomsättningen via hormoner som tyroxin?',
    options: [
      'Bukspottkörteln',
      'Binjuren',
      'Mjälten',
      'Sköldkörteln',
    ],
    answer: 3,
    explanation:
      'Sköldkörteln (tyreoidea) producerar hormoner som tyroxin (T4) och styr därmed kroppens ämnesomsättning.',
  },
  {
    id: 'm3b-008',
    topic: 'internmedicin',
    difficulty: 'grund',
    q: 'Vad är ett vanligt symtom vid hypotyreos (underfunktion i sköldkörteln)?',
    options: [
      'Hjärtklappning och svettningar',
      'Ofrivillig viktnedgång och oro',
      'Trötthet, frusenhet och viktuppgång',
      'Plötslig hög feber',
    ],
    answer: 2,
    explanation:
      'Vid hypotyreos sjunker ämnesomsättningen, vilket typiskt ger trötthet, köldkänsla, viktuppgång och tröghet.',
  },
  {
    id: 'm3b-009',
    topic: 'internmedicin',
    difficulty: 'grund',
    q: 'Vid astma drabbas framför allt vilken del av kroppen?',
    options: [
      'Njurarna',
      'Luftrören i lungorna',
      'Hjärtklaffarna',
      'Magsäcken',
    ],
    answer: 1,
    explanation:
      'Astma är en inflammatorisk sjukdom i luftvägarna där luftrören blir trånga och känsliga, vilket ger andnöd och pip i bröstet.',
  },
  {
    id: 'm3b-010',
    topic: 'internmedicin',
    difficulty: 'grund',
    q: 'Vilken livsstilsfaktor är den viktigaste riskfaktorn för typ 2-diabetes?',
    options: [
      'Övervikt och fysisk inaktivitet',
      'För lite solljus',
      'För hög vätskeintag',
      'För mycket sömn',
    ],
    answer: 0,
    explanation:
      'Övervikt, särskilt bukfetma, och stillasittande ökar insulinresistensen och är centrala riskfaktorer för typ 2-diabetes.',
  },
  {
    id: 'm3b-011',
    topic: 'internmedicin',
    difficulty: 'intermediar',
    q: 'Vad mäter blodprovet HbA1c?',
    options: [
      'Blodsockret just i mätögonblicket',
      'Mängden insulin i blodet',
      'Antalet röda blodkroppar',
      'Det genomsnittliga blodsockret över de senaste två till tre månaderna',
    ],
    answer: 3,
    explanation:
      'HbA1c speglar hur mycket socker som bundit till de röda blodkropparna och ger ett mått på blodsockerläget över de senaste två till tre månaderna.',
  },
  {
    id: 'm3b-012',
    topic: 'internmedicin',
    difficulty: 'intermediar',
    q: 'Vilket av följande är en typisk långtidskomplikation vid dåligt reglerad diabetes?',
    options: [
      'Förbättrad blodcirkulation',
      'Ökad bentäthet',
      'Skador på ögon, njurar och nerver',
      'Snabbare sårläkning',
    ],
    answer: 2,
    explanation:
      'Långvarigt högt blodsocker skadar små och stora blodkärl, vilket kan ge ögonskador (retinopati), njurskada och nervskada (neuropati).',
  },
  {
    id: 'm3b-013',
    topic: 'internmedicin',
    difficulty: 'intermediar',
    q: 'Vad är en kärnskillnad i lungfunktionen mellan astma och KOL?',
    options: [
      'Astma drabbar bara barn, KOL bara vuxna',
      'KOL ger besvär i anfall, medan astma ger jämna besvär',
      'Vid astma är luftvägsförträngningen oftast reversibel, vid KOL är den till stor del bestående',
      'Astma ger bestående lungskada, KOL går över med behandling',
    ],
    answer: 2,
    explanation:
      'Vid astma går luftvägsförträngningen oftast att häva (reversibel), medan KOL ger en kronisk, till stor del bestående försämring av luftflödet.',
  },
  {
    id: 'm3b-014',
    topic: 'internmedicin',
    difficulty: 'intermediar',
    q: 'Vad är hjärtinfarkt?',
    options: [
      'Att en del av hjärtmuskeln dör på grund av stopp i blodflödet (oftast en blodpropp i kranskärl)',
      'Att hjärtat slår för långsamt',
      'En inflammation i hjärtsäcken',
      'Ett medfött hål mellan hjärtats kamrar',
    ],
    answer: 0,
    explanation:
      'Vid hjärtinfarkt täpps ett kranskärl till, oftast av en blodpropp, så att en del av hjärtmuskeln inte får syre och börjar dö.',
  },
  {
    id: 'm3b-015',
    topic: 'internmedicin',
    difficulty: 'intermediar',
    q: 'Varför ökar förmaksflimmer risken för stroke?',
    options: [
      'Det höjer blodsockret kraftigt',
      'Blodet kan stå mer eller mindre stilla i förmaken och bilda proppar som kan föras till hjärnan',
      'Det gör blodet tjockare av vätskebrist',
      'Det sänker syrehalten i blodet permanent',
    ],
    answer: 1,
    explanation:
      'Vid förmaksflimmer rör sig blodet ojämnt i förmaken, vilket kan ge blodproppar. Lossnar en propp kan den föras till hjärnan och orsaka stroke.',
  },
  {
    id: 'm3b-016',
    topic: 'internmedicin',
    difficulty: 'intermediar',
    q: 'Vad kännetecknar hypertyreos (överfunktion i sköldkörteln)?',
    options: [
      'Frusenhet, trötthet och viktuppgång',
      'Lågt blodtryck och torr hud som enda tecken',
      'Förstoppning och långsam puls',
      'Hjärtklappning, svettningar, oro och ofrivillig viktnedgång',
    ],
    answer: 3,
    explanation:
      'Vid hypertyreos produceras för mycket sköldkörtelhormon, vilket varvar upp kroppen: hjärtklappning, svettning, oro och viktnedgång.',
  },
  {
    id: 'm3b-017',
    topic: 'internmedicin',
    difficulty: 'intermediar',
    q: 'Vilken typ av sjukdom är systemisk lupus erythematosus (SLE)?',
    options: [
      'En autoimmun (reumatisk) sjukdom som kan engagera flera organ',
      'En infektion orsakad av virus',
      'En form av cancer i blodet',
      'En medfödd ämnesomsättningssjukdom',
    ],
    answer: 0,
    explanation:
      'SLE är en autoimmun sjukdom där immunförsvaret angriper kroppens egna vävnader och kan påverka bland annat hud, leder och njurar.',
  },
  {
    id: 'm3b-018',
    topic: 'internmedicin',
    difficulty: 'intermediar',
    q: 'Vad är artros?',
    options: [
      'En autoimmun inflammation i alla leder samtidigt',
      'En bakterieinfektion i blodet',
      'En sjukdom i hjärtklaffarna',
      'En sjukdom i hela leden som påverkar brosk, ben och andra ledvävnader',
    ],
    answer: 3,
    explanation:
      'Artros är en sjukdom i hela leden och kan påverka brosk, ben, ledhinna och andra vävnader. Den kan ge smärta, stelhet och nedsatt funktion och är inte enbart normalt slitage eller en oundviklig följd av åldrande.',
  },
  {
    id: 'm3b-019',
    topic: 'internmedicin',
    difficulty: 'intermediar',
    q: 'Vilket av följande beskriver bäst "systoliskt" blodtryck?',
    options: [
      'Trycket i kärlen när hjärtat vilar mellan slagen',
      'Trycket i kärlen när hjärtat drar ihop sig och pumpar ut blod',
      'Pulsfrekvensen i vila',
      'Mängden syre i blodet',
    ],
    answer: 1,
    explanation:
      'Det systoliska (övre) trycket mäts när hjärtat pumpar ut blod. Det diastoliska (nedre) trycket är det som råder när hjärtat vilar mellan slagen.',
  },
  {
    id: 'm3b-020',
    topic: 'internmedicin',
    difficulty: 'avancerad',
    q: 'Vid typ 1-diabetes kan svår insulinbrist leda till diabetesketoacidos. Vad innebär detta tillstånd?',
    options: [
      'Blodsockret blir farligt lågt',
      'Kroppen lagrar för mycket vatten i cellerna',
      'Kroppen bryter ner fett för energi och bildar sura ketoner, vilket gör blodet surt',
      'Insulinhalten blir för hög',
    ],
    answer: 2,
    explanation:
      'Utan insulin kan cellerna inte ta upp socker, så kroppen bryter ned fett och bildar ketoner. Dessa gör blodet surt (acidos) – ett livshotande tillstånd.',
  },
  {
    id: 'm3b-021',
    topic: 'internmedicin',
    difficulty: 'avancerad',
    q: 'Varför kan personer med diabetes få sämre känsel och sår som läker dåligt på fötterna?',
    options: [
      'Insulin samlas i fötterna',
      'Diabetes gör huden tjockare och starkare',
      'Högt blodsocker skadar både nerver och små blodkärl över tid',
      'Det beror enbart på övervikt, inte på sjukdomen',
    ],
    answer: 2,
    explanation:
      'Långvarigt högt blodsocker skadar nerver (neuropati) och försämrar cirkulationen i små kärl, vilket ger nedsatt känsel och sämre sårläkning.',
  },
  {
    id: 'm3b-022',
    topic: 'internmedicin',
    difficulty: 'avancerad',
    q: 'Hur kan obehandlad hjärtsvikt leda till andfåddhet vid liggande (ortopné)?',
    options: [
      'I liggande ökar återflödet av blod till hjärtat och vätska trycks ut i lungorna',
      'Lungorna blir mindre när man ligger ner',
      'Hjärtat slutar slå i liggande läge',
      'Syret i rummet minskar nattetid',
    ],
    answer: 0,
    explanation:
      'I liggande ökar blodåterflödet till det redan belastade hjärtat, vilket höjer trycket i lungkärlen och pressar ut vätska, så att andningen försämras.',
  },
  {
    id: 'm3b-023',
    topic: 'internmedicin',
    difficulty: 'avancerad',
    q: 'Varför mäter man ofta TSH tillsammans med fritt T4 för att bedöma sköldkörtelns funktion?',
    options: [
      'TSH är samma sak som tyroxin',
      'TSH mäter halten av insulin',
      'TSH visar mängden röda blodkroppar',
      'Vid primär sköldkörtelsjukdom stiger TSH vanligen vid underfunktion och sjunker vid överfunktion',
    ],
    answer: 3,
    explanation:
      'Hypofysen styr sköldkörteln via TSH. Vid primär hypotyreos är fritt T4 lågt och TSH vanligen högt, medan primär hypertyreos oftast ger högt fritt T4 och lågt TSH. Vid central sjukdom i hypofys eller hypotalamus kan fritt T4 vara lågt trots lågt eller normalt TSH.',
  },
  {
    id: 'm3b-024',
    topic: 'internmedicin',
    difficulty: 'grund',
    q: 'Vad är den vanligaste bakomliggande processen vid både kärlkramp och hjärtinfarkt?',
    options: [
      'En medfödd missbildning i hjärtklaffarna',
      'Åderförkalkning (ateroskleros) i kranskärlen',
      'En virusinfektion i hjärtmuskeln',
      'Brist på röda blodkroppar',
    ],
    answer: 1,
    explanation:
      'Ateroskleros med plack i kranskärlen förtränger kärlen. Det ger kärlkramp vid ansträngning, och en plackruptur med propp kan utlösa hjärtinfarkt.',
  },
  {
    id: 'm3b-025',
    topic: 'internmedicin',
    difficulty: 'avancerad',
    q: 'Varför kan personer med KOL få förhöjd koldioxid i blodet vid svår sjukdom?',
    options: [
      'Den skadade lungan klarar inte att vädra ut koldioxid tillräckligt effektivt',
      'KOL gör att kroppen producerar extra koldioxid i levern',
      'Koldioxid bildas i njurarna vid KOL',
      'Det beror enbart på att patienten andas för snabbt',
    ],
    answer: 0,
    explanation:
      'Vid svår KOL försämras gasutbytet och utvädringen av koldioxid, vilket kan leda till att koldioxid ansamlas i blodet (hyperkapni).',
  },
  {
    id: 'm3b-026',
    topic: 'internmedicin',
    difficulty: 'avancerad',
    q: 'Varför är icke-rökande personer med kroniska andningsbesvär ändå ibland aktuella för KOL-utredning?',
    options: [
      'KOL kan bara orsakas av rökning, så utredning är onödig',
      'Även luftföroreningar, yrkesexponering och i sällsynta fall ärftlig enzymbrist kan ge KOL',
      'Alla med hosta har KOL oavsett orsak',
      'KOL smittar och kan fångas upp via närkontakt',
    ],
    answer: 1,
    explanation:
      'Rökning dominerar som orsak, men damm och kemikalier i arbetet, luftföroreningar och ärftlig brist på alfa-1-antitrypsin kan också ge KOL.',
  },
  // ---------------- ONKOLOGI ----------------
  {
    id: 'm3b-027',
    topic: 'onkologi',
    difficulty: 'grund',
    q: 'Vilken är en av de vanligaste cancerformerna hos kvinnor?',
    options: [
      'Prostatacancer',
      'Testikelcancer',
      'Livmoderhalscancer',
      'Bröstcancer',
    ],
    answer: 3,
    explanation:
      'Bröstcancer är den vanligaste cancerformen hos kvinnor. Tidig upptäckt via mammografiscreening förbättrar prognosen.',
  },
  {
    id: 'm3b-028',
    topic: 'onkologi',
    difficulty: 'grund',
    q: 'Vilken cancerform är vanligast hos män?',
    options: [
      'Bröstcancer',
      'Hudcancer i ögat',
      'Prostatacancer',
      'Sköldkörtelcancer',
    ],
    answer: 2,
    explanation:
      'Prostatacancer är den vanligaste cancerformen hos män och förekommer framför allt i högre åldrar.',
  },
  {
    id: 'm3b-029',
    topic: 'onkologi',
    difficulty: 'grund',
    q: 'Vilken är den enskilt viktigaste riskfaktorn för lungcancer?',
    options: [
      'Högt blodtryck',
      'Solljus',
      'Tobaksrökning',
      'Stillasittande arbete',
    ],
    answer: 2,
    explanation:
      'Rökning är den helt dominerande riskfaktorn för lungcancer. Risken minskar gradvis efter rökstopp.',
  },
  {
    id: 'm3b-030',
    topic: 'onkologi',
    difficulty: 'grund',
    q: 'Vad är syftet med screening, till exempel mammografi?',
    options: [
      'Att behandla cancer som redan spridit sig',
      'Att vaccinera mot cancer',
      'Att mäta blodtrycket regelbundet',
      'Att minska sjuklighet eller dödlighet genom att undersöka symtomfria personer när nyttan överväger skadorna',
    ],
    answer: 3,
    explanation:
      'Screening undersöker symtomfria personer för att upptäcka sjukdom i ett skede där insatser kan minska sjuklighet eller dödlighet. Nyttan måste vägas mot bland annat falskt positiva fynd, överdiagnostik och onödig behandling.',
  },
  {
    id: 'm3b-031',
    topic: 'onkologi',
    difficulty: 'grund',
    q: 'Vilken behandling innebär kirurgisk borttagning av en tumör?',
    options: [
      'Strålbehandling',
      'Operation',
      'Cytostatika',
      'Immunterapi',
    ],
    answer: 1,
    explanation:
      'Operation (kirurgi) syftar till att avlägsna tumören fysiskt och är ofta en grundpelare vid behandling av solida tumörer.',
  },
  {
    id: 'm3b-032',
    topic: 'onkologi',
    difficulty: 'grund',
    q: 'Vilken är en vanlig cancerform i mag-tarmkanalen?',
    options: [
      'Tjocktarmscancer',
      'Lungcancer',
      'Hudcancer',
      'Hjärntumör',
    ],
    answer: 0,
    explanation:
      'Tjocktarmscancer (kolorektalcancer) är en av de vanligaste cancerformerna och kan upptäckas tidigt med screening av blod i avföringen.',
  },
  {
    id: 'm3b-033',
    topic: 'onkologi',
    difficulty: 'grund',
    q: 'Vad menas med en godartad (benign) tumör?',
    options: [
      'En tumör som försvinner av sig själv',
      'En tumör som sprider sig snabbt',
      'En tumör som bara finns i blodet',
      'En tumör som växer lokalt och inte sprider sig till andra organ',
    ],
    answer: 3,
    explanation:
      'En benign tumör växer avgränsat och saknar förmåga att sprida sig (metastasera). Den kan ändå ge besvär om den trycker på omgivningen.',
  },
  {
    id: 'm3b-034',
    topic: 'onkologi',
    difficulty: 'intermediar',
    q: 'Vad står bokstäverna i TNM-systemet huvudsakligen för?',
    options: [
      'Tumörens storlek, lymfkörtelspridning och förekomst av metastaser',
      'Tid, näring och medicin',
      'Temperatur, nivå och mängd',
      'Typ, namn och metod',
    ],
    answer: 0,
    explanation:
      'TNM beskriver tumör (T) storlek/utbredning, spridning till lymfkörtlar (N = nodes) och fjärrmetastaser (M). Det används för stadieindelning.',
  },
  {
    id: 'm3b-035',
    topic: 'onkologi',
    difficulty: 'intermediar',
    q: 'Vad är en onkogen?',
    options: [
      'En gen som reparerar skador i cellens DNA',
      'En gen som bara finns hos virus',
      'En gen som, när den blir överaktiv, kan driva på okontrollerad celldelning',
      'En gen som styr ögonfärg',
    ],
    answer: 2,
    explanation:
      'Onkogener uppstår ofta ur normala gener (proto-onkogener). När de blir överaktiva kan de bidra till att celler delar sig okontrollerat.',
  },
  {
    id: 'm3b-036',
    topic: 'onkologi',
    difficulty: 'intermediar',
    q: 'Vad är en tumörsuppressorgen?',
    options: [
      'En gen som snabbar på tumörtillväxt',
      'En gen som normalt bromsar celldelning eller startar celldöd',
      'En gen som producerar cytostatika',
      'En gen som bara aktiveras vid infektion',
    ],
    answer: 1,
    explanation:
      'Tumörsuppressorgener, till exempel p53, hämmar oönskad celldelning. Om de slås ut förlorar cellen viktiga bromsar mot cancerutveckling.',
  },
  {
    id: 'm3b-037',
    topic: 'onkologi',
    difficulty: 'intermediar',
    q: 'Varför ger cytostatika ofta biverkningar som håravfall och påverkan på blodvärden?',
    options: [
      'De drabbar även friska celler som delar sig snabbt, t.ex. i hårsäckar och benmärg',
      'De fastnar enbart i håret',
      'De höjer blodtrycket kraftigt',
      'De stör kroppens upptag av vitaminer och järn',
    ],
    answer: 0,
    explanation:
      'Cytostatika slår mot celler som delar sig snabbt. Eftersom även hårsäckar, benmärg och slemhinnor delar sig snabbt drabbas de också.',
  },
  {
    id: 'm3b-038',
    topic: 'onkologi',
    difficulty: 'intermediar',
    q: 'Vad menas med att en cancer "metastaserar"?',
    options: [
      'Tumören krymper av sig själv',
      'Cancerceller sprider sig från ursprungstumören och bildar nya tumörer på andra ställen',
      'Tumören byter färg',
      'Tumören blir godartad',
    ],
    answer: 1,
    explanation:
      'Metastasering innebär att cancerceller lossnar och sprider sig via blod eller lymfa och växer till nya tumörer i andra organ.',
  },
  {
    id: 'm3b-039',
    topic: 'onkologi',
    difficulty: 'intermediar',
    q: 'Vad är skillnaden mellan kurativ och palliativ tumörbehandling?',
    options: [
      'Kurativ behandling ges på sjukhus, palliativ i hemmet',
      'De betyder samma sak',
      'Kurativ behandling syftar till bot, medan palliativ tumörbehandling syftar till att bromsa sjukdomen eller lindra symtom när bot inte är möjlig',
      'Kurativ används bara vid godartade tumörer',
    ],
    answer: 2,
    explanation:
      'Kurativ tumörbehandling syftar till bot. Palliativ tumörbehandling kan bromsa sjukdomen och lindra symtom när bot inte är möjlig. Palliativ vård är ett bredare stöd för livskvalitet och symtomlindring och kan sättas in tidigt parallellt med sjukdomsinriktad behandling.',
  },
  {
    id: 'm3b-040',
    topic: 'onkologi',
    difficulty: 'intermediar',
    q: 'Vilken roll spelar HPV-vaccination i förebyggande av cancer?',
    options: [
      'Den botar redan etablerad cancer',
      'Den skyddar mot lungcancer',
      'Den ersätter behovet av all cancerbehandling',
      'Den minskar risken för livmoderhalscancer och vissa andra HPV-relaterade cancerformer',
    ],
    answer: 3,
    explanation:
      'Humant papillomvirus (HPV) orsakar bland annat livmoderhalscancer. Vaccination mot HPV minskar risken att utveckla dessa cancerformer.',
  },
  {
    id: 'm3b-041',
    topic: 'onkologi',
    difficulty: 'avancerad',
    q: 'Vad menas med att cancer ofta uppstår genom en stegvis ansamling av genetiska förändringar?',
    options: [
      'En enda mutation räcker för att en cell ska bli cancer',
      'Cancer beror enbart på ärftliga gener',
      'Flera mutationer behöver oftast samlas i en cell innan den blir en cancercell',
      'Mutationer uppstår först efter att tumören har bildats',
    ],
    answer: 2,
    explanation:
      'Cancerutveckling är oftast en flerstegsprocess där förändringar i flera gener (t.ex. aktiverade onkogener och utslagna tumörsuppressorer) samlas över tid.',
  },
  {
    id: 'm3b-042',
    topic: 'onkologi',
    difficulty: 'avancerad',
    q: 'Hur fungerar en typ av immunterapi som kallas checkpointhämmare i princip?',
    options: [
      'Den släpper på bromsar som annars hindrar immunförsvaret från att angripa cancercellerna',
      'Den tillför nya cancerceller för att träna kroppen',
      'Den ersätter strålbehandling med värme',
      'Den sänker kroppstemperaturen för att stoppa tumören',
    ],
    answer: 0,
    explanation:
      'Checkpointhämmare blockerar de molekylära bromsar som cancern utnyttjar för att undgå immunförsvaret, så att immuncellerna kan angripa tumören.',
  },
  {
    id: 'm3b-043',
    topic: 'onkologi',
    difficulty: 'avancerad',
    q: 'Varför ges cytostatika ofta i cykler med uppehåll mellan behandlingarna?',
    options: [
      'För att cancercellerna ska hinna växa till sig',
      'För att läkemedlet ska hinna bli starkare',
      'Det saknar betydelse hur ofta det ges',
      'För att ge friska celler tid att återhämta sig mellan behandlingsomgångarna',
    ],
    answer: 3,
    explanation:
      'Uppehållen låter normala, snabbdelande celler (t.ex. benmärg och slemhinnor) återhämta sig, medan cancercellerna fortsatt bekämpas i nästa cykel.',
  },
  {
    id: 'm3b-044',
    topic: 'onkologi',
    difficulty: 'avancerad',
    q: 'Vad är ett exempel på en princip bakom målriktad behandling vid vissa bröstcancerformer?',
    options: [
      'Läkemedlet höjer kroppstemperaturen för att döda alla celler',
      'Läkemedel riktas mot en specifik receptor (t.ex. HER2) som finns i ökad mängd på tumörcellerna',
      'Behandlingen blockerar all celldelning i kroppen lika mycket',
      'Den ersätter immunförsvaret helt',
    ],
    answer: 1,
    explanation:
      'Målriktad terapi utnyttjar specifika egenskaper hos tumören, t.ex. att vissa bröstcancerceller har mycket HER2-receptor som läkemedlet kan rikta sig mot.',
  },
  {
    id: 'm3b-045',
    topic: 'onkologi',
    difficulty: 'avancerad',
    q: 'Varför är förmågan att bilda nya blodkärl (angiogenes) viktig för en växande tumör?',
    options: [
      'Blodkärl gör tumören godartad',
      'Angiogenes stoppar cancercellernas delning',
      'Tumören behöver egna blodkärl för att få syre och näring när den växer',
      'Det har ingen betydelse för tumörens tillväxt',
    ],
    answer: 2,
    explanation:
      'En tumör som växer behöver tillförsel av syre och näring. Genom att stimulera nybildning av blodkärl (angiogenes) säkrar den sin försörjning.',
  },
  {
    id: 'm3b-046',
    topic: 'onkologi',
    difficulty: 'intermediar',
    q: 'Vad är syftet med adjuvant behandling efter en canceroperation?',
    options: [
      'Att minska risken för återfall genom att slå mot eventuella kvarvarande cancerceller',
      'Att enbart lindra smärta efter operationen',
      'Att förbereda inför en ny operation',
      'Att ersätta operationen helt',
    ],
    answer: 0,
    explanation:
      'Adjuvant behandling (t.ex. cytostatika eller strålning) ges efter operation för att eliminera mikroskopisk kvarvarande sjukdom och minska återfallsrisken.',
  },
  // ---------------- NEUROLOGI ----------------
  {
    id: 'm3b-047',
    topic: 'neurologi',
    difficulty: 'grund',
    q: 'Vad står bokstäverna i minnesregeln FAST för vid misstänkt stroke?',
    options: [
      'Feber, Andning, Smärta, Trötthet',
      'Face, Arms, Speech, Time (ansikte, armar, tal, tid)',
      'Fötter, Armar, Syn, Tunga',
      'Fokus, Aktivitet, Sömn, Tid',
    ],
    answer: 1,
    explanation:
      'FAST står för Face, Arms, Speech, Time. Hängande mungipa, svaghet i arm och sluddrigt tal är varningstecken – och tid är avgörande att larma snabbt.',
  },
  {
    id: 'm3b-048',
    topic: 'neurologi',
    difficulty: 'grund',
    q: 'Vilken typ av stroke orsakas av en blodpropp som täpper till ett kärl i hjärnan?',
    options: [
      'Hemorragisk stroke',
      'Migränstroke',
      'Epileptisk stroke',
      'Ischemisk stroke',
    ],
    answer: 3,
    explanation:
      'Ischemisk stroke (hjärninfarkt) orsakas av en propp som stoppar blodflödet. Den utgör majoriteten av alla stroke.',
  },
  {
    id: 'm3b-049',
    topic: 'neurologi',
    difficulty: 'grund',
    q: 'Vad orsakar en hemorragisk stroke?',
    options: [
      'En blödning i eller runt hjärnan',
      'En blodpropp i benet',
      'En infektion i örat',
      'För lågt blodsocker',
    ],
    answer: 0,
    explanation:
      'Hemorragisk stroke beror på att ett blodkärl i hjärnan brister och blöder, vilket skadar hjärnvävnaden och ökar trycket inne i skallen.',
  },
  {
    id: 'm3b-050',
    topic: 'neurologi',
    difficulty: 'grund',
    q: 'Vilket av följande är en viktig påverkbar riskfaktor för stroke?',
    options: [
      'Att dricka vatten',
      'Högt blodtryck',
      'Normal vikt',
      'Regelbunden sömn',
    ],
    answer: 1,
    explanation:
      'Högt blodtryck är den enskilt viktigaste påverkbara riskfaktorn för stroke. Rökning, diabetes och förmaksflimmer ökar också risken.',
  },
  {
    id: 'm3b-051',
    topic: 'neurologi',
    difficulty: 'grund',
    q: 'Vilken sjukdom ger typiskt symtomen skakningar, muskelstelhet och långsamma rörelser?',
    options: [
      'Migrän',
      'Epilepsi',
      'Parkinsons sjukdom',
      'Stroke',
    ],
    answer: 2,
    explanation:
      'Parkinsons sjukdom kännetecknas av vilotremor, stelhet (rigiditet) och långsamma rörelser (bradykinesi) på grund av brist på dopamin.',
  },
  {
    id: 'm3b-052',
    topic: 'neurologi',
    difficulty: 'grund',
    q: 'Vad är den vanligaste formen av demens?',
    options: [
      'Parkinsons sjukdom',
      'Multipel skleros',
      'Epilepsi',
      'Alzheimers sjukdom',
    ],
    answer: 3,
    explanation:
      'Alzheimers sjukdom är den vanligaste demenssjukdomen och kännetecknas av tilltagande problem med minne och andra kognitiva funktioner.',
  },
  {
    id: 'm3b-053',
    topic: 'neurologi',
    difficulty: 'grund',
    q: 'Vad kan utlösa ett migränanfall hos många personer?',
    options: [
      'Att dricka vatten',
      'Att sova åtta timmar',
      'Vissa utlösande faktorer som stress, sömnbrist eller starka dofter',
      'Att äta regelbundet',
    ],
    answer: 2,
    explanation:
      'Migrän kan utlösas av faktorer som stress, sömnbrist, hormonella förändringar, vissa födoämnen eller starka sinnesintryck.',
  },
  {
    id: 'm3b-054',
    topic: 'neurologi',
    difficulty: 'intermediar',
    q: 'Varför betraktas en TIA som en viktig varningssignal?',
    options: [
      'Den innebär kraftigt ökad risk för en kommande, verklig stroke',
      'Den visar att en hjärnblödning har börjat',
      'Den ger bestående förlamning i de flesta fall',
      'Den är ofarlig och kräver ingen åtgärd',
    ],
    answer: 0,
    explanation:
      'En TIA visar att det finns en benägenhet för proppbildning eller kärlsjukdom. Risken för en fullbordad stroke är förhöjd, särskilt den närmaste tiden.',
  },
  {
    id: 'm3b-055',
    topic: 'neurologi',
    difficulty: 'intermediar',
    q: 'Vad är ett "aurasymtom" som vissa personer med migrän upplever?',
    options: [
      'En bestående förlamning i benen',
      'Övergående synrubbningar, t.ex. flimmer eller blinda fläckar, före eller under anfallet',
      'Hög feber',
      'Plötslig viktnedgång',
    ],
    answer: 1,
    explanation:
      'Aura är övergående neurologiska symtom, oftast synfenomen som flimmer eller bortfall, som hos vissa föregår eller följer migränhuvudvärken.',
  },
  {
    id: 'm3b-056',
    topic: 'neurologi',
    difficulty: 'intermediar',
    q: 'Vad är ett generaliserat tonisk-kloniskt anfall vid epilepsi?',
    options: [
      'En kortvarig huvudvärk',
      'En övergående synrubbning utan kramper',
      'En episod av enbart yrsel',
      'Ett krampanfall med medvetslöshet, kroppsstelhet och därefter ryckningar',
    ],
    answer: 3,
    explanation:
      'Vid ett tonisk-kloniskt anfall förlorar personen medvetandet, kroppen stelnar (tonisk fas) och övergår sedan i ryckningar (klonisk fas).',
  },
  {
    id: 'm3b-057',
    topic: 'neurologi',
    difficulty: 'intermediar',
    q: 'Hur fungerar levodopa, ett vanligt läkemedel vid Parkinsons sjukdom, i princip?',
    options: [
      'Det omvandlas till dopamin i hjärnan och kompenserar för bristen',
      'Det dödar nervceller som bildar dopamin',
      'Det sänker blodtrycket',
      'Det ersätter behovet av sömn',
    ],
    answer: 0,
    explanation:
      'Levodopa är en förstadiesubstans som kan passera in i hjärnan och där omvandlas till dopamin, vilket lindrar de motoriska symtomen.',
  },
  {
    id: 'm3b-058',
    topic: 'neurologi',
    difficulty: 'intermediar',
    q: 'Vilket centralt nervsystem-organ samordnar våra rörelser, tankar och sinnesintryck?',
    options: [
      'Levern',
      'Mjälten',
      'Bukspottkörteln',
      'Hjärnan',
    ],
    answer: 3,
    explanation:
      'Hjärnan, tillsammans med ryggmärgen, utgör det centrala nervsystemet och styr rörelser, sinnen, tänkande och en mängd kroppsfunktioner.',
  },
  {
    id: 'm3b-059',
    topic: 'neurologi',
    difficulty: 'intermediar',
    q: 'Vad menas med att MS oftast debuterar i relativt ung vuxen ålder?',
    options: [
      'Sjukdomen drabbar bara nyfödda',
      'De första symtomen kommer ofta hos personer i 20–40-årsåldern',
      'Sjukdomen debuterar oftast efter 70 års ålder',
      'Sjukdomen är medfödd och syns vid födseln',
    ],
    answer: 1,
    explanation:
      'MS diagnostiseras oftast hos relativt unga vuxna, vanligen mellan 20 och 40 år, och är vanligare hos kvinnor än hos män.',
  },
  {
    id: 'm3b-060',
    topic: 'neurologi',
    difficulty: 'intermediar',
    q: 'Vad är ett tidigt och vanligt symtom vid Alzheimers sjukdom?',
    options: [
      'Plötslig förlamning i ena armen',
      'Hög feber',
      'Försämrat närminne, t.ex. att glömma nyligen inträffade händelser',
      'Skakningar i vila',
    ],
    answer: 2,
    explanation:
      'Vid Alzheimers sjukdom påverkas ofta närminnet tidigt, så att personen får svårt att minnas nyligen inträffade händelser och ny information.',
  },
  {
    id: 'm3b-061',
    topic: 'neurologi',
    difficulty: 'avancerad',
    q: 'Varför är "tiden är hjärna" ett centralt uttryck vid akut ischemisk stroke?',
    options: [
      'Ju längre blodflödet är stoppat, desto fler hjärnceller hinner dö, så snabb behandling är avgörande',
      'Hjärnan läker snabbare ju längre man väntar',
      'Behandling fungerar bäst efter flera dygn',
      'Tiden påverkar bara kostnaden, inte utfallet',
    ],
    answer: 0,
    explanation:
      'Vid ischemisk stroke dör nervceller kontinuerligt så länge blodflödet är blockerat. Snabb proppupplösning eller trombektomi kan rädda hjärnvävnad.',
  },
  {
    id: 'm3b-062',
    topic: 'neurologi',
    difficulty: 'avancerad',
    q: 'Vad menas med begreppet "penumbra" vid ischemisk stroke?',
    options: [
      'Den del av hjärnan som redan är död och inte kan räddas',
      'En typ av huvudvärk efter stroke',
      'Hjärnvävnad runt den skadade kärnan som är hotad men ännu kan räddas',
      'Ett område utan blodkärl',
    ],
    answer: 2,
    explanation:
      'Penumbra är vävnaden runt det redan skadade området som har nedsatt men inte helt upphävt blodflöde. Snabb behandling kan rädda denna vävnad.',
  },
  {
    id: 'm3b-063',
    topic: 'neurologi',
    difficulty: 'avancerad',
    q: 'Varför uppstår symtom på olika ställen i kroppen vid MS beroende på var skadorna finns?',
    options: [
      'Symtomen styrs av hur länge personen har haft MS',
      'Inflammationen kan drabba olika delar av hjärnan och ryggmärgen, som styr olika funktioner',
      'Symtomen beror enbart på muskelsjukdom',
      'Skadorna sitter bara i perifera nerver',
    ],
    answer: 1,
    explanation:
      'MS-skadorna (plack) kan sitta på olika ställen i centrala nervsystemet. Var skadan sitter avgör vilka funktioner – syn, balans, kraft osv. – som påverkas.',
  },
  {
    id: 'm3b-064',
    topic: 'neurologi',
    difficulty: 'grund',
    q: 'Vilka proteinförändringar i hjärnan förknippas särskilt med Alzheimers sjukdom?',
    options: [
      'Inlagring av järn i muskler',
      'Inlagring av socker i blodkärlen',
      'Inlagring av kalk i lederna',
      'Amyloidplack utanför nervceller och neurofibrillära nystan av tau inuti nervceller',
    ],
    answer: 3,
    explanation:
      'Vid Alzheimers sjukdom ses inlagring av amyloid-plack utanför nervceller och så kallade neurofibrillära nystan av tau-protein inuti cellerna.',
  },
  {
    id: 'm3b-065',
    topic: 'neurologi',
    difficulty: 'avancerad',
    q: 'Varför kan epileptiska anfall ge så olika symtom, från frånvaroanfall till kramper?',
    options: [
      'Alla epileptiska anfall är identiska',
      'Symtomen styrs enbart av personens ålder',
      'Det beror på blodsockernivån i muskeln',
      'Olika anfallstyper engagerar olika hjärnnätverk och kan vara fokala eller generaliserade',
    ],
    answer: 3,
    explanation:
      'Fokala anfall börjar i nätverk i ena hjärnhalvan och symtomen beror på vilka nätverk som engageras. Frånvaroanfall är generaliserade från början, och generaliserade tonisk-kloniska anfall engagerar nätverk i båda hjärnhalvorna.',
  },
  {
    id: 'm3b-066',
    topic: 'neurologi',
    difficulty: 'avancerad',
    q: 'Varför ger en skada i hjärnans ena halva ofta symtom i motsatt kroppshalva?',
    options: [
      'Hjärnan styr samma kroppshalva som skadan sitter i',
      'Symtom uppstår bara i ansiktet',
      'Nervbanorna korsar sidan, så vänster hjärnhalva styr i stort sett höger kroppshalva och tvärtom',
      'Symtomen växlar mellan kroppshalvorna under läkningen',
    ],
    answer: 2,
    explanation:
      'De viktigaste motoriska nervbanorna korsar mellan hjärnan och kroppen. Därför ger en stroke i vänster hjärnhalva oftast symtom i höger kroppshalva.',
  },
  // ---------------- PSYKIATRI ----------------
  {
    id: 'm3b-067',
    topic: 'psykiatri',
    difficulty: 'grund',
    q: 'Vad är ett vanligt symtom vid depression utöver nedstämdhet?',
    options: [
      'Ökad energi och eufori',
      'Trötthet och förlorat intresse för sådant man tidigare uppskattade',
      'Plötslig feber',
      'Förbättrad koncentration',
    ],
    answer: 1,
    explanation:
      'Vid depression är trötthet, brist på energi och förlorat intresse eller glädje (anhedoni) vanliga symtom, ofta tillsammans med sömn- och aptitförändringar.',
  },
  {
    id: 'm3b-068',
    topic: 'psykiatri',
    difficulty: 'grund',
    q: 'Vad kännetecknar en panikattack?',
    options: [
      'En plötslig och intensiv våg av ångest, ofta med hjärtklappning och andnöd',
      'En långsam och behaglig avslappning',
      'En period av djup sömn',
      'En tillfällig hörselförbättring',
    ],
    answer: 0,
    explanation:
      'En panikattack är en plötslig, intensiv ångestepisod med kroppsliga symtom som hjärtklappning, andnöd, yrsel och en känsla av att något farligt ska hända.',
  },
  {
    id: 'm3b-069',
    topic: 'psykiatri',
    difficulty: 'grund',
    q: 'Vad är ADHD?',
    options: [
      'En infektion i hjärnan',
      'En form av diabetes',
      'En tillfällig trötthet',
      'En neuropsykiatrisk funktionsnedsättning med svårigheter kring uppmärksamhet, impulsivitet och ibland överaktivitet',
    ],
    answer: 3,
    explanation:
      'ADHD är en neuropsykiatrisk funktionsnedsättning som påverkar förmågan att reglera uppmärksamhet, aktivitetsnivå och impulser.',
  },
  {
    id: 'm3b-070',
    topic: 'psykiatri',
    difficulty: 'grund',
    q: 'Vad menas med beroende av en substans?',
    options: [
      'Att man dricker mycket vatten',
      'Ett tillstånd där användningen blir tvångsmässig och fortsätter trots negativa konsekvenser',
      'Att man sover länge på helgen',
      'En tillfällig vana utan påverkan på livet',
    ],
    answer: 1,
    explanation:
      'Beroende kännetecknas av ett starkt behov av substansen, svårt att kontrollera användningen och fortsatt bruk trots skadliga följder. Det är ett sjukdomstillstånd.',
  },
  {
    id: 'm3b-071',
    topic: 'psykiatri',
    difficulty: 'grund',
    q: 'Vad är en lämplig och saklig hållning till psykisk sjukdom?',
    options: [
      'Att den är en sjukdom som kan utredas och behandlas, precis som kroppsliga sjukdomar',
      'Att den beror på svaghet hos individen',
      'Att den sällan går att behandla med gott resultat',
      'Att den är svår att skilja från vanliga humörsvängningar',
    ],
    answer: 0,
    explanation:
      'Psykisk sjukdom är ett medicinskt tillstånd som går att utreda och behandla. En saklig, icke-stigmatiserande syn underlättar att söka och få vård.',
  },
  {
    id: 'm3b-072',
    topic: 'psykiatri',
    difficulty: 'intermediar',
    q: 'Vad är skillnaden mellan "positiva" och "negativa" symtom vid schizofreni?',
    options: [
      'Positiva symtom är bra, negativa är dåliga',
      'Positiva symtom finns bara hos män',
      'Positiva symtom är sådant som tillkommer (t.ex. hallucinationer), negativa är sådant som avtar (t.ex. minskad initiativförmåga)',
      'Det finns ingen skillnad',
    ],
    answer: 2,
    explanation:
      'Positiva symtom är tillägg till det normala, t.ex. hallucinationer och vanföreställningar. Negativa symtom innebär bortfall, t.ex. känslomässig avflackning och passivitet.',
  },
  {
    id: 'm3b-073',
    topic: 'psykiatri',
    difficulty: 'intermediar',
    q: 'Vilken läkemedelsgrupp används framför allt vid behandling av psykos och schizofreni?',
    options: [
      'Antibiotika',
      'Antihistaminer',
      'Antipsykotiska läkemedel (neuroleptika)',
      'Blodförtunnande läkemedel',
    ],
    answer: 2,
    explanation:
      'Antipsykotiska läkemedel påverkar bland annat dopaminsystemet i hjärnan och används för att dämpa psykossymtom som hallucinationer och vanföreställningar.',
  },
  {
    id: 'm3b-074',
    topic: 'psykiatri',
    difficulty: 'intermediar',
    q: 'Vad är generaliserat ångestsyndrom (GAD)?',
    options: [
      'En kortvarig oro endast inför ett specifikt prov',
      'En sjukdom som bara ger fysisk smärta',
      'En form av sömnsjukdom',
      'En ihållande och svårkontrollerad oro för många olika vardagssituationer',
    ],
    answer: 3,
    explanation:
      'GAD innebär en överdriven, ihållande och svårkontrollerad oro som rör flera olika områden i livet och pågår under lång tid.',
  },
  {
    id: 'm3b-075',
    topic: 'psykiatri',
    difficulty: 'intermediar',
    q: 'Vilken behandlingsform, vid sidan av läkemedel, har god effekt vid bland annat depression och ångest?',
    options: [
      'Psykoterapi, till exempel kognitiv beteendeterapi (KBT)',
      'Antibiotikakur',
      'Strålbehandling',
      'Insulininjektioner',
    ],
    answer: 0,
    explanation:
      'Psykoterapi som KBT är en väl beprövad behandling vid depression och ångest, ofta i kombination med eller som alternativ till läkemedel.',
  },
  {
    id: 'm3b-076',
    topic: 'psykiatri',
    difficulty: 'intermediar',
    q: 'Vad är en hypoman eller manisk period vid bipolär sjukdom?',
    options: [
      'En period av djup nedstämdhet',
      'En period med förhöjt stämningsläge, ökad energi och minskat sömnbehov',
      'En infektion med feber',
      'En period av normal funktion utan symtom',
    ],
    answer: 1,
    explanation:
      'Under en manisk eller hypoman period är stämningsläget förhöjt med ökad aktivitet, minskat sömnbehov och ibland nedsatt omdöme. Mani är mer uttalad än hypomani.',
  },
  {
    id: 'm3b-077',
    topic: 'psykiatri',
    difficulty: 'avancerad',
    q: 'Vad menas med den biopsykosociala modellen inom psykiatrin?',
    options: [
      'Att psykisk ohälsa förstås utifrån samspelet mellan biologiska, psykologiska och sociala faktorer',
      'Att alla psykiska sjukdomar har en enda biologisk orsak',
      'Att enbart sociala faktorer spelar roll',
      'Att psykisk sjukdom inte går att förklara',
    ],
    answer: 0,
    explanation:
      'Den biopsykosociala modellen ser psykisk ohälsa som ett resultat av samverkan mellan arv och biologi, psykologiska faktorer och den sociala miljön.',
  },
  {
    id: 'm3b-078',
    topic: 'psykiatri',
    difficulty: 'avancerad',
    q: 'Varför är det viktigt att behandla även de depressiva faserna med försiktighet vid bipolär sjukdom?',
    options: [
      'Depressiva faser går över av sig själva på några dagar',
      'All behandling vid bipolär sjukdom är verkningslös',
      'Vissa antidepressiva kan i ogynnsamma fall utlösa en manisk svängning, så behandlingen behöver anpassas',
      'Depression vid bipolär sjukdom är ofarlig',
    ],
    answer: 2,
    explanation:
      'Vid bipolär sjukdom kan antidepressiva i vissa fall trigga en omslag till mani. Därför ges behandlingen ofta tillsammans med stämningsstabiliserande läkemedel.',
  },
  {
    id: 'm3b-079',
    topic: 'psykiatri',
    difficulty: 'avancerad',
    q: 'Varför tar antidepressiva läkemedel ofta flera veckor innan full effekt uppnås?',
    options: [
      'Läkemedlet måste först brytas ned i levern i flera månader',
      'Effekten märks först när biverkningarna har avtagit',
      'Det beror enbart på att dosen är för låg',
      'Effekten beror på gradvisa biologiska förändringar vars mekanismer inte är fullständigt klarlagda',
    ],
    answer: 3,
    explanation:
      'Vissa antidepressiva påverkar signalsubstanser snabbt, men den kliniska effekten utvecklas ofta gradvis över veckor. Flera långsammare biologiska anpassningar har föreslagits, men fördröjningens exakta mekanismer är inte fullständigt klarlagda.',
  },
  {
    id: 'm3b-080',
    topic: 'psykiatri',
    difficulty: 'avancerad',
    q: 'Varför kan tvärt avbrutet bruk av alkohol vid kraftigt beroende vara medicinskt riskabelt?',
    options: [
      'Kroppen får brist på vätska, vilket ger yrsel',
      'Det kan utlösa allvarliga abstinenssymtom, i svåra fall med kramper och förvirringstillstånd',
      'Kroppen påverkas inte alls av att sluta',
      'Det leder bara till lätt huvudvärk',
    ],
    answer: 1,
    explanation:
      'Vid uttalat alkoholberoende kan plötsligt uppehåll ge svåra abstinensbesvär, inklusive kramper och delirium tremens, vilket kan kräva medicinsk övervakning.',
  },
  // ---------------- INFEKTION ----------------
  {
    id: 'm3b-081',
    topic: 'infektion',
    difficulty: 'grund',
    q: 'Vilken av följande mikroorganismer är encelliga och kan föröka sig på egen hand?',
    options: [
      'Virus',
      'Prioner',
      'Antikroppar',
      'Bakterier',
    ],
    answer: 3,
    explanation:
      'Bakterier är encelliga organismer som kan föröka sig själva. Virus måste däremot använda en värdcell för att kunna föröka sig.',
  },
  {
    id: 'm3b-082',
    topic: 'infektion',
    difficulty: 'grund',
    q: 'Vad är en urinvägsinfektion (UVI) oftast orsakad av?',
    options: [
      'Bakterier',
      'Virus',
      'Svamp',
      'Parasiter',
    ],
    answer: 0,
    explanation:
      'UVI orsakas oftast av bakterier, vanligen tarmbakterien E. coli, som tar sig upp i urinvägarna. Den behandlas vid behov med antibiotika.',
  },
  {
    id: 'm3b-083',
    topic: 'infektion',
    difficulty: 'grund',
    q: 'Vad är feber ett tecken på?',
    options: [
      'Att kroppen har blivit uttorkad',
      'Att kroppen har för mycket vätska',
      'Att kroppen reagerar på t.ex. en infektion och höjer sin temperatur',
      'Att blodsockret är för högt',
    ],
    answer: 2,
    explanation:
      'Feber är en del av kroppens försvar. Vid infektion höjs kroppstemperaturen, vilket bland annat kan försvåra för mikroorganismerna att föröka sig.',
  },
  {
    id: 'm3b-084',
    topic: 'infektion',
    difficulty: 'grund',
    q: 'Vilken åtgärd är ett av de mest effektiva sätten att minska smittspridning?',
    options: [
      'Att äta mer socker',
      'God handhygien',
      'Att undvika att dricka vatten',
      'Att sova mindre',
    ],
    answer: 1,
    explanation:
      'Noggrann handhygien med tvål och vatten eller handsprit minskar effektivt spridningen av många smittsamma sjukdomar, särskilt kontaktsmitta.',
  },
  {
    id: 'm3b-085',
    topic: 'infektion',
    difficulty: 'grund',
    q: 'Vad är syftet med vaccination?',
    options: [
      'Att tillföra antigen, ett försvagat smittämne eller instruktioner för ett antigen så att immunologiskt minne bildas',
      'Att direkt bota en pågående infektion',
      'Att tillföra antibiotika i förebyggande syfte',
      'Att sänka kroppstemperaturen',
    ],
    answer: 0,
    explanation:
      'Vacciner kan innehålla antigen eller försvagade smittämnen, eller ge celler instruktioner att tillverka ett antigen, som i mRNA- och vissa vektorvacciner. Immunförsvaret bygger då upp ett minne inför en senare smitta.',
  },
  {
    id: 'm3b-086',
    topic: 'infektion',
    difficulty: 'grund',
    q: 'Vad är en sårinfektion?',
    options: [
      'När ett sår läker snabbare än normalt',
      'En allergisk reaktion i huden',
      'När mikroorganismer, ofta bakterier, växer till i ett sår och ger inflammation',
      'En form av blodbrist',
    ],
    answer: 2,
    explanation:
      'En sårinfektion uppstår när bakterier förökar sig i ett sår, vilket ger rodnad, värme, svullnad, smärta och ibland var.',
  },
  {
    id: 'm3b-087',
    topic: 'infektion',
    difficulty: 'intermediar',
    q: 'Vad menas med sepsis (i dagligt tal "blodförgiftning")?',
    options: [
      'En lokal hudinfektion utan allmänpåverkan',
      'En livshotande reaktion där kroppens svar på en infektion skadar de egna organen',
      'En förkylning med lätt feber',
      'En allergi mot antibiotika',
    ],
    answer: 1,
    explanation:
      'Sepsis är ett allvarligt tillstånd där kroppens kraftiga reaktion på en infektion leder till svikt i organens funktion. Det kräver snabb behandling.',
  },
  {
    id: 'm3b-088',
    topic: 'infektion',
    difficulty: 'intermediar',
    q: 'Varför verkar antivirala läkemedel, men inte antibiotika, mot virusinfektioner?',
    options: [
      'Antibiotika bryts ned innan de når viruset',
      'Virus är en sorts bakterie',
      'Antivirala läkemedel finns inte',
      'Virus och bakterier är helt olika och påverkas av olika typer av läkemedel',
    ],
    answer: 3,
    explanation:
      'Antibiotika angriper strukturer som är specifika för bakterier. Virus saknar dessa och kräver i stället antivirala läkemedel som stör virusets förökning.',
  },
  {
    id: 'm3b-089',
    topic: 'infektion',
    difficulty: 'intermediar',
    q: 'Vad är en vårdrelaterad infektion?',
    options: [
      'En infektion som en patient drabbas av i samband med vård eller behandling',
      'En infektion som bara drabbar vårdpersonal hemma',
      'En infektion som orsakas av läkemedlen som getts',
      'En infektion som uppstår enbart utomhus',
    ],
    answer: 0,
    explanation:
      'Vårdrelaterade infektioner uppstår i samband med vård, t.ex. efter operation eller via katetrar. Goda hygienrutiner är centrala för att förebygga dem.',
  },
  {
    id: 'm3b-090',
    topic: 'infektion',
    difficulty: 'intermediar',
    q: 'Vilken typ av infektion är influensa och varför kan vaccinet behöva uppdateras varje år?',
    options: [
      'En bakterieinfektion som botas med antibiotika',
      'En svampinfektion i lungorna',
      'En parasitsjukdom som sprids via mygg',
      'En virusinfektion, och eftersom influensaviruset förändras anpassas vaccinet inför varje säsong',
    ],
    answer: 3,
    explanation:
      'Influensa orsakas av virus som förändras (muterar) från år till år. Därför uppdateras vaccinet regelbundet för att matcha de aktuella virusstammarna.',
  },
  {
    id: 'm3b-091',
    topic: 'infektion',
    difficulty: 'intermediar',
    q: 'Vad innebär "flockimmunitet" (gruppimmunitet)?',
    options: [
      'Att enbart djur kan bli immuna',
      'När en stor andel av befolkningen är immun minskar smittspridningen även för dem som inte är skyddade',
      'Att immunitet sprids mellan personer vid nära kontakt',
      'Att vaccin gör hela gruppen sjuk samtidigt',
    ],
    answer: 1,
    explanation:
      'När tillräckligt många är immuna (genom vaccination eller genomgången sjukdom) får smittämnet svårt att spridas, vilket indirekt skyddar oskyddade personer.',
  },
  {
    id: 'm3b-092',
    topic: 'infektion',
    difficulty: 'intermediar',
    q: 'Vad är skillnaden mellan en lokal och en systemisk (allmän) infektion?',
    options: [
      'En lokal infektion ger feber, en systemisk inte',
      'En systemisk infektion finns bara i huden',
      'En lokal infektion är begränsad till ett område, medan en systemisk infektion eller reaktion påverkar allmäntillståndet eller flera organsystem',
      'Det är samma sak',
    ],
    answer: 2,
    explanation:
      'En lokal infektion är begränsad till ett område, till exempel ett infekterat sår. En systemisk infektion eller inflammatorisk reaktion ger allmänpåverkan eller påverkar flera organsystem; det betyder inte att smittämnet måste finnas i hela kroppen.',
  },
  {
    id: 'm3b-093',
    topic: 'infektion',
    difficulty: 'avancerad',
    q: 'På vilka huvudsakliga sätt kan bakterier utveckla antibiotikaresistens?',
    options: [
      'Genom slumpmässiga mutationer och genom att överföra resistensgener mellan bakterier',
      'Genom att bakterierna äter antibiotika som näring',
      'Enbart genom att människor blir allergiska',
      'Genom att bakterierna gömmer sig i kroppens celler',
    ],
    answer: 0,
    explanation:
      'Resistens kan uppstå via slumpmässiga mutationer och spridas snabbt genom att bakterier överför resistensgener till varandra, bland annat via plasmider.',
  },
  {
    id: 'm3b-094',
    topic: 'infektion',
    difficulty: 'avancerad',
    q: 'Varför är bredspektrumantibiotika något man vill undvika att använda i onödan?',
    options: [
      'De verkar långsammare än smala alternativ',
      'De slår mot många bakteriearter, även nyttiga, och driver på resistensutveckling mer än smala alternativ',
      'De fungerar bara mot virus',
      'De saknar helt biverkningar',
    ],
    answer: 1,
    explanation:
      'Bredspektrumantibiotika påverkar många bakteriearter, inklusive normalfloran, och bidrar mer till resistensutveckling. Därför väljs smalspektrum när det är möjligt.',
  },
  {
    id: 'm3b-095',
    topic: 'infektion',
    difficulty: 'grund',
    q: 'Varför kan sepsis snabbt bli livshotande?',
    options: [
      'Den ger enbart lätt feber utan risk',
      'Den försämras långsamt under flera veckor',
      'Den kraftiga reaktionen kan ge blodtrycksfall och svikt i flera organ på kort tid',
      'Den påverkar bara huden',
    ],
    answer: 2,
    explanation:
      'Vid sepsis kan kroppens överreaktion leda till kraftigt blodtrycksfall (septisk chock) och svikt i organ som njurar och lungor, vilket gör snabb behandling avgörande.',
  },
  {
    id: 'm3b-096',
    topic: 'infektion',
    difficulty: 'grund',
    q: 'Vad är MRSA ett exempel på?',
    options: [
      'Ett nytt virus som ger förkylning',
      'En svamp som växer i lungorna',
      'En parasit som sprids via vatten',
      'En typ av stafylokockbakterie som blivit motståndskraftig mot flera vanliga antibiotika',
    ],
    answer: 3,
    explanation:
      'MRSA (meticillinresistenta Staphylococcus aureus) är resistenta hudbakterier som är svårare att behandla och kräver särskilda hygienrutiner inom vården.',
  },
  {
    id: 'm3b-097',
    topic: 'infektion',
    difficulty: 'avancerad',
    q: 'Hur skiljer sig immunförsvarets "snabba" medfödda försvar från det "långsammare" förvärvade försvaret?',
    options: [
      'Det medfödda reagerar snabbt och ospecifikt, medan det förvärvade riktar sig specifikt mot smittämnet och ger minne',
      'Det medfödda finns bara hos barn',
      'Det förvärvade svarar snabbast vid en första infektion',
      'De är exakt likadana',
    ],
    answer: 0,
    explanation:
      'Det medfödda immunförsvaret ger ett snabbt, ospecifikt skydd. Det förvärvade (adaptiva) bygger upp ett specifikt och mer långvarigt skydd med immunologiskt minne.',
  },
  {
    id: 'm3b-098',
    topic: 'infektion',
    difficulty: 'avancerad',
    q: 'Varför kan en antibiotikakur ibland leda till en svampinfektion, t.ex. i underlivet?',
    options: [
      'Antibiotika är gjorda av svamp och sprider svampsjukdom',
      'Antibiotika fungerar som näring åt svampen',
      'Antibiotika kan slå ut nyttiga bakterier i normalfloran, vilket ger svampar mer utrymme att växa',
      'Antibiotika gör huden tjockare',
    ],
    answer: 2,
    explanation:
      'Normalfloran av bakterier håller normalt svamp i schack. När antibiotika rubbar denna balans kan svamp, t.ex. Candida, växa till och ge besvär.',
  },
  {
    id: 'm3b-099',
    topic: 'infektion',
    difficulty: 'grund',
    q: 'Varför är vaccinationsprogram inte bara ett skydd för individen utan också en samhällsfråga?',
    options: [
      'Vaccin skyddar bara den enskilde och har ingen samhällseffekt',
      'Vaccinationsprogram ökar smittspridningen',
      'Vaccin behövs bara för djur',
      'Hög vaccinationstäckning kan begränsa spridningen och skydda dem som inte kan vaccineras',
    ],
    answer: 3,
    explanation:
      'Förutom individens skydd minskar hög vaccinationstäckning smittspridningen i samhället och skyddar indirekt personer som av medicinska skäl inte kan vaccineras.',
  },
  {
    id: 'm3b-100',
    topic: 'infektion',
    difficulty: 'avancerad',
    q: 'Varför är det viktigt att ta odling och prov före antibiotikabehandling vid allvarligare infektioner?',
    options: [
      'För att proverna gör att febern sjunker',
      'För att identifiera vilken bakterie det rör sig om och vilket antibiotikum den är känslig för',
      'Eftersom odling ersätter behovet av behandling',
      'Det görs enbart för statistik och påverkar inte vården',
    ],
    answer: 1,
    explanation:
      'Genom odling och resistensbestämning kan man välja ett antibiotikum som verkligen biter på just den aktuella bakterien, vilket ger bättre och mer riktad behandling.',
  },
]
