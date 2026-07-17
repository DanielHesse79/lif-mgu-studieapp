/**
 * Statiska lärtexter – Modul 1, ämnesområde Immunologi.
 */
export const IMMUNOLOGI = {
  oversikt: {
    title: 'Immunförsvarets översikt (medfött och adaptivt)',
    intro:
      'Immunförsvaret skyddar oss mot bakterier, virus och andra hot. Det fungerar i två samverkande lager med olika hastighet och precision.',
    sections: [
      {
        heading: 'Det medfödda försvaret',
        body: 'Det **medfödda immunförsvaret** är vår första linje och finns från födseln. Det reagerar **snabbt och ospecifikt** mot allt som uppfattas som främmande. Hit hör fysiska barriärer som hud och slemhinnor, samt vita blodkroppar som äter upp inkräktare. Det skiljer inte på olika smittämnen utan slår brett.',
      },
      {
        heading: 'Det adaptiva försvaret',
        body: 'Det **adaptiva immunförsvaret** är långsammare men **specifikt**: det lär sig känna igen ett bestämt smittämne och bygger upp ett **immunologiskt minne**. Det är därför man oftast bara får vissa sjukdomar en gång, och det är denna del vacciner tränar. De två systemen samarbetar hela tiden.',
      },
    ],
    keyTerms: [
      { term: 'Medfött immunförsvar', definition: 'Snabb, ospecifik första försvarslinje.' },
      { term: 'Adaptivt immunförsvar', definition: 'Långsammare men specifikt, med minne.' },
      { term: 'Immunologiskt minne', definition: 'Förmågan att känna igen ett smittämne igen.' },
    ],
    takeaways: [
      'Medfött = snabbt och ospecifikt; adaptivt = specifikt med minne.',
      'Barriärer som hud och slemhinnor är del av det medfödda försvaret.',
      'Vacciner tränar det adaptiva försvaret.',
    ],
  },

  celler: {
    title: 'Celler i immunförsvaret',
    intro:
      'Immunförsvarets arbete utförs av olika sorters vita blodkroppar, var och en med sin specialitet.',
    sections: [
      {
        heading: 'De som äter och larmar',
        body: 'Flera celler tillhör det medfödda försvaret. **Fagocyter** (t.ex. makrofager) "äter upp" bakterier och skräp och larmar resten av immunförsvaret. De är ofta först på plats vid en infektion och drar igång den inflammation som lockar dit fler celler.',
      },
      {
        heading: 'Lymfocyterna',
        body: 'Det adaptiva försvaret bärs av **lymfocyter**. **B-lymfocyter** mognar till plasmaceller som tillverkar **antikroppar**. **T-lymfocyter** finns i flera varianter: hjälpar-T-celler styr och samordnar svaret, medan **cytotoxiska T-celler** dödar virusinfekterade celler direkt. Tillsammans ger de ett riktat och kraftfullt försvar.',
      },
    ],
    keyTerms: [
      { term: 'Fagocyt', definition: 'Cell som äter upp bakterier och skräp.' },
      { term: 'Lymfocyt', definition: 'Vit blodkropp i det adaptiva försvaret (B- och T-celler).' },
      { term: 'B-lymfocyt', definition: 'Bildar antikroppar (via plasmaceller).' },
      { term: 'Cytotoxisk T-cell', definition: 'Dödar virusinfekterade celler direkt.' },
    ],
    takeaways: [
      'Fagocyter äter inkräktare och larmar försvaret.',
      'B-celler gör antikroppar; T-celler styr eller dödar.',
      'Lymfocyterna utgör det adaptiva försvaret.',
    ],
  },

  antikroppar: {
    title: 'Antikroppar och antigen',
    intro:
      'Antikroppar är immunförsvarets riktade vapen. För att förstå dem behöver man begreppet antigen.',
    sections: [
      {
        heading: 'Antigen',
        body: 'Ett **antigen** är ett ämne som immunförsvaret känner igen som främmande och reagerar mot – ofta en molekyl på ytan av en bakterie eller ett virus. Det är antigenet som avgör vad försvaret riktar sig mot. Varje smittämne bär sina egna, unika antigen.',
      },
      {
        heading: 'Antikroppar',
        body: '**Antikroppar** är **proteiner** (immunglobuliner) som B-cellerna tillverkar. Varje antikropp passar ett bestämt antigen ungefär som en nyckel i ett lås. När antikroppen binder antigenet märker den ut smittämnet för förstörelse, neutraliserar det eller klumpar ihop det. Denna precision är grunden för både vaccinernas och vissa läkemedels effekt.',
      },
    ],
    keyTerms: [
      { term: 'Antigen', definition: 'Främmande ämne som immunförsvaret reagerar mot.' },
      { term: 'Antikropp', definition: 'Protein som binder ett specifikt antigen.' },
      { term: 'Immunglobulin', definition: 'Det vetenskapliga namnet på antikroppar.' },
    ],
    takeaways: [
      'Antigen = det som immunförsvaret reagerar mot.',
      'Antikroppar är proteiner som binder ett specifikt antigen.',
      'Nyckel-i-lås-precisionen gör försvaret riktat.',
    ],
  },

  inflammation: {
    title: 'Inflammation',
    intro:
      'Inflammation är kroppens grundreaktion på skada och infektion. Den är skyddande, men kan också orsaka besvär – och är måltavla för många läkemedel.',
    sections: [
      {
        heading: 'Vad händer vid inflammation?',
        body: 'Vid en skada eller infektion vidgas blodkärlen i området och blir mer genomsläppliga, så att immunceller och vätska lättare når dit. Det ger de fyra klassiska tecknen: **rodnad**, **värme**, **svullnad** och **smärta** (ibland nämns även nedsatt funktion). Reaktionen hjälper kroppen att bekämpa hotet och läka.',
      },
      {
        heading: 'När den blir ett problem',
        body: 'Akut inflammation är nyttig och övergående. Men om den blir **kronisk** eller riktar sig mot kroppens egen vävnad (som vid reumatiska sjukdomar) blir den skadlig. **Antiinflammatoriska läkemedel**, t.ex. NSAID och kortison, dämpar processen och lindrar symtomen.',
      },
    ],
    keyTerms: [
      { term: 'Inflammation', definition: 'Kroppens reaktion på skada eller infektion.' },
      { term: 'De fyra tecknen', definition: 'Rodnad, värme, svullnad och smärta.' },
      { term: 'Kronisk inflammation', definition: 'Långvarig inflammation som kan skada vävnad.' },
      { term: 'Antiinflammatoriska', definition: 'Läkemedel som dämpar inflammation (t.ex. NSAID, kortison).' },
    ],
    takeaways: [
      'Inflammation ger rodnad, värme, svullnad och smärta.',
      'Den är skyddande men kan bli skadlig om den blir kronisk.',
      'NSAID och kortison dämpar inflammation.',
    ],
  },

  vaccination: {
    title: 'Vaccination och immunologiskt minne',
    intro:
      'Vacciner är ett av medicinens mest effektiva verktyg. De bygger helt på det adaptiva immunförsvarets förmåga att minnas.',
    sections: [
      {
        heading: 'Hur ett vaccin fungerar',
        body: 'Ett **vaccin** utsätter immunförsvaret för en **ofarlig del** av ett smittämne – t.ex. ett ytprotein, ett försvagat virus eller en byggritning för ett antigen. Kroppen reagerar som vid en riktig infektion, bildar antikroppar och, viktigast av allt, **minnesceller** – men utan att man blir sjuk.',
      },
      {
        heading: 'Immunologiskt minne',
        body: 'Tack vare **immunologiskt minne** känner kroppen igen smittämnet om det dyker upp på riktigt och kan då reagera mycket **snabbare och kraftigare** än första gången. Då hinner infektionen ofta stoppas innan man hinner bli sjuk. Det är samma minne som gör att man oftast bara får vissa barnsjukdomar en gång.',
      },
    ],
    keyTerms: [
      { term: 'Vaccin', definition: 'Ofarlig del av ett smittämne som tränar immunförsvaret.' },
      { term: 'Minnescell', definition: 'Cell som minns ett antigen efter en infektion eller vaccination.' },
      { term: 'Immunologiskt minne', definition: 'Snabbare, kraftigare svar vid ny kontakt med samma antigen.' },
    ],
    takeaways: [
      'Vaccinet visar immunförsvaret en ofarlig del av smittämnet.',
      'Kroppen bildar antikroppar och minnesceller utan att bli sjuk.',
      'Minnet ger ett snabbare och kraftigare svar nästa gång.',
    ],
  },
}
