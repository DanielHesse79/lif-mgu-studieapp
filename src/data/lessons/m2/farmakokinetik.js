/**
 * Statiska lärtexter – Modul 2, ämnesområde Farmakokinetik.
 */
export const FARMAKOKINETIK = {
  absorption: {
    title: 'Absorption och administreringsvägar',
    intro:
      'Innan ett läkemedel kan verka måste det tas upp i kroppen. Hur snabbt och hur mycket som tas upp beror på hur läkemedlet ges.',
    sections: [
      {
        heading: 'Vad är absorption?',
        body: '**Absorption** är när läkemedlet tas upp från intagsstället och når blodet. Det vanligaste sättet är att svälja en tablett, men ett läkemedel kan också ges som spruta, plåster, spray eller stolpiller. Vägen in i kroppen kallas **administreringsväg**, och valet av väg styr både hur snabbt effekten kommer och hur stor del som verkligen tas upp.',
      },
      {
        heading: 'Olika vägar in i kroppen',
        body: 'När en tablett sväljs sker upptaget i magen och tarmen – detta kallas **peroral** (genom munnen) administrering och är bekvämt men relativt långsamt. En **intravenös** spruta läggs direkt i blodet och ger snabb, fullständig effekt. Begreppet **biotillgänglighet** beskriver hur stor andel av dosen som faktiskt når blodet: en intravenös dos har full biotillgänglighet, medan en tablett ofta har lägre eftersom en del bryts ned på vägen. För en läkemedelsinformatör är detta viktigt eftersom det förklarar varför doser skiljer sig mellan tablett och spruta.',
      },
    ],
    keyTerms: [
      { term: 'Absorption', definition: 'Upptag av läkemedel från intagsstället till blodet.' },
      { term: 'Administreringsväg', definition: 'Sättet läkemedlet ges på, t.ex. tablett eller spruta.' },
      { term: 'Peroral', definition: 'Läkemedel som tas genom munnen och sväljs.' },
      { term: 'Intravenös', definition: 'Läkemedel som ges direkt i blodet med spruta.' },
      { term: 'Biotillgänglighet', definition: 'Andelen av dosen som verkligen når blodet.' },
    ],
    takeaways: [
      'Absorption = upptag från intagsstället till blodet.',
      'Administreringsvägen styr hur snabb och fullständig effekten blir.',
      'Intravenöst ger full biotillgänglighet; tabletter ofta lägre.',
    ],
  },

  distribution: {
    title: 'Distribution och proteinbindning',
    intro:
      'När läkemedlet nått blodet ska det också fördelas ut i kroppen. Var det hamnar avgör var det kan verka.',
    sections: [
      {
        heading: 'Hur läkemedlet sprids',
        body: '**Distribution** är hur läkemedlet fördelas från blodet ut till kroppens olika vävnader. Fettlösliga läkemedel når lätt in i vävnader och kan samlas i t.ex. fettväv, medan vattenlösliga stannar mer i blodet. Vissa områden är svåra att nå: **blod-hjärnbarriären** skyddar hjärnan och släpper bara igenom utvalda ämnen, vilket är en orsak till att läkemedel mot sjukdomar i hjärnan kan vara svåra att utveckla.',
      },
      {
        heading: 'Bindning till proteiner',
        body: 'I blodet kan en stor del av läkemedlet fästa vid blodets proteiner – framför allt **albumin**. Detta kallas **proteinbindning**. Endast den **fria fraktionen**, alltså den del som inte är bunden, kan lämna blodet och ge effekt. Den bundna delen fungerar som ett förråd som långsamt frigörs. Detta är viktigt eftersom två läkemedel kan konkurrera om samma bindningsplatser, vilket kan höja den fria mängden av det ena och förstärka dess effekt.',
      },
    ],
    keyTerms: [
      { term: 'Distribution', definition: 'Fördelning av läkemedlet från blodet ut till vävnaderna.' },
      { term: 'Blod-hjärnbarriär', definition: 'Skydd som begränsar vilka ämnen som når hjärnan.' },
      { term: 'Proteinbindning', definition: 'Att läkemedel fäster vid blodets proteiner.' },
      { term: 'Albumin', definition: 'Det vanligaste blodproteinet som binder läkemedel.' },
      { term: 'Fri fraktion', definition: 'Den obundna delen av läkemedlet som ger effekt.' },
    ],
    takeaways: [
      'Distribution = hur läkemedlet sprids till vävnaderna.',
      'Bara den fria, obundna delen kan ge effekt.',
      'Blod-hjärnbarriären begränsar tillträdet till hjärnan.',
    ],
  },

  metabolism: {
    title: 'Metabolism och levern (CYP450)',
    intro:
      'Kroppen bryter ned läkemedel för att kunna göra sig av med dem. Det mesta av detta arbete sker i levern.',
    sections: [
      {
        heading: 'Levern som kemisk fabrik',
        body: '**Metabolism** (eller **biotransformation**) är när kroppen kemiskt ombildar läkemedlet, oftast till ämnen som är lättare att utsöndra. **Levern** är kroppens viktigaste organ för detta. Ofta görs läkemedlet mer vattenlösligt så att njurarna kan föra ut det med urinen. De ämnen som bildas kallas **metaboliter** – de flesta är inaktiva, men ibland är metaboliten själv verksam eller till och med giftig.',
      },
      {
        heading: 'Enzymsystemet CYP450',
        body: 'En grupp enzymer i levern som kallas **CYP450** (cytokrom P450) gör en stor del av nedbrytningen. Dessa enzymer kan arbeta olika snabbt hos olika personer, vilket delvis förklarar varför samma dos kan ge olika effekt. Vissa läkemedel kan dessutom snabba upp eller bromsa dessa enzymer, och då påverkas nedbrytningen av andra läkemedel. Detta är en mycket vanlig orsak till **läkemedelsinteraktioner** och något en läkemedelsinformatör ofta möter frågor om.',
      },
    ],
    keyTerms: [
      { term: 'Metabolism', definition: 'Kemisk ombildning av läkemedel i kroppen.' },
      { term: 'Biotransformation', definition: 'Annat ord för metabolism av läkemedel.' },
      { term: 'Metabolit', definition: 'Ämne som bildas när ett läkemedel bryts ned.' },
      { term: 'CYP450', definition: 'Leverns enzymsystem som bryter ned många läkemedel.' },
      { term: 'Enzym', definition: 'Protein som snabbar upp en kemisk reaktion.' },
    ],
    takeaways: [
      'Metabolism sker mest i levern och gör läkemedlet lättare att utsöndra.',
      'Metaboliter är oftast inaktiva, men kan vara verksamma eller giftiga.',
      'CYP450-enzymer förklarar många läkemedelsinteraktioner.',
    ],
  },

  elimination: {
    title: 'Elimination, halveringstid och clearance',
    intro:
      'Till slut måste läkemedlet lämna kroppen. Hur snabbt det sker avgör hur ofta en dos behöver tas.',
    sections: [
      {
        heading: 'Hur läkemedlet lämnar kroppen',
        body: '**Elimination** är hur kroppen gör sig av med läkemedlet, oftast genom njurarna med urinen men ibland också via levern och gallan. Hastigheten beskrivs med **clearance**, ett mått på hur stor blodvolym som renas från läkemedlet per tidsenhet. Nedsatt njurfunktion ger lägre clearance, vilket gör att läkemedlet stannar längre och kan kräva en lägre dos – särskilt viktigt hos äldre.',
      },
      {
        heading: 'Halveringstid och dosering',
        body: '**Halveringstiden** är den tid det tar för halten i blodet att sjunka till hälften. En kort halveringstid betyder att läkemedlet försvinner snabbt och kan behöva tas flera gånger om dagen, medan en lång halveringstid räcker längre. Efter upprepad dosering nås så småningom en jämn nivå, **steady state**, där det som tillförs och det som elimineras är i balans. Detta hjälper en läkemedelsinformatör att förklara varför vissa läkemedel doseras en gång om dagen och andra flera.',
      },
    ],
    keyTerms: [
      { term: 'Elimination', definition: 'När kroppen gör sig av med läkemedlet.' },
      { term: 'Clearance', definition: 'Hur stor blodvolym som renas från läkemedel per tid.' },
      { term: 'Halveringstid', definition: 'Tiden tills halten i blodet halveras.' },
      { term: 'Steady state', definition: 'Jämn nivå då tillförsel och elimination är i balans.' },
    ],
    takeaways: [
      'Elimination sker mest via njurarna med urinen.',
      'Halveringstiden styr hur ofta läkemedlet behöver tas.',
      'Nedsatt njurfunktion sänker clearance och kan kräva lägre dos.',
    ],
  },
}
