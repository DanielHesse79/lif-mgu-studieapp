/**
 * Statiska lärtexter – Modul 3, fördjupningar (komplement till m3/*).
 * Struktur: { topicId: { lessonId: lektion } }. Lektionen matchar Lär dig-renderaren:
 * { title, intro, sections:[{heading, body}], keyTerms:[{term, definition}], takeaways:[] }
 * Nyckelbegrepp markeras med **fetstil** i body.
 */
export const M3_LESSONS_EXTRA = {
  internmedicin: {
    hjartinfarkt: {
      title: 'Kärlkramp och hjärtinfarkt',
      intro:
        'Hjärtat pumpar blod till hela kroppen men behöver också själv syre. När hjärtats egna blodkärl blir trånga uppstår kärlkramp – när ett kärl täpps till helt blir det hjärtinfarkt.',
      sections: [
        {
          heading: 'Kranskärlen och åderförfettning',
          body: 'Blodet till hjärtmuskeln kommer via **kranskärlen**, några smala kärl som ligger utanpå hjärtat som en krans. Under många år kan fett, kolesterol och inflammatoriska celler byggas in i kärlväggen. Processen kallas **ateroskleros** (åderförfettning) och det som byggs upp kallas **plack**. Placket gör kärlet trängre, så att mindre blod hinner fram. Så länge kärlet är tillräckligt öppet märks ingenting, och därför kan processen pågå obemärkt i decennier. Risken ökar av **rökning**, högt blodtryck, höga blodfetter, diabetes, övervikt, stillasittande och ärftlighet.',
        },
        {
          heading: 'Kärlkramp eller infarkt?',
          body: 'Vid **kärlkramp** (**angina pectoris**) räcker blodflödet i vila, men vid ansträngning eller stress behöver hjärtat mer syre än det trånga kärlet kan leverera. Då uppstår **syrebrist** i hjärtmuskeln, vilket känns som ett tryck eller ett band över bröstet. Besvären lättar inom några minuter vid vila, och hjärtmuskeln tar ingen bestående skada.\n\nVid **hjärtinfarkt** spricker i stället ett plack. Kroppen uppfattar det som en skada och bildar en blodpropp på stället, som täpper till kärlet helt eller nästan helt. Hjärtmuskeln bakom stoppet får då inget blod alls och celler börjar dö inom kort tid. Skillnaderna mot kärlkramp är typiska:\n\n- smärtan kommer ofta i vila och går inte över\n- den är kraftigare och kan stråla ut i arm, hals, käke eller rygg\n- vanligt med kallsvett, illamående, andnöd och ångest\n\nSymtomen kan vara mer diffusa hos kvinnor, äldre och personer med diabetes.',
        },
        {
          heading: 'Akut omhändertagande',
          body: 'Hjärtinfarkt är ett **akut** tillstånd – ring 112. Ju tidigare kärlet öppnas, desto mindre hjärtmuskel går förlorad. På sjukhus tas **EKG**, som visar hjärtats elektriska aktivitet, och blodprov på **troponin**, ett ämne som läcker ut i blodet när hjärtmuskelceller skadas. Vanligaste åtgärden är **PCI** (ballongvidgning), där man går in via ett blodkärl, vidgar förträngningen och oftast lämnar kvar ett litet nät (stent) som håller kärlet öppet. Efteråt följer läkemedel som ska förebygga nya händelser – blodfettssänkande, blodproppshämmande och blodtryckssänkande – samt rehabilitering, rökstopp och fysisk aktivitet.',
        },
      ],
      keyTerms: [
        { term: 'Kranskärl', definition: 'De blodkärl som försörjer hjärtmuskeln med syrerikt blod.' },
        { term: 'Ateroskleros', definition: 'Åderförfettning; plack av fett och inflammation gör kärlen trängre.' },
        { term: 'Angina pectoris', definition: 'Kärlkramp – övergående syrebrist i hjärtmuskeln, typiskt vid ansträngning.' },
        { term: 'Hjärtinfarkt', definition: 'Ett kranskärl täpps till av en blodpropp så att hjärtmuskelceller dör.' },
        { term: 'Troponin', definition: 'Blodprov som stiger när hjärtmuskelceller skadas.' },
        { term: 'PCI', definition: 'Ballongvidgning av ett förträngt kranskärl, oftast med stent.' },
      ],
      takeaways: [
        'Ateroskleros bygger under många år upp plack som gör kranskärlen trånga.',
        'Kärlkramp = övergående syrebrist vid ansträngning, lättar vid vila.',
        'Hjärtinfarkt = kärlet täpps till helt och hjärtmuskel dör – ring 112.',
        'Snabb PCI öppnar kärlet; därefter förebyggande läkemedel och rehabilitering.',
      ],
    },

    skoldkortel: {
      title: 'Sköldkörtelsjukdomar',
      intro:
        'Sköldkörteln sitter framtill på halsen och tillverkar det hormon som styr kroppens ämnesomsättning. Den kan arbeta för långsamt eller för snabbt.',
      sections: [
        {
          heading: 'Sköldkörteln och tyroxin',
          body: 'Sköldkörteln (**tyreoidea**) är en fjärilsformad körtel framtill på halsen. Den tillverkar hormonet **tyroxin** (T4) och det mer aktiva T3, med hjälp av **jod** från maten. Hormonen styr **ämnesomsättningen** – hur snabbt kroppens celler förbrukar energi. De påverkar puls, kroppstemperatur, vikt, tarmens rörelser, hud och humör. Man kan likna sköldkörteln vid kroppens gaspedal: går den för sakta blir allt trögt, går den för fort rusar allt. Körteln kan också bli förstorad, vilket kallas **struma** och ibland syns som en svullnad på halsen.',
        },
        {
          heading: 'TSH – kroppens termostat',
          body: 'Sköldkörteln styrs av **hypofysen** i hjärnan, som skickar signalhormonet **TSH**. Systemet fungerar som en termostat, och därför går TSH åt motsatt håll mot sköldkörtelhormonet:\n\n- Bildas för lite tyroxin höjer hypofysen TSH för att driva på körteln – **högt TSH** talar alltså för underfunktion.\n- Bildas för mycket tyroxin bromsar hypofysen – **lågt TSH** talar för överfunktion.\n\nTSH är därför det prov man börjar med, ofta tillsammans med T4. En vanlig missuppfattning är att högt TSH skulle betyda att körteln arbetar för hårt – det är tvärtom.',
        },
        {
          heading: 'Underfunktion och överfunktion',
          body: '**Hypotyreos** (underfunktion) betyder för lite hormon och gör allt långsammare: trötthet, frusenhet, viktuppgång, förstoppning, torr hud, långsam puls och nedstämdhet. Symtomen är ospecifika och kommer smygande, så tillståndet hinner ofta pågå länge innan det upptäcks. Vanligaste orsaken i Sverige är en **autoimmun** inflammation i körteln. Behandlingen är enkel och effektiv – **levotyroxin** i tablett ersätter hormonet som saknas, och dosen ställs in efter TSH. Den är oftast livslång.\n\n**Hypertyreos** (överfunktion) betyder för mycket hormon och gör allt snabbare: hjärtklappning, viktnedgång trots god aptit, svettningar, värmekänsla, oro, skakningar och sömnsvårigheter. En vanlig orsak är Graves sjukdom, som också är autoimmun. Här bromsar man i stället produktionen – med **tyreostatika**, radioaktivt jod eller operation. Sköldkörtelsjukdom är betydligt vanligare hos kvinnor än hos män, och prov på sköldkörteln hör till de vanligaste blodproven i primärvården.',
        },
      ],
      keyTerms: [
        { term: 'Tyreoidea', definition: 'Sköldkörteln; körteln på halsen som tillverkar sköldkörtelhormon.' },
        { term: 'Tyroxin (T4)', definition: 'Sköldkörtelns huvudhormon, som styr ämnesomsättningen.' },
        { term: 'TSH', definition: 'Hypofysens signalhormon till sköldkörteln; går åt motsatt håll mot tyroxin.' },
        { term: 'Hypotyreos', definition: 'Underfunktion – för lite hormon, allt i kroppen går långsammare.' },
        { term: 'Hypertyreos', definition: 'Överfunktion – för mycket hormon, allt i kroppen går snabbare.' },
        { term: 'Levotyroxin', definition: 'Tablett som ersätter kroppens eget tyroxin vid hypotyreos.' },
      ],
      takeaways: [
        'Tyroxin från sköldkörteln styr ämnesomsättningen – kroppens gaspedal.',
        'Högt TSH talar för hypotyreos, lågt TSH för hypertyreos – TSH går åt motsatt håll.',
        'Hypotyreos behandlas med levotyroxin; vid hypertyreos bromsas produktionen.',
      ],
    },
  },

  onkologi: {
    'vanliga-cancerformer': {
      title: 'Vanliga cancerformer',
      intro:
        'Cancer är inte en sjukdom utan hundratals, med olika förlopp och behandling. Några få former står för en stor del av alla fall i Sverige.',
      sections: [
        {
          heading: 'De vanligaste formerna',
          body: 'Fem områden dominerar statistiken:\n\n- **Bröstcancer** – vanligast hos kvinnor. Upptäcks som en knöl eller vid mammografi, och prognosen är oftast god när den hittas tidigt.\n- **Prostatacancer** – vanligast hos män. Växer ofta långsamt, och många äldre män lever med den utan att den hinner ge besvär.\n- **Lungcancer** – starkast kopplad till rökning. Ger få tidiga symtom och upptäcks därför ofta sent, vilket gör den till en av de dödligaste.\n- **Tjock- och ändtarmscancer** – utvecklas oftast långsamt ur godartade **polyper** i tarmväggen. Blod i avföringen och ändrade avföringsvanor är varningstecken.\n- **Hudcancer** – räknas basalcellscancer in är detta den allra vanligaste cancerformen. Basalcellscancer växer lokalt och sprider sig i praktiken aldrig, medan **malignt melanom** är ovanligare men allvarligare och kan bilda metastaser.',
        },
        {
          heading: 'Riskfaktorer',
          body: 'Den starkaste riskfaktorn är **ålder** – ju fler celldelningar under ett liv, desto större chans att fel uppstår. Andra kända faktorer är **rökning** (den enskilt största påverkbara), alkohol, övervikt och stillasittande samt UV-strålning från sol och solarium. Vissa infektioner spelar roll, som **HPV** vid livmoderhalscancer. **Ärftlighet** förklarar en mindre andel av fallen. Men riskfaktorer ökar bara sannolikheten och avgör aldrig ett enskilt fall – de flesta rökare får aldrig lungcancer, och en del som aldrig rökt insjuknar ändå. Mycket handlar om slump: många drabbas utan några riskfaktorer alls, och ingen bär skuld till sin cancer.',
        },
        {
          heading: 'Screening',
          body: '**Screening** innebär att undersöka friska personer för att hitta sjukdom tidigt, innan den ger symtom. I Sverige erbjuds **mammografi** för bröstcancer, cellprov med HPV-test för livmoderhalscancer och prov på avföringen för tjock- och ändtarmscancer. Prostatacancer ingår inte i något allmänt screeningprogram – **PSA-prov** kan tas efter läkarkontakt, och organiserad testning prövas i flera regioner. Den som kallas till screening är alltså inte misstänkt sjuk – hela poängen är att undersöka friska. Screening räddar liv, men har också en baksida: **överdiagnostik**, alltså att man hittar och behandlar tumörer som aldrig hade hunnit göra skada.',
        },
      ],
      keyTerms: [
        { term: 'Polyp', definition: 'Godartad utväxt i tarmslemhinnan som med tiden kan utvecklas till cancer.' },
        { term: 'Malignt melanom', definition: 'Den allvarligaste hudcancerformen; kan sprida sig till andra organ.' },
        { term: 'Screening', definition: 'Systematisk undersökning av friska personer för att hitta sjukdom tidigt.' },
        { term: 'Mammografi', definition: 'Röntgen av brösten, som används för screening av bröstcancer.' },
        { term: 'PSA', definition: 'Blodprov som kan tala för prostatacancer, men som inte används för allmän screening.' },
        { term: 'Överdiagnostik', definition: 'Att hitta och behandla tumörer som aldrig skulle hunnit ge besvär.' },
      ],
      takeaways: [
        'Bröst, prostata, lunga, tjocktarm och hud är de vanligaste cancerformerna.',
        'Ålder är den starkaste riskfaktorn; rökning den största påverkbara.',
        'Screening finns för bröst, livmoderhals och tarm – men inte allmänt för prostata.',
        'Tidig upptäckt förbättrar prognosen, men screening medför även överdiagnostik.',
      ],
    },

    cancerbiverkningar: {
      title: 'Biverkningar av cancerbehandling',
      intro:
        'Cytostatika angriper celler som delar sig snabbt. Eftersom även friska celler gör det uppstår biverkningar – och de följer ett logiskt mönster.',
      sections: [
        {
          heading: 'Varför biverkningarna uppstår',
          body: '**Cytostatika** (cellgifter) stör celldelningen. Cancerceller delar sig ofta okontrollerat och drabbas därför hårt. Men läkemedlet sprids med blodet i hela kroppen och kan inte se skillnad på cancercell och frisk cell. Därför drabbas även kroppens snabbast delande friska vävnader – och det är just de som förklarar biverkningsmönstret:\n\n- **benmärgen**, som tillverkar blodkropparna\n- **slemhinnorna** i mun och mag-tarmkanal\n- **hårsäckarna**\n\nBiverkningarna är alltså inte slumpmässiga, utan följer av var celldelningen är som snabbast. Hur uttalade de blir varierar däremot mycket mellan olika cytostatika, doser och personer.',
        },
        {
          heading: 'De klassiska biverkningarna',
          body: 'När benmärgen hämmas sjunker blodkropparna. Färre vita blodkroppar (**neutropeni**) ger **infektionskänslighet** – därför är feber under pågående cytostatikabehandling ett akut tillstånd som kräver kontakt med vården samma dag. Färre röda blodkroppar ger blodbrist med trötthet och andfåddhet, och färre blodplättar ger blåmärken och blödningsbenägenhet.\n\nPåverkan på slemhinnorna ger muninflammation (**mukosit**) och diarré. Illamåendet beror dessutom på direkt påverkan på hjärnans kräkcentrum och kan i dag ofta förebyggas effektivt med läkemedel mot illamående. Håravfallet är övergående – håret kommer tillbaka efteråt. **Fatigue**, en uttalad trötthet som inte går bort av vila, är en av de mest besvärande biverkningarna och underskattas ofta. Många besvär kommer i vågor mellan behandlingsomgångarna, eftersom kroppen hinner återhämta sig mellan kurerna.',
        },
        {
          heading: 'Målriktad terapi och immunterapi',
          body: 'Nyare behandlingar arbetar annorlunda. **Målriktade läkemedel** riktar sig mot en specifik molekyl som just den tumören är beroende av och ger därför mindre av de klassiska cytostatikabiverkningarna – men egna i stället, som hudutslag, diarré och påverkan på blodtryck, lever eller hjärta. **Immunterapi**, till exempel **checkpointhämmare**, släpper i stället lös patientens eget immunförsvar mot tumören. Biverkningarna liknar då autoimmuna reaktioner och kallas **immunrelaterade biverkningar**: inflammation kan uppstå i tarm, hud, lever eller sköldkörtel, ibland först efter en tid. Även dessa behandlingar kräver alltså noggrann uppföljning, och patienten behöver veta vilka symtom som ska rapporteras. En viktig poäng är att mer målriktat inte betyder biverkningsfritt.',
        },
      ],
      keyTerms: [
        { term: 'Cytostatika', definition: 'Cellgifter som stör celldelningen och därför drabbar snabbdelande celler.' },
        { term: 'Benmärgshämning', definition: 'Minskad produktion av blodkroppar – en central cytostatikabiverkning.' },
        { term: 'Neutropeni', definition: 'Brist på vita blodkroppar, vilket ger stor infektionskänslighet.' },
        { term: 'Mukosit', definition: 'Inflammation och sårighet i munnens och tarmens slemhinnor.' },
        { term: 'Fatigue', definition: 'Uttalad cancerrelaterad trötthet som inte går över av vila.' },
        { term: 'Immunrelaterade biverkningar', definition: 'Autoimmunliknande inflammation som kan uppstå vid immunterapi.' },
      ],
      takeaways: [
        'Cytostatika drabbar snabbdelande celler – även friska i benmärg, slemhinnor och hårsäckar.',
        'Neutropeni ger infektionskänslighet: feber under cellgiftsbehandling är akut.',
        'Illamående går ofta att förebygga; fatigue är vanlig och underskattad.',
        'Målriktad terapi och immunterapi ger andra biverkningar – inte inga.',
      ],
    },
  },

  neurologi: {
    demens: {
      title: 'Demens och Alzheimers sjukdom',
      intro:
        'Demens är ett samlingsnamn för sjukdomar som gradvis bryter ner hjärnan. Alzheimers sjukdom är den vanligaste orsaken.',
      sections: [
        {
          heading: 'Ett samlingsnamn',
          body: '**Demens** (i dag ofta kallat kognitiv sjukdom) är inget enskilt tillstånd utan ett samlingsnamn. Det innebär att minne och andra **kognitiva** funktioner – tänkande, språk, orienteringsförmåga och omdöme – försämras så mycket att vardagen påverkas. Bakom ligger sjukdomar som gradvis bryter ner hjärnans nervceller.\n\n- **Alzheimers sjukdom** – den klart vanligaste orsaken, ungefär två av tre fall.\n- **Vaskulär demens** – skador orsakade av hjärnans blodkärl, ofta många små infarkter.\n- Lewykroppsdemens och frontallobsdemens – ovanligare, med delvis andra symtom.\n\nHög ålder är den viktigaste riskfaktorn, men demens är inte en normal del av åldrandet.',
        },
        {
          heading: 'Vad händer i hjärnan vid Alzheimer',
          body: 'Vid Alzheimers sjukdom ses två typiska proteinförändringar. Proteinet **amyloid** klumpar ihop sig utanför nervcellerna och bildar **plack**, medan proteinet **tau** trasslar ihop sig till nystan inuti cellerna. Parallellt går kontaktpunkterna mellan nervcellerna (**synapser**) förlorade och till slut cellerna själva, så att hjärnvävnaden krymper. Förändringarna börjar typiskt i områden som är viktiga för minnet och sprider sig sedan vidare. Processen pågår i tysthet under många år innan de första symtomen märks. Liknande förändringar kan i mindre omfattning finnas även hos friska äldre, vilket gör gränsdragningen svår. Exakt hur orsakskedjan ser ut är fortfarande inte helt klarlagt – det är ett av forskningens stora frågetecken.',
        },
        {
          heading: 'Symtom och behandling',
          body: 'Symtomen kommer smygande. Först drabbas oftast **närminnet**: nyss inträffade händelser glöms, samma fråga upprepas, saker kommer bort. Med tiden tillkommer ordglömska, svårt att hitta i tid och rum, sämre omdöme och problem med vardagssysslor – senare även personlighetsförändring, oro och behov av hjälp med det mesta. Diagnosen ställs genom en samlad **minnesutredning** med kognitiva tester, blodprov och hjärnavbildning, ibland kompletterad med prov på ryggvätskan.\n\nIngen behandling botar sjukdomen. **Symtomlindrande** läkemedel kan hos vissa dämpa symtomen och bevara funktion en tid. Nyare läkemedel riktade mot **amyloid** har på senare år godkänts, men effekten är begränsad och de är aktuella bara i tidigt skede. Minst lika viktigt är anpassat stöd, struktur, hjälpmedel och stöd till anhöriga.',
        },
      ],
      keyTerms: [
        { term: 'Demens', definition: 'Samlingsnamn för sjukdomar som gradvis försämrar minne och tänkande så att vardagen påverkas.' },
        { term: 'Kognitiv', definition: 'Som rör tänkande, minne, språk och orienteringsförmåga.' },
        { term: 'Alzheimers sjukdom', definition: 'Vanligaste demenssjukdomen, med amyloidplack och tau-nystan i hjärnan.' },
        { term: 'Amyloid', definition: 'Protein som klumpar ihop sig till plack utanför nervcellerna vid Alzheimer.' },
        { term: 'Tau', definition: 'Protein som bildar trassliga nystan inuti nervcellerna vid Alzheimer.' },
        { term: 'Vaskulär demens', definition: 'Demens orsakad av skador på hjärnans blodkärl.' },
      ],
      takeaways: [
        'Demens är ett samlingsnamn; Alzheimers sjukdom är den vanligaste orsaken.',
        'Vid Alzheimer klumpar amyloid och tau ihop sig och nervceller går förlorade.',
        'Symtomen börjar oftast i närminnet och utvecklas långsamt över år.',
        'Bot saknas, men symtomlindring, anpassat stöd och anhörigstöd gör skillnad.',
      ],
    },

    nervsmarta: {
      title: 'Nervsmärta och neuropati',
      intro:
        'De flesta smärtor kommer från en skada i vävnaden. Men smärta kan också uppstå när själva nervsystemet är skadat – och då fungerar vanliga smärtstillande sämre.',
      sections: [
        {
          heading: 'Två sorters smärta',
          body: 'Den vanligaste smärtan är **nociceptiv smärta**, alltså vävnadssmärta. Smärtreceptorer i vävnaden reagerar på en skada eller inflammation – en stukad fot, ett brännsår, en sliten led – och friska nerver skickar larmet vidare till hjärnan. Systemet fungerar som det ska.\n\nVid **neuropatisk smärta** (nervsmärta) sitter skadan i stället i själva nervsystemet: i en nerv, i ryggmärgen eller i hjärnan. Larmsystemet är trasigt och skickar signaler trots att det inte finns någon pågående vävnadsskada. Smärtan beskrivs typiskt som brännande, huggande eller som elektriska stötar, och området är ofta samtidigt domnat eller pirrigt. Två typiska fynd är **allodyni**, att en helt vanlig beröring som ett lakan mot huden gör ont, och **hyperalgesi**, att ett lätt smärtstimulus gör oproportionerligt ont.',
        },
        {
          heading: 'Vanliga orsaker',
          body: '**Neuropati** betyder sjukdom eller skada på nerver. De vanligaste orsakerna är:\n\n- **Diabetes** – långvarigt högt blodsocker skadar de tunna nervtrådarna. Besvären börjar oftast symmetriskt i fötterna och kryper uppåt. Detta är den vanligaste orsaken.\n- **Bältros** – viruset skadar en nervknuta, och smärtan kan sitta kvar länge efter att utslagen läkt. Det kallas **postherpetisk neuralgi**.\n- **Cellgifter** – vissa cytostatika är nervskadande och ger domningar och smärta i händer och fötter.\n- Andra orsaker är klämda nerver, alkohol, B12-brist, MS, stroke och amputation (fantomsmärta).',
        },
        {
          heading: 'Därför biter vanliga smärtstillande sämre',
          body: 'Paracetamol och antiinflammatoriska läkemedel (**NSAID**) verkar där det finns en vävnadsskada eller inflammation att dämpa. Vid nervsmärta finns ingen sådan – därför har de ofta dålig effekt, och även **opioider** fungerar sämre än väntat. I stället används läkemedel som lugnar de överaktiva nervsignalerna: vissa **antidepressiva** och vissa **epilepsiläkemedel**. Här ges de alltså inte mot depression eller epilepsi, utan för sin effekt på nervsystemet – en viktig sak att kunna förklara, eftersom receptet annars lätt förvirrar patienten. Effekten är dessutom ofta partiell: målet är att lindra och göra vardagen möjlig, inte att bli helt smärtfri. Fysisk aktivitet, sömn och psykologiskt stöd har därför en självklar plats vid sidan av läkemedlen.',
        },
      ],
      keyTerms: [
        { term: 'Nociceptiv smärta', definition: 'Vanlig vävnadssmärta från skada eller inflammation; larmsystemet fungerar som det ska.' },
        { term: 'Neuropatisk smärta', definition: 'Smärta som beror på en skada i själva nervsystemet.' },
        { term: 'Neuropati', definition: 'Sjukdom eller skada på nerver, ofta märkbar i fötter och händer.' },
        { term: 'Allodyni', definition: 'När helt vanlig beröring upplevs som smärtsam.' },
        { term: 'Postherpetisk neuralgi', definition: 'Långvarig nervsmärta som sitter kvar efter bältros.' },
      ],
      takeaways: [
        'Vävnadssmärta = skada i vävnaden. Nervsmärta = skada i nervsystemet självt.',
        'Vanliga orsaker är diabetes, bältros och vissa cellgifter.',
        'Paracetamol, NSAID och opioider har ofta dålig effekt vid nervsmärta.',
        'I stället används vissa antidepressiva och epilepsiläkemedel – för nervsignalerna, inte diagnosen.',
      ],
    },
  },

  psykiatri: {
    adhd: {
      title: 'ADHD och autismspektrum',
      intro:
        'ADHD och autism är neuropsykiatriska funktionsnedsättningar – skillnader i hur hjärnan bearbetar information. De är vanliga och finns hos människor på alla begåvningsnivåer.',
      sections: [
        {
          heading: 'ADHD – kärnsymtomen',
          body: '**ADHD** handlar om hur hjärnan reglerar uppmärksamhet och impulser. Tre kärnområden beskrivs:\n\n- **Uppmärksamhet** – svårt att hålla kvar fokus på det som inte engagerar, lätt avledd, tappar tråden och har svårt att organisera. Många kan samtidigt fastna i djupt fokus på det som fängslar.\n- **Impulsivitet** – svårt att hejda sig; svarar innan frågan är färdig, avbryter, tar snabba beslut.\n- **Överaktivitet** – rastlöshet och svårt att sitta stilla. Hos vuxna märks det oftare som en inre rastlöshet än som synlig överaktivitet.\n\nMycket kan förklaras av **exekutiva funktioner** – hjärnans förmåga att planera, komma igång, prioritera och reglera sig själv. Ärftligheten är hög. Diagnosen ställs efter en bred utredning, inte med ett enskilt prov, och kräver att svårigheterna funnits sedan barndomen och tydligt påverkar vardagen.',
        },
        {
          heading: 'Autismspektrum',
          body: '**Autism** (autismspektrumtillstånd) handlar framför allt om två saker: skillnader i **socialt samspel** och kommunikation, samt **begränsade och upprepade mönster** i beteende och intressen. Vanligt är ett stort behov av förutsägbarhet och rutiner, starka intressen, en mer bokstavlig tolkning av det som sägs och en annorlunda känslighet för **sinnesintryck** som ljud, ljus och beröring. Ordet **spektrum** betyder att uttrycken varierar enormt – från personer som behöver omfattande stöd hela livet till personer som arbetar och studerar men blir djupt uttröttade av social anpassning. ADHD och autism förekommer ofta tillsammans.',
        },
        {
          heading: 'Funktionsvariation och insatser',
          body: 'Båda beskrivs i dag hellre som **funktionsvariation** än som sjukdom: hjärnan fungerar annorlunda, inte sämre. Funktionsnedsättningen uppstår i mötet mellan personens förutsättningar och omgivningens krav, och en väl anpassad miljö gör stor skillnad. Samtidigt är svårigheterna verkliga, och **samsjuklighet** med depression, ångest och sömnproblem är vanlig – därför är stöd viktigt.\n\nInsatserna börjar med **anpassningar**: struktur, hjälpmedel, tydlig information, anpassad skol- och arbetsmiljö samt kunskap om den egna funktionen. Vid ADHD finns även **läkemedel**, både centralstimulerande och icke-centralstimulerande, som för många förbättrar förmågan att fokusera och reglera impulser. De sätts in och följs upp inom specialistvården och kombineras med övriga insatser. Vid autism finns inga läkemedel mot tillståndet i sig, men samtidiga besvär kan behandlas.',
        },
      ],
      keyTerms: [
        { term: 'ADHD', definition: 'Neuropsykiatrisk funktionsnedsättning med svårigheter kring uppmärksamhet, impulsivitet och aktivitetsreglering.' },
        { term: 'Exekutiva funktioner', definition: 'Hjärnans förmåga att planera, komma igång, prioritera och reglera sig själv.' },
        { term: 'Autismspektrumtillstånd', definition: 'Tillstånd med skillnader i socialt samspel och kommunikation samt upprepade mönster och intressen.' },
        { term: 'Funktionsvariation', definition: 'Synsätt där hjärnan fungerar annorlunda, inte sämre; svårigheten uppstår i mötet med omgivningens krav.' },
        { term: 'Samsjuklighet', definition: 'När en person samtidigt har flera tillstånd, till exempel ADHD och depression.' },
        { term: 'Centralstimulerande läkemedel', definition: 'Vanlig läkemedelsgrupp vid ADHD; sätts in och följs upp av specialist.' },
      ],
      takeaways: [
        'ADHD kretsar kring uppmärksamhet, impulsivitet, överaktivitet och exekutiva funktioner.',
        'Autism är ett spektrum: socialt samspel, rutiner, intressen och sinnesintryck.',
        'Ses som funktionsvariation – funktionsnedsättningen uppstår i mötet med omgivningens krav.',
        'Anpassningar är grunden; vid ADHD finns även läkemedel som komplement.',
      ],
    },

    beroende: {
      title: 'Beroende och substansbruk',
      intro:
        'Beroende är en sjukdom i hjärnans belöningssystem, inte en fråga om svag karaktär. Kunskap om mekanismerna gör det lättare att förstå förloppet utan fördomar.',
      sections: [
        {
          heading: 'Belöningssystemet och dopamin',
          body: 'Hjärnan har ett **belöningssystem** som gör att sådant som gynnar överlevnaden känns bra – mat, gemenskap, närhet. Signalämnet **dopamin** är centralt: när det frisätts lär sig hjärnan att beteendet är värt att upprepa. Beroendeframkallande substanser kapar systemet genom att utlösa en dopaminfrisättning som är kraftigare och snabbare än den naturliga belöningar ger. Hjärnan lär sig då att just den substansen är viktigare än allt annat. Samtidigt kopplas platser, personer och situationer ihop med substansen och kan utlösa ett starkt **sug** (craving) långt efter att man slutat – därför sker **återfall** ofta i välbekanta miljöer.',
        },
        {
          heading: 'Tolerans, abstinens och beroende som sjukdom',
          body: '**Tolerans** innebär att hjärnan anpassar sig, så att samma dos ger allt mindre effekt och det krävs mer för samma känsla. **Abstinens** uppstår när substansen uteblir: den anpassade hjärnan svarar med besvär som ofta är substansens motsats – oro, skakningar, sömnproblem, illamående. Abstinens vid alkohol och vid lugnande läkemedel kan vara livshotande och ska hanteras inom vården.\n\n**Beroende** känns igen på **kontrollförlust** över hur mycket och hur ofta, starkt sug, att allt mer tid går åt, och att bruket fortsätter trots tydliga negativa konsekvenser. Beroende klassas som en sjukdom – det handlar om varaktiga förändringar i hjärnans funktion, inte om svag vilja eller dålig moral. Risken påverkas av ärftlighet, psykisk ohälsa, trauma och livsomständigheter. Skam gör det svårare att söka hjälp, så ett respektfullt och icke-dömande bemötande är en del av behandlingen.',
        },
        {
          heading: 'Substanser och behandling',
          body: '**Alkohol** och **nikotin** är de vanligaste beroendena och orsakar störst samlad skada i befolkningen. Även läkemedel kan ge beroende, framför allt **opioider** (starka smärtstillande) och **bensodiazepiner** (lugnande och sömnmedel) – därför är indikation och uppföljning så viktiga. Narkotiska preparat som cannabis, centralstimulerande medel och heroin har olika risker och skadebild. Spel om pengar räknas i dag också som ett beroende, vilket visar att det inte krävs någon substans för att belöningssystemet ska kapas.\n\nBehandlingen kombinerar psykologiskt stöd, socialt stöd och läkemedel. Vid alkohol-, nikotin- och opioidberoende finns läkemedel med god effekt. Återfall är vanliga och hör till sjukdomsförloppet – de är inte ett personligt misslyckande.',
        },
      ],
      keyTerms: [
        { term: 'Belöningssystem', definition: 'Hjärnans system som gör att livsviktiga beteenden känns bra och upprepas.' },
        { term: 'Dopamin', definition: 'Signalämne i belöningssystemet som lär hjärnan att upprepa ett beteende.' },
        { term: 'Tolerans', definition: 'När hjärnan anpassat sig så att samma dos ger allt mindre effekt.' },
        { term: 'Abstinens', definition: 'Besvär när substansen uteblir; kan vara livshotande vid alkohol och lugnande läkemedel.' },
        { term: 'Sug (craving)', definition: 'Stark impuls att använda substansen, ofta utlöst av miljöer och situationer.' },
        { term: 'Beroende', definition: 'Sjukdom med kontrollförlust och fortsatt bruk trots tydliga negativa konsekvenser.' },
      ],
      takeaways: [
        'Beroende är en sjukdom i hjärnans belöningssystem – inte svag vilja.',
        'Tolerans kräver mer för samma effekt; abstinens är hjärnans motreaktion.',
        'Alkohol och nikotin dominerar; även opioider, bensodiazepiner och spel ger beroende.',
        'Respektfullt bemötande är en del av behandlingen, och återfall hör till förloppet.',
      ],
    },
  },

  infektion: {
    sepsis: {
      title: 'Sepsis och allvarliga infektioner',
      intro:
        'Sepsis är kroppens egen överreaktion på en infektion och en av vårdens mest tidskritiska diagnoser. Varje timme räknas.',
      sections: [
        {
          heading: 'Vad sepsis är',
          body: 'En infektion börjar oftast lokalt – i lungorna, urinvägarna, huden eller buken – och immunförsvaret håller den normalt i schack. Vid **sepsis** spårar immunsvaret ur och drabbar hela kroppen. Inflammationen blir **systemisk**: blodkärlen vidgas och börjar läcka vätska, blodtrycket faller och små proppar bildas i de minsta kärlen. Följden blir att organen får för lite syre, vilket leder till **organsvikt** i njurar, lungor, lever eller hjärna. Poängen är att det inte är bakterien i sig utan kroppens egen överreaktion som gör sepsis livshotande – det gamla ordet "blodförgiftning" är därför missvisande. **Septisk chock** är den svåraste formen, där blodtrycket inte går att hålla uppe. Bakterier är vanligast, men även virus och svamp kan ligga bakom.',
        },
        {
          heading: 'Varningstecken',
          body: 'Sepsis kan utvecklas på några timmar, och personen är påtagligt sjukare än vid en vanlig infektion. Det finns inget enskilt prov som ställer diagnosen – det handlar om att känna igen mönstret. Översiktligt är dessa tecken alarmerande:\n\n- **snabb andning** och andfåddhet, ofta det allra tidigaste tecknet\n- hög feber eller mycket låg kroppstemperatur, frossa\n- **snabb puls** och **lågt blodtryck**, yrsel\n- **förvirring** eller ovanlig sömnighet – särskilt viktigt hos äldre\n- blek, kall eller fläckig hud\n- minskade urinmängder och kraftig sjukdomskänsla\n\nExtra vaksamhet gäller vid **nedsatt immunförsvar**, hög ålder, spädbarn och kroniska sjukdomar. Feber under pågående cytostatikabehandling ska alltid bedömas akut.',
        },
        {
          heading: 'Varje timme räknas',
          body: 'Sepsis är ett akutfall – ring 112. På sjukhus tas **blododling** för att hitta smittämnet, och **antibiotika** ges direkt i blodet så snabbt som möjligt. Samtidigt ges rikligt med **vätska i dropp** för att hålla uppe blodtrycket och organens genomblödning, plus syrgas och tät övervakning. Svåra fall vårdas på **intensivvårdsavdelning** med blodtryckshöjande läkemedel och andningsstöd. Infektionens källa måste också åtgärdas, till exempel genom att tömma en böld eller ta bort en infekterad kateter. Varje timmes fördröjning ökar risken att dö – därför är budskapet i vården att tänka tanken sepsis tidigt.',
        },
      ],
      keyTerms: [
        { term: 'Sepsis', definition: 'Livshotande tillstånd där kroppens svar på en infektion skadar de egna organen.' },
        { term: 'Septisk chock', definition: 'Svåraste formen av sepsis, där blodtrycket inte går att hålla uppe.' },
        { term: 'Systemisk', definition: 'Som berör hela kroppen, inte bara ett lokalt område.' },
        { term: 'Organsvikt', definition: 'När ett organ inte längre klarar sin uppgift, till exempel njurarna vid sepsis.' },
        { term: 'Blododling', definition: 'Prov där man odlar fram vilket smittämne som finns i blodet.' },
      ],
      takeaways: [
        'Sepsis = kroppens egen överreaktion på en infektion; organen får för lite syre.',
        'Varningstecken: snabb andning, förvirring, lågt blodtryck och kraftig sjukdomskänsla.',
        'Tidskritiskt – antibiotika och vätska så snabbt som möjligt. Ring 112.',
        'Feber hos den som får cellgifter ska alltid bedömas akut.',
      ],
    },

    vardhygien: {
      title: 'Vårdhygien och smittspridning',
      intro:
        'En stor del av alla vårdrelaterade infektioner går att förebygga. Nyckeln är att förstå hur smitta sprids – och att sköta händerna.',
      sections: [
        {
          heading: 'Smittvägar',
          body: 'För att smitta ska ske krävs tre saker: en smittkälla, en smittväg och en mottaglig person. Bryter man **smittkedjan** på något ställe uteblir smittan. I vården dominerar några få vägar:\n\n- **Kontaktsmitta** – den vanligaste. Direkt hud mot hud, eller indirekt via händer, kläder och föremål som sängbord och dörrhandtag. Personalens händer är den vanligaste transportvägen.\n- **Droppsmitta** – större droppar från hosta, nysning och tal faller ned inom ungefär en meter och når slemhinnor i ögon, näsa och mun. Så sprids till exempel influensa.\n- **Luftburen smitta** – mycket små partiklar som svävar kvar i luften och når längre bort. Kräver särskilda åtgärder, som vid mässling och tuberkulos.\n\nDessutom förekommer blodburen smitta via stickskador och smitta via tarminnehåll.',
        },
        {
          heading: 'Handhygien – den viktigaste åtgärden',
          body: '**Handdesinfektion** med alkoholbaserat medel före och efter varje patientkontakt är den enskilt viktigaste åtgärden mot vårdrelaterad smitta. Alkohol är snabbt, effektivt och skonsammare mot huden än tvål och vatten. **Handtvätt** behövs när händerna är synligt smutsiga och vid vissa smittämnen där alkohol biter dåligt, till exempel vid vinterkräksjuka.\n\nDetta ingår i de **basala hygienrutinerna**, som gäller alla, alltid, oavsett om smitta är känd eller inte:\n\n- desinfektera händerna före och efter varje vårdmoment\n- inga ringar, armbandsur eller armband; kortärmad arbetsdräkt\n- **handskar** vid kontakt med kroppsvätskor – de ersätter inte handdesinfektion och byts mellan varje moment\n- plastförkläde eller skyddsrock vid risk för stänk\n- korta naglar, inget nagellack och inga konstgjorda naglar',
        },
        {
          heading: 'Vårdrelaterade infektioner',
          body: 'En **vårdrelaterad infektion** (**VRI**) är en infektion som uppstår i samband med vård. De vanligaste är urinvägsinfektion kopplad till **kateter**, lunginflammation, infektion i operationssår och infektion via infarter i blodkärlen. De ger lidande och längre vårdtider, och driver dessutom antibiotikaanvändningen och därmed **resistens**. En stor del går att förebygga – genom hygienrutiner, genom att undvika onödiga katetrar och infarter, genom rengöring av utrustning och lokaler, genom vaccination av personal och genom att sjuk personal stannar hemma. Reglerna gäller alla som vistas på en vårdenhet, även besökare och läkemedelsinformatörer.',
        },
      ],
      keyTerms: [
        { term: 'Kontaktsmitta', definition: 'Smitta via beröring eller via händer, kläder och föremål; den vanligaste vägen i vården.' },
        { term: 'Droppsmitta', definition: 'Smitta via större droppar från hosta, nysning och tal, som når slemhinnor på nära håll.' },
        { term: 'Luftburen smitta', definition: 'Smitta via mycket små partiklar som svävar kvar i luften och sprids längre.' },
        { term: 'Basala hygienrutiner', definition: 'Grundreglerna som gäller vid alla vårdmoment, alltid – med handdesinfektion i centrum.' },
        { term: 'Vårdrelaterad infektion (VRI)', definition: 'Infektion som uppstår i samband med vård; ofta möjlig att förebygga.' },
      ],
      takeaways: [
        'Smitta kräver källa, smittväg och mottaglig person – bryt kedjan någonstans.',
        'Kontaktsmitta via händer är den vanligaste smittvägen i vården.',
        'Handdesinfektion före och efter varje patientkontakt är den viktigaste åtgärden.',
        'Vårdrelaterade infektioner är vanliga, kostsamma och till stor del möjliga att förebygga.',
      ],
    },
  },
}
