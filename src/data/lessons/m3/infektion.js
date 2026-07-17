/**
 * Statiska lärtexter – Modul 3, ämnesområde Infektion.
 * Nyckel = lesson.id (se modules.js). Struktur matchar Lär dig-renderaren:
 * { title, intro, sections:[{heading, body}], keyTerms:[{term, definition}], takeaways:[] }
 * Nyckelbegrepp markeras med **fetstil** i body.
 */
export const INFEKTION = {
  mikrober: {
    title: 'Bakterier, virus, svamp och parasiter',
    intro:
      'Infektioner orsakas av mikroorganismer (mikrober). De skiljer sig mycket åt, vilket avgör hur sjukdomen behandlas.',
    sections: [
      {
        heading: 'Bakterier och virus',
        body: '**Bakterier** är encelliga organismer som kan leva och föröka sig på egen hand. De flesta är ofarliga eller nyttiga, men vissa orsakar sjukdom. Bakterieinfektioner kan ofta behandlas med **antibiotika**. **Virus** är inte egentliga celler utan mycket mindre partiklar som måste ta sig in i en värdcell och kapa dess maskineri för att föröka sig. Därför biter antibiotika inte på virus – mot dem används i stället **antivirala** läkemedel eller kroppens eget immunförsvar.',
      },
      {
        heading: 'Svamp och parasiter',
        body: '**Svamp** kan ge alltifrån ytliga hud- och nagelinfektioner till allvarliga inre infektioner, särskilt hos personer med försvagat immunförsvar. De behandlas med **svampläkemedel** (antimykotika). **Parasiter** är organismer som lever på eller i en värd och tär på den, till exempel malariaparasiten. Varje grupp kräver sitt eget slags läkemedel – ett medel mot en grupp hjälper inte mot de andra.',
      },
    ],
    keyTerms: [
      { term: 'Bakterie', definition: 'Encellig organism som kan föröka sig själv; vissa ger sjukdom.' },
      { term: 'Virus', definition: 'Liten partikel som måste in i en värdcell för att föröka sig.' },
      { term: 'Antibiotika', definition: 'Läkemedel mot bakterier (verkar inte mot virus).' },
      { term: 'Antiviral', definition: 'Läkemedel riktat mot virus.' },
      { term: 'Parasit', definition: 'Organism som lever på eller i en värd och tär på den.' },
    ],
    takeaways: [
      'Mikrober: bakterier, virus, svamp och parasiter.',
      'Antibiotika hjälper mot bakterier men inte mot virus.',
      'Varje grupp kräver sitt eget slags läkemedel.',
    ],
  },

  'vanliga-infektioner': {
    title: 'Vanliga infektioner',
    intro:
      'De flesta infektioner är lindriga och läker av sig själva. Här är några av de vanligaste och hur de hänger ihop med läkemedel.',
    sections: [
      {
        heading: 'Luftvägsinfektioner',
        body: 'De vanligaste infektionerna drabbar luftvägarna och orsakas oftast av **virus**. Förkylning och **influensa** läker normalt utan särskild behandling – man lindrar symtomen och låter immunförsvaret göra jobbet. Ibland kan en bakteriell infektion tillstöta, till exempel **lunginflammation** eller bihåleinflammation, och då kan antibiotika behövas. Eftersom de flesta luftvägsinfektioner är virusorsakade hjälper antibiotika oftast inte.',
      },
      {
        heading: 'Andra vanliga infektioner',
        body: 'En **urinvägsinfektion (UVI)** orsakas av bakterier i urinvägarna och ger sveda och täta trängningar; den behandlas vid behov med antibiotika. **Hud- och sårinfektioner** uppstår när bakterier kommer in genom skadad hud. **Mag-tarminfektioner** ger diarré och kräkningar, ofta av virus eller bakterier, och det viktigaste är då att ersätta vätska. När antibiotika väl behövs är det viktigt att fullfölja hela kuren.',
      },
    ],
    keyTerms: [
      { term: 'Luftvägsinfektion', definition: 'Infektion i näsa, svalg eller lungor, oftast virusorsakad.' },
      { term: 'Influensa', definition: 'Virusinfektion med feber, värk och hosta.' },
      { term: 'Lunginflammation', definition: 'Infektion i lungvävnaden, kan kräva antibiotika.' },
      { term: 'Urinvägsinfektion (UVI)', definition: 'Bakteriell infektion i urinvägarna med sveda och trängningar.' },
    ],
    takeaways: [
      'De flesta luftvägsinfektioner är virus och läker av sig själva.',
      'Antibiotika behövs bara vid bakteriella infektioner.',
      'En påbörjad antibiotikakur bör fullföljas.',
    ],
  },

  resistens: {
    title: 'Antibiotikaresistens',
    intro:
      'Antibiotikaresistens är ett av sjukvårdens största hot. Det innebär att läkemedel som tidigare botade infektioner slutar fungera.',
    sections: [
      {
        heading: 'Vad är resistens?',
        body: '**Antibiotikaresistens** betyder att bakterier blivit motståndskraftiga mot antibiotika, så att läkemedlet inte längre dödar dem. Det uppstår genom naturligt **urval**: när antibiotika används överlever de få bakterier som råkar tåla det, och just de förökar sig vidare. Ju mer och oftare antibiotika används, desto snabbare gynnas resistenta bakterier. Bakterier som blivit motståndskraftiga mot flera medel kallas **multiresistenta**.',
      },
      {
        heading: 'Varför det är farligt och hur vi bromsar',
        body: 'Vid resistens blir vanliga infektioner svårare att behandla, och även rutinoperationer riskerar att bli farliga utan fungerande antibiotika. För att bromsa utvecklingen behövs **rationell antibiotikaanvändning**: att bara använda antibiotika när det verkligen behövs, välja rätt sort och fullfölja kuren. God hygien som minskar smittspridningen är också avgörande, liksom forskning på nya läkemedel.',
      },
    ],
    keyTerms: [
      { term: 'Antibiotikaresistens', definition: 'När bakterier blivit motståndskraftiga mot antibiotika.' },
      { term: 'Urval', definition: 'Att tåliga bakterier överlever och förökar sig vid antibiotikaanvändning.' },
      { term: 'Multiresistens', definition: 'Motståndskraft mot flera olika antibiotika samtidigt.' },
      { term: 'Rationell antibiotikaanvändning', definition: 'Att använda antibiotika återhållsamt och rätt.' },
    ],
    takeaways: [
      'Resistens = bakterier som antibiotika inte längre rår på.',
      'Överanvändning driver fram resistens genom naturligt urval.',
      'Bromsas av återhållsam användning, god hygien och ny forskning.',
    ],
  },
}
