/**
 * Statiska lärtexter – Modul 1, ämnesområde Fysiologi.
 */
export const FYSIOLOGI = {
  homeostas: {
    title: 'Homeostas och reglering',
    intro:
      'Kroppen strävar alltid efter balans i sin inre miljö. Det principen, homeostas, är nyckeln till att förstå hur både kroppen och läkemedel fungerar.',
    sections: [
      {
        heading: 'Vad är homeostas?',
        body: '**Homeostas** är kroppens förmåga att hålla en stabil inre miljö trots att omvärlden förändras – t.ex. konstant kroppstemperatur, blodsocker och pH. Värden tillåts pendla inom ett smalt intervall, och så fort de börjar avvika sätts motåtgärder in för att föra dem tillbaka.',
      },
      {
        heading: 'Negativ återkoppling',
        body: 'Den vanligaste mekanismen är **negativ återkoppling**: en avvikelse utlöser ett svar som motverkar avvikelsen, ungefär som en termostat. Stiger blodsockret frisätts insulin som sänker det igen; sjunker det frisätts glukagon som höjer det. Många läkemedel verkar genom att förstärka eller dämpa just sådana reglersystem.',
      },
    ],
    keyTerms: [
      { term: 'Homeostas', definition: 'Att hålla en stabil inre miljö.' },
      { term: 'Negativ återkoppling', definition: 'Ett svar som motverkar en avvikelse.' },
      { term: 'Referensvärde', definition: 'Det intervall kroppen försöker hålla sig inom.' },
    ],
    takeaways: [
      'Homeostas = stabil inre miljö trots yttre förändringar.',
      'Negativ återkoppling fungerar som en termostat.',
      'Många läkemedel påverkar kroppens reglersystem.',
    ],
  },

  cirkulation: {
    title: 'Cirkulation och blodtrycksreglering',
    intro:
      'Blodet måste nå alla celler med rätt tryck. Hur cirkulationen och blodtrycket regleras är central kunskap för hjärt-kärlläkemedel.',
    sections: [
      {
        heading: 'Hjärtat som pump',
        body: 'Hjärtat pumpar i en takt av systole (sammandragning) och diastole (avslappning). **Blodtrycket** anges med två tal: det **systoliska** (övre) mäts när hjärtat drar ihop sig, det **diastoliska** (undre) vid vila mellan slagen. Trycket beror på hur mycket blod hjärtat pumpar och hur trånga kärlen är.',
      },
      {
        heading: 'Hur trycket regleras',
        body: 'Kroppen finjusterar blodtrycket genom att ändra hjärtats arbete och vidga eller dra ihop kärlen. Det autonoma nervsystemet svarar snabbt, medan njurarna och hormoner sköter den långsammare regleringen genom att styra vätskemängden. **Högt blodtryck (hypertoni)** belastar hjärta och kärl, och blodtrycksläkemedel verkar på just dessa mekanismer.',
      },
    ],
    keyTerms: [
      { term: 'Systoliskt tryck', definition: 'Det övre värdet – vid hjärtats sammandragning.' },
      { term: 'Diastoliskt tryck', definition: 'Det undre värdet – vid vila mellan slagen.' },
      { term: 'Hypertoni', definition: 'Kroniskt högt blodtryck.' },
      { term: 'Kärlvidgning', definition: 'Vidare kärl som sänker blodtrycket.' },
    ],
    takeaways: [
      'Blodtryck = systoliskt/diastoliskt (övre/undre).',
      'Det styrs av hjärtats arbete, kärlens vidd och vätskemängd.',
      'Hjärt-kärlläkemedel verkar på dessa mekanismer.',
    ],
  },

  andning: {
    title: 'Andningsfysiologi och gasutbyte',
    intro:
      'Andningen förser blodet med syre och vädrar ut koldioxid. Den är också tätt kopplad till kroppens pH-balans.',
    sections: [
      {
        heading: 'In- och utandning',
        body: 'Vid **inandning** drar **diafragman** ihop sig och plattas ut nedåt. Då ökar brösthålans volym, trycket sjunker och luft sugs in. Vid utandning slappnar muskeln av, volymen minskar och luft pressas ut. Andningen är till stor del automatisk och styrs av centra i hjärnstammen.',
      },
      {
        heading: 'Gasutbytet',
        body: 'I lungornas **alveoler** möter luften blodet över en mycket tunn vägg. **Syre** diffunderar in i blodet och binds till de röda blodkropparnas hemoglobin, medan **koldioxid** går åt andra hållet och andas ut. Koldioxidnivån påverkar blodets pH, vilket gör att andningen även deltar i kroppens syra-bas-balans.',
      },
    ],
    keyTerms: [
      { term: 'Diafragma', definition: 'Andningsmuskeln som driver in- och utandning.' },
      { term: 'Alveol', definition: 'Lungblåsa där gasutbytet sker.' },
      { term: 'Hemoglobin', definition: 'Protein i röda blodkroppar som binder syre.' },
      { term: 'Gasutbyte', definition: 'Syre tas upp och koldioxid lämnas av.' },
    ],
    takeaways: [
      'Diafragman dras ihop och sänks vid inandning.',
      'Syre tas upp och koldioxid lämnas av i alveolerna.',
      'Koldioxidnivån påverkar blodets pH.',
    ],
  },

  njurfunktion: {
    title: 'Njurfunktion och vätskebalans',
    intro:
      'Njurarna är kroppens reningsverk och vattenreglerare. De avgör också hur snabbt många läkemedel lämnar kroppen.',
    sections: [
      {
        heading: 'Filtrera och återta',
        body: 'I nefronen **filtreras** blodet först till en stor mängd primärurin. Därefter **återtas** det mesta av vattnet och alla nyttiga ämnen tillbaka till blodet, medan avfall och överskott blir kvar och bildar urin. På så sätt gör sig kroppen av med avfall utan att förlora det den behöver.',
      },
      {
        heading: 'Vätske- och saltbalans',
        body: 'Genom att styra hur mycket vatten och salt som återtas reglerar njurarna **vätskebalansen** och därmed också blodtrycket. Hormoner spelar en nyckelroll: **ADH** (antidiuretiskt hormon) gör att mer vatten sparas och urinen blir mer koncentrerad. Vattendrivande läkemedel (diuretika) verkar just genom att påverka njurarnas återupptag.',
      },
    ],
    keyTerms: [
      { term: 'Filtration', definition: 'Blodet filtreras i nefronet till primärurin.' },
      { term: 'Återupptag', definition: 'Vatten och nyttiga ämnen tas tillbaka till blodet.' },
      { term: 'ADH', definition: 'Hormon som får njuren att spara vatten.' },
      { term: 'Diuretika', definition: 'Vattendrivande läkemedel som verkar i njuren.' },
    ],
    takeaways: [
      'Njuren filtrerar blodet och återtar det kroppen behöver.',
      'Vätske- och saltbalansen styr även blodtrycket.',
      'ADH sparar vatten; diuretika ökar urinmängden.',
    ],
  },

  endokrina: {
    title: 'Endokrina systemet och hormoner',
    intro:
      'Hormoner är kemiska budbärare som styr långsamma men kraftfulla processer i kroppen, från ämnesomsättning till tillväxt.',
    sections: [
      {
        heading: 'Körtlar och hormoner',
        body: 'Det **endokrina systemet** består av körtlar som släpper ut **hormoner** direkt i blodet. Hormonet färdas med blodet och påverkar bara celler med rätt **receptor** för det. Exempel på körtlar är sköldkörteln, binjurarna och bukspottkörteln. Jämfört med nervsystemet verkar hormoner långsammare men mer långvarigt.',
      },
      {
        heading: 'Blodsockrets hormoner',
        body: 'Ett tydligt exempel är blodsockerregleringen. **Insulin** sänker blodsockret genom att låta cellerna ta upp glukos, medan **glukagon** höjer det genom att frigöra glukos från levern. De två hormonerna balanserar varandra och håller blodsockret stabilt – en balans som rubbas vid diabetes.',
      },
    ],
    keyTerms: [
      { term: 'Hormon', definition: 'Kemisk budbärare som transporteras med blodet.' },
      { term: 'Endokrin körtel', definition: 'Körtel som släpper hormoner direkt i blodet.' },
      { term: 'Receptor', definition: 'Mottagare som gör en cell känslig för ett hormon.' },
      { term: 'Insulin / glukagon', definition: 'Sänker respektive höjer blodsockret.' },
    ],
    takeaways: [
      'Hormoner är budbärare som verkar via blodet på celler med rätt receptor.',
      'De verkar långsammare men mer långvarigt än nervsignaler.',
      'Insulin sänker och glukagon höjer blodsockret.',
    ],
  },

  nervsignal: {
    title: 'Nervsignalering och synapser',
    intro:
      'Nervsystemet kommunicerar blixtsnabbt med elektriska och kemiska signaler. Synapsen, kontakten mellan nervceller, är måltavla för många läkemedel.',
    sections: [
      {
        heading: 'Nervcellen och impulsen',
        body: 'En **nervcell (neuron)** tar emot signaler via grenar som kallas dendriter och skickar dem vidare längs en lång utskott, **axonet**, som en elektrisk impuls. Många axon är klädda med ett fettlager (myelin) som gör att impulsen går snabbare. Impulsen är "allt eller inget" – den utlöses först när retningen är tillräckligt stark.',
      },
      {
        heading: 'Synapsen',
        body: 'Där en nervcell möter nästa finns en liten springa, **synapsen**. Signalen förs över genom att celler frisätter kemiska budbärare, **neurotransmittorer** (t.ex. dopamin och serotonin), som binder till receptorer på nästa cell. Väldigt många läkemedel – inte minst psykofarmaka – verkar genom att förstärka eller blockera signalen i synapsen.',
      },
    ],
    keyTerms: [
      { term: 'Neuron', definition: 'Nervcell som leder signaler.' },
      { term: 'Axon', definition: 'Utskottet som för impulsen vidare.' },
      { term: 'Synaps', definition: 'Kontaktpunkten mellan två nervceller.' },
      { term: 'Neurotransmittor', definition: 'Kemisk budbärare som för signalen över synapsen.' },
    ],
    takeaways: [
      'Signaler går elektriskt i neuronet, kemiskt över synapsen.',
      'Neurotransmittorer för signalen mellan nervceller.',
      'Synapsen är en vanlig måltavla för läkemedel.',
    ],
  },
}
