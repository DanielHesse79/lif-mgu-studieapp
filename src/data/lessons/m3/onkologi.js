/**
 * Statiska lärtexter – Modul 3, ämnesområde Onkologi.
 * Nyckel = lesson.id (se modules.js). Struktur matchar Lär dig-renderaren:
 * { title, intro, sections:[{heading, body}], keyTerms:[{term, definition}], takeaways:[] }
 * Nyckelbegrepp markeras med **fetstil** i body.
 */
export const ONKOLOGI = {
  cancerbiologi: {
    title: 'Cancerns biologi och utveckling',
    intro:
      'Cancer handlar i grunden om celler som börjat dela sig okontrollerat. För att förstå behandlingen behöver man veta vad som händer på cellnivå.',
    sections: [
      {
        heading: 'När celldelningen spårar ur',
        body: 'Normalt delar sig kroppens celler kontrollerat och dör när de är förbrukade. Cancer uppstår när skador i cellens arvsmassa (**mutationer**) sätter dessa kontroller ur spel. Cellen börjar dela sig **okontrollerat** och struntar i kroppens stoppsignaler. Mutationer byggs ofta upp under många år, vilket förklarar varför cancer blir vanligare med åldern.',
      },
      {
        heading: 'Godartat och elakartat',
        body: 'En klump av celler kallas **tumör**. En **benign** (godartad) tumör växer på sin plats utan att sprida sig och är sällan farlig. En **malign** (elakartad) tumör är det vi menar med cancer: den växer in i omgivande vävnad och kan sprida sig. När cancerceller följer med blod eller lymfa till andra delar av kroppen och bildar nya tumörer kallas det **metastaser** (dottertumörer).',
      },
    ],
    keyTerms: [
      { term: 'Mutation', definition: 'Skada eller förändring i cellens arvsmassa.' },
      { term: 'Tumör', definition: 'En klump av celler; kan vara god- eller elakartad.' },
      { term: 'Benign', definition: 'Godartad tumör som inte sprider sig.' },
      { term: 'Malign', definition: 'Elakartad tumör – det vi menar med cancer.' },
      { term: 'Metastas', definition: 'Dottertumör som bildats där cancern spridit sig.' },
    ],
    takeaways: [
      'Cancer = celler som delar sig okontrollerat pga mutationer.',
      'Benign tumör sprider sig inte; malign (cancer) gör det.',
      'Metastaser är dottertumörer på andra ställen i kroppen.',
    ],
  },

  tumortyper: {
    title: 'Tumörtyper och stadieindelning',
    intro:
      'Cancer är inte en enda sjukdom utan många. Man delar in tumörer efter vilken vävnad de utgår från och hur långt de hunnit.',
    sections: [
      {
        heading: 'Var cancern börjar',
        body: 'Tumörer namnges efter ursprungsvävnaden. **Karcinom** utgår från epitelvävnad (hud, körtlar och de ytor som klär organ) och är den vanligaste gruppen. **Sarkom** utgår från stöd- och bindväv som ben, brosk och muskel. Cancer i blodets och immunförsvarets celler bildar i stället **leukemier** och **lymfom**. Ursprunget styr hur sjukdomen beter sig och behandlas.',
      },
      {
        heading: 'Hur långt har den gått?',
        body: 'För att planera behandling bedöms hur utbredd cancern är. **Stadieindelning** beskriver tumörens storlek, om den spridit sig till närliggande **lymfkörtlar** och om det finns **metastaser** längre bort. Ett vanligt system är **TNM**, där T står för tumörens storlek, N för lymfkörtlar och M för fjärrmetastaser. Lågt stadium betyder begränsad sjukdom, högt stadium mer spridd.',
      },
    ],
    keyTerms: [
      { term: 'Karcinom', definition: 'Cancer som utgår från epitelvävnad; den vanligaste typen.' },
      { term: 'Sarkom', definition: 'Cancer som utgår från stöd- och bindväv.' },
      { term: 'Leukemi / lymfom', definition: 'Cancer i blodets respektive immunförsvarets celler.' },
      { term: 'Stadieindelning', definition: 'Bedömning av hur utbredd cancern är.' },
      { term: 'TNM', definition: 'System som beskriver tumör (T), lymfkörtlar (N) och metastaser (M).' },
    ],
    takeaways: [
      'Tumörer delas in efter ursprungsvävnad: karcinom, sarkom, leukemi, lymfom.',
      'Stadieindelning beskriver hur utbredd cancern är.',
      'TNM väger in tumörstorlek, lymfkörtlar och fjärrmetastaser.',
    ],
  },

  cancerbehandling: {
    title: 'Principer för cancerbehandling',
    intro:
      'Cancer behandlas oftast med en kombination av metoder. Valet styrs av tumörtyp, stadium och patientens tillstånd.',
    sections: [
      {
        heading: 'De klassiska behandlingarna',
        body: 'Tre grundpelare har länge använts. **Kirurgi** innebär att tumören opereras bort och är ofta förstahandsval vid avgränsad cancer. **Strålbehandling** använder riktad strålning för att döda cancerceller i ett område. **Cytostatika** (cellgifter) är läkemedel som angriper celler som delar sig snabbt och sprids via blodet i hela kroppen – effektivt även mot spridd sjukdom, men ger biverkningar eftersom även friska, snabbväxande celler påverkas.',
      },
      {
        heading: 'Moderna, riktade läkemedel',
        body: 'Nyare behandlingar försöker träffa cancern mer **riktat** och skona friska celler. **Målriktad terapi** angriper specifika egenskaper hos just cancercellerna. **Immunterapi** hjälper i stället patientens eget immunförsvar att känna igen och bekämpa tumören. Behandlingen kan ges i **botande** syfte eller **palliativt**, för att bromsa sjukdomen och lindra symtom när bot inte är möjlig.',
      },
    ],
    keyTerms: [
      { term: 'Kirurgi', definition: 'Operation där tumören avlägsnas.' },
      { term: 'Strålbehandling', definition: 'Riktad strålning som dödar cancerceller i ett område.' },
      { term: 'Cytostatika', definition: 'Cellgifter som angriper snabbt delande celler i hela kroppen.' },
      { term: 'Immunterapi', definition: 'Behandling som får immunförsvaret att bekämpa cancern.' },
      { term: 'Palliativ', definition: 'Lindrande behandling när bot inte är möjlig.' },
    ],
    takeaways: [
      'Grundpelare: kirurgi, strålbehandling och cytostatika.',
      'Cytostatika drabbar även friska snabbväxande celler – därav biverkningar.',
      'Målriktad terapi och immunterapi angriper cancern mer riktat.',
    ],
  },
}
