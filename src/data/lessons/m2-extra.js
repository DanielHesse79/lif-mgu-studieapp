/**
 * Statiska lärtexter – Modul 2, fördjupningslektioner (extra).
 * Kompletterar m2/-filerna. Samma struktur: { topicId: { lessonId: lektion } }.
 */
export const M2_LESSONS_EXTRA = {
  farmakokinetik: {
    biotillganglighet: {
      title: 'Biotillgänglighet och first-pass-effekt',
      intro:
        'Långt ifrån allt som sväljs når fram till blodet i verksam form. En stor del kan brytas ned redan innan läkemedlet hunnit ut i kroppen.',
      sections: [
        {
          heading: 'Andelen som når fram',
          body: '**Biotillgänglighet** anger hur stor andel av en dos som når blodomloppet i oförändrad form, alltså fortfarande som verksamt läkemedel. Ges läkemedlet **intravenöst** hamnar det direkt i blodet, och biotillgängligheten är då per definition full – 100 procent. Den intravenösa dosen är därför den referens som alla andra administreringsvägar jämförs med, och den jämförelsen kallas **absolut biotillgänglighet**. En sväljd tablett har en betydligt längre väg att gå: den ska lösas upp, tas upp genom tarmväggen och passera levern innan den når blodet som försörjer resten av kroppen. På vägen försvinner en del. Hur stor del varierar kraftigt mellan olika läkemedel – för några är biotillgängligheten nästan full, för andra bara några få procent.',
        },
        {
          heading: 'First-pass-effekten',
          body:
            'Allt blod från mag-tarmkanalen leds först till levern via **portådern**, innan det får fortsätta ut i kroppen. Levern hinner därmed bryta ned en del av läkemedlet redan vid den allra första passagen. Detta kallas **first-pass-effekt** (förstapassageeffekt), och även tarmväggens egna enzymer bidrar. För läkemedel som bryts ned lätt kan bortfallet bli mycket stort.\n\n' +
            'Vissa administreringsvägar går helt eller delvis förbi levern:\n\n' +
            '- **Sublingualt** – tabletten smälter under tungan och tas upp direkt via blodkärlen i munslemhinnan.\n' +
            '- Plåster på huden och läkemedel som andas in i lungorna passerar inte heller tarm och lever först.\n' +
            '- En intravenös spruta går förbi hela problemet.',
        },
        {
          heading: 'Varför doserna skiljer sig',
          body: 'Skillnaden i biotillgänglighet förklarar varför samma läkemedel kan ha helt olika dos beroende på hur det ges. Om bara en del av en tablett når fram måste den **perorala dosen** vara högre för att ge samma mängd verksamt läkemedel i blodet. Därför är den intravenösa dosen ofta betydligt lägre än den perorala – inte för att sprutan är svagare, utan för att inget går förlorat på vägen. First-pass-effekten varierar dessutom mellan personer och kan påverkas av andra läkemedel som bromsar eller snabbar upp leverns enzymer. För en läkemedelsinformatör är detta en av de vanligaste frågorna att kunna besvara sakligt.',
        },
      ],
      keyTerms: [
        { term: 'Biotillgänglighet', definition: 'Andelen av en dos som når blodomloppet i oförändrad, verksam form.' },
        { term: 'Absolut biotillgänglighet', definition: 'Biotillgängligheten jämförd med en intravenös dos, som räknas som 100 procent.' },
        { term: 'First-pass-effekt', definition: 'Nedbrytning i tarmvägg och lever innan läkemedlet nått ut i kroppen.' },
        { term: 'Portåder', definition: 'Kärlet som leder blodet från mag-tarmkanalen till levern.' },
        { term: 'Sublingualt', definition: 'Läkemedel som tas upp under tungan och därmed går förbi levern.' },
      ],
      takeaways: [
        'Biotillgänglighet = andelen av dosen som når blodet i verksam form.',
        'Intravenöst ger per definition 100 procent, tabletter oftast mindre.',
        'First-pass-effekten är nedbrytning i tarmvägg och lever före kretsloppet.',
        'Därför är den intravenösa dosen ofta lägre än den perorala.',
      ],
    },

    'steady-state': {
      title: 'Steady state och doseringsintervall',
      intro:
        'Vid regelbunden behandling byggs läkemedlet upp i kroppen tills tillförsel och elimination tar ut varandra. Halveringstiden avgör hur lång tid det tar.',
      sections: [
        {
          heading: 'Jämvikten byggs upp',
          body: 'Tas ett läkemedel upprepade gånger hinner inte hela dosen elimineras innan nästa dos ges. Halten i blodet byggs därför upp steg för steg, något som kallas **ackumulation**. Men ju högre halten blir, desto större mängd eliminerar kroppen per tidsenhet – och till slut nås en punkt där lika mycket lämnar kroppen som tillförs. Då har behandlingen nått **steady state**, alltså jämvikt: halten pendlar upp och ned kring en jämn medelnivå men stiger inte längre. Detta gäller bara vid upprepad, regelbunden dosering – en enstaka dos når aldrig steady state. Det är oftast först vid jämvikt som en underhållsbehandling ger sin fulla, avsedda effekt. Här finns en viktig förklaring till varför långt ifrån alla läkemedel verkar färdigt redan från första dosen, och varför en behandling behöver få tid på sig innan man bedömer om den fungerar.',
        },
        {
          heading: 'Fyra till fem halveringstider',
          body:
            'Hur snabbt jämvikten nås bestäms av **halveringstiden** – inte av hur stor dosen är. Som tumregel krävs ungefär fyra till fem halveringstider. Ett läkemedel med kort halveringstid är därför framme på några timmar, medan ett med lång halveringstid kan behöva veckor.\n\n' +
            'Två följder är värda att minnas:\n\n' +
            '- Höjer man dosen hamnar man på en högre jämviktsnivå, men det tar lika lång tid att komma dit.\n' +
            '- Samma tumregel gäller åt andra hållet: när behandlingen avslutas dröjer det ungefär lika många halveringstider innan läkemedlet är ute ur kroppen.',
        },
        {
          heading: 'Doseringsintervall och laddningsdos',
          body: '**Doseringsintervallet** – tiden mellan två doser – väljs oftast i förhållande till halveringstiden. Ett kort intervall ger en jämnare halt med mindre svängningar, medan ett långt intervall ger tydligare toppar och dalar. **Underhållsdosen** är den dos som håller kvar jämvikten när den väl nåtts. Behövs effekten snabbt, och läkemedlet har lång halveringstid, kan behandlingen inledas med en **laddningsdos**: en större startdos som fyller upp kroppen på en gång, så att man slipper vänta i flera halveringstider. Därefter går man över till underhållsdos. För en läkemedelsinformatör förklarar detta varför vissa behandlingar startar annorlunda än de sedan fortsätter.',
        },
      ],
      keyTerms: [
        { term: 'Steady state', definition: 'Jämvikt där lika mycket läkemedel tillförs som elimineras.' },
        { term: 'Ackumulation', definition: 'Att halten byggs upp när nästa dos ges innan den förra hunnit elimineras.' },
        { term: 'Doseringsintervall', definition: 'Tiden mellan två doser.' },
        { term: 'Laddningsdos', definition: 'Större startdos som snabbt bygger upp halten till önskad nivå.' },
        { term: 'Underhållsdos', definition: 'Den dos som håller kvar halten vid steady state.' },
      ],
      takeaways: [
        'Steady state = tillförsel och elimination är i balans.',
        'Det tar ungefär fyra till fem halveringstider, oavsett dosens storlek.',
        'Doseringsintervallet väljs i förhållande till halveringstiden.',
        'En laddningsdos används när effekten behövs snabbare än så.',
      ],
    },
  },

  farmakodynamik: {
    selektivitet: {
      title: 'Selektivitet och varför biverkningar uppstår',
      intro:
        'Ett läkemedel träffar sällan bara den måltavla man vill åt. Just det förklarar varför biverkningar uppstår även vid helt normal användning.',
      sections: [
        {
          heading: 'Selektivitet är en gradfråga',
          body: '**Selektivitet** beskriver hur väl ett läkemedel skiljer sin avsedda måltavla från andra, liknande måltavlor i kroppen. Kroppens receptorer finns nämligen i flera närbesläktade varianter – **receptorsubtyper** – som liknar varandra i formen. En molekyl som passar bra i den ena passar därför ofta hjälpligt även i den andra. Selektivitet är alltså inget antingen-eller, utan just en gradfråga: läkemedlet binder starkare till en subtyp än till en annan. Den är dessutom **dosberoende**. Vid låg dos träffar läkemedlet mest sin huvudmåltavla, men när dosen höjs binder det i ökande grad även till de övriga, och selektiviteten tunnas ut.',
        },
        {
          heading: 'Två vägar till biverkningar',
          body:
            'Att effekten hamnar fel har oftast en av två förklaringar:\n\n' +
            '- **Rätt receptor, fel vävnad** – samma receptortyp sitter på flera ställen i kroppen. Läkemedlet gör då precis vad det ska, men även där effekten inte är önskad. Skakningar i händerna av luftrörsvidgande läkemedel är ett exempel: samma receptor finns i skelettmuskulaturen.\n' +
            '- **Fel receptor** – läkemedlet binder också till en måltavla det aldrig var avsett för. Muntorrhet och trötthet av äldre allergimediciner är klassiska exempel.\n\n' +
            'Båda är alltså en direkt följd av bristande selektivitet – inte av att något gått fel i behandlingen.',
        },
        {
          heading: 'Selektiva och oselektiva betablockerare',
          body: 'Ett tydligt exempel är betablockerarna. **Oselektiva** betablockerare blockerar både de receptorer som sitter i hjärtat och de som sitter i luftrörens muskulatur. Hjärtat lugnas som avsett, men luftrören kan samtidigt dra ihop sig – något som är olämpligt vid astma. Selektiva betablockerare är utvecklade för att i första hand träffa hjärtats receptorer och påverkar luftrören betydligt mindre. Men selektiviteten är just relativ, inte absolut: vid höga doser blockeras luftrörens receptorer i ökande utsträckning ändå, och fördelen kan då gå förlorad. Samma resonemang går igen i många läkemedelsgrupper. Ett stort mål i läkemedelsutvecklingen är därför att göra molekylerna mer selektiva – så att effekten hamnar där den behövs och biverkningarna blir färre. Det förklarar också varför ett nyare läkemedel i samma grupp ibland tolereras bättre än ett äldre.',
        },
      ],
      keyTerms: [
        { term: 'Selektivitet', definition: 'Hur väl ett läkemedel skiljer sin avsedda måltavla från liknande måltavlor.' },
        { term: 'Receptorsubtyp', definition: 'En av flera närbesläktade varianter av samma receptortyp.' },
        { term: 'Selektivt läkemedel', definition: 'Läkemedel som i första hand träffar en viss receptorsubtyp.' },
        { term: 'Oselektivt läkemedel', definition: 'Läkemedel som påverkar flera receptorsubtyper samtidigt.' },
        { term: 'Dosberoende selektivitet', definition: 'Att selektiviteten tunnas ut när dosen höjs.' },
      ],
      takeaways: [
        'Selektivitet är en gradfråga, inte ett antingen-eller.',
        'Biverkningar uppstår när effekten hamnar på fel receptor eller i fel vävnad.',
        'Selektiviteten avtar när dosen höjs.',
        'Selektiva betablockerare träffar främst hjärtat, oselektiva även luftrören.',
      ],
    },

    'terapeutiskt-index': {
      title: 'Terapeutiskt index och säkerhetsmarginal',
      intro:
        'Skillnaden mellan en dos som hjälper och en dos som skadar kan vara stor eller liten. Terapeutiskt index är måttet som sätter ett tal på den skillnaden.',
      sections: [
        {
          heading: 'Från fönster till mått',
          body: 'Det terapeutiska fönstret beskriver spannet mellan verksam och skadlig dos. **Terapeutiskt index** är sättet att sätta ett tal på hur brett det spannet är: förenklat en kvot mellan den dos som ger giftiga effekter och den dos som ger önskad effekt. Ett högt tal betyder att det är långt mellan effekt och toxicitet, alltså en god **säkerhetsmarginal**. Ett lågt tal betyder att de ligger nära varandra. Måttet säger däremot ingenting om hur bra läkemedlet är – bara hur stort utrymme det finns för att dosera fel. Många vanliga läkemedel, till exempel penicilliner, har **brett terapeutiskt index**: dosen kan variera en hel del utan att det blir farligt, och därför kan de doseras schablonmässigt utan att halten behöver kontrolleras med blodprover.',
        },
        {
          heading: 'När marginalen är smal',
          body:
            'Ett **smalt terapeutiskt index** betyder att en liten dosändring kan vara skillnaden mellan för lite och för mycket. Sådana läkemedel kräver därför noggrann uppföljning. Två klassiska exempel:\n\n' +
            '- **Warfarin**, ett blodförtunnande läkemedel. För lite ger risk för propp, för mycket ger risk för blödning. Behandlingen följs med regelbundna blodprover som mäter hur snabbt blodet levrar sig.\n' +
            '- **Litium**, som används vid bipolär sjukdom. Här mäts halten av läkemedlet i blodet regelbundet, eftersom marginalen upp till giftiga nivåer är liten.\n\n' +
            'Att mäta läkemedelshalten i blodet på det här sättet kallas **koncentrationsbestämning**, och det görs just när marginalen är för smal för att man ska kunna lita på dosen ensam.',
        },
        {
          heading: 'Vad som krymper marginalen',
          body:
            'Terapeutiskt index är inget fast värde som gäller lika för alla. Samma dos kan hamna olika i olika kroppar, och flera saker kan krympa marginalen:\n\n' +
            '- Nedsatt njur- eller leverfunktion gör att läkemedlet elimineras långsammare och kan ansamlas.\n' +
            '- Hög ålder, låg kroppsvikt och andra sjukdomar påverkar också.\n' +
            '- Interaktioner med andra läkemedel kan höja halten av det ena.\n\n' +
            'För en läkemedelsinformatör är detta en central säkerhetspunkt: när ett läkemedel har smalt terapeutiskt index är uppföljningen inte en detalj, utan en förutsättning för att behandlingen ska vara säker.',
        },
      ],
      keyTerms: [
        { term: 'Terapeutiskt index', definition: 'Ett mått på avståndet mellan verksam och giftig dos.' },
        { term: 'Säkerhetsmarginal', definition: 'Utrymmet mellan den dos som hjälper och den som skadar.' },
        { term: 'Smalt terapeutiskt index', definition: 'Liten marginal mellan verksam och giftig dos, vilket kräver uppföljning.' },
        { term: 'Brett terapeutiskt index', definition: 'Stor marginal, där dosen kan variera utan större risk.' },
        { term: 'Koncentrationsbestämning', definition: 'Blodprov som mäter halten av ett läkemedel i blodet.' },
      ],
      takeaways: [
        'Terapeutiskt index sätter ett tal på avståndet mellan effekt och toxicitet.',
        'Brett index gör läkemedlet enkelt att dosera; smalt index kräver kontroll.',
        'Warfarin och litium är klassiska exempel på smalt terapeutiskt index.',
        'Nedsatt njur- eller leverfunktion och interaktioner krymper marginalen.',
      ],
    },
  },

  lakemedelsgrupper: {
    diabeteslakemedel: {
      title: 'Diabetesläkemedel',
      intro:
        'Vid diabetes är blodsockret för högt, antingen för att insulinet saknas eller för att kroppen svarar dåligt på det. Behandlingen skiljer sig därför mellan de två huvudtyperna.',
      sections: [
        {
          heading: 'Insulin',
          body: '**Insulin** är kroppens eget hormon för att sänka blodsockret, genom att släppa in socker i cellerna. Vid typ 1-diabetes har den egna insulinproduktionen upphört, och insulin måste därför alltid tillföras. Det ges som injektion under huden eller via pump, eftersom insulin är ett protein som skulle brytas ned i magen om det sväljdes. Insulinsorterna skiljs framför allt åt av hur snabbt och hur länge de verkar. **Måltidsinsulin** verkar snabbt och tas i samband med mat, medan **basinsulin** verkar långsamt och jämnt och täcker kroppens grundbehov över dygnet. Många använder en kombination av båda. Vid typ 2-diabetes finns insulinet kvar men verkar sämre, och insulin blir aktuellt först om andra behandlingar inte räcker.',
        },
        {
          heading: 'Tabletter och andra medel vid typ 2',
          body:
            'Vid typ 2-diabetes börjar behandlingen med kost, motion och oftast **metformin**, som minskar leverns sockerproduktion och gör cellerna mer känsliga för insulin. Metformin sänker på egen hand inte blodsockret under det normala. Räcker det inte finns flera grupper att lägga till:\n\n' +
            '- **SGLT2-hämmare** – gör att njurarna släpper ut socker med urinen i stället för att ta tillbaka det.\n' +
            '- **GLP-1-receptoragonister** – härmar ett tarmhormon som ökar insulinfrisättningen när blodsockret är högt, bromsar magsäckens tömning och minskar aptiten. Ges oftast som injektion.\n' +
            '- **Sulfonureider** – driver bukspottkörteln att frisätta mer insulin, oavsett hur högt blodsockret är.\n\n' +
            'Valet styrs inte bara av blodsockret, utan också av vikt, njurfunktion och risk för hjärt-kärlsjukdom.',
        },
        {
          heading: 'Hypoglykemi – den viktigaste risken',
          body: 'Den allvarligaste akuta risken vid diabetesbehandling är **hypoglykemi**, alltså för lågt blodsocker. Den uppstår när behandlingen sänker blodsockret mer än kroppen behöver för stunden – till exempel vid en missad måltid, ovanligt hård träning eller en för stor insulindos. Symtomen kommer ofta snabbt: darrighet, svettningar, hjärtklappning, hunger och svårt att koncentrera sig. Obehandlad kan hypoglykemi leda till förvirring och medvetslöshet. Behandlingen är däremot enkel och snabb – druvsocker eller något annat sockerhaltigt. Risken är störst med insulin och sulfonureider, eftersom de sänker blodsockret oavsett hur högt det var från början. Metformin, SGLT2-hämmare och GLP-1-läkemedel ger sällan hypoglykemi när de används ensamma.',
        },
      ],
      keyTerms: [
        { term: 'Insulin', definition: 'Hormon som sänker blodsockret genom att släppa in socker i cellerna.' },
        { term: 'Basinsulin', definition: 'Långverkande insulin som täcker kroppens grundbehov över dygnet.' },
        { term: 'Metformin', definition: 'Förstahandsmedel vid typ 2-diabetes som minskar leverns sockerproduktion.' },
        { term: 'SGLT2-hämmare', definition: 'Läkemedel som gör att socker lämnar kroppen med urinen.' },
        { term: 'GLP-1-receptoragonist', definition: 'Läkemedel som härmar ett tarmhormon och ökar insulinfrisättningen vid högt blodsocker.' },
        { term: 'Hypoglykemi', definition: 'För lågt blodsocker, den viktigaste akuta risken vid behandlingen.' },
      ],
      takeaways: [
        'Typ 1 kräver alltid insulin; typ 2 börjar med kost, motion och metformin.',
        'Insulinsorterna skiljs åt av hur snabbt och hur länge de verkar.',
        'Nyare grupper som SGLT2-hämmare och GLP-1-läkemedel verkar på andra sätt.',
        'Hypoglykemi är störst risk med insulin och sulfonureider.',
      ],
    },

    'mag-tarm-lm': {
      title: 'Mag-tarmläkemedel',
      intro:
        'Besvär från mage och tarm hör till de vanligaste orsakerna till att människor använder läkemedel. Många av preparaten är receptfria och tas ofta på egen hand.',
      sections: [
        {
          heading: 'Medel mot magsyra',
          body: 'Magsäcken producerar saltsyra som behövs för matsmältningen, men som ger besvär om den kommer upp i matstrupen eller angriper slemhinnan. **Protonpumpshämmare**, till exempel omeprazol, stänger av själva pumpen i magsäckens celler och minskar därmed syraproduktionen kraftigt. Effekten kommer inte direkt utan byggs upp över några dygn, vilket är viktigt att förklara för den som väntar sig omedelbar lindring. De används vid **reflux** (sura uppstötningar), vid magsår och som skydd för magen hos den som behöver ta NSAID. **Antacida** fungerar tvärtom: de neutraliserar den syra som redan finns och ger snabb men kortvarig lindring. Bra vid tillfälliga besvär, men ingen lösning på ett bakomliggande problem.',
        },
        {
          heading: 'Vid förstoppning och diarré',
          body:
            '**Laxermedel** används vid förstoppning och verkar på olika sätt:\n\n' +
            '- **Bulkmedel** – fibrer som sväller och ökar avföringens volym. Kräver att man dricker tillräckligt.\n' +
            '- **Osmotiska medel** – drar vatten till tarmen så att innehållet blir mjukare och lättare att få ut.\n' +
            '- **Tarmirriterande medel** – stimulerar tarmens muskulatur att arbeta. Effektiva, men avsedda för kortare tids bruk.\n\n' +
            'Hur snabbt effekten kommer skiljer sig, från några timmar till ett par dygn beroende på typ. Vid diarré används i stället medel som bromsar tarmens rörelser – men vid en infektion är vätskeersättning viktigare än att stoppa upp tarmen.',
        },
        {
          heading: 'Mot illamående',
          body: '**Antiemetika** är samlingsnamnet för medel mot illamående och kräkningar. En viktig poäng är att de inte är utbytbara mot varandra: illamående kan utlösas på flera olika sätt, och läkemedlet väljs därför efter orsaken snarare än efter symtomet. Vid åksjuka och yrsel används medel som dämpar signalerna från balansorganet, ofta äldre antihistaminer – de gör många trötta. Vid illamående av cellgifter eller efter en operation används i stället medel som blockerar särskilda signalämnen i hjärnans kräkcentrum. Vissa medel verkar dessutom genom att få magsäcken att tömma sig snabbare. Ett medel som fungerar utmärkt vid ett slags illamående kan alltså vara verkningslöst vid ett annat, och att välja rätt medel efter orsak är därför en av de tydligaste principerna inom mag-tarmområdet.',
        },
      ],
      keyTerms: [
        { term: 'Protonpumpshämmare', definition: 'Läkemedel som kraftigt minskar magsäckens syraproduktion.' },
        { term: 'Antacida', definition: 'Medel som neutraliserar syra som redan finns och ger snabb lindring.' },
        { term: 'Reflux', definition: 'Att magsyra kommer upp i matstrupen och ger sura uppstötningar.' },
        { term: 'Laxermedel', definition: 'Samlingsnamn för medel mot förstoppning.' },
        { term: 'Antiemetika', definition: 'Samlingsnamn för läkemedel mot illamående och kräkningar.' },
      ],
      takeaways: [
        'Protonpumpshämmare minskar syraproduktionen; effekten byggs upp över några dygn.',
        'Antacida neutraliserar befintlig syra och verkar snabbt men kortvarigt.',
        'Laxermedel verkar olika: bulkmedel, osmotiska eller tarmirriterande.',
        'Antiemetika väljs efter orsaken till illamåendet.',
      ],
    },

    'astma-allergi-lm': {
      title: 'Astma- och allergiläkemedel',
      intro:
        'Astma och allergi bottnar i en överkänslig reaktion i luftvägar och slemhinnor. Behandlingen bygger på att skilja mellan det som lindrar akut och det som håller besvären borta.',
      sections: [
        {
          heading: 'Två uppgifter: kupera och förebygga',
          body: 'Vid astma finns två problem samtidigt: luftrören är inflammerade och kan dessutom dra ihop sig i kramp. Därför delas astmaläkemedlen in efter uppgift. **Anfallskuperande** läkemedel tas vid behov och ger snabb lindring när det stramar i bröstet. **Underhållsbehandling** tas varje dag, även när man mår bra, och syftar till att dämpa inflammationen så att anfallen uteblir. Blandas dessa ihop kan det bli farligt: den som bara använder den snabbverkande sprayen får lindring för stunden, medan den underliggande inflammationen fortsätter obehandlad. Att kunna förklara den skillnaden tydligt är en av de viktigaste uppgifterna inom området.',
        },
        {
          heading: 'Luftrörsvidgande och inhalationskortison',
          body: 'De luftrörsvidgande medlen är oftast **beta-2-agonister**, som får luftrörens muskulatur att slappna av. De kortverkande tas vid behov och ger effekt inom minuter – det är den klassiska snabbverkande sprayen. De långverkande håller i sig många timmar, men används vid astma aldrig ensamma, utan alltid tillsammans med inflammationsdämpande behandling. Grunden i underhållsbehandlingen är **inhalationskortison**, som dämpar inflammationen på plats i luftrören. Eftersom det andas in direkt dit det behövs krävs bara små mängder, och påverkan på resten av kroppen blir liten. Effekten kommer däremot först efter dagar till veckor, och den som slutar för att besvären försvunnit får ofta tillbaka dem. Att skölja munnen efter inhalation minskar risken för svampinfektion och heshet, och **inhalationstekniken** avgör hur mycket som verkligen når fram.',
        },
        {
          heading: 'Allergi och antihistaminer',
          body: 'Vid allergi frisätter kroppen **histamin**, som ger klåda, rinnande näsa, nysningar och svullnad. **Antihistaminer** blockerar histaminets receptorer och dämpar därmed symtomen. De används vid hösnuva, nässelutslag och klåda, men är ingen behandling av astma. Äldre antihistaminer tar sig in i hjärnan och gör många trötta, medan nyare gör det i betydligt mindre grad – trötthet är därför inte längre en självklar biverkning. Vid besvär från näsan används ofta kortison som nässpray, som är kraftigare mot nästäppa än tabletter. Vid den svåraste allergiska reaktionen, **anafylaxi**, är adrenalin det livräddande läkemedlet, och den som har känd risk bär ofta med sig en förfylld adrenalinpenna.',
        },
      ],
      keyTerms: [
        { term: 'Beta-2-agonist', definition: 'Luftrörsvidgande läkemedel som får luftrörens muskulatur att slappna av.' },
        { term: 'Anfallskuperande', definition: 'Läkemedel som tas vid behov och ger snabb lindring vid astmabesvär.' },
        { term: 'Inhalationskortison', definition: 'Inflammationsdämpande underhållsbehandling som andas in direkt i luftrören.' },
        { term: 'Histamin', definition: 'Kroppseget ämne som frisätts vid allergi och ger klåda, snuva och svullnad.' },
        { term: 'Antihistamin', definition: 'Läkemedel som blockerar histaminets receptorer och dämpar allergisymtom.' },
        { term: 'Anafylaxi', definition: 'Den svåraste allergiska reaktionen, som behandlas med adrenalin.' },
      ],
      takeaways: [
        'Astmabehandling delas i anfallskuperande vid behov och daglig underhållsbehandling.',
        'Beta-2-agonister vidgar luftrören; långverkande används inte ensamma vid astma.',
        'Inhalationskortison dämpar inflammationen och ger effekt först efter dagar till veckor.',
        'Antihistaminer lindrar allergi men behandlar inte astma.',
      ],
    },
  },

  sakerhet: {
    adherens: {
      title: 'Följsamhet (adherens) och patientkommunikation',
      intro:
        'Ett läkemedel som inte tas kan inte verka. Trots det är det mycket vanligt att behandlingar inte följs som det var tänkt.',
      sections: [
        {
          heading: 'Vad adherens betyder',
          body: '**Adherens**, på svenska ofta **följsamhet**, beskriver i vilken utsträckning en patient använder sitt läkemedel så som man kommit överens om – rätt dos, vid rätt tillfällen och tillräckligt länge. Ordvalet är inte oviktigt. Det äldre begreppet **compliance** betyder ungefär att lyda en ordination och gör patienten till en passiv mottagare. Adherens utgår i stället från att patienten är delaktig i ett beslut som hon eller han kan välja att stå bakom, och begreppet **konkordans** betonar just den gemensamma överenskommelsen. Vid långvariga behandlingar visar studier återkommande att bara ungefär hälften av patienterna tar sina läkemedel som avsett. Det är alltså inget udda undantag, utan snarare det normala.',
        },
        {
          heading: 'Varför läkemedel inte tas',
          body:
            'Orsakerna är sällan slarv. Man brukar skilja på **omedveten** och **medveten** bristande följsamhet.\n\n' +
            'Omedveten – patienten vill, men lyckas inte:\n\n' +
            '- Glömska, krångliga scheman, många läkemedel och många doser per dag.\n' +
            '- Svårt att förstå instruktionen, eller praktiska hinder som att öppna förpackningen.\n\n' +
            'Medveten – patienten väljer att avstå:\n\n' +
            '- Man känner ingen sjukdom. Högt blodtryck och höga blodfetter märks inte, så läkemedlet upplevs onödigt.\n' +
            '- Effekten dröjer, som vid antidepressiva, och behandlingen upplevs verkningslös.\n' +
            '- Rädsla för biverkningar, ofta efter att ha läst bipacksedeln.\n' +
            '- Tvivel på att läkemedlet verkligen behövs.',
        },
        {
          heading: 'Vad tydlig information gör',
          body: 'Bristande följsamhet syns sällan utåt. I stället ser det ut som att behandlingen inte fungerar, vilket kan leda till att dosen höjs eller att ännu ett läkemedel läggs till – trots att det första aldrig togs. Konsekvenserna blir sämre sjukdomskontroll, onödiga komplikationer och undvikbara vårdbesök. Här spelar informationen en avgörande roll. Det som hjälper är att förklara varför läkemedlet behövs och inte bara hur det ska tas, att vara ärlig om vanliga biverkningar och om vilka som brukar gå över, att säga i förväg att effekten kan dröja, och att förenkla behandlingen där det går. En enkel metod är att låta patienten återberätta med egna ord vad hon eller han uppfattat. För en läkemedelsinformatör är detta kärnan i rollen: informationen ska vara saklig och balanserad, men också gå att förstå och använda – annars gör den ingen nytta.',
        },
      ],
      keyTerms: [
        { term: 'Adherens', definition: 'I vilken utsträckning patienten använder läkemedlet som man kommit överens om.' },
        { term: 'Följsamhet', definition: 'Svensk term för adherens.' },
        { term: 'Compliance', definition: 'Äldre begrepp som utgår från att patienten följer en ordination.' },
        { term: 'Konkordans', definition: 'Begrepp som betonar den gemensamma överenskommelsen mellan vårdgivare och patient.' },
        { term: 'Omedveten bristande följsamhet', definition: 'När patienten vill ta läkemedlet men inte lyckas, till exempel av glömska.' },
        { term: 'Medveten bristande följsamhet', definition: 'När patienten aktivt väljer att avstå från läkemedlet.' },
      ],
      takeaways: [
        'Vid långvarig behandling tar bara ungefär hälften läkemedlet som avsett.',
        'Orsakerna delas i omedvetna (glömska, krångel) och medvetna (tvivel, rädsla).',
        'Utåt ser bristande följsamhet ut som att behandlingen inte fungerar.',
        'Tydlig information om varför, hur länge och vad man kan vänta sig ökar följsamheten.',
      ],
    },

    regelverk: {
      title: 'Regelverk, godkännande och kliniska prövningar',
      intro:
        'Vägen från en lovande molekyl till ett godkänt läkemedel är lång och hårt reglerad. Varje steg finns till för att skydda patienten.',
      sections: [
        {
          heading: 'Från labb till patient – fyra faser',
          body:
            'Innan ett läkemedel får prövas på människa görs **prekliniska studier** i laboratorium och på djur, för att undersöka effekt och grundläggande säkerhet. Därefter följer **kliniska prövningar** på människa, indelade i fyra faser:\n\n' +
            '- Fas I – ett fåtal deltagare, oftast friska frivilliga. Frågan är hur kroppen tar emot läkemedlet: säkerhet, tolerans och lämpligt dosintervall.\n' +
            '- Fas II – ett mindre antal patienter med sjukdomen. Frågan är om läkemedlet verkar, och vilken dos som är rimlig.\n' +
            '- Fas III – stora studier, ofta med tusentals patienter, där läkemedlet jämförs med placebo eller med bästa befintliga behandling. Det är dessa som ligger till grund för ett godkännande.\n' +
            '- Fas IV – studier efter godkännandet, när läkemedlet används i vanlig sjukvård.\n\n' +
            'Deltagande är alltid frivilligt och bygger på **informerat samtycke**: deltagaren ska ha förstått syfte och risker innan hon eller han tackar ja, och kan avbryta när som helst. En prövning får inte starta förrän den godkänts av både Läkemedelsverket och en etikprövning.',
        },
        {
          heading: 'Godkännande och myndigheter',
          body: 'Ett läkemedel får inte säljas förrän en myndighet granskat dokumentationen och funnit att nyttan överväger riskerna. I Sverige är **Läkemedelsverket** ansvarig myndighet. Inom EU samordnas arbetet av den europeiska läkemedelsmyndigheten **EMA**, vars vetenskapliga bedömning ligger till grund för godkännanden som gäller i hela unionen. Vid godkännandet fastställs en **produktresumé** – det officiella dokument som beskriver vad läkemedlet är godkänt för, hur det ska doseras, vilka varningar som gäller och vilka biverkningar som är kända. Produktresumén är i sin tur grunden för **bipacksedeln**, texten som följer med förpackningen och riktar sig till patienten. I **FASS**, som ges ut av branschorganisationen Lif, finns de godkända texterna samlade och sökbara.',
        },
        {
          heading: 'Efter godkännandet',
          body: 'Godkännandet är inte ett slutbesked, utan starten på en löpande bevakning. Vid godkännandet har läkemedlet prövats på ett begränsat antal patienter under begränsad tid, i noga utvalda grupper. Sällsynta biverkningar och effekter vid långvarig användning kan därför upptäckas först när läkemedlet börjar användas brett – det är detta fas IV och biverkningsrapporteringen fångar upp. Ny kunskap kan leda till att produktresumén uppdateras, att varningar läggs till, att användningen begränsas eller, i sällsynta fall, att läkemedlet dras tillbaka. Här går också en avgörande gräns för en läkemedelsinformatör: all information om ett läkemedel måste hålla sig inom det som står i den godkända produktresumén.',
        },
      ],
      keyTerms: [
        { term: 'Preklinisk studie', definition: 'Studier i laboratorium och på djur innan läkemedlet prövas på människa.' },
        { term: 'Klinisk prövning', definition: 'Studie av ett läkemedel på människa, indelad i fas I–IV.' },
        { term: 'Informerat samtycke', definition: 'Att deltagaren tackar ja först efter att ha förstått syfte och risker.' },
        { term: 'EMA', definition: 'Den europeiska läkemedelsmyndigheten, vars bedömning ligger till grund för EU-gemensamma godkännanden.' },
        { term: 'Produktresumé', definition: 'Det officiella dokument som beskriver vad läkemedlet är godkänt för.' },
        { term: 'FASS', definition: 'Sökbar samling av de godkända texterna om läkemedel på den svenska marknaden.' },
      ],
      takeaways: [
        'Kliniska prövningar går i fyra faser: säkerhet, effekt och dos, stora jämförande studier, och uppföljning efter godkännandet.',
        'Deltagande är frivilligt och kräver informerat samtycke.',
        'Läkemedelsverket och EMA granskar och godkänner; produktresumén är det officiella dokumentet.',
        'All information om ett läkemedel måste hålla sig inom den godkända produktresumén.',
      ],
    },
  },
}
