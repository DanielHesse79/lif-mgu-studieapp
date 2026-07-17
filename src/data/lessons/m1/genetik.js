/**
 * Statiska lärtexter – Modul 1, ämnesområde Genetik.
 */
export const GENETIK = {
  'dna-gener': {
    title: 'DNA, gener och kromosomer',
    intro:
      'Arvsmassan är ritningen för hela kroppen. Tre begrepp hänger ihop: DNA, gener och kromosomer – från minsta bokstav till hela bandet.',
    sections: [
      {
        heading: 'DNA och baspar',
        body: '**DNA** är en lång molekyl byggd av byggstenar som kallas **nukleotider**. Varje nukleotid bär en av fyra **kvävebaser**: A, T, C och G. DNA är dubbelsträngat, och baserna paras alltid likadant – **A med T** och **C med G**. Det är ordningen på baserna som utgör den genetiska koden.',
      },
      {
        heading: 'Från gen till kromosom',
        body: 'En **gen** är en avgränsad bit DNA som innehåller instruktionen för oftast ett protein. Allt DNA packas ihop till **kromosomer**. En vanlig mänsklig kroppscell har **46 kromosomer** (23 par) – hälften från varje förälder. Könscellerna har bara 23, så att antalet blir rätt igen vid befruktningen.',
      },
    ],
    keyTerms: [
      { term: 'DNA', definition: 'Molekylen som bär arvsmassan.' },
      { term: 'Nukleotid', definition: 'DNA:s byggsten, med en kvävebas.' },
      { term: 'Baspar (A-T, C-G)', definition: 'Hur baserna alltid paras i DNA.' },
      { term: 'Gen', definition: 'En bit DNA med instruktion för ett protein.' },
      { term: 'Kromosom', definition: 'Hoppackat DNA; människan har 46 i kroppsceller.' },
    ],
    takeaways: [
      'DNA byggs av nukleotider med baserna A, T, C, G.',
      'A paras med T, C med G.',
      '46 kromosomer (23 par) i kroppsceller, 23 i könsceller.',
    ],
  },

  nedarvning: {
    title: 'Nedärvning och genetisk variation',
    intro:
      'Vi ärver anlag från båda föräldrarna. Hur de kombineras avgör allt från ögonfärg till risk för vissa sjukdomar.',
    sections: [
      {
        heading: 'Anlag och alleler',
        body: 'Eftersom kromosomerna kommer i par har vi två kopior av varje gen – en från vardera föräldern. Olika varianter av en gen kallas **alleler**. Ett anlag kan vara **dominant** (slår igenom även i enkel uppsättning) eller **recessivt** (visar sig bara om man har två kopior). Den som bär ett recessivt sjukdomsanlag utan att vara sjuk kallas **anlagsbärare**.',
      },
      {
        heading: 'Genotyp, fenotyp och variation',
        body: 'Den genetiska uppsättningen kallas **genotyp**, medan de egenskaper man faktiskt ser kallas **fenotyp**. Fenotypen formas av både gener och miljö. Variation mellan människor uppstår genom att föräldrarnas anlag kombineras på nya sätt vid varje befruktning – därför är syskon lika men inte identiska.',
      },
    ],
    keyTerms: [
      { term: 'Allel', definition: 'En variant av en gen.' },
      { term: 'Dominant', definition: 'Anlag som slår igenom i enkel uppsättning.' },
      { term: 'Recessiv', definition: 'Anlag som syns bara med två kopior.' },
      { term: 'Anlagsbärare', definition: 'Bär ett recessivt anlag utan att vara sjuk.' },
      { term: 'Genotyp / fenotyp', definition: 'Den genetiska uppsättningen respektive de synliga egenskaperna.' },
    ],
    takeaways: [
      'Vi har två kopior av varje gen, en per förälder.',
      'Dominant slår igenom direkt; recessivt kräver två kopior.',
      'Fenotypen formas av både gener och miljö.',
    ],
  },

  mutationer: {
    title: 'Mutationer och genetiska sjukdomar',
    intro:
      'En mutation är en förändring i DNA. De flesta är harmlösa, men vissa orsakar sjukdom – och förståelsen av dem driver mycket av modern läkemedelsutveckling.',
    sections: [
      {
        heading: 'Vad är en mutation?',
        body: 'En **mutation** är en förändring i DNA-sekvensen. Den kan vara så liten som en ändrad bokstav eller omfatta större bitar. Mutationer uppstår spontant vid celldelning eller orsakas av yttre faktorer som UV-ljus och tobaksrök. Effekten beror helt på var den sker: många märks inte alls, andra kan slå ut ett viktigt protein.',
      },
      {
        heading: 'Ärftliga och förvärvade',
        body: 'En **ärftlig** mutation finns i könscellerna och förs vidare till barn – så nedärvs t.ex. cystisk fibros. En **förvärvad** mutation uppstår i en kroppscell under livet och ärvs inte; sådana kan ligga bakom cancer. Vissa moderna läkemedel är riktade mot just specifika mutationer i tumörceller.',
      },
    ],
    keyTerms: [
      { term: 'Mutation', definition: 'Förändring i DNA-sekvensen.' },
      { term: 'Ärftlig mutation', definition: 'Finns i könsceller och kan föras vidare.' },
      { term: 'Förvärvad mutation', definition: 'Uppstår i en kroppscell under livet, ärvs inte.' },
    ],
    takeaways: [
      'En mutation är en förändring i DNA – ofta harmlös.',
      'Ärftliga mutationer förs vidare; förvärvade gör det inte.',
      'Förvärvade mutationer kan ligga bakom cancer.',
    ],
  },

  genuttryck: {
    title: 'Genuttryck och epigenetik (grund)',
    intro:
      'Alla celler har samma DNA, men en levercell och en nervcell är helt olika. Förklaringen är att olika gener är på- eller avslagna.',
    sections: [
      {
        heading: 'Genuttryck',
        body: '**Genuttryck** betyder att en gen är aktiv – att den läses av och bildar sitt protein. I varje celltyp uttrycks bara en del av alla gener, och det är detta urval som gör en cell till just en muskelcell eller en hudcell. Genuttrycket kan också ändras snabbt som svar på t.ex. signaler, näring eller stress.',
      },
      {
        heading: 'Epigenetik',
        body: '**Epigenetik** handlar om förändringar som slår av och på gener **utan** att själva DNA-sekvensen ändras, t.ex. genom kemiska markörer på DNA:t (metylering). Sådana markörer kan påverkas av livsstil och miljö och i viss mån föras vidare. Epigenetiken förklarar hur arv och miljö samspelar.',
      },
    ],
    keyTerms: [
      { term: 'Genuttryck', definition: 'När en gen är aktiv och bildar sitt protein.' },
      { term: 'Epigenetik', definition: 'Reglering av gener utan ändrad DNA-sekvens.' },
      { term: 'Metylering', definition: 'Kemisk markör som kan stänga av en gen.' },
    ],
    takeaways: [
      'Samma DNA i alla celler – olika gener uttrycks.',
      'Epigenetik styr gener utan att ändra DNA-sekvensen.',
      'Livsstil och miljö kan påverka genuttrycket.',
    ],
  },
}
