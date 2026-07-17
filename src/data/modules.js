/**
 * Modulstruktur för LIF MGU-studieappen.
 *
 * Varje modul -> ämnesområden (topics) -> lektioner (lessons).
 * Lektionslistorna används av Lär dig-läget och för att räkna ut täckning
 * (coverage) på dashboarden. Lektions-id:n är stabila nycklar för localStorage,
 * så ändra dem inte i onödan.
 *
 * Alla lektioner i strukturen måste ha en statisk text. Den regeln verifieras
 * av verify-content.mjs så att navigationen aldrig pekar på saknat material.
 */

export const MODULES = [
  {
    id: 'm1',
    number: 1,
    title: 'Grundvetenskap',
    subtitle: 'Anatomi, cellbiologi, genetik, fysiologi, immunologi',
    color: 'm1',
    topics: [
      {
        id: 'anatomi',
        title: 'Anatomi',
        blurb: 'Kroppens uppbyggnad och organsystem',
        lessons: [
          { id: 'terminologi', title: 'Anatomisk terminologi och kroppsplan' },
          { id: 'organsystem', title: 'Celler, vävnader och organsystem' },
          { id: 'rorelse', title: 'Skelett-, led- och muskelsystemet' },
          { id: 'hjarta-karl', title: 'Hjärtat och kärlsystemets anatomi' },
          { id: 'lungor', title: 'Lungor och luftvägar' },
          { id: 'mag-tarm', title: 'Mag-tarmkanalen och bukorganen' },
          { id: 'njurar', title: 'Njurar och urinvägar' },
          { id: 'nervsystem-anatomi', title: 'Nervsystemets anatomi (CNS och PNS)' },
        ],
      },
      {
        id: 'cellbiologi',
        title: 'Cellbiologi',
        blurb: 'Cellens byggstenar och funktion',
        lessons: [
          { id: 'cellen', title: 'Cellens uppbyggnad och organeller' },
          { id: 'membran', title: 'Cellmembranet och transport över membran' },
          { id: 'energi', title: 'Cellens energiomsättning (ATP och mitokondrier)' },
          { id: 'proteinsyntes', title: 'Proteinsyntes: från DNA till protein' },
          { id: 'cellcykeln', title: 'Cellcykeln och celldelning' },
        ],
      },
      {
        id: 'genetik',
        title: 'Genetik',
        blurb: 'Arvsmassa, nedärvning och variation',
        lessons: [
          { id: 'dna-gener', title: 'DNA, gener och kromosomer' },
          { id: 'nedarvning', title: 'Nedärvning och genetisk variation' },
          { id: 'mutationer', title: 'Mutationer och genetiska sjukdomar' },
          { id: 'genuttryck', title: 'Genuttryck och epigenetik (grund)' },
        ],
      },
      {
        id: 'fysiologi',
        title: 'Fysiologi',
        blurb: 'Hur kroppen fungerar och regleras',
        lessons: [
          { id: 'homeostas', title: 'Homeostas och reglering' },
          { id: 'cirkulation', title: 'Cirkulation och blodtrycksreglering' },
          { id: 'andning', title: 'Andningsfysiologi och gasutbyte' },
          { id: 'njurfunktion', title: 'Njurfunktion och vätskebalans' },
          { id: 'endokrina', title: 'Endokrina systemet och hormoner' },
          { id: 'nervsignal', title: 'Nervsignalering och synapser' },
        ],
      },
      {
        id: 'immunologi',
        title: 'Immunologi',
        blurb: 'Kroppens försvar mot sjukdom',
        lessons: [
          { id: 'oversikt', title: 'Immunförsvarets översikt (medfött och adaptivt)' },
          { id: 'celler', title: 'Celler i immunförsvaret' },
          { id: 'antikroppar', title: 'Antikroppar och antigen' },
          { id: 'inflammation', title: 'Inflammation' },
          { id: 'vaccination', title: 'Vaccination och immunologiskt minne' },
        ],
      },
    ],
  },
  {
    id: 'm2',
    number: 2,
    title: 'Farmakologi',
    subtitle: 'ADME, receptorer, läkemedelsgrupper',
    color: 'm2',
    topics: [
      {
        id: 'farmakokinetik',
        title: 'Farmakokinetik (ADME)',
        blurb: 'Vad kroppen gör med läkemedlet',
        lessons: [
          { id: 'absorption', title: 'Absorption och administreringsvägar' },
          { id: 'distribution', title: 'Distribution och proteinbindning' },
          { id: 'metabolism', title: 'Metabolism och levern (CYP450)' },
          { id: 'elimination', title: 'Elimination, halveringstid och clearance' },
        ],
      },
      {
        id: 'farmakodynamik',
        title: 'Farmakodynamik',
        blurb: 'Vad läkemedlet gör med kroppen',
        lessons: [
          { id: 'receptorer', title: 'Receptorer och signalvägar' },
          { id: 'agonist-antagonist', title: 'Agonister, antagonister och affinitet' },
          { id: 'dos-respons', title: 'Dos-respons och terapeutiskt fönster' },
          { id: 'tolerans', title: 'Tolerans, beroende och nedreglering' },
        ],
      },
      {
        id: 'lakemedelsgrupper',
        title: 'Läkemedelsgrupper',
        blurb: 'Viktiga klasser och hur de verkar',
        lessons: [
          { id: 'hjarta-karl-lm', title: 'Hjärt-kärlläkemedel' },
          { id: 'analgetika', title: 'Smärtstillande (analgetika)' },
          { id: 'antibiotika', title: 'Antibiotika och antivirala medel' },
          { id: 'psykofarmaka', title: 'Psykofarmaka' },
          { id: 'antiinflammatoriska', title: 'Antiinflammatoriska medel och kortison' },
        ],
      },
      {
        id: 'sakerhet',
        title: 'Säkerhet och interaktioner',
        blurb: 'Biverkningar, interaktioner, regelverk',
        lessons: [
          { id: 'biverkningar', title: 'Biverkningar och farmakovigilans' },
          { id: 'interaktioner', title: 'Läkemedelsinteraktioner' },
          { id: 'sarskilda-grupper', title: 'Särskilda grupper (äldre, barn, graviditet)' },
        ],
      },
    ],
  },
  {
    id: 'm3',
    number: 3,
    title: 'Sjukdomslära',
    subtitle: 'Internmedicin/endokrinologi, onkologi, neurologi, psykiatri, infektion',
    color: 'm3',
    topics: [
      {
        id: 'internmedicin',
        title: 'Internmedicin och endokrinologi',
        blurb: 'Vanliga kroniska folksjukdomar och hormonella sjukdomar',
        lessons: [
          { id: 'diabetes', title: 'Diabetes typ 1 och typ 2' },
          { id: 'hypertoni', title: 'Hypertoni och hjärtsvikt' },
          { id: 'kol-astma', title: 'KOL och astma' },
          { id: 'reumatism', title: 'Reumatiska sjukdomar' },
        ],
      },
      {
        id: 'onkologi',
        title: 'Onkologi',
        blurb: 'Cancerns biologi och behandling',
        lessons: [
          { id: 'cancerbiologi', title: 'Cancerns biologi och utveckling' },
          { id: 'tumortyper', title: 'Tumörtyper och stadieindelning' },
          { id: 'cancerbehandling', title: 'Principer för cancerbehandling' },
        ],
      },
      {
        id: 'neurologi',
        title: 'Neurologi',
        blurb: 'Sjukdomar i nervsystemet',
        lessons: [
          { id: 'stroke', title: 'Stroke och TIA' },
          { id: 'parkinson-ms', title: 'Parkinson och MS' },
          { id: 'epilepsi', title: 'Epilepsi och migrän' },
        ],
      },
      {
        id: 'psykiatri',
        title: 'Psykiatri',
        blurb: 'Vanliga psykiatriska tillstånd',
        lessons: [
          { id: 'depression-angest', title: 'Depression och ångestsyndrom' },
          { id: 'bipolar-psykos', title: 'Bipolär sjukdom och psykos' },
        ],
      },
      {
        id: 'infektion',
        title: 'Infektion',
        blurb: 'Mikrober och infektionssjukdomar',
        lessons: [
          { id: 'mikrober', title: 'Bakterier, virus, svamp och parasiter' },
          { id: 'vanliga-infektioner', title: 'Vanliga infektioner' },
          { id: 'resistens', title: 'Antibiotikaresistens' },
        ],
      },
    ],
  },
]

