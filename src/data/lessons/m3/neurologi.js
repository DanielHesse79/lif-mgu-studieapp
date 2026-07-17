/**
 * Statiska lärtexter – Modul 3, ämnesområde Neurologi.
 * Nyckel = lesson.id (se modules.js). Struktur matchar Lär dig-renderaren:
 * { title, intro, sections:[{heading, body}], keyTerms:[{term, definition}], takeaways:[] }
 * Nyckelbegrepp markeras med **fetstil** i body.
 */
export const NEUROLOGI = {
  stroke: {
    title: 'Stroke och TIA',
    intro:
      'Stroke är en av de vanligaste orsakerna till funktionsnedsättning hos vuxna. Det handlar om att hjärnans blodförsörjning plötsligt störs.',
    sections: [
      {
        heading: 'Två sorters stroke',
        body: 'Hjärnvävnaden är helt beroende av ett ständigt flöde av syrerikt blod. En **stroke** (slaganfall) uppstår när detta plötsligt avbryts och hjärnceller börjar dö. Det finns två huvudtyper: **infarkt**, där en blodpropp täpper till ett kärl (den klart vanligaste), och **blödning**, där ett kärl brister. De båda typerna kan ge liknande symtom men behandlas olika.',
      },
      {
        heading: 'Symtom och TIA',
        body: 'Symtomen kommer **plötsligt** och beror på vilken del av hjärnan som drabbas: ofta svaghet eller hängande ansikte på ena sidan, talsvårigheter och plötslig kraftnedsättning i en arm. Minnesregeln **AKUT** (Ansikte, Kroppsdel, Uttal, Tid) hjälper att känna igen det. En **TIA** är en övergående variant där symtomen går över av sig själva, men den är en allvarlig varningssignal för kommande stroke.',
      },
      {
        heading: 'Behandling',
        body: 'Stroke är ett **akut** tillstånd – snabb vård räddar hjärnvävnad. Vid propp kan **proppupplösande** läkemedel ges, men bara om det inte rör sig om en blödning, därför är snabb röntgen avgörande. Efteråt följer **rehabilitering** och förebyggande läkemedel, t.ex. blodförtunnande, för att minska risken för nya insjuknanden.',
      },
    ],
    keyTerms: [
      { term: 'Stroke', definition: 'Plötslig störning av hjärnans blodflöde som skadar hjärnceller.' },
      { term: 'Infarkt', definition: 'Stroke orsakad av en blodpropp som täpper till ett kärl.' },
      { term: 'Blödning', definition: 'Stroke orsakad av att ett blodkärl brister.' },
      { term: 'TIA', definition: 'Övergående symtom; en varningssignal för stroke.' },
      { term: 'AKUT', definition: 'Minnesregel: Ansikte, Kroppsdel, Uttal, Tid.' },
    ],
    takeaways: [
      'Stroke = avbrott i hjärnans blodflöde; propp (vanligast) eller blödning.',
      'Symtomen kommer plötsligt – tänk AKUT och ring 112.',
      'TIA är övergående men en allvarlig varning för kommande stroke.',
    ],
  },

  'parkinson-ms': {
    title: 'Parkinson och MS',
    intro:
      'Parkinson och MS är två kroniska neurologiska sjukdomar. Båda påverkar nervsystemet, men på helt olika sätt.',
    sections: [
      {
        heading: 'Parkinsons sjukdom',
        body: '**Parkinsons sjukdom** beror på att nervceller i hjärnan som tillverkar signalämnet **dopamin** gradvis dör. Dopaminbristen stör hjärnans styrning av rörelser. Typiska symtom är **skakningar** (tremor) i vila, stelhet och långsamma rörelser. Sjukdomen utvecklas långsamt och drabbar oftast äldre. Behandlingen går ut på att ersätta eller efterlikna dopaminet, t.ex. med läkemedlet **levodopa**.',
      },
      {
        heading: 'Multipel skleros (MS)',
        body: '**MS** är en **autoimmun** sjukdom där immunförsvaret angriper det skyddande **myelinhöljet** runt nervtrådarna i hjärna och ryggmärg. När isoleringen skadas leds nervsignalerna sämre. Symtomen varierar mycket – synrubbningar, domningar, svaghet och trötthet – och kommer ofta i **skov** med försämringar och förbättringar. MS debuterar oftast hos yngre vuxna. Behandlingen dämpar immunförsvaret för att minska antalet skov.',
      },
    ],
    keyTerms: [
      { term: 'Parkinsons sjukdom', definition: 'Sjukdom där dopaminproducerande nervceller dör, vilket stör rörelser.' },
      { term: 'Dopamin', definition: 'Signalämne i hjärnan, viktigt för styrning av rörelser.' },
      { term: 'Levodopa', definition: 'Läkemedel som hjärnan omvandlar till dopamin vid Parkinson.' },
      { term: 'MS', definition: 'Autoimmun sjukdom som skadar nervtrådarnas myelinhölje.' },
      { term: 'Myelin', definition: 'Isolerande hölje runt nervtrådar som snabbar upp signaler.' },
    ],
    takeaways: [
      'Parkinson: dopaminbrist ger skakningar, stelhet och långsamhet.',
      'MS: immunförsvaret skadar myelinet; symtom kommer ofta i skov.',
      'Parkinson behandlas med dopaminersättning, MS med immundämpning.',
    ],
  },

  epilepsi: {
    title: 'Epilepsi och migrän',
    intro:
      'Epilepsi och migrän är två vanliga tillstånd som utgår från hjärnan men ger mycket olika besvär – anfall respektive svår huvudvärk.',
    sections: [
      {
        heading: 'Epilepsi',
        body: '**Epilepsi** innebär en benägenhet att få upprepade **epileptiska anfall**. Ett anfall orsakas av plötsliga, okontrollerade urladdningar av elektrisk aktivitet i hjärnans nervceller. Anfallen kan se mycket olika ut: allt från **kramper** i hela kroppen med medvetslöshet till korta stunder av frånvaro. Diagnosen ställs bland annat med **EEG**, som mäter hjärnans elektriska aktivitet. Behandlingen är förebyggande läkemedel som dämpar nervcellernas överaktivitet.',
      },
      {
        heading: 'Migrän',
        body: '**Migrän** är en form av kraftig, ofta **pulserande** huvudvärk, vanligen på ena sidan av huvudet. Den åtföljs ofta av illamående och överkänslighet för ljus och ljud, och vissa får först en förvarning i form av **aura**, t.ex. synfenomen. Ett migränanfall kan vara i timmar eller dygn. Behandlingen omfattar smärtstillande och särskilda **anfallskuperande** läkemedel, samt vid täta besvär även förebyggande behandling.',
      },
    ],
    keyTerms: [
      { term: 'Epilepsi', definition: 'Benägenhet för upprepade epileptiska anfall.' },
      { term: 'Epileptiskt anfall', definition: 'Plötslig okontrollerad elektrisk urladdning i hjärnan.' },
      { term: 'EEG', definition: 'Undersökning som mäter hjärnans elektriska aktivitet.' },
      { term: 'Migrän', definition: 'Anfallsvis, ofta pulserande och ensidig huvudvärk.' },
      { term: 'Aura', definition: 'Förvarning före ett migränanfall, t.ex. synfenomen.' },
    ],
    takeaways: [
      'Epilepsi: upprepade anfall pga okontrollerad elektrisk aktivitet i hjärnan.',
      'Epilepsi behandlas förebyggande med läkemedel som lugnar nervcellerna.',
      'Migrän: kraftig, ofta ensidig huvudvärk, ibland med aura.',
    ],
  },
}
