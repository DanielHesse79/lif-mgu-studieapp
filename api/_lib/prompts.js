/**
 * Prompt-byggare och utdataschema för varje Claude-uppgift.
 *
 * Att logiken bor på serversidan ger två fördelar:
 *  1) API-nyckeln lämnar aldrig servern.
 *  2) Endpointen kan bara utföra kända, avgränsade uppgifter (svårare att missbruka
 *     än en öppen proxy som vidarebefordrar godtyckliga prompts).
 *
 * Varje uppgift returnerar { system, userText, tool, toolName, maxTokens, temperature }.
 * Claude tvingas anropa "tool" så att utdatan alltid matchar schemat (giltig JSON).
 */

const MGU_PERSONA = `Du är en pedagogisk medicinsk lärare som förbereder läkemedelsinformatörer inför LIF-auktorisationen i Sverige (MGU – medicinsk grundutbildning).

Din läsare:
- Är vuxen och motiverad men har INGEN medicinsk eller biologisk bakgrund.
- Behöver förstå begrepp på en korrekt men tillgänglig nivå – tillräckligt för att tryggt kunna prata med läkare och sjuksköterskor, men inte på läkarutbildningsnivå.

Riktlinjer:
- Skriv på korrekt, ledig svenska.
- Förklara alla fackuttryck och latinska/grekiska termer första gången de används.
- Använd vardagliga analogier och konkreta exempel.
- Var faktamässigt korrekt. Hitta aldrig på siffror, mekanismer eller samband. Om något är förenklat, säg det.
- Knyt an till varför detta är relevant för en läkemedelsinformatör när det är naturligt.
- Markera de viktigaste nyckelbegreppen i löptexten genom att omge dem med dubbla asterisker, t.ex. **homeostas**. Markera bara genuint centrala begrepp (ca 4–8 per lektion), inte vanliga ord.`

const LEARN_OUTPUT_SCHEMA = {
  type: 'object',
  properties: {
    title: { type: 'string', description: 'Rubrik för lektionen (kan vara samma som ämnet).' },
    intro: {
      type: 'string',
      description: '1–2 meningar som väcker intresse och sätter sammanhanget. Ingen markering här.',
    },
    sections: {
      type: 'array',
      description:
        '2–4 sektioner som tillsammans utgör 300–500 ord brödtext. Nyckelbegrepp markeras med **dubbla asterisker** i body.',
      items: {
        type: 'object',
        properties: {
          heading: { type: 'string', description: 'Kort sektionsrubrik.' },
          body: {
            type: 'string',
            description:
              'Brödtext i markdown. Använd **fetstil** för nyckelbegrepp och "- " i radbörjan för punktlistor vid behov.',
          },
        },
        required: ['heading', 'body'],
      },
    },
    keyTerms: {
      type: 'array',
      description: 'De 4–8 viktigaste nyckelbegreppen med korta, klarspråkiga definitioner.',
      items: {
        type: 'object',
        properties: {
          term: { type: 'string' },
          definition: { type: 'string', description: 'Max 1–2 meningar, enkel svenska.' },
        },
        required: ['term', 'definition'],
      },
    },
    takeaways: {
      type: 'array',
      description: '3–5 korta punkter med det allra viktigaste att minnas.',
      items: { type: 'string' },
    },
  },
  required: ['title', 'intro', 'sections', 'keyTerms', 'takeaways'],
}

const LEVEL_HINTS = {
  grund: 'Håll en grundläggande nivå: bredd före djup, många analogier, korta meningar.',
  fordjupning:
    'Fördjupa: behåll tillgängligheten men lägg till mekanismer, fler detaljer och kliniska kopplingar som en informatör har nytta av.',
}

function learnTask({ moduleTitle, topic, lesson, level = 'grund' }) {
  const userText = `Skriv en lärtext (lektion) för LIF-studieappen.

Modul: ${moduleTitle}
Ämnesområde: ${topic}
Lektion: ${lesson}
Nivå: ${level}

${LEVEL_HINTS[level] || LEVEL_HINTS.grund}

Skriv 300–500 ord totalt fördelat på 2–4 sektioner. Returnera via verktyget.`

  return {
    system: MGU_PERSONA,
    userText,
    tool: LEARN_OUTPUT_SCHEMA,
    toolName: 'lartext',
    maxTokens: 2000,
    temperature: 0.4,
  }
}

function learnAdjustTask({ moduleTitle, topic, lesson, direction, current }) {
  const isSimplify = direction === 'simplify'
  const instruction = isSimplify
    ? 'Gör om lärtexten ENKLARE: kortare meningar, fler vardagliga analogier, färre fackuttryck (förklara dem som blir kvar ännu tydligare). Behåll all kärnfakta men gör den lättare att ta till sig för en nybörjare.'
    : 'FÖRDJUPA lärtexten: behåll tillgängligheten men lägg till mer mekanism, detaljer, samband och kliniska kopplingar som en läkemedelsinformatör har nytta av. Får bli något längre (upp till ~600 ord).'

  const userText = `Här är en befintlig lärtext för LIF-studieappen som ska skrivas om.

Modul: ${moduleTitle}
Ämnesområde: ${topic}
Lektion: ${lesson}

${instruction}

Behåll samma struktur (intro, sektioner, nyckelbegrepp, takeaways) och markera nyckelbegrepp med **fetstil**.

BEFINTLIG TEXT (JSON):
${JSON.stringify(current)}

Returnera den omarbetade versionen via verktyget.`

  return {
    system: MGU_PERSONA,
    userText,
    tool: LEARN_OUTPUT_SCHEMA,
    toolName: 'lartext',
    maxTokens: 2200,
    temperature: 0.4,
  }
}

export const TASKS = {
  learn: learnTask,
  'learn-adjust': learnAdjustTask,
}
