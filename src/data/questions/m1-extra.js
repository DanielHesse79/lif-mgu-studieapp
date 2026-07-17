/**
 * Frågebank för Modul 1 – Grundvetenskap (EXTRA).
 *
 * 100 helt nya frågor som kompletterar m1.js (inga dubbletter).
 * Fördelade på modulens fem ämnesområden och tre svårighetsnivåer
 * (grund, intermediar, avancerad). Förbyggt innehåll – ingen API/kostnad.
 *
 * Fält per fråga:
 *   id          – stabil nyckel (eget intervall m1b-001 ... m1b-100)
 *   topic       – matchar topic.id i modules.js
 *   difficulty  – 'grund' | 'intermediar' | 'avancerad'
 *   q           – frågetext
 *   options     – fyra svarsalternativ (blandas vid visning)
 *   answer      – index i options för rätt svar
 *   explanation – kort förklaring som visas efter svar
 *
 * Fördelning: anatomi 28, cellbiologi 18, genetik 14, fysiologi 22, immunologi 18.
 */

export const M1_QUESTIONS_EXTRA = [
  // ---------------- ANATOMI (28) ----------------
  {
    id: 'm1b-001',
    topic: 'anatomi',
    difficulty: 'grund',
    q: 'Vad betyder den anatomiska termen "distal"?',
    options: [
      'Närmare bålen',
      'Närmast huvudet',
      'Längre bort från bålen eller en strukturs fästpunkt',
      'Mot kroppens mittlinje',
    ],
    answer: 2,
    explanation:
      'Distal betyder längre bort från bålen/fästet. Handen är distal i förhållande till armbågen.',
  },
  {
    id: 'm1b-002',
    topic: 'anatomi',
    difficulty: 'grund',
    q: 'Vad betyder den anatomiska termen "anterior" (ventral)?',
    options: [
      'På kroppens baksida',
      'På kroppens framsida',
      'Mot huvudet',
      'Mot fötterna',
    ],
    answer: 1,
    explanation:
      'Anterior/ventral = framsidan. Posterior/dorsal = baksidan.',
  },
  {
    id: 'm1b-003',
    topic: 'anatomi',
    difficulty: 'grund',
    q: 'Vilket snittplan delar kroppen i en främre och en bakre del?',
    options: [
      'Sagittalplanet',
      'Transversalplanet',
      'Medianplanet',
      'Frontalplanet',
    ],
    answer: 3,
    explanation:
      'Frontalplanet (koronalplanet) delar i fram/bak. Sagittalplanet delar i höger/vänster.',
  },
  {
    id: 'm1b-004',
    topic: 'anatomi',
    difficulty: 'grund',
    q: 'Vad kallas matstrupen med ett medicinskt ord?',
    options: [
      'Esofagus',
      'Trakea',
      'Larynx',
      'Pylorus',
    ],
    answer: 0,
    explanation:
      'Esofagus = matstrupe. Trakea = luftstrupe, larynx = struphuvud.',
  },
  {
    id: 'm1b-005',
    topic: 'anatomi',
    difficulty: 'grund',
    q: 'Ungefär hur många ben har en vuxen människas skelett?',
    options: [
      'Cirka 100',
      'Cirka 206',
      'Cirka 350',
      'Cirka 500',
    ],
    answer: 1,
    explanation:
      'En vuxen har omkring 206 ben. Ett nyfött barn har fler, eftersom vissa ben växer ihop med åldern.',
  },
  {
    id: 'm1b-006',
    topic: 'anatomi',
    difficulty: 'grund',
    q: 'Vilket ben skyddar hjärnan?',
    options: [
      'Bröstbenet',
      'Höftbenet',
      'Kraniet (skallbenet)',
      'Skulderbladet',
    ],
    answer: 2,
    explanation:
      'Kraniet omger och skyddar hjärnan. Bröstbenet och revbenen skyddar hjärta och lungor.',
  },
  {
    id: 'm1b-007',
    topic: 'anatomi',
    difficulty: 'grund',
    q: 'Vad heter det stora muskelfästa benet i låret?',
    options: [
      'Lårbenet (femur)',
      'Skenbenet (tibia)',
      'Vadbenet (fibula)',
      'Strålbenet (radius)',
    ],
    answer: 0,
    explanation:
      'Lårbenet (femur) är kroppens längsta och kraftigaste ben. Skenbenet och vadbenet finns i underbenet.',
  },
  {
    id: 'm1b-008',
    topic: 'anatomi',
    difficulty: 'grund',
    q: 'Vilket organ producerar galla?',
    options: [
      'Gallblåsan',
      'Magsäcken',
      'Mjälten',
      'Levern',
    ],
    answer: 3,
    explanation:
      'Levern bildar galla. Gallblåsan lagrar och koncentrerar gallan innan den töms i tarmen.',
  },
  {
    id: 'm1b-009',
    topic: 'anatomi',
    difficulty: 'grund',
    q: 'Hur många lungor har människan, och vilken är minst?',
    options: [
      'Två lungor; den högra är minst',
      'En enda stor lunga',
      'Två lungor; den vänstra är minst',
      'Tre lungor lika stora',
    ],
    answer: 2,
    explanation:
      'Vänster lunga är något mindre och har två lober för att ge plats åt hjärtat; höger lunga har tre lober.',
  },
  {
    id: 'm1b-010',
    topic: 'anatomi',
    difficulty: 'grund',
    q: 'Vad kallas den muskel som skiljer brösthålan från bukhålan?',
    options: [
      'Bukmusklerna',
      'Diafragman (mellangärdet)',
      'Hjärtmuskeln',
      'Mellanrevbensmusklerna',
    ],
    answer: 1,
    explanation:
      'Diafragman är den kupolformade andningsmuskeln mellan bröst- och bukhåla.',
  },
  {
    id: 'm1b-011',
    topic: 'anatomi',
    difficulty: 'grund',
    q: 'Vilket organ lagrar urin innan den töms ut?',
    options: [
      'Njuren',
      'Urinledaren',
      'Urinröret',
      'Urinblåsan',
    ],
    answer: 3,
    explanation:
      'Urinen bildas i njurarna, förs via urinledarna till urinblåsan där den lagras, och töms via urinröret.',
  },
  {
    id: 'm1b-012',
    topic: 'anatomi',
    difficulty: 'intermediar',
    q: 'Vad heter de fyra rummen i hjärtat?',
    options: [
      'Två förmak och två kammare',
      'Tre förmak och en kammare',
      'En förmak och tre kammare',
      'Fyra kammare',
    ],
    answer: 0,
    explanation:
      'Hjärtat har höger och vänster förmak (övre rum) samt höger och vänster kammare (nedre rum).',
  },
  {
    id: 'm1b-013',
    topic: 'anatomi',
    difficulty: 'intermediar',
    q: 'Vilken klaff sitter mellan vänster förmak och vänster kammare?',
    options: [
      'Trikuspidalklaffen',
      'Mitralisklaffen (bikuspidalklaffen)',
      'Aortaklaffen',
      'Pulmonalisklaffen',
    ],
    answer: 1,
    explanation:
      'Mitralisklaffen sitter i vänster hjärthalva. Trikuspidalklaffen sitter mellan höger förmak och kammare.',
  },
  {
    id: 'm1b-014',
    topic: 'anatomi',
    difficulty: 'intermediar',
    q: 'Vad kallas de minsta blodkärlen där utbyte med vävnaden sker?',
    options: [
      'Artärer',
      'Vener',
      'Kapillärer',
      'Aorta',
    ],
    answer: 2,
    explanation:
      'Kapillärerna har mycket tunna väggar så att syre, näring och avfall kan utbytas med cellerna.',
  },
  {
    id: 'm1b-015',
    topic: 'anatomi',
    difficulty: 'intermediar',
    q: 'I vilken del av tarmen tas merparten av näringsämnena upp?',
    options: [
      'Tunntarmen',
      'Tjocktarmen',
      'Ändtarmen',
      'Magsäcken',
    ],
    answer: 0,
    explanation:
      'Tunntarmen har en enorm yta tack vare tarmludd (villi) där näring tas upp. Tjocktarmen tar främst upp vatten.',
  },
  {
    id: 'm1b-016',
    topic: 'anatomi',
    difficulty: 'intermediar',
    q: 'Vad heter den första delen av tunntarmen, närmast magsäcken?',
    options: [
      'Tjocktarmen (kolon)',
      'Blindtarmen (caecum)',
      'Ändtarmen (rektum)',
      'Tolvfingertarmen (duodenum)',
    ],
    answer: 3,
    explanation:
      'Tunntarmen börjar med tolvfingertarmen, följt av jejunum och ileum.',
  },
  {
    id: 'm1b-017',
    topic: 'anatomi',
    difficulty: 'intermediar',
    q: 'Vad kallas den hinna (lungsäcken) som omger lungorna?',
    options: [
      'Perikardium',
      'Peritoneum',
      'Pleura',
      'Meninger',
    ],
    answer: 2,
    explanation:
      'Pleura är lungsäcken. Perikardium omger hjärtat, peritoneum bukorganen och meningerna hjärnan.',
  },
  {
    id: 'm1b-018',
    topic: 'anatomi',
    difficulty: 'intermediar',
    q: 'Vilka tre huvuddelar delas hjärnan vanligen in i?',
    options: [
      'Storhjärna, ryggmärg och hjärnhinnor',
      'Storhjärna, lillhjärna och hjärnstam',
      'Lillhjärna, hjärnstam och ryggmärg',
      'Hjässlob, nacklob och tinninglob',
    ],
    answer: 1,
    explanation:
      'Hjärnan delas i storhjärna (cerebrum), lillhjärna (cerebellum) och hjärnstam.',
  },
  {
    id: 'm1b-019',
    topic: 'anatomi',
    difficulty: 'intermediar',
    q: 'Vad heter de utskott på en nervcell som tar emot signaler från andra celler?',
    options: [
      'Axon',
      'Synaps',
      'Myelin',
      'Dendriter',
    ],
    answer: 3,
    explanation:
      'Dendriterna tar emot signaler. Axonet leder signalen vidare bort från cellkroppen.',
  },
  {
    id: 'm1b-020',
    topic: 'anatomi',
    difficulty: 'intermediar',
    q: 'Vad kallas den långa nervtråd som leder signalen bort från nervcellens cellkropp?',
    options: [
      'Axon',
      'Dendrit',
      'Synaps',
      'Soma',
    ],
    answer: 0,
    explanation:
      'Axonet leder nervimpulsen bort från cellkroppen. Det kan vara omslutet av en isolerande myelinskida.',
  },
  {
    id: 'm1b-021',
    topic: 'anatomi',
    difficulty: 'intermediar',
    q: 'Vilken körtel sitter på halsens framsida och styr ämnesomsättningen?',
    options: [
      'Bukspottkörteln',
      'Sköldkörteln (tyreoidea)',
      'Binjuren',
      'Hypofysen',
    ],
    answer: 1,
    explanation:
      'Sköldkörteln sitter framtill på halsen och bildar hormoner som reglerar ämnesomsättningen.',
  },
  {
    id: 'm1b-022',
    topic: 'anatomi',
    difficulty: 'intermediar',
    q: 'Var sitter hypofysen?',
    options: [
      'I halsen',
      'I bukhålan',
      'Vid hjärnans bas',
      'Ovanpå njurarna',
    ],
    answer: 2,
    explanation:
      'Hypofysen är en liten körtel vid hjärnans undersida som styr många andra endokrina körtlar.',
  },
  {
    id: 'm1b-023',
    topic: 'anatomi',
    difficulty: 'avancerad',
    q: 'I vilken ordning leds blodet genom hjärtats höger sida och vidare till lungorna?',
    options: [
      'Höger förmak → höger kammare → lungartären → lungorna',
      'Höger kammare → höger förmak → aortan → lungorna',
      'Vänster förmak → höger kammare → lungvenen → lungorna',
      'Höger förmak → vänster kammare → lungartären → lungorna',
    ],
    answer: 0,
    explanation:
      'Syrefattigt blod kommer till höger förmak, pumpas via höger kammare ut i lungartären till lungorna.',
  },
  {
    id: 'm1b-024',
    topic: 'anatomi',
    difficulty: 'avancerad',
    q: 'Vad heter kransartärerna (kärlen som försörjer själva hjärtmuskeln) med ett medicinskt ord?',
    options: [
      'Karotisartärerna',
      'Pulmonalisartärerna',
      'Renalartärerna',
      'Koronarartärerna',
    ],
    answer: 3,
    explanation:
      'Koronarartärerna förser hjärtmuskeln med syre. Förträngning av dem ligger bakom kärlkramp och hjärtinfarkt.',
  },
  {
    id: 'm1b-025',
    topic: 'anatomi',
    difficulty: 'avancerad',
    q: 'Vad heter njurens yttre del respektive inre del?',
    options: [
      'Märg (kortex) och bark (medulla)',
      'Pleura och peritoneum',
      'Bark (kortex) och märg (medulla)',
      'Alveol och nefron',
    ],
    answer: 2,
    explanation:
      'Njuren har en yttre bark (kortex) och en inre märg (medulla). I dessa ligger nefronens olika delar.',
  },
  {
    id: 'm1b-026',
    topic: 'anatomi',
    difficulty: 'avancerad',
    q: 'Vad heter den lilla kapillärnystan i nefronet där blodet filtreras?',
    options: [
      'Alveol',
      'Glomerulus',
      'Synaps',
      'Villus',
    ],
    answer: 1,
    explanation:
      'Glomerulus är ett nystan av kapillärer omgivet av Bowmans kapsel där primärurinen filtreras fram.',
  },
  {
    id: 'm1b-027',
    topic: 'anatomi',
    difficulty: 'avancerad',
    q: 'Vad kallas det perifera nervsystemets del som styr ofrivilliga funktioner som hjärtfrekvens och matsmältning?',
    options: [
      'Somatiska nervsystemet',
      'Centrala nervsystemet',
      'Limbiska systemet',
      'Autonoma nervsystemet',
    ],
    answer: 3,
    explanation:
      'Det autonoma nervsystemet (sympatikus och parasympatikus) reglerar ofrivilliga funktioner.',
  },
  {
    id: 'm1b-028',
    topic: 'anatomi',
    difficulty: 'avancerad',
    q: 'Vilka tre typer av muskelvävnad finns i kroppen?',
    options: [
      'Skelettmuskel, hjärtmuskel och glatt muskel',
      'Skelettmuskel, brosk och sena',
      'Hjärtmuskel, glatt muskel och ligament',
      'Glatt muskel, fettväv och hjärtmuskel',
    ],
    answer: 0,
    explanation:
      'Skelettmuskel är viljestyrd, hjärtmuskel och glatt muskel (t.ex. i kärl och tarm) är ofrivilliga.',
  },

  // ---------------- CELLBIOLOGI (18) ----------------
  {
    id: 'm1b-029',
    topic: 'cellbiologi',
    difficulty: 'grund',
    q: 'Vad kallas den geléartade massan inuti cellen där organellerna ligger?',
    options: [
      'Cellkärnan',
      'Cytoplasman',
      'Cellmembranet',
      'Cellväggen',
    ],
    answer: 1,
    explanation:
      'Cytoplasman är cellens inre vätska och fyllnadsmassa där organellerna är inbäddade.',
  },
  {
    id: 'm1b-030',
    topic: 'cellbiologi',
    difficulty: 'grund',
    q: 'Vilken organell paketerar och skickar vidare proteiner i cellen?',
    options: [
      'Mitokondrien',
      'Ribosomen',
      'Golgiapparaten',
      'Lysosomen',
    ],
    answer: 2,
    explanation:
      'Golgiapparaten modifierar, sorterar och paketerar proteiner för transport ut ur cellen eller till andra delar.',
  },
  {
    id: 'm1b-031',
    topic: 'cellbiologi',
    difficulty: 'grund',
    q: 'Vad innehåller lysosomer som gör dem till cellens "sopstation"?',
    options: [
      'Enzymer som bryter ner ämnen',
      'Energirik ATP',
      'Genetisk kod',
      'Syre för andning',
    ],
    answer: 0,
    explanation:
      'Lysosomer innehåller nedbrytande enzymer som spjälkar uttjänta cellbeståndsdelar och främmande material.',
  },
  {
    id: 'm1b-032',
    topic: 'cellbiologi',
    difficulty: 'grund',
    q: 'Vad menas med att cellmembranet är "selektivt permeabelt"?',
    options: [
      'Det släpper igenom allt',
      'Det är helt tätt',
      'Det löses upp i vatten',
      'Det släpper igenom vissa ämnen men inte andra',
    ],
    answer: 3,
    explanation:
      'Selektivt permeabelt betyder att membranet styr vilka ämnen som får passera in och ut ur cellen.',
  },
  {
    id: 'm1b-033',
    topic: 'cellbiologi',
    difficulty: 'grund',
    q: 'Vad kallas transport av vatten över ett membran från lägre till högre löst koncentration?',
    options: [
      'Aktiv transport',
      'Exocytos',
      'Osmos',
      'Fagocytos',
    ],
    answer: 2,
    explanation:
      'Osmos är vattnets diffusion genom ett membran mot den sida som har mer löst ämne (lägre vattenkoncentration).',
  },
  {
    id: 'm1b-034',
    topic: 'cellbiologi',
    difficulty: 'grund',
    q: 'Vad är skillnaden mellan en eukaryot och en prokaryot cell?',
    options: [
      'Prokaryoter har cellkärna, eukaryoter saknar kärna',
      'Eukaryoter har cellkärna, prokaryoter saknar kärna',
      'Endast eukaryoter har DNA',
      'Endast prokaryoter kan dela sig',
    ],
    answer: 1,
    explanation:
      'Eukaryota celler (t.ex. människans) har en kärna som omsluter DNA. Prokaryoter (bakterier) saknar kärna.',
  },
  {
    id: 'm1b-035',
    topic: 'cellbiologi',
    difficulty: 'intermediar',
    q: 'Vilken gas förbrukas och vilken bildas vid cellandningen?',
    options: [
      'Koldioxid förbrukas, syre bildas',
      'Kväve förbrukas, syre bildas',
      'Väte förbrukas, koldioxid bildas',
      'Syre förbrukas, koldioxid bildas',
    ],
    answer: 3,
    explanation:
      'Vid cellandning används syre för att bryta ner näring till energi (ATP), och koldioxid bildas som avfall.',
  },
  {
    id: 'm1b-036',
    topic: 'cellbiologi',
    difficulty: 'intermediar',
    q: 'Vilken molekyl är en viktig energikälla och startsubstrat i glykolysen?',
    options: [
      'Glukos (druvsocker)',
      'Kollagen',
      'DNA',
      'Kalcium',
    ],
    answer: 0,
    explanation:
      'Glukos är startsubstrat i glykolysen och en viktig energikälla. Olika vävnader kan också använda exempelvis fettsyror, aminosyror och ketonkroppar beroende på tillstånd och energibehov.',
  },
  {
    id: 'm1b-037',
    topic: 'cellbiologi',
    difficulty: 'intermediar',
    q: 'Vad kallas processen där en cell tar in stora partiklar genom att omsluta dem med membranet?',
    options: [
      'Exocytos',
      'Endocytos',
      'Diffusion',
      'Osmos',
    ],
    answer: 1,
    explanation:
      'Vid endocytos buktar membranet inåt och innesluter material i en blåsa. Exocytos är motsatsen – utsöndring.',
  },
  {
    id: 'm1b-038',
    topic: 'cellbiologi',
    difficulty: 'intermediar',
    q: 'Vad kallas det programmerade, "städade" celldöden som kroppen styr?',
    options: [
      'Nekros',
      'Mitos',
      'Apoptos',
      'Meios',
    ],
    answer: 2,
    explanation:
      'Apoptos är kontrollerad celldöd som tar bort skadade eller överflödiga celler. Nekros är okontrollerad celldöd vid skada.',
  },
  {
    id: 'm1b-039',
    topic: 'cellbiologi',
    difficulty: 'intermediar',
    q: 'I vilken organell sker det mesta av cellandningens energiproduktion?',
    options: [
      'Mitokondrien',
      'Golgiapparaten',
      'Endoplasmatiska nätverket',
      'Cellkärnan',
    ],
    answer: 0,
    explanation:
      'Mitokondriernas inre membran är platsen för det stora ATP-utbytet i cellandningens slutsteg.',
  },
  {
    id: 'm1b-040',
    topic: 'cellbiologi',
    difficulty: 'intermediar',
    q: 'Vad är huvuduppgiften för det endoplasmatiska nätverket (ER)?',
    options: [
      'Nedbrytning av avfall',
      'Energiproduktion',
      'Lagring av DNA',
      'Tillverkning och transport av proteiner och fetter',
    ],
    answer: 3,
    explanation:
      'Det grova ER:t har ribosomer och bildar proteiner; det släta ER:t bildar bl.a. lipider. Ämnena transporteras vidare i cellen.',
  },
  {
    id: 'm1b-041',
    topic: 'cellbiologi',
    difficulty: 'avancerad',
    q: 'Vilken molekyl bär aminosyrorna till ribosomen under proteinsyntesen?',
    options: [
      'mRNA (budbärar-RNA)',
      'DNA',
      'tRNA (transfer-RNA)',
      'ATP',
    ],
    answer: 2,
    explanation:
      'tRNA matchar sitt antikodon mot mRNA:s kodon och levererar rätt aminosyra till det växande proteinet.',
  },
  {
    id: 'm1b-042',
    topic: 'cellbiologi',
    difficulty: 'avancerad',
    q: 'Hur många baser i mRNA kodar för en aminosyra?',
    options: [
      'En',
      'Tre (ett kodon)',
      'Två',
      'Fyra',
    ],
    answer: 1,
    explanation:
      'Den genetiska koden läses i kodon om tre baser. Varje kodon motsvarar en aminosyra (eller en stoppsignal).',
  },
  {
    id: 'm1b-043',
    topic: 'cellbiologi',
    difficulty: 'avancerad',
    q: 'Ungefär hur många ATP-molekyler ger fullständig nedbrytning av en glukosmolekyl med syre (i runda tal)?',
    options: [
      'Exakt 2',
      'Omkring 100',
      'Omkring 500',
      'Omkring 30–32',
    ],
    answer: 3,
    explanation:
      'Aerob nedbrytning av glukos ger storleksordningen 30–32 ATP, långt mer än de 2 ATP som jäsning utan syre ger.',
  },
  {
    id: 'm1b-044',
    topic: 'cellbiologi',
    difficulty: 'avancerad',
    q: 'Vad sker med en cell i de fyra faserna profas, metafas, anafas och telofas?',
    options: [
      'Den genomgår mitos (celldelning av kärnan)',
      'Den utför proteinsyntes',
      'Den tar upp näring',
      'Den genomgår cellandning',
    ],
    answer: 0,
    explanation:
      'Profas, metafas, anafas och telofas är mitosens (kärndelningens) huvudfaser.',
  },
  {
    id: 'm1b-045',
    topic: 'cellbiologi',
    difficulty: 'avancerad',
    q: 'Vad utmärker meios jämfört med mitos?',
    options: [
      'Meios ger två identiska kroppsceller',
      'Meios halverar kromosomantalet och bildar könsceller',
      'Meios sker i alla kroppsceller hela tiden',
      'Meios fördubblar kromosomantalet',
    ],
    answer: 1,
    explanation:
      'Meios ger fyra könsceller med halva kromosomuppsättningen (23 hos människan), så att antalet återställs vid befruktning.',
  },
  {
    id: 'm1b-046',
    topic: 'cellbiologi',
    difficulty: 'intermediar',
    q: 'Vad händer vid snabb eller anaerob glykolys, till exempel i hårt arbetande muskler?',
    options: [
      'Fotosyntes',
      'Aktiv transport',
      'Pyruvat omvandlas till laktat så att glykolysen kan fortsätta',
      'Osmos',
    ],
    answer: 2,
    explanation:
      'När pyruvat omvandlas till laktat återbildas NAD+, vilket gör att glykolysen kan fortsätta och ge två ATP per glukosmolekyl. Flödet ökar när energibehovet överstiger den oxidativa kapaciteten och kräver inte att allt syre saknas.',
  },

  // ---------------- GENETIK (14) ----------------
  {
    id: 'm1b-047',
    topic: 'genetik',
    difficulty: 'grund',
    q: 'Vilket socker ingår i DNA?',
    options: [
      'Deoxiribos',
      'Ribos',
      'Glukos',
      'Fruktos',
    ],
    answer: 0,
    explanation:
      'DNA innehåller sockret deoxiribos. RNA innehåller ribos – därav namnen deoxiribonukleinsyra och ribonukleinsyra.',
  },
  {
    id: 'm1b-048',
    topic: 'genetik',
    difficulty: 'grund',
    q: 'Vilken kvävebas finns i RNA men inte i DNA?',
    options: [
      'Tymin',
      'Adenin',
      'Guanin',
      'Uracil',
    ],
    answer: 3,
    explanation:
      'I RNA ersätts tymin (T) av uracil (U). Adenin, guanin och cytosin finns i både DNA och RNA.',
  },
  {
    id: 'm1b-049',
    topic: 'genetik',
    difficulty: 'grund',
    q: 'Vad kallas hela uppsättningen arvsmassa (allt DNA) hos en individ?',
    options: [
      'Fenotypen',
      'Proteomet',
      'Genomet',
      'Kromatinet',
    ],
    answer: 2,
    explanation:
      'Genomet är individens fullständiga DNA-uppsättning, inklusive alla gener.',
  },
  {
    id: 'm1b-050',
    topic: 'genetik',
    difficulty: 'grund',
    q: 'Vilket par av könskromosomer har en typisk man respektive kvinna?',
    options: [
      'Man XX, kvinna XY',
      'Man XY, kvinna XX',
      'Båda XX',
      'Båda XY',
    ],
    answer: 1,
    explanation:
      'Det 23:e kromosomparet är könskromosomerna: XY hos män och XX hos kvinnor.',
  },
  {
    id: 'm1b-051',
    topic: 'genetik',
    difficulty: 'grund',
    q: 'Vad kallas en individs synliga egenskaper, till skillnad från dess gener?',
    options: [
      'Genotyp',
      'Allel',
      'Kromosom',
      'Fenotyp',
    ],
    answer: 3,
    explanation:
      'Fenotyp = de observerbara egenskaperna. Genotyp = den genetiska uppsättningen som ligger bakom.',
  },
  {
    id: 'm1b-052',
    topic: 'genetik',
    difficulty: 'intermediar',
    q: 'Vad är en allel?',
    options: [
      'En av flera varianter av en och samma gen',
      'En hel kromosom',
      'Ett protein',
      'En typ av cell',
    ],
    answer: 0,
    explanation:
      'En allel är en variant av en gen. Vi ärver en allel från vardera föräldern för de flesta gener.',
  },
  {
    id: 'm1b-053',
    topic: 'genetik',
    difficulty: 'intermediar',
    q: 'Vad betyder att en individ är homozygot för en gen?',
    options: [
      'Den har två olika alleler',
      'Den har två likadana alleler',
      'Den saknar genen helt',
      'Den har tre kopior av genen',
    ],
    answer: 1,
    explanation:
      'Homozygot = två identiska alleler. Heterozygot = två olika alleler för samma gen.',
  },
  {
    id: 'm1b-054',
    topic: 'genetik',
    difficulty: 'intermediar',
    q: 'Vad innebär att ett anlag är dominant?',
    options: [
      'Det krävs två kopior för att det ska visa sig',
      'Det ger en starkare effekt än ett recessivt anlag',
      'Det visar sig även om bara en kopia finns',
      'Det finns bara på könskromosomerna',
    ],
    answer: 2,
    explanation:
      'Ett dominant anlag uttrycks redan i enkel uppsättning. Ett recessivt anlag kräver dubbel uppsättning.',
  },
  {
    id: 'm1b-055',
    topic: 'genetik',
    difficulty: 'intermediar',
    q: 'Vad kallas processen där DNA kopieras inför celldelning?',
    options: [
      'Replikation',
      'Transkription',
      'Translation',
      'Mutation',
    ],
    answer: 0,
    explanation:
      'Replikation = DNA dupliceras så att varje dottercell får en komplett kopia av arvsmassan.',
  },
  {
    id: 'm1b-056',
    topic: 'genetik',
    difficulty: 'intermediar',
    q: 'Vad kallas tätt packat DNA tillsammans med proteiner (histoner) i cellkärnan?',
    options: [
      'Cytoplasma',
      'Ribosom',
      'Plasmid',
      'Kromatin',
    ],
    answer: 3,
    explanation:
      'DNA lindas runt histonproteiner och bildar kromatin, som packas ihop ytterligare till kromosomer vid delning.',
  },
  {
    id: 'm1b-057',
    topic: 'genetik',
    difficulty: 'avancerad',
    q: 'Vid X-bunden recessiv nedärvning drabbas oftast?',
    options: [
      'Flickor oftare än pojkar',
      'Endast flickor',
      'Pojkar oftare än flickor',
      'Lika ofta oavsett kön',
    ],
    answer: 2,
    explanation:
      'Pojkar har bara en X-kromosom, så ett recessivt anlag där slår igenom. Flickor har en andra X som ofta kompenserar.',
  },
  {
    id: 'm1b-058',
    topic: 'genetik',
    difficulty: 'avancerad',
    q: 'Vad kallas en mutation där en enda DNA-bas byts ut mot en annan?',
    options: [
      'Kromosommutation',
      'Punktmutation',
      'Trisomi',
      'Translokation',
    ],
    answer: 1,
    explanation:
      'En punktmutation är ett byte av en enskild bas. Den kan ge ändrad, oförändrad eller utebliven proteinfunktion.',
  },
  {
    id: 'm1b-059',
    topic: 'genetik',
    difficulty: 'avancerad',
    q: 'Vad orsakar Downs syndrom genetiskt?',
    options: [
      'En saknad X-kromosom',
      'En punktmutation i en enda gen',
      'För få kromosomer totalt',
      'En extra kopia av kromosom 21 (trisomi 21)',
    ],
    answer: 3,
    explanation:
      'Downs syndrom beror oftast på en extra kromosom 21, alltså tre i stället för två kopior (trisomi 21).',
  },
  {
    id: 'm1b-060',
    topic: 'genetik',
    difficulty: 'avancerad',
    q: 'Vad är en vanlig epigenetisk mekanism som kan stänga av gener?',
    options: [
      'DNA-metylering',
      'Byte av en kvävebas',
      'Förlust av en hel kromosom',
      'Replikation',
    ],
    answer: 0,
    explanation:
      'Metylgrupper som binds till DNA kan tysta gener utan att ändra sekvensen – ett centralt epigenetiskt verktyg.',
  },

  // ---------------- FYSIOLOGI (22) ----------------
  {
    id: 'm1b-061',
    topic: 'fysiologi',
    difficulty: 'grund',
    q: 'Vilken uppgift har röda blodkroppar?',
    options: [
      'Att bilda antikroppar',
      'Att transportera syre',
      'Att få blodet att levra sig',
      'Att bryta ner näring',
    ],
    answer: 1,
    explanation:
      'Röda blodkroppar (erytrocyter) innehåller hemoglobin som binder och transporterar syre till vävnaderna.',
  },
  {
    id: 'm1b-062',
    topic: 'fysiologi',
    difficulty: 'grund',
    q: 'Vilket ämne i röda blodkroppar binder syre?',
    options: [
      'Insulin',
      'Kollagen',
      'Hemoglobin',
      'Albumin',
    ],
    answer: 2,
    explanation:
      'Hemoglobin är ett järnhaltigt protein som binder syre i lungorna och släpper det i vävnaderna.',
  },
  {
    id: 'm1b-063',
    topic: 'fysiologi',
    difficulty: 'grund',
    q: 'Vad är blodplättarnas (trombocyternas) huvuduppgift?',
    options: [
      'Att hjälpa blodet att levra sig vid skada',
      'Att transportera syre',
      'Att bekämpa virus',
      'Att producera hormoner',
    ],
    answer: 0,
    explanation:
      'Blodplättar startar koagulationen och bildar en propp som täpper till skadade kärl.',
  },
  {
    id: 'm1b-064',
    topic: 'fysiologi',
    difficulty: 'grund',
    q: 'Vilken gas andas vi ut mer av än vi andas in?',
    options: [
      'Syre',
      'Kväve',
      'Väte',
      'Koldioxid',
    ],
    answer: 3,
    explanation:
      'Vi tar upp syre och gör oss av med koldioxid, en restprodukt från cellandningen, vid utandning.',
  },
  {
    id: 'm1b-065',
    topic: 'fysiologi',
    difficulty: 'grund',
    q: 'Vilket organ reglerar blodsockret med hormonerna insulin och glukagon?',
    options: [
      'Levern',
      'Mjälten',
      'Bukspottkörteln (pankreas)',
      'Sköldkörteln',
    ],
    answer: 2,
    explanation:
      'Bukspottkörtelns Langerhanska öar bildar insulin (sänker blodsockret) och glukagon (höjer det).',
  },
  {
    id: 'm1b-066',
    topic: 'fysiologi',
    difficulty: 'grund',
    q: 'Vad kallas det normala vilovärdet för kroppstemperatur (ungefär)?',
    options: [
      'Cirka 30 °C',
      'Ofta omkring 37 °C, vanligen cirka 36–37,8 °C',
      'Cirka 42 °C',
      'Cirka 25 °C',
    ],
    answer: 1,
    explanation:
      'Kroppstemperaturen varierar mellan personer, över dygnet och beroende på var den mäts. Den ligger ofta omkring 37 °C och ungefär 36–37,8 °C kan vara normalt.',
  },
  {
    id: 'm1b-067',
    topic: 'fysiologi',
    difficulty: 'intermediar',
    q: 'Vilken del av blodtrycket (det undre värdet) mäts när hjärtat vilar mellan slagen?',
    options: [
      'Det systoliska trycket',
      'Pulstrycket',
      'Det arteriella medeltrycket',
      'Det diastoliska trycket',
    ],
    answer: 3,
    explanation:
      'Diastoliskt tryck är det lägre värdet, uppmätt under hjärtats vilofas mellan slagen.',
  },
  {
    id: 'm1b-068',
    topic: 'fysiologi',
    difficulty: 'intermediar',
    q: 'Vad innebär en negativ återkoppling (feedback) i kroppen?',
    options: [
      'En förändring motverkas så att jämvikt återställs',
      'En förändring förstärks tills den blir maximal',
      'Kroppen ignorerar förändringen',
      'Hormoner slutar produceras helt',
    ],
    answer: 0,
    explanation:
      'Negativ återkoppling är grunden för homeostas: en avvikelse triggar svar som motverkar avvikelsen (t.ex. insulin vid högt blodsocker).',
  },
  {
    id: 'm1b-069',
    topic: 'fysiologi',
    difficulty: 'intermediar',
    q: 'Vad gör hormonet adrenalin i en stressituation?',
    options: [
      'Sänker pulsen och får oss att slappna av',
      'Höjer puls och blodtryck och mobiliserar energi',
      'Sänker blodsockret kraftigt',
      'Ökar urinproduktionen',
    ],
    answer: 1,
    explanation:
      'Adrenalin från binjuremärgen förbereder kroppen för "kamp eller flykt": snabbare hjärta, vidgade luftvägar och frisatt socker.',
  },
  {
    id: 'm1b-070',
    topic: 'fysiologi',
    difficulty: 'intermediar',
    q: 'Vilken jon är särskilt viktig för att en nervimpuls (aktionspotential) ska uppstå?',
    options: [
      'Järn (Fe2+)',
      'Zink (Zn2+)',
      'Natrium (Na+)',
      'Jod (I-)',
    ],
    answer: 2,
    explanation:
      'När natriumkanaler öppnas strömmar Na+ in och depolariserar nervcellen, vilket startar aktionspotentialen.',
  },
  {
    id: 'm1b-071',
    topic: 'fysiologi',
    difficulty: 'intermediar',
    q: 'Vad är acetylkolin ett exempel på?',
    options: [
      'En signalsubstans (neurotransmittor)',
      'Ett hormon från sköldkörteln',
      'En antikropp',
      'Ett enzym i magsäcken',
    ],
    answer: 0,
    explanation:
      'Acetylkolin är en neurotransmittor som bl.a. överför signaler från nerv till muskel.',
  },
  {
    id: 'm1b-072',
    topic: 'fysiologi',
    difficulty: 'intermediar',
    q: 'Hur skiljer sig hormoner från nervsignaler i sättet de sprids?',
    options: [
      'Hormoner sprids via nerver, nervsignaler via blodet',
      'Båda sprids enbart via blodet',
      'Båda sprids enbart via nerver',
      'Hormoner sprids via blodet, nervsignaler via nervceller',
    ],
    answer: 3,
    explanation:
      'Hormoner är kemiska budbärare som transporteras i blodet; nervsignaler leds elektriskt/kemiskt längs nervceller.',
  },
  {
    id: 'm1b-073',
    topic: 'fysiologi',
    difficulty: 'intermediar',
    q: 'Vad mäter värdet pH i blodet?',
    options: [
      'Hur mycket syre blodet bär',
      'Antalet röda blodkroppar',
      'Hur surt eller basiskt blodet är',
      'Blodets temperatur',
    ],
    answer: 2,
    explanation:
      'pH anger surhetsgrad. Blodets pH hålls noga kring 7,4; även små förskjutningar kan vara allvarliga.',
  },
  {
    id: 'm1b-074',
    topic: 'fysiologi',
    difficulty: 'intermediar',
    q: 'Vilken roll spelar njurarna i vätskebalansen?',
    options: [
      'De producerar all kroppens galla',
      'De reglerar hur mycket vatten och salter som behålls eller utsöndras',
      'De pumpar blodet runt i kroppen',
      'De lagrar syre',
    ],
    answer: 1,
    explanation:
      'Njurarna anpassar urinens mängd och sammansättning och styr därmed kroppens vatten- och saltbalans.',
  },
  {
    id: 'm1b-075',
    topic: 'fysiologi',
    difficulty: 'avancerad',
    q: 'Vilken förändring är den viktigaste normala drivsignalen för andningen?',
    options: [
      'Sjunkande syrehalt i skelettmusklerna',
      'Stigande blodtryck i hjärtats förmak',
      'Ökad filtrering i njurarnas glomeruli',
      'Stigande arteriellt koldioxidtryck, som sänker pH i cerebrospinalvätskan och stimulerar centrala kemoreceptorer',
    ],
    answer: 3,
    explanation:
      'Centrala kemoreceptorer i förlängda märgen reagerar främst på sänkt pH i cerebrospinalvätskan när arteriellt koldioxidtryck stiger. Perifera kemoreceptorer i karotis- och aortakropparna känner av förändringar i blodets syre, koldioxid och pH.',
  },
  {
    id: 'm1b-076',
    topic: 'fysiologi',
    difficulty: 'avancerad',
    q: 'Vad reglerar hormonet aldosteron framför allt?',
    options: [
      'Natrium- och vattenbalansen i njurarna',
      'Blodsockernivån',
      'Kroppstemperaturen',
      'Mängden röda blodkroppar',
    ],
    answer: 0,
    explanation:
      'Aldosteron från binjurebarken får njurarna att spara natrium (och därmed vatten), vilket höjer blodvolym och blodtryck.',
  },
  {
    id: 'm1b-077',
    topic: 'fysiologi',
    difficulty: 'avancerad',
    q: 'Vad händer när hjärtats sinusknuta avfyrar en impuls?',
    options: [
      'Blodtrycket sänks omedelbart',
      'Hjärtat får signal att dra ihop sig – den fungerar som hjärtats pacemaker',
      'Andningen stannar',
      'Insulin frisätts',
    ],
    answer: 1,
    explanation:
      'Sinusknutan i höger förmak sätter hjärtats grundrytm och kallas därför hjärtats naturliga pacemaker.',
  },
  {
    id: 'm1b-078',
    topic: 'fysiologi',
    difficulty: 'avancerad',
    q: 'Vad menas med diffusionsriktningen för syre och koldioxid i alveolerna?',
    options: [
      'Syre går från blod till alveol, koldioxid från alveol till blod',
      'Båda gaserna går från blod till alveol',
      'Syre går från alveol till blod, koldioxid från blod till alveol',
      'Båda gaserna går från alveol till blod',
    ],
    answer: 2,
    explanation:
      'Gaserna diffunderar längs sina partialtryck: syre tas upp i blodet, koldioxid lämnar blodet till utandningsluften.',
  },
  {
    id: 'm1b-079',
    topic: 'fysiologi',
    difficulty: 'avancerad',
    q: 'Vad är tyroxin (T4) och vad gör det?',
    options: [
      'Ett sköldkörtelhormon som höjer ämnesomsättningen',
      'Ett hormon som sänker blodsockret',
      'En signalsubstans i hjärnan',
      'Ett enzym i tarmen',
    ],
    answer: 0,
    explanation:
      'Tyroxin från sköldkörteln ökar cellernas ämnesomsättning. För lite ger trötthet, för mycket ger hjärtklappning och viktnedgång.',
  },
  {
    id: 'm1b-080',
    topic: 'fysiologi',
    difficulty: 'avancerad',
    q: 'Vad menas med myelinets funktion på ett axon?',
    options: [
      'Det bromsar nervimpulsen',
      'Det producerar signalsubstanser',
      'Det bryter ner gamla nervceller',
      'Det isolerar axonet så att nervimpulsen leds snabbare',
    ],
    answer: 3,
    explanation:
      'Myelinskidan isolerar axonet och gör att impulsen "hoppar" mellan avbrotten (Ranviers noder) – mycket snabbare ledning.',
  },
  {
    id: 'm1b-081',
    topic: 'fysiologi',
    difficulty: 'grund',
    q: 'Vad kallas antalet hjärtslag per minut?',
    options: [
      'Blodtryck',
      'Andningsfrekvens',
      'Hjärtfrekvens (puls)',
      'Slagvolym',
    ],
    answer: 2,
    explanation:
      'Hjärtfrekvensen anger antal slag per minut. I vila ligger den vanligen kring 60–80 hos en vuxen.',
  },
  {
    id: 'm1b-082',
    topic: 'fysiologi',
    difficulty: 'grund',
    q: 'Vad transporterar venerna huvudsakligen tillbaka till hjärtat?',
    options: [
      'Endast syrerikt blod',
      'Syrefattigt blod (med undantag för lungvenerna)',
      'Lymfa',
      'Galla',
    ],
    answer: 1,
    explanation:
      'Venerna för i regel syrefattigt blod tillbaka till hjärtat. Lungvenerna är undantaget – de bär syrerikt blod från lungorna.',
  },

  // ---------------- IMMUNOLOGI (18) ----------------
  {
    id: 'm1b-083',
    topic: 'immunologi',
    difficulty: 'grund',
    q: 'Vad kallas de vita blodkropparna med ett samlingsnamn?',
    options: [
      'Erytrocyter',
      'Trombocyter',
      'Hepatocyter',
      'Leukocyter',
    ],
    answer: 3,
    explanation:
      'Leukocyter = vita blodkroppar, kroppens immunceller. Erytrocyter är röda blodkroppar.',
  },
  {
    id: 'm1b-084',
    topic: 'immunologi',
    difficulty: 'grund',
    q: 'Vilken är hudens viktigaste roll i immunförsvaret?',
    options: [
      'Den är en fysisk barriär som hindrar mikrober från att komma in',
      'Den producerar antikroppar',
      'Den bildar röda blodkroppar',
      'Den lagrar minnesceller',
    ],
    answer: 0,
    explanation:
      'Den intakta huden är en mekanisk barriär och tillhör det medfödda försvarets första linje.',
  },
  {
    id: 'm1b-085',
    topic: 'immunologi',
    difficulty: 'grund',
    q: 'Vad gör fagocyterande celler (t.ex. makrofager)?',
    options: [
      'De producerar hormoner',
      'De äter upp (fagocyterar) mikrober och skräp',
      'De transporterar syre',
      'De bildar blodproppar',
    ],
    answer: 1,
    explanation:
      'Fagocyter omsluter och bryter ner bakterier och cellrester. Makrofager är typiska "ätarceller".',
  },
  {
    id: 'm1b-086',
    topic: 'immunologi',
    difficulty: 'grund',
    q: 'Vad är feber ofta ett tecken på?',
    options: [
      'Att kroppen har för lågt blodsocker',
      'Att man druckit för lite vatten enbart',
      'Att immunförsvaret är aktiverat, ofta mot en infektion',
      'Att skelettet växer',
    ],
    answer: 2,
    explanation:
      'Feber är en del av immunsvaret; en höjd kroppstemperatur kan försvåra för mikroberna och påskynda försvaret.',
  },
  {
    id: 'm1b-087',
    topic: 'immunologi',
    difficulty: 'grund',
    q: 'Vad kallas det system av kärl och körtlar som bl.a. transporterar immunceller?',
    options: [
      'Lymfsystemet',
      'Nervsystemet',
      'Endokrina systemet',
      'Matsmältningssystemet',
    ],
    answer: 0,
    explanation:
      'Lymfsystemet transporterar lymfa och immunceller och har lymfknutor där immunsvar startar.',
  },
  {
    id: 'm1b-088',
    topic: 'immunologi',
    difficulty: 'intermediar',
    q: 'Vad är skillnaden mellan det medfödda och det adaptiva immunförsvaret i fråga om specificitet?',
    options: [
      'Det medfödda är specifikt, det adaptiva ospecifikt',
      'Båda är helt ospecifika',
      'Båda riktar sig bara mot virus',
      'Det medfödda är ospecifikt, det adaptiva är specifikt mot bestämda antigen',
    ],
    answer: 3,
    explanation:
      'Det medfödda försvaret reagerar generellt och snabbt; det adaptiva känner igen specifika antigen och bygger minne.',
  },
  {
    id: 'm1b-089',
    topic: 'immunologi',
    difficulty: 'intermediar',
    q: 'Vilken roll har T-hjälparceller (CD4+) i immunförsvaret?',
    options: [
      'De transporterar syre',
      'De bildar blodproppar',
      'De koordinerar och aktiverar andra immunceller',
      'De producerar magsyra',
    ],
    answer: 2,
    explanation:
      'T-hjälparceller styr immunsvaret genom att aktivera B-celler och andra T-celler. Det är dessa celler som hiv angriper.',
  },
  {
    id: 'm1b-090',
    topic: 'immunologi',
    difficulty: 'intermediar',
    q: 'Vad är en antikropps huvudfunktion?',
    options: [
      'Att bryta ner näring i tarmen',
      'Att känna igen och binda ett specifikt antigen',
      'Att transportera koldioxid',
      'Att bilda nya blodkroppar',
    ],
    answer: 1,
    explanation:
      'Antikroppar binder specifikt till sitt antigen och märker upp det för förstörelse eller neutraliserar det.',
  },
  {
    id: 'm1b-091',
    topic: 'immunologi',
    difficulty: 'intermediar',
    q: 'Vad innebär en allergi i immunologiska termer?',
    options: [
      'Immunförsvaret är helt avstängt',
      'Kroppen saknar vita blodkroppar',
      'En bakterie producerar gift',
      'Immunförsvaret överreagerar mot ett i grunden ofarligt ämne',
    ],
    answer: 3,
    explanation:
      'Vid allergi reagerar immunförsvaret onödigt kraftigt mot ofarliga allergen som pollen eller pälsdjur.',
  },
  {
    id: 'm1b-092',
    topic: 'immunologi',
    difficulty: 'intermediar',
    q: 'Vad är en autoimmun sjukdom?',
    options: [
      'Immunförsvaret angriper kroppens egna friska vävnader',
      'Kroppen kan inte bilda antikroppar alls',
      'En infektion orsakad av virus',
      'En brist på röda blodkroppar',
    ],
    answer: 0,
    explanation:
      'Vid autoimmunitet riktas immunsvaret felaktigt mot kroppsegen vävnad, t.ex. vid typ 1-diabetes och reumatoid artrit.',
  },
  {
    id: 'm1b-093',
    topic: 'immunologi',
    difficulty: 'intermediar',
    q: 'Var mognar T-lymfocyterna?',
    options: [
      'I levern',
      'I tymus (brässen)',
      'I njurarna',
      'I lungorna',
    ],
    answer: 1,
    explanation:
      'T-cellernas "T" står för tymus, där de mognar. B-celler mognar i benmärgen (bone marrow).',
  },
  {
    id: 'm1b-094',
    topic: 'immunologi',
    difficulty: 'intermediar',
    q: 'Vad kallas det när antikroppar i blodet förs över direkt och ger snabbt men kortvarigt skydd?',
    options: [
      'Aktiv immunitet',
      'Medfödd barriär',
      'Passiv immunitet',
      'Inflammation',
    ],
    answer: 2,
    explanation:
      'Passiv immunitet (t.ex. antikroppar via moderkakan eller injektion) skyddar direkt men varar bara så länge antikropparna finns kvar.',
  },
  {
    id: 'm1b-095',
    topic: 'immunologi',
    difficulty: 'avancerad',
    q: 'Vilken antikroppsklass finns i störst mängd i blodet och ger långvarigt skydd?',
    options: [
      'IgG',
      'IgE',
      'IgM',
      'IgD',
    ],
    answer: 0,
    explanation:
      'IgG är den vanligaste antikroppen i blodet, dominerar i sekundärsvaret och kan passera moderkakan.',
  },
  {
    id: 'm1b-096',
    topic: 'immunologi',
    difficulty: 'avancerad',
    q: 'Vilken antikroppsklass är främst kopplad till allergiska reaktioner?',
    options: [
      'IgG',
      'IgA',
      'IgM',
      'IgE',
    ],
    answer: 3,
    explanation:
      'IgE binder till mastceller och utlöser frisättning av histamin vid allergi och parasitförsvar.',
  },
  {
    id: 'm1b-097',
    topic: 'immunologi',
    difficulty: 'avancerad',
    q: 'Vad gör histamin som frisätts vid en allergisk eller inflammatorisk reaktion?',
    options: [
      'Drar ihop alla blodkärl och bleknar huden',
      'Sänker kroppstemperaturen',
      'Vidgar blodkärl och ökar genomsläpplighet, vilket ger rodnad och svullnad',
      'Bildar nya antikroppar',
    ],
    answer: 2,
    explanation:
      'Histamin ökar blodflöde och kärlläckage lokalt. Antihistaminer motverkar just dessa effekter vid allergi.',
  },
  {
    id: 'm1b-098',
    topic: 'immunologi',
    difficulty: 'avancerad',
    q: 'Vad är komplementsystemet?',
    options: [
      'En typ av vit blodkropp',
      'En grupp blodproteiner som hjälper till att förstöra mikrober',
      'Ett hormon från sköldkörteln',
      'En del av nervsystemet',
    ],
    answer: 1,
    explanation:
      'Komplementsystemet är plasmaproteiner som märker upp, lockar fagocyter till och kan spränga mikrobernas membran.',
  },
  {
    id: 'm1b-099',
    topic: 'immunologi',
    difficulty: 'avancerad',
    q: 'Vad skiljer ett primärt immunsvar från ett sekundärt?',
    options: [
      'Det primära ger fler minnesceller än det sekundära',
      'Det sekundära saknar antikroppar',
      'De är identiska i styrka och hastighet',
      'Det sekundära är snabbare och kraftigare tack vare minnesceller',
    ],
    answer: 3,
    explanation:
      'Vid första kontakten (primärsvar) byggs immunitet långsamt. Vid återkontakt ger minnescellerna ett snabbt, starkt sekundärsvar.',
  },
  {
    id: 'm1b-100',
    topic: 'immunologi',
    difficulty: 'avancerad',
    q: 'Vilken typ av celler ger immunförsvaret sitt långsiktiga minne efter en infektion eller vaccination?',
    options: [
      'Minnesceller (minnes-B- och minnes-T-celler)',
      'Röda blodkroppar',
      'Blodplättar',
      'Fettceller',
    ],
    answer: 0,
    explanation:
      'Minnesceller överlever länge efter en infektion och gör att kroppen reagerar mycket snabbare vid nytt möte med samma antigen.',
  },
]
