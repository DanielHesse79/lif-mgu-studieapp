/**
 * Statiska lärtexter – Modul 2, ämnesområde Läkemedelssäkerhet.
 */
export const SAKERHET = {
  biverkningar: {
    title: 'Biverkningar och farmakovigilans',
    intro:
      'Inget läkemedel är helt fritt från oönskade effekter. Att upptäcka och följa biverkningar är en central del av läkemedelssäkerheten.',
    sections: [
      {
        heading: 'Vad är en biverkning?',
        body: 'En **biverkning** är en oönskad effekt av ett läkemedel vid normal användning. De flesta är milda och övergående, som illamående eller trötthet, medan andra är sällsynta men allvarliga. Biverkningar delas ofta in efter hur vanliga de är, från mycket vanliga till mycket sällsynta. En läkemedelsinformatör måste kunna tala om biverkningar på ett balanserat sätt – varken förringa eller överdriva.',
      },
      {
        heading: 'Att bevaka säkerheten',
        body: '**Farmakovigilans** är det systematiska arbetet med att övervaka läkemedels säkerhet efter att de godkänts. Eftersom sällsynta biverkningar ofta inte syns förrän många människor använt läkemedlet, samlas rapporter in löpande. I Sverige kan både vården och allmänheten göra en **biverkningsrapport** till Läkemedelsverket. På så vis kan nya risker upptäckas och informationen om ett läkemedel uppdateras.',
      },
    ],
    keyTerms: [
      { term: 'Biverkning', definition: 'Oönskad effekt av ett läkemedel vid normal användning.' },
      { term: 'Farmakovigilans', definition: 'Systematisk övervakning av läkemedels säkerhet.' },
      { term: 'Biverkningsrapport', definition: 'Anmälan av en misstänkt biverkning till myndigheten.' },
      { term: 'Läkemedelsverket', definition: 'Den svenska myndighet som övervakar läkemedel.' },
    ],
    takeaways: [
      'En biverkning är en oönskad effekt vid normal användning.',
      'De flesta är milda; sällsynta allvarliga upptäcks med tiden.',
      'Farmakovigilans bevakar säkerheten genom biverkningsrapporter.',
    ],
  },

  interaktioner: {
    title: 'Läkemedelsinteraktioner',
    intro:
      'När flera läkemedel tas samtidigt kan de påverka varandra. Sådana interaktioner kan både försvaga och förstärka effekten.',
    sections: [
      {
        heading: 'Vad är en interaktion?',
        body: 'En **läkemedelsinteraktion** uppstår när ett läkemedel påverkar hur ett annat verkar. Effekten kan **förstärkas** så att det blir för kraftigt, eller **försvagas** så att det inte hjälper. Interaktioner kan också göra ett läkemedel mer giftigt. Risken ökar ju fler läkemedel en person tar samtidigt, något som kallas **polyfarmaci** och är vanligt hos äldre.',
      },
      {
        heading: 'Vanliga orsaker',
        body: 'En vanlig orsak är att läkemedel påverkar leverns nedbrytningsenzymer (**CYP450**), så att ett annat läkemedel bryts ned snabbare eller långsammare än normalt. Även mat och naturläkemedel kan ge interaktioner – grapefrukt och johannesört är klassiska exempel. För en läkemedelsinformatör är detta viktigt, eftersom interaktioner är en vanlig fråga och en viktig säkerhetsaspekt att lyfta fram.',
      },
    ],
    keyTerms: [
      { term: 'Läkemedelsinteraktion', definition: 'När ett läkemedel påverkar hur ett annat verkar.' },
      { term: 'Polyfarmaci', definition: 'Att använda många läkemedel samtidigt.' },
      { term: 'CYP450', definition: 'Leverns enzymsystem som ofta ligger bakom interaktioner.' },
      { term: 'Naturläkemedel', definition: 'Växtbaserade preparat som också kan ge interaktioner.' },
    ],
    takeaways: [
      'Interaktioner kan både förstärka och försvaga effekten.',
      'Risken ökar med antalet läkemedel (polyfarmaci).',
      'Även mat och naturläkemedel, som grapefrukt, kan interagera.',
    ],
  },

  'sarskilda-grupper': {
    title: 'Särskilda grupper (äldre, barn, graviditet)',
    intro:
      'Läkemedel verkar inte lika i alla kroppar. Vissa grupper kräver extra hänsyn vid val och dosering.',
    sections: [
      {
        heading: 'Äldre och barn',
        body: 'Hos **äldre** fungerar lever och njurar ofta långsammare, så läkemedel bryts ned och utsöndras sämre och kan ansamlas. De använder också ofta flera läkemedel samtidigt, vilket ökar risken för interaktioner och biverkningar – därför används ofta lägre doser. **Barn** är inte små vuxna: deras dos anpassas vanligen efter kroppsvikt, och alla läkemedel passar inte för barn eftersom deras kroppar fortfarande utvecklas.',
      },
      {
        heading: 'Graviditet och amning',
        body: 'Vid **graviditet** måste man ta hänsyn till att läkemedel kan passera över till fostret via moderkakan och påverka dess utveckling. Vid **amning** kan vissa läkemedel gå över i bröstmjölken. Därför vägs alltid nyttan för den gravida mot möjlig risk för barnet, och en del läkemedel undviks. För en läkemedelsinformatör är det viktigt att känna till att dessa grupper kräver särskild försiktighet och hänvisa vidare vid osäkerhet.',
      },
    ],
    keyTerms: [
      { term: 'Särskilda grupper', definition: 'Patientgrupper som kräver extra hänsyn vid läkemedelsbehandling.' },
      { term: 'Polyfarmaci', definition: 'Användning av många läkemedel samtidigt, vanligt hos äldre.' },
      { term: 'Dosering efter kroppsvikt', definition: 'Att barns dos anpassas efter hur mycket de väger.' },
      { term: 'Moderkaka', definition: 'Organet som läkemedel kan passera genom till fostret.' },
    ],
    takeaways: [
      'Äldre bryter ned läkemedel långsammare och behöver ofta lägre doser.',
      'Barns dos anpassas vanligen efter kroppsvikt.',
      'Vid graviditet och amning vägs nytta mot risk för barnet.',
    ],
  },
}
