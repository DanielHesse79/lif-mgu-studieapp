/**
 * Statiska lärtexter – Modul 3, ämnesområde Psykiatri.
 * Nyckel = lesson.id (se modules.js). Struktur matchar Lär dig-renderaren:
 * { title, intro, sections:[{heading, body}], keyTerms:[{term, definition}], takeaways:[] }
 * Nyckelbegrepp markeras med **fetstil** i body.
 */
export const PSYKIATRI = {
  'depression-angest': {
    title: 'Depression och ångestsyndrom',
    intro:
      'Depression och ångest är bland de vanligaste psykiska sjukdomarna. De är verkliga medicinska tillstånd, inte bara tillfälligt dåligt mående.',
    sections: [
      {
        heading: 'Depression',
        body: '**Depression** är mer än nedstämdhet – det är ett tillstånd som varar i veckor och påverkar hela livet. Kärnsymtom är ihållande **nedstämdhet**, förlust av lust och glädje samt energibrist. Ofta tillkommer störd sömn, dålig aptit och svårt att koncentrera sig. En förklaringsmodell handlar om obalans i hjärnans **signalsubstanser** (signalämnen som nervcellerna kommunicerar med), bland annat serotonin.',
      },
      {
        heading: 'Ångestsyndrom',
        body: '**Ångest** är en stark känsla av oro och rädsla, ofta utan tydlig yttre fara. Vid **ångestsyndrom** är den så kraftig eller långvarig att den styr vardagen. Den ger även kroppsliga symtom som hjärtklappning, andnöd och svettningar. Hit hör bland annat **paniksyndrom**, med plötsliga panikattacker, och generaliserat ångestsyndrom med ständig oro. Ångest och depression förekommer ofta samtidigt.',
      },
      {
        heading: 'Behandling',
        body: 'Behandlingen kombinerar ofta **psykoterapi** (samtalsbehandling, t.ex. KBT) och läkemedel. Vanliga läkemedel är **antidepressiva**, exempelvis **SSRI**, som påverkar serotoninet i hjärnan. De har ofta fördröjd effekt och behöver tas en tid innan de hjälper. Vid lindrigare besvär kan terapi och levnadsvanor räcka.',
      },
    ],
    keyTerms: [
      { term: 'Depression', definition: 'Långvarig nedstämdhet med tappad lust och energi.' },
      { term: 'Signalsubstans', definition: 'Signalämne som nervceller kommunicerar med, t.ex. serotonin.' },
      { term: 'Ångestsyndrom', definition: 'Ångest så kraftig eller långvarig att den styr vardagen.' },
      { term: 'SSRI', definition: 'Vanlig grupp antidepressiva som påverkar serotonin.' },
      { term: 'KBT', definition: 'Kognitiv beteendeterapi – en form av samtalsbehandling.' },
    ],
    takeaways: [
      'Depression: ihållande nedstämdhet, energibrist och tappad glädje.',
      'Ångestsyndrom: oproportionerlig oro med kroppsliga symtom.',
      'Behandlas med psykoterapi och antidepressiva som SSRI.',
    ],
  },

  'bipolar-psykos': {
    title: 'Bipolär sjukdom och psykos',
    intro:
      'Bipolär sjukdom och psykos är allvarligare psykiatriska tillstånd. De behandlas med särskilda läkemedel och kräver oftast specialistvård.',
    sections: [
      {
        heading: 'Bipolär sjukdom',
        body: '**Bipolär sjukdom** kännetecknas av kraftiga svängningar i stämningsläget mellan två ytterligheter. I en **manisk** fas är personen uppskruvad, har stort självförtroende, minskat sömnbehov och kan göra ogenomtänkta saker. I en **depressiv** fas råder djup nedstämdhet och energibrist. Mellan episoderna mår personen ofta bra. För att stabilisera humöret används så kallade **stämningsstabiliserande** läkemedel, t.ex. litium.',
      },
      {
        heading: 'Psykos',
        body: 'En **psykos** innebär att verklighetsuppfattningen är förändrad. Vanliga symtom är **vanföreställningar** (orubbliga, felaktiga övertygelser) och **hallucinationer** (att uppleva saker som inte finns, ofta att höra röster). Psykos kan uppträda vid flera tillstånd, bland annat **schizofreni**. Behandlingen bygger på **antipsykotiska** läkemedel, som dämpar symtomen, ofta i kombination med stöd och rehabilitering.',
      },
    ],
    keyTerms: [
      { term: 'Bipolär sjukdom', definition: 'Sjukdom med svängningar mellan maniska och depressiva faser.' },
      { term: 'Mani', definition: 'Uppskruvat tillstånd med ökad energi och minskat sömnbehov.' },
      { term: 'Psykos', definition: 'Förändrad verklighetsuppfattning.' },
      { term: 'Hallucination', definition: 'Att uppleva något som inte finns, t.ex. att höra röster.' },
      { term: 'Antipsykotika', definition: 'Läkemedel som dämpar psykossymtom.' },
    ],
    takeaways: [
      'Bipolär sjukdom: växlar mellan maniska och depressiva faser.',
      'Stämningsstabiliserande läkemedel (t.ex. litium) jämnar ut svängningarna.',
      'Psykos: vanföreställningar och hallucinationer, behandlas med antipsykotika.',
    ],
  },
}
