/**
 * Statiska lärtexter – Modul 1, fördjupningslektioner.
 *
 * Struktur: { topicId: { lessonId: lektion } }. Slås ihop med grundlektionerna
 * per ämnesområde i lessons/index.js.
 */
export const M1_LESSONS_EXTRA = {
  anatomi: {
    hud: {
      title: 'Huden och dess uppbyggnad',
      intro:
        'Huden är kroppens största organ och dess yttersta gräns mot omvärlden. Den skyddar, känner av och reglerar temperatur – och är dessutom en väg in för vissa läkemedel.',
      sections: [
        {
          heading: 'Hudens tre lager',
          body: 'Huden byggs upp av tre lager ovanpå varandra:\n\n- **Överhuden** (epidermis) är det yttersta lagret. Längst ut ligger ett **hornlager** av döda, keratinfyllda celler som utgör den egentliga barriären. Här finns också **melanocyter**, som bildar pigmentet melanin och ger både hudfärg och ett visst solskydd.\n- **Läderhuden** (dermis) innehåller bindväv med **kollagen** och elastiska fibrer, som ger huden hållfasthet och spänst. Här ligger blodkärlen, nervändarna, svettkörtlarna, talgkörtlarna och hårsäckarna.\n- **Underhuden** (subcutis) består mest av fettväv som isolerar, dämpar stötar och lagrar energi.\n\nÖverhuden saknar egna blodkärl och får sin näring från läderhuden. Det är förklaringen till att ytliga skrapsår svider men knappt blöder – man har inte kommit ned till kärlen än.',
        },
        {
          heading: 'Hudens uppgifter',
          body: 'Huden är först och främst en **barriär**: den håller ute mikroorganismer och kemikalier och hindrar kroppen från att torka ut. Den är också ett stort **sinnesorgan**, med känselkroppar för beröring, tryck, temperatur och smärta. Vid **temperaturreglering** samarbetar hudens blodkärl och **svettkörtlar** – kärlen vidgas och svetten avdunstar när kroppen behöver göra sig av med värme. Dessutom bildas **D-vitamin** i huden med hjälp av solljus. Överhuden förnyas hela tiden: nya celler bildas i botten och vandrar långsamt utåt tills de nöts bort, vilket gör att huden ständigt reparerar sig själv. Att huden både är tät utåt och samtidigt full av kärl och nerver gör den till ett ovanligt mångsidigt organ.',
        },
        {
          heading: 'Huden som läkemedelsväg',
          body: 'Läkemedel kan ges **lokalt** på huden, till exempel krämer och salvor mot eksem, där effekten i huvudsak stannar där den behövs. Men huden kan också användas för **systemisk** behandling: ett **depotplåster** (transdermalt plåster) avger substans som tas upp genom huden och når blodet – som nikotinplåster eller vissa smärtplåster. Eftersom hornlagret är fettartat passerar **fettlösliga** ämnen lättast, medan stora och vattenlösliga molekyler stoppas. Det förklarar varför bara ett fåtal läkemedel går att ge som plåster, och varför den fördelen inte kan generaliseras till vilken substans som helst.',
        },
      ],
      keyTerms: [
        { term: 'Överhud (epidermis)', definition: 'Hudens yttersta lager, med hornlagret som barriär.' },
        { term: 'Läderhud (dermis)', definition: 'Bindvävslagret med kollagen, blodkärl, nerver och körtlar.' },
        { term: 'Underhud (subcutis)', definition: 'Fettlagret som isolerar, dämpar stötar och lagrar energi.' },
        { term: 'Melanocyt', definition: 'Cell i överhuden som bildar pigmentet melanin.' },
        { term: 'Hornlager', definition: 'Yttersta skiktet av döda, keratinfyllda celler – hudens egentliga barriär.' },
        { term: 'Depotplåster', definition: 'Plåster som avger läkemedel som tas upp genom huden och når blodet.' },
      ],
      takeaways: [
        'Huden har tre lager: överhud, läderhud och underhud.',
        'Hornlagret är den egentliga barriären; överhuden saknar egna blodkärl.',
        'Huden skyddar, känner, reglerar temperatur och bildar D-vitamin.',
        'Fettlösliga ämnen passerar lättast – det är grunden för depotplåster.',
      ],
    },

    sinnesorgan: {
      title: 'Sinnesorganen: öga och öra',
      intro:
        'Ögat och örat omvandlar ljus och ljud till nervsignaler som hjärnan kan tolka. Båda är dessutom vanliga måltavlor för läkemedel som ges lokalt, som droppar.',
      sections: [
        {
          heading: 'Ögat',
          body: 'Ljuset kommer in genom den genomskinliga **hornhinnan** och vidare genom **pupillen**, vars storlek styrs av **regnbågshinnan** (iris) – den fungerar som en bländare och släpper in mer ljus i mörker. **Linsen** ändrar form och ställer skärpan så att bilden hamnar rätt. Längst bak ligger **näthinnan** (retina) med de ljuskänsliga cellerna: **stavar** fungerar i svagt ljus men bara i gråskala, medan **tappar** ger färgseende och skärpa när ljuset är bra. Det är därför färgerna bleknar i skymningen – då är det stavarna som gör jobbet. Signalerna skickas vidare via **synnerven** till hjärnan, som tolkar dem till en bild.',
        },
        {
          heading: 'Örat',
          body: 'Örat delas i tre delar:\n\n- **Ytterörat** – öronmusslan och hörselgången fångar upp ljudet och leder det till **trumhinnan**, som börjar vibrera.\n- **Mellanörat** – tre små **hörselben** (hammaren, städet och stigbygeln) förstärker vibrationerna och för dem vidare. Härifrån går **örontrumpeten** till svalget och utjämnar trycket, vilket är varför öronen "poppar" när man sväljer på ett flygplan.\n- **Innerörat** – i den snäckformade **hörselsnäckan** (cochlea) omvandlas vibrationerna till nervsignaler som går via hörselnerven till hjärnan. Intill ligger **båggångarna**, som inte har med hörseln att göra alls utan sköter balanssinnet.',
        },
        {
          heading: 'Varför det spelar roll för läkemedel',
          body: 'Både öga och öra är delvis avskilda från resten av kroppen, vilket gör att man ofta behandlar dem **lokalt** – med droppar, salvor eller injektioner direkt i ögat. **Ögondroppar** ger hög effekt på plats med en mycket liten mängd substans och begränsad påverkan på övriga kroppen. Ett viktigt exempel är **glaukom** (grön starr), där trycket inuti ögat är förhöjt och med tiden kan skada synnerven; här används trycksänkande droppar. Ögat skyddas dessutom av tårvätskan, som sköljer rent och innehåller antibakteriella ämnen – men den sköljer också snabbt bort det man droppar i, vilket är skälet till att ögondroppar ofta måste ges flera gånger om dagen. Vissa läkemedel kan tvärtom skada innerörat – en biverkning som kallas **ototoxicitet** och som kan ge hörselnedsättning, tinnitus eller yrsel.',
        },
      ],
      keyTerms: [
        { term: 'Hornhinna', definition: 'Ögats genomskinliga främre yta, som ljuset passerar först.' },
        { term: 'Näthinna (retina)', definition: 'Ögats bakre skikt med de ljuskänsliga stavarna och tapparna.' },
        { term: 'Stavar och tappar', definition: 'Stavar ger mörkerseende i gråskala; tappar ger färg och skärpa.' },
        { term: 'Hörselben', definition: 'Hammaren, städet och stigbygeln – förstärker ljudets vibrationer i mellanörat.' },
        { term: 'Hörselsnäcka (cochlea)', definition: 'Innerörats organ som omvandlar vibrationer till nervsignaler.' },
        { term: 'Ototoxicitet', definition: 'Skada på innerörat orsakad av läkemedel; kan ge hörselnedsättning eller yrsel.' },
      ],
      takeaways: [
        'Ögat: ljus → hornhinna, pupill och lins → näthinnan → synnerven.',
        'Stavar ser i mörker, tappar ger färg och skärpa.',
        'Örat har tre delar; snäckan sköter hörseln, båggångarna balansen.',
        'Öga och öra behandlas oftast lokalt – ögondroppar ger effekt på plats med liten dos.',
      ],
    },

    lymfsystem: {
      title: 'Lymfsystemet och mjälten',
      intro:
        'Vid sidan av blodomloppet finns ett andra kärlsystem som dränerar vävnaderna och härbärgerar immunförsvaret. Lymfsystemet märks sällan – förrän lymfkörtlarna svullnar.',
      sections: [
        {
          heading: 'Lymfan och lymfkärlen',
          body: 'Ur blodets minsta kärl pressas hela tiden lite vätska ut i vävnaderna. Det mesta sugs tillbaka direkt, men överskottet tas om hand av **lymfkärlen** och kallas då **lymfa** – en klar vätska som liknar blodplasma men saknar röda blodkroppar. Lymfsystemet är **enkelriktat**: lymfan rinner bara åt ett håll, från vävnaderna tillbaka till blodet via stora vener nära nyckelbenen. Till skillnad från blodomloppet finns **ingen pump** – lymfan drivs framåt av att musklerna omkring arbetar, och av **klaffar** som hindrar den från att rinna tillbaka. Rör man sig inte alls blir flödet trögt, och stockad lymfa ger svullnad, **lymfödem**. Till skillnad från blodomloppets kärl börjar lymfkärlen dessutom blint ute i vävnaden, som uppsamlande rör utan egen början.',
        },
        {
          heading: 'Lymfknutor och lymfoida organ',
          body: 'Längs kärlen sitter **lymfknutor** (lymfkörtlar) – små filterstationer fyllda med immunceller, framför allt lymfocyter. Här möter antigen från vävnaden immunförsvarets celler, och det är i praktiken startpunkten för det adaptiva immunsvaret. Det förklarar varför lymfkörtlarna på halsen **svullnar och ömmar** vid en infektion: de arbetar för fullt. Lymfocyterna cirkulerar ständigt mellan blodet, lymfknutorna och lymfan, vilket gör att den cell som råkar känna igen just det aktuella antigenet förr eller senare passerar rätt körtel. Till lymfsystemet räknas också **tonsillerna** i svalget, **brässen** (thymus) bakom bröstbenet där T-cellerna mognar, samt lymfvävnad i tarmväggen.',
        },
        {
          heading: 'Mjälten',
          body: '**Mjälten** ligger högt upp till vänster i buken och är kroppens största lymfoida organ. Den har två huvuduppgifter: den **filtrerar blodet** och bryter ned gamla eller skadade **röda blodkroppar**, och den fungerar som en immunologisk vaktpost som fångar upp bakterier som cirkulerar i blodet. Man kan leva utan mjälte, men blir då känsligare för vissa bakterieinfektioner och rekommenderas därför extra vaccinationer. För en läkemedelsinformatör är lymfsystemet särskilt relevant inom onkologin: cancerceller sprider sig ofta via lymfkärlen till närmaste lymfknutor – **metastasering** – och det är skälet till att man undersöker just dessa körtlar för att bedöma hur långt en sjukdom har gått.',
        },
      ],
      keyTerms: [
        { term: 'Lymfa', definition: 'Klar vävnadsvätska som transporteras i lymfkärlen tillbaka till blodet.' },
        { term: 'Lymfknuta', definition: 'Filterstation längs lymfkärlen där immunceller möter antigen.' },
        { term: 'Lymfödem', definition: 'Svullnad som uppstår när lymfan inte dräneras undan som den ska.' },
        { term: 'Brässen (thymus)', definition: 'Organ bakom bröstbenet där T-lymfocyterna mognar.' },
        { term: 'Mjälte', definition: 'Organ som filtrerar blodet, bryter ned gamla röda blodkroppar och deltar i immunförsvaret.' },
      ],
      takeaways: [
        'Lymfsystemet dränerar vävnadsvätska tillbaka till blodet – enkelriktat och utan pump.',
        'Lymfknutorna är immunförsvarets mötesplatser; därför svullnar de vid infektion.',
        'Mjälten filtrerar blodet och bryter ned gamla röda blodkroppar.',
        'Cancer sprider sig ofta via lymfkärl till närmaste lymfknutor.',
      ],
    },
  },

  cellbiologi: {
    stamceller: {
      title: 'Stamceller och celldifferentiering',
      intro:
        'Alla kroppens celler bär samma DNA, ändå är en nervcell inget alls som en levercell. Förklaringen ligger i stamceller och differentiering.',
      sections: [
        {
          heading: 'Vad är en stamcell?',
          body: 'En **stamcell** är en omogen cell med två egenskaper som färdiga celler saknar: den kan **förnya sig själv** genom att dela sig utan att specialiseras, och den kan **utvecklas till andra celltyper**. Man delar in dem efter hur många möjligheter de har kvar. **Embryonala stamceller** från ett tidigt embryo är **pluripotenta** – de kan bli i stort sett vilken celltyp som helst. **Vuxna stamceller** finns kvar i färdiga vävnader men är mer begränsade: benmärgens blodstamceller kan bilda alla sorters blodkroppar, men inte en nervcell. De vuxna stamcellerna är kroppens reservdelslager i vävnader som ständigt slits – hud, blod och tarmslemhinna.',
        },
        {
          heading: 'Differentiering',
          body: '**Differentiering** är processen där en omogen cell mognar och blir specialiserad. Det märkliga är att alla celler har **samma DNA** – skillnaden ligger i vilka gener som är **påslagna** respektive avstängda. En muskelcell använder muskelgenerna och tystar resten; en insulinproducerande cell gör tvärtom. Man kan likna det vid ett stort recepthäfte som alla kockar i ett kök har: alla har samma bok, men var och en lagar bara sina rätter. Differentieringen är normalt **enkelriktad** – en färdig hjärtmuskelcell går inte tillbaka till att bli stamcell igen, vilket är en av anledningarna till att hjärtat läker så dåligt efter en infarkt.',
        },
        {
          heading: 'Varför stamceller är intressanta i vården',
          body: 'Den mest etablerade användningen är **stamcellstransplantation** vid vissa blodsjukdomar och leukemier, där patienten får friska blodbildande stamceller som återuppbygger benmärgen. Ett stort framsteg var upptäckten att man kan backa bandet: genom att slå på vissa gener kan en vanlig hudcell **omprogrammeras** till en stamcellsliknande cell, en **inducerad pluripotent stamcell** (iPS-cell). Sådana celler används i forskning och för att testa läkemedel på mänskliga celler i labbet i stället för på djur. Området brukar kallas **regenerativ medicin**. Mycket av det är fortfarande forskning snarare än färdig behandling – en viktig nyans att hålla i minnet, eftersom ordet stamceller ofta används med större löften än underlaget bär.',
        },
      ],
      keyTerms: [
        { term: 'Stamcell', definition: 'Omogen cell som kan förnya sig själv och utvecklas till andra celltyper.' },
        { term: 'Differentiering', definition: 'Processen där en omogen cell mognar och blir specialiserad.' },
        { term: 'Pluripotent', definition: 'Kan utvecklas till nästan vilken celltyp som helst.' },
        { term: 'Vuxen stamcell', definition: 'Stamcell i färdig vävnad, med ett begränsat antal möjliga celltyper.' },
        { term: 'iPS-cell', definition: 'Vanlig kroppscell som omprogrammerats till en stamcellsliknande cell.' },
        { term: 'Stamcellstransplantation', definition: 'Behandling där friska blodbildande stamceller ersätter sjuk benmärg.' },
      ],
      takeaways: [
        'Stamceller kan både förnya sig själva och utvecklas till andra celltyper.',
        'Alla celler har samma DNA – differentiering styrs av vilka gener som används.',
        'Embryonala stamceller är pluripotenta; vuxna stamceller är mer begränsade.',
        'Stamcellstransplantation vid blodsjukdomar är den mest etablerade användningen.',
      ],
    },

    cellsignalering: {
      title: 'Cellsignalering och receptorer',
      intro:
        'Kroppens miljarder celler måste kunna prata med varandra. Kommunikationen bygger på signalmolekyler och receptorer – och det är precis här de flesta läkemedel griper in.',
      sections: [
        {
          heading: 'Signal och mottagare',
          body: 'En cell skickar ut en **signalmolekyl**, även kallad **ligand**. Det kan vara ett hormon, en signalsubstans från en nervcell eller ett larmämne från immunförsvaret. Molekylen sprids och når många celler, men bara de som har rätt **receptor** reagerar. Receptorn är ett protein som passar signalmolekylen ungefär som ett lås passar en nyckel; celler utan receptorn märker ingenting. Det förklarar hur ett hormon kan cirkulera i hela blodet men ändå bara påverka vissa organ – **målcellerna**. Signalen är alltså inte adresserad. Det är mottagaren som avgör vem som lyssnar. Antalet receptorer är dessutom inte fast: en cell som utsätts för mycket signal under lång tid kan minska antalet receptorer och blir då mindre känslig – en av förklaringarna till att effekten av vissa läkemedel avtar med tiden.',
        },
        {
          heading: 'Var sitter receptorn?',
          body: 'Receptorer sitter på två olika ställen, och vilket det blir beror på signalmolekylens egenskaper:\n\n- **Membranreceptorer** sitter i cellmembranet. Hit hör de flesta **vattenlösliga** signaler, som insulin och adrenalin. De kan inte ta sig genom membranets fettlager, utan får stanna utanför och "ringa på dörren".\n- **Intracellulära receptorer** finns inne i cellen. **Fettlösliga** signaler, som **steroidhormoner** (till exempel kortisol) och sköldkörtelhormon, glider rakt igenom membranet och binder till receptorer inuti. Därifrån påverkar de ofta direkt vilka gener som avläses – ett långsammare men mer genomgripande svar.',
        },
        {
          heading: 'Signalkaskaden – och läkemedlen',
          body: 'När en membranreceptor aktiveras förs budskapet vidare inne i cellen via en kedja av proteiner och **andra budbärare** (second messengers). Kedjan kallas en **signalkaskad** och fungerar som en förstärkare: några få signalmolekyler utanför cellen kan sätta igång tusentals molekyler inuti – ungefär som när en liten strömbrytare tänder ljuset i ett helt hus. Receptorerna är läkemedlens vanligaste angreppspunkt. En **agonist** binder till receptorn och aktiverar den, precis som den kroppsegna signalen skulle ha gjort. En **antagonist** binder också in, men aktiverar inte – den blockerar i stället platsen så att den kroppsegna signalen inte kommer åt. Betablockerare är ett välkänt exempel på det senare.',
        },
      ],
      keyTerms: [
        { term: 'Ligand', definition: 'Signalmolekyl som binder till en receptor.' },
        { term: 'Receptor', definition: 'Protein som känner igen en bestämd signalmolekyl och startar ett svar i cellen.' },
        { term: 'Målcell', definition: 'Cell som har rätt receptor och därför reagerar på signalen.' },
        { term: 'Signalkaskad', definition: 'Kedja av steg inne i cellen som för vidare och förstärker signalen.' },
        { term: 'Agonist', definition: 'Ämne som binder till receptorn och aktiverar den.' },
        { term: 'Antagonist', definition: 'Ämne som binder till receptorn utan att aktivera den, och blockerar den.' },
      ],
      takeaways: [
        'Signalmolekyl + receptor = nyckel och lås; bara målceller med receptorn svarar.',
        'Vattenlösliga signaler binder membranreceptorer; fettlösliga når receptorer inne i cellen.',
        'Signalkaskader förstärker budskapet inuti cellen.',
        'Agonister aktiverar receptorn, antagonister blockerar den.',
      ],
    },
  },

  genetik: {
    konsceller: {
      title: 'Könsceller och befruktning',
      intro:
        'Varje människa börjar som en enda cell, bildad av två. Hur könscellerna skapas förklarar både varför syskon liknar varandra och varför de aldrig är helt lika.',
      sections: [
        {
          heading: 'Halva uppsättningen',
          body: 'Kroppens vanliga celler är **diploida**: de har 46 kromosomer, ordnade i 23 par, där den ena kromosomen i varje par kommer från mamman och den andra från pappan. 22 av paren är **autosomer**, och det sista paret är **könskromosomerna** – XX eller XY. Könscellerna, **gameterna** (ägg och spermier), bildas i stället genom **meios** och är **haploida**: de har bara 23 kromosomer, alltså en från varje par. Så måste det vara, för annars skulle kromosomantalet dubblas för varje ny generation. Att könscellerna bildas genom meios och inte genom vanlig mitos är alltså själva förutsättningen för att befruktningen ska gå ihop rent matematiskt: 23 + 23 = 46.',
        },
        {
          heading: 'Befruktningen',
          body: 'Vid **befruktningen** smälter en spermie samman med ett ägg. De två haploida cellerna bildar tillsammans en ny diploid cell, en **zygot**, med fulla 46 kromosomer – hälften från varje förälder. Zygoten börjar genast dela sig genom **mitos** och utvecklas vidare till ett **embryo**. Alla celler i den färdiga kroppen härstammar sedan från denna enda cell och bär därför samma DNA. Vilken könskromosom spermien råkar bära avgör barnets kön: ägget bidrar alltid med ett X, medan spermien kan ha antingen ett X eller ett Y.',
        },
        {
          heading: 'Varför alla blir olika',
          body: 'Meiosen blandar korten på två sätt. Vid **överkorsning** (crossing over) byter kromosomerna i ett par bitar med varandra, så att varje könscell får nykombinerade kromosomer i stället för kopior av föräldrarnas. Dessutom fördelas paren **slumpmässigt** – det är ren slump om just mammans eller pappans kromosom hamnar i en viss könscell. Tillsammans gör detta att varje könscell blir unik, och det är därför helsyskon liknar varandra utan att vara identiska. Ibland blir fördelningen fel och en könscell får en kromosom för mycket eller för lite. Befruktas en sådan cell uppstår en **kromosomavvikelse**. Den vanligaste som är förenlig med liv är **trisomi 21** (Downs syndrom), där kromosom 21 finns i tre exemplar i stället för två.',
        },
      ],
      keyTerms: [
        { term: 'Diploid', definition: 'Har dubbel kromosomuppsättning – 46 kromosomer, som kroppens vanliga celler.' },
        { term: 'Haploid', definition: 'Har enkel kromosomuppsättning – 23 kromosomer, som könscellerna.' },
        { term: 'Gamet (könscell)', definition: 'Ägg eller spermie, bildad genom meios.' },
        { term: 'Zygot', definition: 'Den första cellen efter befruktningen, med 46 kromosomer.' },
        { term: 'Överkorsning', definition: 'Kromosomer i ett par byter bitar under meiosen och ger nya kombinationer.' },
        { term: 'Trisomi 21', definition: 'Kromosomavvikelse med tre exemplar av kromosom 21 (Downs syndrom).' },
      ],
      takeaways: [
        'Kroppsceller är diploida (46 kromosomer), könsceller haploida (23).',
        'Meios halverar antalet; befruktningen återställer det i zygoten.',
        'Överkorsning och slumpmässig fördelning gör varje könscell unik.',
        'Fel i fördelningen kan ge kromosomavvikelser, till exempel trisomi 21.',
      ],
    },

    genteknik: {
      title: 'Genteknik och bioteknik',
      intro:
        'Att kunna läsa, kopiera och ändra i DNA har förändrat läkemedelsindustrin i grunden. Många av dagens viktigaste läkemedel tillverkas av levande celler.',
      sections: [
        {
          heading: 'Rekombinant DNA',
          body: 'Grundtekniken i modern **bioteknik** kallas **rekombinant DNA**: man klipper ut en mänsklig gen och för in den i en annan organism, till exempel en bakterie eller en jästcell. Cellen läser den nya genen som vilken egen gen som helst och börjar tillverka det mänskliga proteinet. Odlar man cellerna i stora tankar får man i praktiken en fabrik som producerar proteinet i mängd. Det första läkemedlet som tillverkades på det viset var **humant insulin** – tidigare fick insulin utvinnas ur bukspottkörtlar från slaktdjur, med begränsad tillgång och risk för allergiska reaktioner. Samma princip används idag för bland annat **tillväxthormon** och koagulationsfaktorer.',
        },
        {
          heading: 'Biologiska läkemedel',
          body: 'Läkemedel som tillverkas i levande celler kallas **biologiska läkemedel**, till skillnad från vanliga tabletter som byggs ihop kemiskt. De är stora, ömtåliga proteiner som skulle brytas ned i magsäcken, och måste därför nästan alltid ges som **injektion** eller infusion. En viktig grupp är **monoklonala antikroppar** – laboratorietillverkade antikroppar riktade mot en enda bestämd måltavla, till exempel ett protein på en cancercell eller en signalmolekyl i en inflammation. Deras generiska namn slutar ofta på **-mab**, efter engelskans monoclonal antibody. Eftersom biologiska läkemedel är så komplexa går de inte att kopiera exakt; en snarlik efterföljare kallas därför **biosimilar** och inte generika.',
        },
        {
          heading: 'Att läsa och ändra i DNA',
          body: 'Två tekniker är värda att känna till. **PCR** (polymeraskedjereaktion) kopierar upp en liten mängd DNA till miljontals kopior, så att den går att analysera. Det är grunden för mycket av dagens **diagnostik**, inklusive de PCR-tester som många lärde känna under covid-19-pandemin. **CRISPR**, ofta kallad gensaxen, gör det möjligt att klippa i DNA på en förutbestämd plats och därmed ändra en gen. Går man steget längre och behandlar en sjukdom genom att tillföra eller korrigera en gen i patientens egna celler kallas det **genterapi**. Genterapi är ett snabbt växande men fortfarande ungt område, där de första behandlingarna har godkänts framför allt vid sällsynta ärftliga sjukdomar.',
        },
      ],
      keyTerms: [
        { term: 'Rekombinant DNA', definition: 'Teknik där en gen förs in i en annan organism, som då tillverkar proteinet.' },
        { term: 'Biologiskt läkemedel', definition: 'Läkemedel tillverkat i levande celler; oftast stora proteiner som måste injiceras.' },
        { term: 'Monoklonal antikropp', definition: 'Laboratorietillverkad antikropp riktad mot en enda bestämd måltavla.' },
        { term: 'Biosimilar', definition: 'Snarlik efterföljare till ett biologiskt läkemedel – kan inte kopieras exakt som ett generika.' },
        { term: 'PCR', definition: 'Metod som kopierar upp DNA i stor mängd; används mycket inom diagnostik.' },
        { term: 'CRISPR', definition: 'Teknik som klipper i DNA på en bestämd plats för att ändra en gen.' },
      ],
      takeaways: [
        'Rekombinant DNA låter bakterier och celler tillverka mänskliga proteiner – insulin var först.',
        'Biologiska läkemedel är stora proteiner som måste injiceras, inte tas som tablett.',
        'Monoklonala antikroppar riktas mot en enda måltavla; namnen slutar ofta på -mab.',
        'PCR kopierar DNA för diagnostik, CRISPR ändrar gener, genterapi behandlar med gener.',
      ],
    },
  },

  fysiologi: {
    blod: {
      title: 'Blodet och dess beståndsdelar',
      intro:
        'Blodet är en vävnad i flytande form. Det transporterar syre, näring, hormoner och läkemedel – och det är oftast i blodet man mäter om en behandling fungerar.',
      sections: [
        {
          heading: 'Plasma och celler',
          body: 'Låter man blod sedimentera delar det upp sig i två delar. Ungefär hälften är **blodplasma**, en halmgul vätska som till största delen består av vatten, men som också innehåller salter, näringsämnen, hormoner och en mängd proteiner. Det vanligaste plasmaproteinet är **albumin**, som binder och transporterar ämnen och hjälper till att hålla kvar vätska inne i kärlen. I plasman finns också antikroppar och **koagulationsfaktorer**. Resten av blodet utgörs av **blodkroppar**, som bildas i den röda **benmärgen**. Blodet fyller fler uppgifter än ren transport: det utjämnar också temperaturen mellan kroppens olika delar och för bort koldioxid och slaggprodukter till lungor och njurar.',
        },
        {
          heading: 'De tre sorternas blodkroppar',
          body: 'Blodet innehåller tre typer av celler:\n\n- **Röda blodkroppar** (erytrocyter) transporterar syre. De är fyllda med **hemoglobin**, ett järnhaltigt protein som binder syre i lungorna och släpper det i vävnaderna. De saknar cellkärna och lever ungefär tre månader.\n- **Vita blodkroppar** (leukocyter) sköter immunförsvaret – det är fagocyterna och lymfocyterna från immunologin.\n- **Blodplättar** (trombocyter) är cellfragment som täpper till skador i kärlväggen och startar koagulationen.\n\nBrist på röda blodkroppar eller på hemoglobin kallas **anemi** (blodbrist) och ger trötthet och andfåddhet, helt enkelt för att syret inte når fram i tillräcklig mängd.',
        },
        {
          heading: 'Koagulation, blodgrupper och läkemedel',
          body: 'Vid en kärlskada klumpar blodplättarna ihop sig och bildar en propp. Samtidigt aktiveras **koagulationskaskaden**, en kedjereaktion av plasmaproteiner som till slut bildar trådar av **fibrin** – ett nät som förstärker proppen. Processen är måltavla för **antikoagulantia**, i dagligt tal blodförtunnande läkemedel, som används när man vill förhindra blodproppar. **Blodgrupperna** (ABO- och Rh-systemet) bestäms av vilka antigen som sitter på de röda blodkropparnas yta och är avgörande vid blodtransfusion. En detalj värd att minnas för läkemedelsområdet: många läkemedel binder till albumin i plasman, och bara den fria, obundna delen är aktiv. Därför kan två läkemedel som konkurrerar om samma bindningsplats påverka varandras effekt, och därför kan en låg albuminnivå, som vid svår leversjukdom, ändra hur ett läkemedel beter sig i kroppen.',
        },
      ],
      keyTerms: [
        { term: 'Blodplasma', definition: 'Blodets vätskedel – vatten med salter, näring, hormoner och proteiner.' },
        { term: 'Albumin', definition: 'Vanligaste plasmaproteinet; binder och transporterar många ämnen, även läkemedel.' },
        { term: 'Hemoglobin', definition: 'Järnhaltigt protein i röda blodkroppar som binder och transporterar syre.' },
        { term: 'Trombocyt (blodplätt)', definition: 'Cellfragment som täpper till kärlskador och startar koagulationen.' },
        { term: 'Fibrin', definition: 'Trådproteinet som bildar det förstärkande nätet i en blodpropp.' },
        { term: 'Anemi', definition: 'Brist på röda blodkroppar eller hemoglobin – ger trötthet och andfåddhet.' },
      ],
      takeaways: [
        'Blodet = plasma (ungefär hälften) plus röda, vita blodkroppar och blodplättar.',
        'Hemoglobin transporterar syret; brist ger anemi.',
        'Blodplättar och fibrin bildar proppen; antikoagulantia bromsar processen.',
        'Många läkemedel binder till albumin – bara den fria delen är aktiv.',
      ],
    },

    matsmaltning: {
      title: 'Matsmältningens fysiologi',
      intro:
        'Maten vi äter måste brytas ned till molekyler små nog att tas upp i blodet. Samma resa gör de flesta tabletter – vilket förklarar mycket av hur läkemedel doseras.',
      sections: [
        {
          heading: 'Nedbrytningen steg för steg',
          body: 'Matsmältningen är både mekanisk och kemisk. I munnen tuggas maten sönder och **saliv** med enzymet **amylas** börjar bryta ned stärkelse. I magsäcken möter maten **saltsyra**, som gör innehållet mycket surt (pH omkring 2), dödar de flesta mikroorganismer och aktiverar enzymet **pepsin**, som börjar spjälka proteiner. Magsäckens egen vägg skyddas från syran av ett slemlager. I tunntarmen neutraliseras det sura innehållet av **bikarbonat** från bukspottkörteln, som också levererar de viktigaste enzymerna för fett, protein och kolhydrat. **Galla** från levern, lagrad i gallblåsan, innehåller inga enzymer alls men **emulgerar** fettet – den finfördelar det till små droppar, ungefär som diskmedel, så att enzymerna kommer åt.',
        },
        {
          heading: 'Upptaget',
          body: 'Det mesta av upptaget sker i **tunntarmen**. För att ytan ska räcka till är slemhinnan veckad och täckt av miljontals **tarmludd** (villi), som i sin tur bär mikroskopiska utskott – tillsammans ger det en yta många gånger större än tarmens längd antyder. Näringsämnena passerar därifrån in i blodet eller lymfan. Innehållet drivs framåt av **peristaltik**: ringformade muskelsammandragningar som pressar maten vidare, som när man kramar ur en tandkrämstub. I **tjocktarmen** sugs framför allt vatten och salter upp, och här finns **tarmfloran** – de bakterier som bryter ned rester och bland annat bildar vissa vitaminer.',
        },
        {
          heading: 'Varför detta styr läkemedelsdosering',
          body: 'En tablett måste först lösas upp och sedan tas upp i tarmen, och tar då samma väg som näringen: via **portådern** direkt till levern. Där kan en stor del av substansen brytas ned redan innan den har nått ut i kroppen. Fenomenet kallas **första passage-effekten** och är skälet till att en tablettdos ofta måste vara betydligt högre än samma läkemedel givet som injektion. Det förklarar också flera praktiska råd: läkemedel som förstörs av magsyran kan ges som **enterotabletter**, med ett skyddande hölje som inte löses upp förrän i tarmen – och som därför inte får delas eller krossas. Att vissa läkemedel ska tas **med eller utan mat** beror på att maten påverkar både hur snabbt magsäcken töms och hur mycket som hinner tas upp.',
        },
      ],
      keyTerms: [
        { term: 'Amylas', definition: 'Enzym som bryter ned stärkelse; finns i saliv och i bukspott.' },
        { term: 'Pepsin', definition: 'Enzym i magsäcken som börjar spjälka proteiner i sur miljö.' },
        { term: 'Galla', definition: 'Vätska från levern som emulgerar fett så att enzymerna kommer åt.' },
        { term: 'Tarmludd (villi)', definition: 'Utskott i tunntarmens slemhinna som mångdubblar upptagsytan.' },
        { term: 'Peristaltik', definition: 'Muskelsammandragningar som driver innehållet framåt i mag-tarmkanalen.' },
        { term: 'Första passage-effekten', definition: 'Nedbrytning i levern av ett läkemedel innan det hunnit nå ut i kroppen.' },
      ],
      takeaways: [
        'Enzymer gör jobbet: amylas, pepsin och bukspottets enzymer – gallan emulgerar fettet.',
        'Tunntarmen tar upp näringen och har enorm yta; tjocktarmen tar upp vatten.',
        'Tabletter går via portådern till levern – första passage-effekten sänker mängden som når blodet.',
        'Enterotabletter skyddar mot magsyran och får därför inte krossas.',
      ],
    },

    temperatur: {
      title: 'Kroppstemperatur och feber',
      intro:
        'Kroppen håller sin temperatur nära 37 grader oavsett om det är vinter ute eller trettio grader varmt. Feber är inte att den regleringen går sönder – det är att den ställs om.',
      sections: [
        {
          heading: 'Termostaten i hjärnan',
          body: 'Kroppstemperaturen är ett klassiskt exempel på **homeostas**. Regleringen sköts av **hypotalamus** i hjärnan, som fungerar som en termostat med ett **börvärde** – den temperatur kroppen strävar efter att hålla, normalt runt 37 °C. Hypotalamus får information från temperaturkänsliga nerver i huden och från blodets egen temperatur, och jämför den med börvärdet. Normaltemperaturen är inget exakt tal: den varierar mellan individer och över dygnet, en **dygnsvariation** med lägst värde på natten och högst under eftermiddagen eller kvällen.',
        },
        {
          heading: 'Hur kroppen värmer och kyler',
          body: 'Blir det för varmt gör kroppen sig av med värme:\n\n- Hudens blodkärl **vidgas**, så att mer varmt blod når ytan och värmen kan avges – därför blir man röd om kinderna när man anstränger sig.\n- **Svettkörtlarna** börjar arbeta, och när svetten **avdunstar** kyls huden. Det är avdunstningen som kyler, inte svetten i sig, och därför känns fuktig värme jobbigare än torr.\n\nBlir det för kallt går allt åt andra hållet: hudens kärl **drar ihop sig** för att spara värmen till de inre organen, vilket gör händer och fötter kalla och bleka, och musklerna börjar **huttra** – ofrivilliga sammandragningar vars enda syfte är att alstra värme. I botten ligger **ämnesomsättningen**, som hela tiden producerar en grundvärme.',
        },
        {
          heading: 'Feber',
          body: 'Vid infektion frisätts **pyrogener** – ämnen från bakterier eller från immunförsvarets egna celler – som får hypotalamus att **höja börvärdet**, till exempel till 39 °C. Termostaten är alltså omställd, och kroppen uppfattar nu sina vanliga 37 grader som för kallt. Därför gör den precis det den gör när man fryser: drar ihop hudens kärl och huttrar. Det är förklaringen till **frossa** – att man skakar av köld trots att man är het. När den nya temperaturen väl är nådd slutar man frysa, och när febern släpper och börvärdet sänks igen svettas man i stället ut överskottsvärmen. Feber är alltså en del av försvaret, inte fienden i sig. **Febernedsättande** läkemedel som paracetamol och NSAID verkar genom att sänka börvärdet igen. Det skiljer feber från **värmeslag**, där börvärdet är normalt men kroppen helt enkelt inte hinner göra sig av med värmen – och där febernedsättande därför inte hjälper.',
        },
      ],
      keyTerms: [
        { term: 'Hypotalamus', definition: 'Området i hjärnan som fungerar som kroppens termostat.' },
        { term: 'Börvärde', definition: 'Den temperatur kroppen strävar efter att hålla.' },
        { term: 'Pyrogen', definition: 'Ämne som höjer börvärdet i hypotalamus och därmed utlöser feber.' },
        { term: 'Frossa', definition: 'Huttrande och köldkänsla när kroppen värmer upp sig till ett höjt börvärde.' },
        { term: 'Febernedsättande', definition: 'Läkemedel som sänker börvärdet, till exempel paracetamol och NSAID.' },
        { term: 'Värmeslag', definition: 'Överhettning trots normalt börvärde – kroppen hinner inte kyla sig.' },
      ],
      takeaways: [
        'Hypotalamus är termostaten; börvärdet ligger runt 37 °C med dygnsvariation.',
        'Kyla sig: kärlvidgning och svettens avdunstning. Värma sig: kärlsammandragning och huttrande.',
        'Feber = pyrogener höjer börvärdet; frossan är kroppen som värmer upp sig till det.',
        'Febernedsättande sänker börvärdet – hjälper vid feber, men inte vid värmeslag.',
      ],
    },
  },

  immunologi: {
    allergi: {
      title: 'Allergi och överkänslighet',
      intro:
        'Vid allergi reagerar immunförsvaret kraftfullt mot något ofarligt. Besvären kommer inte från ämnet i sig, utan från kroppens eget svar på det.',
      sections: [
        {
          heading: 'Sensibilisering – det första mötet',
          body: 'Ett **allergen** är ett i sig harmlöst ämne som immunförsvaret felaktigt uppfattar som ett hot: pollen, pälsdjur, kvalster eller vissa födoämnen. Första gången man utsätts händer ingenting märkbart, men immunförsvaret **sensibiliseras**: det bildar antikroppar av typen **IgE** riktade mot just det allergenet. Dessa IgE-antikroppar sätter sig på ytan av **mastceller** i hud, luftvägar och tarm och blir liggande där som laddade fällor. Det är förklaringen till att man kan tåla något i många år och sedan plötsligt bli allergisk – det krävs alltid ett första möte innan reaktionen kan komma.',
        },
        {
          heading: 'Den allergiska reaktionen',
          body: 'Vid nästa kontakt binder allergenet till IgE-antikropparna på mastcellen, och då töms cellen på sitt innehåll. Viktigast är **histamin**, som inom minuter vidgar blodkärl och gör dem läckande. Symtomen beror på var det sker:\n\n- I näsan: svullen slemhinna, rinnsnuva och nysningar.\n- I ögonen: rodnad, klåda och tårflöde.\n- I huden: nässelutslag och klåda.\n- I luftvägarna: sammandragna luftrör, hosta och andnöd.\n\nSprids reaktionen till hela kroppen kan den bli livshotande – **anafylaxi**, med blodtrycksfall och andningssvårigheter. Då är **adrenalin** förstahandsbehandling, oftast som förfylld injektionspenna. Detta är den snabba, IgE-drivna typen. Det finns också långsammare former, som **kontakteksem** vid nickelallergi, där svaret drivs av T-celler och kommer först efter ett eller flera dygn.',
        },
        {
          heading: 'Behandling – och vad som inte är allergi',
          body: 'Läkemedlen följer mekanismen. **Antihistaminer** blockerar histaminets receptorer och dämpar snuva, klåda och nysningar. **Kortison** i nässpray eller inhalation dämpar den underliggande inflammationen och verkar långsammare men bredare. **Allergenimmunterapi** (hyposensibilisering) ger små, gradvis ökande doser av allergenet under lång tid för att lära om immunförsvaret. Men allt som inte tåls är inte allergi. **Laktosintolerans** beror på brist på ett enzym som bryter ned mjölksocker och har ingenting med immunförsvaret att göra – därför hjälper varken antihistamin eller kortison. Samma sak gäller många reaktioner som beskrivs som läkemedelsallergi men som i själva verket är biverkningar. Den skillnaden är viktig att kunna hålla isär.',
        },
      ],
      keyTerms: [
        { term: 'Allergen', definition: 'Ofarligt ämne som immunförsvaret felaktigt reagerar mot.' },
        { term: 'Sensibilisering', definition: 'Första mötet, då IgE-antikroppar bildas utan att någon reaktion syns än.' },
        { term: 'IgE', definition: 'Antikroppstypen som driver den snabba allergiska reaktionen.' },
        { term: 'Mastcell', definition: 'Cell som bär IgE och frisätter histamin vid kontakt med allergenet.' },
        { term: 'Histamin', definition: 'Ämnet som ger svullnad, klåda och rinnande näsa vid allergi.' },
        { term: 'Anafylaxi', definition: 'Livshotande allergisk reaktion i hela kroppen; behandlas med adrenalin.' },
      ],
      takeaways: [
        'Allergi är ett kraftigt immunsvar mot något ofarligt.',
        'Sensibilisering kommer först (IgE bildas), reaktionen vid nästa kontakt.',
        'Histamin från mastceller ger symtomen; antihistamin och kortison dämpar dem.',
        'Anafylaxi behandlas med adrenalin. Laktosintolerans är inte en allergi.',
      ],
    },

    autoimmunitet: {
      title: 'Autoimmunitet och immunbrist',
      intro:
        'Ett immunförsvar kan fela åt två håll: det kan angripa kroppen själv, eller vara för svagt för att skydda. Båda ytterligheterna är stora läkemedelsområden.',
      sections: [
        {
          heading: 'Självtolerans',
          body: 'För att fungera måste immunförsvaret kunna skilja **eget från främmande**. Den förmågan kallas **självtolerans** och tränas in medan lymfocyterna mognar – i benmärgen och i brässen (thymus). Celler som visar sig reagera mot kroppens egna ämnen sorteras bort eller stängs av innan de släpps ut. Systemet är kraftfullt, men inte perfekt. Går toleransen förlorad börjar immunförsvaret angripa kroppens egen vävnad, och de antikroppar som då bildas kallas **autoantikroppar**. Resultatet blir en **autoimmun sjukdom**.',
        },
        {
          heading: 'Autoimmuna sjukdomar',
          body: 'Vilken sjukdom det blir beror på vilken vävnad som angrips:\n\n- **Typ 1-diabetes** – de insulinproducerande cellerna i bukspottkörteln förstörs.\n- **Reumatoid artrit** – ledernas hinnor angrips, med inflammation och ledförstöring som följd.\n- **Multipel skleros (MS)** – nervtrådarnas isolerande myelin angrips i hjärna och ryggmärg.\n- **Hashimotos tyreoidit** – sköldkörteln angrips, vilket ger nedsatt sköldkörtelfunktion.\n- **Celiaki** – en reaktion mot gluten skadar tunntarmens slemhinna.\n\nOrsaken är sällan en enda faktor: det handlar om ett samspel mellan **ärftlig benägenhet** och miljöfaktorer, och flera av sjukdomarna är vanligare hos kvinnor. Behandlingen går ofta ut på att dämpa immunförsvaret med **immunhämmande läkemedel**, från kortison till moderna biologiska läkemedel som blockerar en enskild signalmolekyl i inflammationen. Priset är en ökad infektionsrisk – man tonar ned ett försvar som också behövs.',
        },
        {
          heading: 'Immunbrist',
          body: 'Vid **immunbrist** är problemet det motsatta: försvaret räcker inte till, och följden blir täta, långdragna eller ovanliga infektioner. **Primär immunbrist** är medfödd och beror på ett ärftligt fel i någon del av immunförsvaret; den är ovanlig och upptäcks ofta redan i barndomen. **Sekundär immunbrist** är förvärvad och betydligt vanligare. Orsaken kan vara en sjukdom, som **hiv**, vilket angriper hjälpar-T-cellerna, men också behandlingar: cytostatika vid cancer och just de immunhämmande läkemedlen vid autoimmuna sjukdomar. Även hög ålder och undernäring försvagar försvaret. Det är därför infektionsrisk är en central säkerhetsfråga för många moderna läkemedel, och något en läkemedelsinformatör behöver kunna beskriva både korrekt och balanserat.',
        },
      ],
      keyTerms: [
        { term: 'Självtolerans', definition: 'Immunförsvarets förmåga att inte angripa kroppens egen vävnad.' },
        { term: 'Autoantikropp', definition: 'Antikropp som är riktad mot kroppens egna ämnen.' },
        { term: 'Autoimmun sjukdom', definition: 'Sjukdom där immunförsvaret angriper egen vävnad, t.ex. typ 1-diabetes eller MS.' },
        { term: 'Immunhämmande läkemedel', definition: 'Läkemedel som dämpar immunförsvaret; ökar samtidigt infektionsrisken.' },
        { term: 'Primär immunbrist', definition: 'Medfödd brist i någon del av immunförsvaret.' },
        { term: 'Sekundär immunbrist', definition: 'Förvärvad immunbrist, t.ex. av hiv, cytostatika eller immunhämmande läkemedel.' },
      ],
      takeaways: [
        'Självtolerans = att inte angripa sig själv; brister den uppstår autoimmun sjukdom.',
        'Vävnaden som angrips avgör sjukdomen: bukspottkörtel, leder, myelin eller sköldkörtel.',
        'Autoimmunitet behandlas med immunhämmande läkemedel – priset är ökad infektionsrisk.',
        'Immunbrist kan vara medfödd (primär) eller förvärvad (sekundär, t.ex. hiv eller cytostatika).',
      ],
    },
  },
}
