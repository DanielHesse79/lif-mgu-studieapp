/**
 * Statiska lärtexter – Modul 1, ämnesområde Anatomi.
 * Nyckel = lesson.id (se modules.js). Struktur matchar Lär dig-renderaren:
 * { title, intro, sections:[{heading, body}], keyTerms:[{term, definition}], takeaways:[] }
 * Nyckelbegrepp markeras med **fetstil** i body.
 */
export const ANATOMI = {
  terminologi: {
    title: 'Anatomisk terminologi och kroppsplan',
    intro:
      'För att kunna prata begripligt med vården behöver du kunna grunderna i hur kroppen beskrivs. Anatomins språk är logiskt när man väl kan riktningsorden.',
    sections: [
      {
        heading: 'Kroppens grundställning och plan',
        body: 'All anatomi utgår från **anatomisk grundställning**: en person som står upp, blickar framåt med armarna längs sidorna och handflatorna framåt. Utifrån den delas kroppen av tänkta snittplan. **Sagittalplanet** delar i höger och vänster halva, **frontalplanet** (koronalplanet) i en främre och en bakre del, och **transversalplanet** i en övre och en nedre del. Planen används ständigt i t.ex. röntgen och magnetkamera.',
      },
      {
        heading: 'Riktningar och lägen',
        body: 'Riktningsorden är relativa. **Proximal** betyder närmare bålen eller en strukturs fäste, **distal** längre bort – axeln är proximal i förhållande till handen. **Anterior/ventral** är framåt, **posterior/dorsal** bakåt. **Superior** är uppåt, **inferior** nedåt. **Medial** är närmare kroppens mittlinje, **lateral** längre ut. Med dessa ord kan vårdpersonal beskriva ett exakt läge utan bild.',
      },
      {
        heading: 'Kroppshålor',
        body: 'Organen ligger skyddade i kroppshålor. I huvudet finns kraniehålan (hjärnan). I bålen delar **diafragman** (mellangärdet) upp utrymmet i **brösthålan** (hjärta och lungor) och **bukhålan** (mag-tarm, lever, njurar m.m.), som längst ned övergår i bäckenhålan.',
      },
    ],
    keyTerms: [
      { term: 'Anatomisk grundställning', definition: 'Standardpositionen all riktningsbeskrivning utgår från.' },
      { term: 'Proximal / distal', definition: 'Närmare respektive längre från bålen/fästet.' },
      { term: 'Anterior / posterior', definition: 'Mot kroppens framsida respektive baksida.' },
      { term: 'Medial / lateral', definition: 'Närmare mittlinjen respektive längre ut åt sidan.' },
      { term: 'Diafragma', definition: 'Andningsmuskeln som skiljer bröst- och bukhåla.' },
    ],
    takeaways: [
      'Tre snittplan: sagittal (vä/hö), frontal (fram/bak), transversal (upp/ned).',
      'Proximal = närmare bålen, distal = längre bort.',
      'Diafragman delar brösthålan från bukhålan.',
    ],
  },

  organsystem: {
    title: 'Celler, vävnader och organsystem',
    intro:
      'Kroppen är hierarkiskt byggd: celler bildar vävnader, vävnader bildar organ, och organ samarbetar i organsystem. Den ordningen återkommer i hela medicinen.',
    sections: [
      {
        heading: 'Från cell till organ',
        body: 'Den minsta levande enheten är **cellen**. Många celler av samma slag bildar en **vävnad**. Klassiskt talar man om fyra grundvävnader: **epitelvävnad** (täcker ytor och körtlar), **bindväv** (stödjer och binder samman, t.ex. brosk, ben och blod), **muskelvävnad** (skapar rörelse) och **nervvävnad** (leder signaler). När flera vävnader bygger en funktionell enhet, som hjärtat, kallas det ett **organ**.',
      },
      {
        heading: 'Organsystemen',
        body: 'Organ som löser en gemensam uppgift bildar ett **organsystem**. Exempel är cirkulationssystemet (transport), andningssystemet (gasutbyte), matsmältningssystemet (näringsupptag), nervsystemet (styrning), endokrina systemet (hormoner) och immunsystemet (försvar). Systemen är beroende av varandra – ett läkemedel som påverkar ett system får ofta effekter i andra.',
      },
    ],
    keyTerms: [
      { term: 'Cell', definition: 'Kroppens minsta levande byggsten.' },
      { term: 'Vävnad', definition: 'Grupp av liknande celler med gemensam funktion.' },
      { term: 'Epitelvävnad', definition: 'Täcker kroppens ytor och bildar körtlar.' },
      { term: 'Bindväv', definition: 'Stödjevävnad – inkluderar brosk, ben och blod.' },
      { term: 'Organsystem', definition: 'Organ som samverkar kring en uppgift.' },
    ],
    takeaways: [
      'Hierarki: cell → vävnad → organ → organsystem.',
      'Fyra grundvävnader: epitel, bindväv, muskel, nerv.',
      'Organsystemen är beroende av varandra.',
    ],
  },

  rorelse: {
    title: 'Skelett-, led- och muskelsystemet',
    intro:
      'Rörelseapparaten ger kroppen form, skydd och möjlighet att röra sig. Den är också ett viktigt område för många läkemedel, t.ex. mot benskörhet och inflammation.',
    sections: [
      {
        heading: 'Skelettet',
        body: 'Skelettet består av drygt 200 ben och ger stadga, skyddar inre organ och fungerar som fäste för muskler. Benvävnad är levande och byggs ständigt om av celler som bryter ned (**osteoklaster**) och bygger upp (**osteoblaster**). Benet lagrar också **kalcium**, vilket kopplar skelettet till kroppens mineralbalans.',
      },
      {
        heading: 'Leder',
        body: 'Där två ben möts finns en **led**. Rörliga leder är klädda med **brosk** och innehåller ledvätska som minskar friktionen. Olika ledtyper tillåter olika rörelser: en **gångjärnsled** (som knät) böjer och sträcker, medan en **kulled** (som höften och axeln) rör sig i flera plan.',
      },
      {
        heading: 'Musklerna',
        body: 'Skelettmusklerna är viljestyrda och fäster vid ben via **senor**. När en muskel drar ihop sig (kontraherar) rör den ett ben kring en led. Muskler arbetar ofta i par – när den ena drar ihop sig slappnar motspelaren av. (Ligament binder i stället ben till ben och stabiliserar leden.)',
      },
    ],
    keyTerms: [
      { term: 'Osteoblaster / osteoklaster', definition: 'Celler som bygger upp respektive bryter ned ben.' },
      { term: 'Brosk', definition: 'Glatt, stötdämpande vävnad i leder.' },
      { term: 'Sena', definition: 'Binder muskel till ben.' },
      { term: 'Ligament', definition: 'Binder ben till ben och stabiliserar leder.' },
      { term: 'Gångjärnsled / kulled', definition: 'Led för böj/sträck respektive rörelse i flera plan.' },
    ],
    takeaways: [
      'Ben byggs om hela livet och lagrar kalcium.',
      'Senor fäster muskel vid ben; ligament binder ben till ben.',
      'Muskler arbetar i par – en drar ihop sig, motspelaren slappnar av.',
    ],
  },

  'hjarta-karl': {
    title: 'Hjärtat och kärlsystemets anatomi',
    intro:
      'Hjärtat är en muskelpump som driver runt blodet i två kretslopp. Att förstå dess anatomi är grunden för en stor del av läkemedelsvärlden.',
    sections: [
      {
        heading: 'Hjärtats fyra rum',
        body: 'Hjärtat har fyra hålrum: två **förmak** (atrier) upptill och två **kamrar** (ventriklar) nedtill. Höger sida tar emot syrefattigt blod och pumpar det till lungorna; vänster sida tar emot syrerikt blod från lungorna och pumpar ut det i kroppen. **Klaffar** mellan rummen ser till att blodet bara flödar åt ett håll.',
      },
      {
        heading: 'De två kretsloppen',
        body: 'I **lilla kretsloppet** går blodet från höger kammare till lungorna och tillbaka. I **stora kretsloppet** pumpas syrerikt blod från vänster kammare ut i kroppen via **aortan**. **Artärer** för blod från hjärtat, **vener** för det tillbaka, och de allra minsta kärlen, **kapillärerna**, är där utbytet av syre och näring sker.',
      },
    ],
    keyTerms: [
      { term: 'Förmak / kammare', definition: 'Hjärtats övre mottagande respektive nedre pumpande rum.' },
      { term: 'Klaff', definition: 'Ventil som gör att blodet flödar åt ett håll.' },
      { term: 'Aorta', definition: 'Kroppens största artär, ut från vänster kammare.' },
      { term: 'Artär / ven', definition: 'För blod från respektive till hjärtat.' },
      { term: 'Kapillär', definition: 'Minsta kärlet, där syre och näring byts med vävnaden.' },
    ],
    takeaways: [
      'Fyra rum: höger/vänster förmak och kammare.',
      'Höger sida → lungorna, vänster sida → kroppen.',
      'Artärer från hjärtat, vener till hjärtat, utbyte i kapillärerna.',
    ],
  },

  lungor: {
    title: 'Lungor och luftvägar',
    intro:
      'Andningssystemet förser blodet med syre och gör sig av med koldioxid. Det är också målet för många inhalerade läkemedel, t.ex. vid astma och KOL.',
    sections: [
      {
        heading: 'Luftens väg ned',
        body: 'Luft tas in genom näsa och mun, passerar svalget och **struphuvudet (larynx)** och ned i **luftstrupen (trakea)**. Trakea delar sig i två **bronker**, en till varje lunga, som förgrenar sig i allt finare rör (bronkioler) likt ett upp-och-nedvänt träd.',
      },
      {
        heading: 'Där gasutbytet sker',
        body: 'Längst ut sitter små, tunnväggiga blåsor – **alveoler**. Här är väggen så tunn att **syre** kan diffundera över till blodet medan **koldioxid** går åt andra hållet och andas ut. Alveolerna omges av ett tätt nät av kapillärer, vilket ger en enorm yta för utbytet.',
      },
    ],
    keyTerms: [
      { term: 'Trakea', definition: 'Luftstrupen, som leder luft ned mot lungorna.' },
      { term: 'Bronk', definition: 'En av de två grenarna från trakea till lungorna.' },
      { term: 'Alveol', definition: 'Liten lungblåsa där gasutbytet sker.' },
      { term: 'Larynx', definition: 'Struphuvudet, med stämbanden.' },
    ],
    takeaways: [
      'Luftväg: näsa/mun → larynx → trakea → bronker → bronkioler → alveoler.',
      'Gasutbytet sker i alveolerna.',
      'Syre tas upp till blodet, koldioxid andas ut.',
    ],
  },

  'mag-tarm': {
    title: 'Mag-tarmkanalen och bukorganen',
    intro:
      'Matsmältningssystemet bryter ned maten till byggstenar kroppen kan ta upp. Det påverkar också hur läkemedel i tablettform tas upp.',
    sections: [
      {
        heading: 'Matens väg',
        body: 'Maten går från munnen via **matstrupen (esofagus)** till **magsäcken (ventrikeln)**, där den blandas med saltsyra och enzymer. Därefter kommer **tunntarmen**, där det mesta av näringen tas upp till blodet, och sist **tjocktarmen**, där framför allt vatten återtas innan resten lämnar kroppen.',
      },
      {
        heading: 'Körtlar som hjälper till',
        body: 'Flera organ tillverkar ämnen som behövs för matsmältningen. **Levern** producerar galla som hjälper till att bryta ned fett, och bukspottkörteln (**pankreas**) släpper ut matsmältningsenzymer och hormonerna insulin och glukagon. Levern är dessutom kroppens viktigaste organ för att bryta ned läkemedel.',
      },
    ],
    keyTerms: [
      { term: 'Esofagus', definition: 'Matstrupen, som för maten till magsäcken.' },
      { term: 'Ventrikel', definition: 'Magsäcken, med saltsyra och enzymer.' },
      { term: 'Tunntarm', definition: 'Där det mesta näringsupptaget sker.' },
      { term: 'Lever', definition: 'Bildar galla och bryter ned läkemedel.' },
      { term: 'Pankreas', definition: 'Bukspottkörteln – enzymer samt insulin/glukagon.' },
    ],
    takeaways: [
      'Väg: matstrupe → magsäck → tunntarm → tjocktarm.',
      'Näring tas mest upp i tunntarmen, vatten i tjocktarmen.',
      'Levern bryter ned både näring och läkemedel.',
    ],
  },

  njurar: {
    title: 'Njurar och urinvägar',
    intro:
      'Njurarna renar blodet och reglerar kroppens vätske- och saltbalans. De är centrala för hur läkemedel utsöndras ur kroppen.',
    sections: [
      {
        heading: 'Njurarnas uppgift',
        body: 'De två njurarna filtrerar kontinuerligt blodet och bildar **urin** av överskottsvatten och avfallsämnen. De finjusterar också balansen av salter och kroppens pH, och påverkar blodtrycket. Mycket av reningen handlar om att behålla det kroppen behöver och göra sig av med resten.',
      },
      {
        heading: 'Nefronet och urinvägarna',
        body: 'Njurens minsta funktionella enhet är **nefronet**; varje njure har omkring en miljon. I nefronet filtreras blodet, varefter vatten och nyttiga ämnen återtas. Färdig urin samlas i njurbäckenet och leds via **urinledarna** till **urinblåsan**, för att slutligen tömmas ut genom urinröret.',
      },
    ],
    keyTerms: [
      { term: 'Urin', definition: 'Vätskan njurarna bildar av avfall och överskottsvatten.' },
      { term: 'Nefron', definition: 'Njurens minsta filtrerande enhet.' },
      { term: 'Urinledare', definition: 'Rör som för urin från njuren till blåsan.' },
      { term: 'Urinblåsa', definition: 'Lagrar urinen innan den töms ut.' },
    ],
    takeaways: [
      'Njurarna renar blodet och styr vätske- och saltbalansen.',
      'Nefronet är den minsta funktionella enheten.',
      'Många läkemedel utsöndras via njurarna.',
    ],
  },

  'nervsystem-anatomi': {
    title: 'Nervsystemets anatomi (CNS och PNS)',
    intro:
      'Nervsystemet är kroppens snabba styr- och kommunikationssystem. Det delas in i en central och en perifer del.',
    sections: [
      {
        heading: 'Central och perifert',
        body: 'Det **centrala nervsystemet (CNS)** består av **hjärnan** och **ryggmärgen** – här bearbetas information och beslut fattas. Det **perifera nervsystemet (PNS)** är alla nerver utanför CNS som kopplar samman det med resten av kroppen och för signaler i båda riktningar.',
      },
      {
        heading: 'Viljestyrt och automatiskt',
        body: 'PNS delas funktionellt i en **somatisk** del, som styr viljemässiga rörelser och tar emot sinnesintryck, och en **autonom** del, som sköter sådant vi inte tänker på – hjärtslag, andning och matsmältning. Det autonoma systemet har i sin tur en pådrivande (sympatisk, "kamp eller flykt") och en lugnande (parasympatisk, "vila och smält") gren. Många läkemedel verkar just på dessa grenar.',
      },
    ],
    keyTerms: [
      { term: 'CNS', definition: 'Centrala nervsystemet: hjärna och ryggmärg.' },
      { term: 'PNS', definition: 'Perifera nervsystemet: nerverna utanför CNS.' },
      { term: 'Somatiska nervsystemet', definition: 'Viljestyrda rörelser och sinnesintryck.' },
      { term: 'Autonoma nervsystemet', definition: 'Automatisk styrning av inre organ.' },
      { term: 'Sympatikus / parasympatikus', definition: 'Pådrivande respektive lugnande gren.' },
    ],
    takeaways: [
      'CNS = hjärna + ryggmärg; PNS = nerverna utanför.',
      'Somatiska systemet är viljestyrt, autonoma är automatiskt.',
      'Autonoma systemet: sympatikus (gas) och parasympatikus (broms).',
    ],
  },
}
