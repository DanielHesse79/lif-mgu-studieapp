/**
 * Statiska lärtexter – Modul 2, ämnesområde Farmakodynamik.
 */
export const FARMAKODYNAMIK = {
  receptorer: {
    title: 'Receptorer och signalvägar',
    intro:
      'Farmakodynamik handlar om vad läkemedlet gör med kroppen. Allt börjar med att läkemedlet hittar sin måltavla.',
    sections: [
      {
        heading: 'Receptorn som lås',
        body: 'De flesta läkemedel verkar genom att binda till en **receptor** – ett protein på eller i cellen som tar emot signaler. Receptorn fungerar som ett lås och läkemedlet som en nyckel: bara molekyler med rätt form passar. När rätt molekyl binder ändrar receptorn cellens beteende. Att receptorerna är så specifika är förklaringen till att ett läkemedel kan påverka vissa celler men lämna andra ifred.',
      },
      {
        heading: 'Från bindning till effekt',
        body: 'När en molekyl binder till en receptor startar en **signalväg** inne i cellen – en kedja av reaktioner som till slut ger den synliga effekten, t.ex. att ett kärl vidgas eller att en körtel utsöndrar något. Många kroppsegna ämnen, som hormoner och **neurotransmittorer**, verkar på exakt samma sätt. Läkemedel utnyttjar därför ofta kroppens egna receptorer och signalvägar, vilket en läkemedelsinformatör behöver kunna förklara enkelt.',
      },
    ],
    keyTerms: [
      { term: 'Farmakodynamik', definition: 'Läran om vad läkemedlet gör med kroppen.' },
      { term: 'Receptor', definition: 'Protein som tar emot en signal och utlöser ett svar i cellen.' },
      { term: 'Signalväg', definition: 'Kedjan av reaktioner i cellen som leder till effekten.' },
      { term: 'Neurotransmittor', definition: 'Kroppsegen budbärare som ofta verkar via receptorer.' },
    ],
    takeaways: [
      'De flesta läkemedel verkar via receptorer (lås-och-nyckel).',
      'Bindningen startar en signalväg som ger effekten.',
      'Läkemedel utnyttjar ofta kroppens egna receptorer.',
    ],
  },

  'agonist-antagonist': {
    title: 'Agonister, antagonister och affinitet',
    intro:
      'Ett läkemedel kan antingen sätta igång en receptor eller blockera den. Skillnaden avgör om effekten ökar eller minskar.',
    sections: [
      {
        heading: 'Att starta eller blockera',
        body: 'En **agonist** binder till receptorn och aktiverar den – den härmar kroppens egen signal och sätter igång effekten. En **antagonist** binder också men aktiverar inte; i stället blockerar den receptorn så att kroppens egna ämnen inte kommer åt. En antagonist är som en nyckel som passar i låset men inte kan vrida om – samtidigt hindrar den den riktiga nyckeln. Båda principerna används flitigt: t.ex. dämpar antagonister ofta en överaktivitet i kroppen.',
      },
      {
        heading: 'Affinitet och styrka',
        body: '**Affinitet** beskriver hur starkt en molekyl binder till sin receptor – hög affinitet betyder att den fäster lätt och sitter kvar. Ett läkemedels totala styrka, dess **potens**, beror på hur väl det binder och hur kraftigt det aktiverar receptorn. Hög potens betyder att en liten dos räcker. Dessa begrepp hjälper en läkemedelsinformatör att förklara varför doser skiljer sig stort mellan olika preparat trots att de verkar på samma receptor.',
      },
    ],
    keyTerms: [
      { term: 'Agonist', definition: 'Läkemedel som aktiverar receptorn och ger effekt.' },
      { term: 'Antagonist', definition: 'Läkemedel som blockerar receptorn utan att aktivera den.' },
      { term: 'Affinitet', definition: 'Hur starkt en molekyl binder till sin receptor.' },
      { term: 'Potens', definition: 'Hur stor effekt ett läkemedel ger per dos.' },
    ],
    takeaways: [
      'Agonist startar receptorn; antagonist blockerar den.',
      'Affinitet = hur hårt molekylen binder.',
      'Hög potens betyder att en liten dos räcker.',
    ],
  },

  'dos-respons': {
    title: 'Dos-respons och terapeutiskt fönster',
    intro:
      'Mer läkemedel ger oftast större effekt – men bara upp till en gräns, och för mycket blir farligt. Detta samband är centralt för all dosering.',
    sections: [
      {
        heading: 'Sambandet dos och effekt',
        body: 'Ett **dos-responssamband** beskriver hur effekten ändras när dosen ökar. Vid låga doser märks ingen effekt, sedan ökar effekten med dosen, och till slut nås ett **tak** där mer läkemedel inte ger mer effekt eftersom alla receptorer redan är upptagna. Att förstå detta förklarar varför en dubblad dos sällan ger dubbel effekt och varför en högre dos inte alltid är bättre.',
      },
      {
        heading: 'Det terapeutiska fönstret',
        body: 'Det **terapeutiska fönstret** är spannet mellan den dos som ger önskad effekt och den dos där biverkningarna blir för stora. Ett brett fönster gör läkemedlet säkert och lätt att dosera, medan ett **smalt terapeutiskt fönster** kräver noggrann uppföljning eftersom gränsen mellan verksam och skadlig dos är liten. För en läkemedelsinformatör är detta viktigt att lyfta fram, eftersom det styr hur ett läkemedel doseras och kontrolleras.',
      },
    ],
    keyTerms: [
      { term: 'Dos-responssamband', definition: 'Hur effekten ändras när dosen ökar.' },
      { term: 'Takeffekt', definition: 'När högre dos inte ger mer effekt.' },
      { term: 'Terapeutiskt fönster', definition: 'Spannet mellan verksam och skadlig dos.' },
      { term: 'Smalt terapeutiskt fönster', definition: 'Liten marginal mellan effekt och biverkningar.' },
    ],
    takeaways: [
      'Effekten ökar med dosen men når ett tak.',
      'Det terapeutiska fönstret ligger mellan verksam och skadlig dos.',
      'Ett smalt fönster kräver noggrann uppföljning.',
    ],
  },

  tolerans: {
    title: 'Tolerans, beroende och nedreglering',
    intro:
      'Vid längre behandling kan kroppen anpassa sig så att läkemedlet får mindre effekt. Ibland uppstår också ett beroende.',
    sections: [
      {
        heading: 'När effekten avtar',
        body: '**Tolerans** innebär att samma dos ger allt mindre effekt med tiden, så att dosen kan behöva höjas för samma resultat. En vanlig orsak är **nedreglering**: när receptorerna ständigt stimuleras minskar cellen antalet receptorer eller gör dem mindre känsliga. Kroppen försöker helt enkelt återställa balansen. Detta förklarar varför vissa läkemedel tappar i effekt vid långvarig användning.',
      },
      {
        heading: 'Beroende och utsättning',
        body: 'Vid **beroende** har kroppen vant sig så mycket vid läkemedlet att den fungerar sämre utan det. Sätts läkemedlet då ut tvärt kan **abstinens** uppstå – obehagliga symtom medan kroppen ställer om sig. Därför trappas vissa läkemedel ned långsamt i stället för att avslutas plötsligt. För en läkemedelsinformatör är det viktigt att kunna förklara skillnaden mellan tolerans och beroende på ett begripligt sätt.',
      },
    ],
    keyTerms: [
      { term: 'Tolerans', definition: 'Att samma dos ger mindre effekt med tiden.' },
      { term: 'Nedreglering', definition: 'Att cellen minskar antalet eller känsligheten hos receptorer.' },
      { term: 'Beroende', definition: 'Att kroppen fungerar sämre utan läkemedlet.' },
      { term: 'Abstinens', definition: 'Symtom som uppstår när ett läkemedel sätts ut för snabbt.' },
    ],
    takeaways: [
      'Tolerans = avtagande effekt vid samma dos.',
      'Nedreglering av receptorer är en vanlig orsak.',
      'Beroende kan ge abstinens, så vissa läkemedel måste trappas ned.',
    ],
  },
}