/**
 * Fördjupningslektioner som lagts till efter den ursprungliga strukturen.
 * Hålls samlade här för överblick och slås ihop med MODULES nedan.
 * Innehållet finns i src/data/lessons/m{1,2,3}-extra.js och nycklarna
 * MÅSTE matcha id:n här exakt.
 */
const EXTRA_LESSONS = {
  m1: {
    anatomi: [
      { id: 'hud', title: 'Huden och dess uppbyggnad' },
      { id: 'sinnesorgan', title: 'Sinnesorganen: öga och öra' },
      { id: 'lymfsystem', title: 'Lymfsystemet och mjälten' },
    ],
    cellbiologi: [
      { id: 'stamceller', title: 'Stamceller och celldifferentiering' },
      { id: 'cellsignalering', title: 'Cellsignalering och receptorer' },
    ],
    genetik: [
      { id: 'konsceller', title: 'Könsceller och befruktning' },
      { id: 'genteknik', title: 'Genteknik och bioteknik' },
    ],
    fysiologi: [
      { id: 'blod', title: 'Blodet och dess beståndsdelar' },
      { id: 'matsmaltning', title: 'Matsmältningens fysiologi' },
      { id: 'temperatur', title: 'Kroppstemperatur och feber' },
    ],
    immunologi: [
      { id: 'allergi', title: 'Allergi och överkänslighet' },
      { id: 'autoimmunitet', title: 'Autoimmunitet och immunbrist' },
    ],
  },
  m2: {
    farmakokinetik: [
      { id: 'biotillganglighet', title: 'Biotillgänglighet och first-pass-effekt' },
      { id: 'steady-state', title: 'Steady state och doseringsintervall' },
    ],
    farmakodynamik: [
      { id: 'selektivitet', title: 'Selektivitet och varför biverkningar uppstår' },
      { id: 'terapeutiskt-index', title: 'Terapeutiskt index och säkerhetsmarginal' },
    ],
    lakemedelsgrupper: [
      { id: 'diabeteslakemedel', title: 'Diabetesläkemedel' },
      { id: 'mag-tarm-lm', title: 'Mag-tarmläkemedel' },
      { id: 'astma-allergi-lm', title: 'Astma- och allergiläkemedel' },
    ],
    sakerhet: [
      { id: 'adherens', title: 'Följsamhet (adherens) och patientkommunikation' },
      { id: 'regelverk', title: 'Regelverk, godkännande och kliniska prövningar' },
    ],
  },
  m3: {
    internmedicin: [
      { id: 'hjartinfarkt', title: 'Kärlkramp och hjärtinfarkt' },
      { id: 'skoldkortel', title: 'Sköldkörtelsjukdomar' },
    ],
    onkologi: [
      { id: 'vanliga-cancerformer', title: 'Vanliga cancerformer' },
      { id: 'cancerbiverkningar', title: 'Biverkningar av cancerbehandling' },
    ],
    neurologi: [
      { id: 'demens', title: 'Demens och Alzheimers sjukdom' },
      { id: 'nervsmarta', title: 'Nervsmärta och neuropati' },
    ],
    psykiatri: [
      { id: 'adhd', title: 'ADHD och autismspektrum' },
      { id: 'beroende', title: 'Beroende och substansbruk' },
    ],
    infektion: [
      { id: 'sepsis', title: 'Sepsis och allvarliga infektioner' },
      { id: 'vardhygien', title: 'Vårdhygien och smittspridning' },
    ],
  },
}

// Slå ihop fördjupningslektionerna med grundstrukturen.
for (const mod of MODULES) {
  const extra = EXTRA_LESSONS[mod.id]
  if (!extra) continue
  for (const topic of mod.topics) {
    if (extra[topic.id]) topic.lessons.push(...extra[topic.id])
  }
}

// ---- Hjälpfunktioner ----

export function getModule(moduleId) {
  return MODULES.find((m) => m.id === moduleId) || null
}

export function getTopic(moduleId, topicId) {
  const mod = getModule(moduleId)
  return mod ? mod.topics.find((t) => t.id === topicId) || null : null
}

export function getLesson(moduleId, topicId, lessonId) {
  const topic = getTopic(moduleId, topicId)
  return topic ? topic.lessons.find((l) => l.id === lessonId) || null : null
}

/** Totalt antal lektioner i en modul. */
export function lessonCount(moduleId) {
  const mod = getModule(moduleId)
  if (!mod) return 0
  return mod.topics.reduce((sum, t) => sum + t.lessons.length, 0)
}

/** Globalt unikt nyckel-id för en lektion (för localStorage). */
export function lessonKey(moduleId, topicId, lessonId) {
  return `${moduleId}.${topicId}.${lessonId}`
}
