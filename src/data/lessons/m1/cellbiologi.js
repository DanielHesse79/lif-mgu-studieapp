/**
 * Statiska lärtexter – Modul 1, ämnesområde Cellbiologi.
 */
export const CELLBIOLOGI = {
  cellen: {
    title: 'Cellens uppbyggnad och organeller',
    intro:
      'Cellen är kroppens minsta levande enhet. Inuti den finns specialiserade smådelar, organeller, som var och en sköter en uppgift – ungefär som rum i en fabrik.',
    sections: [
      {
        heading: 'Kärnan och energin',
        body: 'I mitten ligger **cellkärnan**, som innehåller cellens **DNA** – ritningarna för alla proteiner. Energin produceras i **mitokondrierna**, som ofta kallas cellens kraftverk eftersom de tillverkar energimolekylen ATP. Celler som arbetar hårt, t.ex. muskelceller, har många mitokondrier.',
      },
      {
        heading: 'Tillverkning och transport',
        body: 'Proteiner byggs på **ribosomerna**. Det **endoplasmatiska nätverket** och **Golgiapparaten** bearbetar, packar och skickar vidare proteinerna. **Lysosomerna** är cellens återvinningsstation som bryter ned skräp. Allt omges av **cytoplasman**, en geléartad vätska där organellerna ligger.',
      },
    ],
    keyTerms: [
      { term: 'Cellkärna', definition: 'Innehåller cellens DNA.' },
      { term: 'Mitokondrie', definition: 'Cellens kraftverk – producerar ATP.' },
      { term: 'Ribosom', definition: 'Bygger proteiner.' },
      { term: 'Golgiapparaten', definition: 'Packar och skickar vidare proteiner.' },
      { term: 'Lysosom', definition: 'Bryter ned och återvinner avfall.' },
    ],
    takeaways: [
      'Kärnan rymmer DNA, mitokondrien gör energi.',
      'Ribosomer bygger protein; Golgi packar och skickar.',
      'Organeller är specialiserade – var och en har sin uppgift.',
    ],
  },

  membran: {
    title: 'Cellmembranet och transport över membran',
    intro:
      'Cellmembranet är cellens gräns mot omvärlden. Det avgör vad som får komma in och ut – en funktion som många läkemedel utnyttjar.',
    sections: [
      {
        heading: 'Membranets uppbyggnad',
        body: 'Membranet är ett **dubbelt lager av fosfolipider** med inbäddade proteiner. Lagret är **selektivt genomsläppligt**: små fettlösliga ämnen passerar lätt, medan större eller vattenlösliga ämnen behöver hjälp av transportproteiner. Det är denna selektivitet som gör att cellen kan hålla en annan inre miljö än sin omgivning.',
      },
      {
        heading: 'Passiv och aktiv transport',
        body: 'Vid **passiv transport** rör sig ämnen från hög till låg koncentration utan att cellen förbrukar energi – det kallas **diffusion** (och **osmos** när det gäller vatten). Vid **aktiv transport** pumpas ämnen i stället mot koncentrationsgradienten, vilket kräver energi (ATP). Ett klassiskt exempel är **natrium-kaliumpumpen**, som är avgörande för nervers och musklers funktion.',
      },
    ],
    keyTerms: [
      { term: 'Fosfolipidlager', definition: 'Det dubbla fettlagret som bygger membranet.' },
      { term: 'Selektivt genomsläppligt', definition: 'Släpper igenom vissa ämnen, stoppar andra.' },
      { term: 'Diffusion', definition: 'Passiv spridning från hög till låg koncentration.' },
      { term: 'Aktiv transport', definition: 'Transport mot gradienten – kräver energi.' },
      { term: 'Natrium-kaliumpumpen', definition: 'Aktiv pump central för nerver och muskler.' },
    ],
    takeaways: [
      'Membranet är ett dubbelt fosfolipidlager, selektivt genomsläppligt.',
      'Passiv transport (diffusion) är gratis; aktiv transport kräver ATP.',
      'Na/K-pumpen är ett nyckelexempel på aktiv transport.',
    ],
  },

  energi: {
    title: 'Cellens energiomsättning (ATP och mitokondrier)',
    intro:
      'Allt arbete i kroppen kräver energi. Cellerna omvandlar näring till en användbar energivaluta som heter ATP.',
    sections: [
      {
        heading: 'ATP – cellens energivaluta',
        body: '**ATP** (adenosintrifosfat) är molekylen som driver i stort sett alla energikrävande processer: muskelarbete, transport över membran och uppbyggnad av nya ämnen. När ATP förbrukas frigörs energi, och cellen måste ständigt bilda ny ATP – den lagras inte i stora mängder.',
      },
      {
        heading: 'Cellandningen',
        body: 'Den största delen av ATP bildas i **mitokondrierna** genom **cellandningen**, där **glukos** (socker) bryts ned med hjälp av **syre**. Förenklat: glukos + syre → koldioxid + vatten + energi (ATP). Det är därför vi behöver både mat och syre – och varför andning och cirkulation hänger så nära ihop med energiomsättningen.',
      },
    ],
    keyTerms: [
      { term: 'ATP', definition: 'Cellens energivaluta som driver dess processer.' },
      { term: 'Cellandning', definition: 'Nedbrytning av glukos med syre för att bilda ATP.' },
      { term: 'Glukos', definition: 'Sockret som är cellens viktigaste bränsle.' },
      { term: 'Mitokondrie', definition: 'Organellen där det mesta av ATP bildas.' },
    ],
    takeaways: [
      'ATP är energivalutan – bildas och förbrukas hela tiden.',
      'Cellandningen sker i mitokondrierna och kräver syre.',
      'Glukos + syre → koldioxid + vatten + energi.',
    ],
  },

  proteinsyntes: {
    title: 'Proteinsyntes: från DNA till protein',
    intro:
      'Proteiner gör det mesta jobbet i cellen. Hur de tillverkas utifrån generna i DNA är en av biologins mest grundläggande processer.',
    sections: [
      {
        heading: 'Transkription',
        body: 'DNA stannar i cellkärnan, så cellen gör först en arbetskopia. Under **transkriptionen** skrivs en gen av från DNA till en molekyl som kallas **mRNA**. mRNA:t fungerar som ett budskap och kan lämna kärnan för att ta sig till ribosomerna.',
      },
      {
        heading: 'Translation',
        body: 'Vid ribosomen sker **translationen**: mRNA:ts kod läses av tre bokstäver i taget, och för varje sådant **kodon** läggs en bestämd **aminosyra** till. Kedjan av aminosyror veckas sedan ihop till ett färdigt protein. Sammanfattat: DNA → mRNA → protein. Många läkemedel verkar genom att påverka proteiner som bildas på det här sättet.',
      },
    ],
    keyTerms: [
      { term: 'Transkription', definition: 'DNA skrivs av till mRNA i kärnan.' },
      { term: 'mRNA', definition: 'Arbetskopia av en gen som lämnar kärnan.' },
      { term: 'Translation', definition: 'mRNA översätts till en aminosyrakedja vid ribosomen.' },
      { term: 'Kodon', definition: 'Tre baser i mRNA som kodar för en aminosyra.' },
      { term: 'Aminosyra', definition: 'Proteinernas byggstenar.' },
    ],
    takeaways: [
      'Centralt flöde: DNA → mRNA → protein.',
      'Transkription i kärnan, translation vid ribosomen.',
      'Ett kodon (tre baser) = en aminosyra.',
    ],
  },

  cellcykeln: {
    title: 'Cellcykeln och celldelning',
    intro:
      'Kroppen byter ständigt ut celler. Celldelningen är noga reglerad – och när regleringen sviktar kan cancer uppstå, vilket gör ämnet centralt även för onkologin.',
    sections: [
      {
        heading: 'Cellcykeln',
        body: 'En cell som ska dela sig går igenom **cellcykeln**: den växer, kopierar sitt **DNA** och delar sig sedan. Mellan stegen finns **kontrollpunkter** där cellen "kontrollerar" att allt är rätt innan den går vidare. Skadade celler kan stoppas eller programmeras att dö – en städning som kallas **apoptos**.',
      },
      {
        heading: 'Mitos och meios',
        body: 'Vanlig celldelning kallas **mitos** och ger två genetiskt identiska dotterceller – så förnyas hud, blod och tarmslemhinna. **Meios** är en särskild delning som bildar köns­celler (ägg och spermier) med halva kromosomuppsättningen, vilket är förutsättningen för fortplantning. Cancer beror i grunden på celler som delar sig okontrollerat.',
      },
    ],
    keyTerms: [
      { term: 'Cellcykel', definition: 'Stegen en cell går igenom för att dela sig.' },
      { term: 'Kontrollpunkt', definition: 'Steg där cellen kontrolleras innan delning fortsätter.' },
      { term: 'Mitos', definition: 'Delning som ger två identiska celler.' },
      { term: 'Meios', definition: 'Delning som bildar könsceller med halva kromosomantalet.' },
      { term: 'Apoptos', definition: 'Programmerad celldöd som städar bort skadade celler.' },
    ],
    takeaways: [
      'Cellcykeln har kontrollpunkter som hindrar fel.',
      'Mitos → två identiska celler; meios → könsceller.',
      'Okontrollerad celldelning ligger bakom cancer.',
    ],
  },
}
