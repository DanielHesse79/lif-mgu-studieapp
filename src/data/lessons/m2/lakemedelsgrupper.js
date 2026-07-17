/**
 * Statiska lärtexter – Modul 2, ämnesområde Läkemedelsgrupper.
 */
export const LAKEMEDELSGRUPPER = {
  'hjarta-karl-lm': {
    title: 'Hjärt-kärlläkemedel',
    intro:
      'Sjukdomar i hjärta och kärl är mycket vanliga, och läkemedlen mot dem hör till de oftast använda. De verkar genom att avlasta hjärtat och påverka blodtrycket.',
    sections: [
      {
        heading: 'Blodtryckssänkande läkemedel',
        body: 'Vid högt blodtryck (**hypertoni**) används flera grupper. **Betablockerare** dämpar hjärtats arbete så att det slår lugnare. **ACE-hämmare** och liknande medel vidgar kärlen genom att påverka kroppens egna blodtryckshormoner. **Diuretika** (vätskedrivande) minskar vätskemängden i kroppen och sänker så trycket. Ofta kombineras flera av dessa för bästa effekt.',
      },
      {
        heading: 'Blodförtunnande och blodfetter',
        body: 'För att minska risken för proppar används **antikoagulantia** (blodförtunnande), som gör att blodet levrar sig långsammare. Mot höga blodfetter används **statiner**, som sänker det skadliga kolesterolet och därmed risken för hjärtinfarkt och stroke. Eftersom dessa läkemedel ofta tas under lång tid och i kombination är det viktigt för en läkemedelsinformatör att kunna förklara deras syfte tydligt.',
      },
    ],
    keyTerms: [
      { term: 'Betablockerare', definition: 'Läkemedel som lugnar hjärtats arbete.' },
      { term: 'ACE-hämmare', definition: 'Läkemedel som vidgar kärlen och sänker blodtrycket.' },
      { term: 'Diuretika', definition: 'Vätskedrivande medel som sänker blodtrycket.' },
      { term: 'Antikoagulantia', definition: 'Blodförtunnande som motverkar proppar.' },
      { term: 'Statiner', definition: 'Läkemedel som sänker blodfetterna.' },
    ],
    takeaways: [
      'Blodtryck sänks med betablockerare, ACE-hämmare och diuretika.',
      'Antikoagulantia motverkar proppar; statiner sänker blodfetter.',
      'Hjärt-kärlläkemedel kombineras ofta och tas länge.',
    ],
  },

  analgetika: {
    title: 'Smärtstillande (analgetika)',
    intro:
      'Smärtstillande läkemedel kallas analgetika och hör till de vanligaste av alla läkemedel. De skiljer sig i styrka och verkningssätt.',
    sections: [
      {
        heading: 'Milda och receptfria',
        body: '**Analgetika** delas grovt in efter styrka. **Paracetamol** är ett milt smärtstillande och febernedsättande medel som tål väl av de flesta, men som kan skada levern i för hög dos. **NSAID** (t.ex. ibuprofen) lindrar både smärta och inflammation, men kan irritera magen och påverka njurarna. Dessa medel är ofta receptfria och används mot vardaglig värk.',
      },
      {
        heading: 'Starka smärtstillande',
        body: 'Vid svår smärta används **opioider**, t.ex. morfin, som verkar på receptorer i centrala nervsystemet och dämpar smärtupplevelsen kraftigt. De är mycket effektiva men kan ge biverkningar som trötthet och förstoppning, och de medför risk för **beroende**. Därför används opioider med försiktighet och under kontroll. En läkemedelsinformatör behöver kunna förklara skillnaden mellan milda och starka smärtstillande.',
      },
    ],
    keyTerms: [
      { term: 'Analgetika', definition: 'Samlingsnamn för smärtstillande läkemedel.' },
      { term: 'Paracetamol', definition: 'Milt smärtstillande och febernedsättande medel.' },
      { term: 'NSAID', definition: 'Smärtstillande som även dämpar inflammation.' },
      { term: 'Opioider', definition: 'Starka smärtstillande som verkar i nervsystemet.' },
    ],
    takeaways: [
      'Analgetika spänner från milda (paracetamol) till starka (opioider).',
      'NSAID dämpar både smärta och inflammation.',
      'Opioider är effektiva men medför risk för beroende.',
    ],
  },

  antibiotika: {
    title: 'Antibiotika och antivirala medel',
    intro:
      'Mot infektioner finns läkemedel som angriper det som gör oss sjuka. Bakterier och virus bekämpas dock på helt olika sätt.',
    sections: [
      {
        heading: 'Antibiotika mot bakterier',
        body: '**Antibiotika** verkar mot **bakterier**, antingen genom att döda dem eller hindra dem från att föröka sig. De har ingen effekt mot virus, vilket är varför de inte hjälper mot vanlig förkylning. Ett stort problem är **antibiotikaresistens**: när bakterier utsätts för antibiotika kan motståndskraftiga stammar överleva och spridas. Därför ska antibiotika bara användas när de verkligen behövs och kuren ska fullföljas.',
      },
      {
        heading: 'Antivirala medel mot virus',
        body: '**Antivirala medel** verkar mot **virus** och bromsar deras förmåga att föröka sig i kroppens celler. De är ofta mer specifika och riktas mot ett visst virus, t.ex. influensa eller herpes. Eftersom virus gömmer sig inne i våra egna celler är de svårare att bekämpa än bakterier. För en läkemedelsinformatör är det centralt att kunna förklara att antibiotika inte hjälper mot virusinfektioner.',
      },
    ],
    keyTerms: [
      { term: 'Antibiotika', definition: 'Läkemedel som dödar eller hämmar bakterier.' },
      { term: 'Bakterie', definition: 'Encellig organism som kan orsaka infektion.' },
      { term: 'Antibiotikaresistens', definition: 'När bakterier blir motståndskraftiga mot antibiotika.' },
      { term: 'Antivirala medel', definition: 'Läkemedel som bromsar virus förökning.' },
      { term: 'Virus', definition: 'Smittämne som förökar sig inuti kroppens celler.' },
    ],
    takeaways: [
      'Antibiotika verkar mot bakterier, inte mot virus.',
      'Felaktig användning driver fram antibiotikaresistens.',
      'Antivirala medel bromsar virus och är ofta virusspecifika.',
    ],
  },

  psykofarmaka: {
    title: 'Psykofarmaka',
    intro:
      'Psykofarmaka är läkemedel mot psykisk ohälsa. De verkar i hjärnan genom att påverka signalerna mellan nervceller.',
    sections: [
      {
        heading: 'Antidepressiva och ångestdämpande',
        body: '**Psykofarmaka** påverkar **neurotransmittorer**, de kemiska budbärarna i hjärnan. **Antidepressiva** medel, t.ex. SSRI, ökar tillgången på signalämnen som serotonin och används vid depression och ångest. Effekten kommer ofta först efter några veckor, vilket är viktigt att förklara så att patienten inte avbryter behandlingen för tidigt. **Ångestdämpande** läkemedel verkar snabbare men vissa kan ge beroende.',
      },
      {
        heading: 'Mot allvarligare tillstånd',
        body: 'Vid allvarligare tillstånd används andra grupper. **Antipsykotika** används vid psykos och dämpar bland annat signalämnet dopamin. **Stämningsstabiliserande** läkemedel jämnar ut svängningarna vid bipolär sjukdom. Gemensamt är att psykofarmaka ofta behöver provas ut individuellt och följas upp. För en läkemedelsinformatör är det viktigt att kunna tala sakligt och utan stigmatisering om dessa läkemedel.',
      },
    ],
    keyTerms: [
      { term: 'Psykofarmaka', definition: 'Läkemedel som verkar på psyket via hjärnans signaler.' },
      { term: 'Neurotransmittor', definition: 'Kemisk budbärare mellan nervceller.' },
      { term: 'Antidepressiva', definition: 'Läkemedel mot depression och ångest, t.ex. SSRI.' },
      { term: 'Antipsykotika', definition: 'Läkemedel som används vid psykos.' },
      { term: 'Stämningsstabiliserande', definition: 'Läkemedel som jämnar ut humörsvängningar.' },
    ],
    takeaways: [
      'Psykofarmaka påverkar hjärnans neurotransmittorer.',
      'Antidepressiva ger ofta effekt först efter några veckor.',
      'Läkemedlen provas ut individuellt och kräver uppföljning.',
    ],
  },

  antiinflammatoriska: {
    title: 'Antiinflammatoriska medel och kortison',
    intro:
      'Inflammation är kroppens försvarsreaktion, men ibland behöver den dämpas. Det finns två huvudtyper av läkemedel för detta.',
    sections: [
      {
        heading: 'NSAID',
        body: 'Vid mild till måttlig inflammation används **NSAID** (icke-steroida antiinflammatoriska läkemedel), t.ex. ibuprofen. De dämpar **inflammation**, smärta och feber genom att blockera ämnen som driver inflammationen. De är effektiva och ofta receptfria, men kan irritera magslemhinnan och belasta njurarna, särskilt vid långvarig användning eller hos äldre.',
      },
      {
        heading: 'Kortison',
        body: '**Kortison** (kortikosteroider) är kraftigt antiinflammatoriskt och dämpar dessutom immunförsvaret. Det används vid t.ex. astma, allergi och reumatiska sjukdomar, ofta som inhalation, salva eller tabletter. Vid längre behandling i tablettform kan kortison ge biverkningar som viktuppgång och påverkan på skelettet, och det ska därför inte sättas ut tvärt. För en läkemedelsinformatör är det viktigt att skilja kortison från NSAID, eftersom de ofta blandas ihop.',
      },
    ],
    keyTerms: [
      { term: 'Inflammation', definition: 'Kroppens försvarsreaktion med rodnad, svullnad och smärta.' },
      { term: 'NSAID', definition: 'Icke-steroida läkemedel mot inflammation, smärta och feber.' },
      { term: 'Kortison', definition: 'Kraftigt antiinflammatoriskt medel som även dämpar immunförsvaret.' },
      { term: 'Kortikosteroid', definition: 'Den läkemedelsgrupp som kortison tillhör.' },
    ],
    takeaways: [
      'NSAID dämpar mild inflammation, smärta och feber.',
      'Kortison är kraftigare och dämpar även immunförsvaret.',
      'Kortison i tablettform bör inte sättas ut tvärt.',
    ],
  },
}
