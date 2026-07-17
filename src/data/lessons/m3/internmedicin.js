/**
 * Statiska lärtexter – Modul 3, ämnesområde Internmedicin.
 * Nyckel = lesson.id (se modules.js). Struktur matchar Lär dig-renderaren:
 * { title, intro, sections:[{heading, body}], keyTerms:[{term, definition}], takeaways:[] }
 * Nyckelbegrepp markeras med **fetstil** i body.
 */
export const INTERNMEDICIN = {
  diabetes: {
    title: 'Diabetes typ 1 och typ 2',
    intro:
      'Diabetes är en grupp sjukdomar där blodsockret blir för högt. Orsaken handlar om hormonet insulin – antingen att det saknas eller att kroppen inte svarar på det.',
    sections: [
      {
        heading: 'Insulin och blodsocker',
        body: 'Efter en måltid stiger blodets nivå av **glukos** (socker). Bukspottkörteln svarar då med att frisätta **insulin**, ett hormon som låter kropps­cellerna ta upp glukos och sänker blodsockret igen. Vid diabetes fungerar detta inte, och blodsockret blir kroniskt förhöjt – ett tillstånd som kallas **hyperglykemi**. Långvarigt högt blodsocker skadar med tiden blodkärl och nerver.',
      },
      {
        heading: 'Typ 1 och typ 2',
        body: 'Vid **typ 1-diabetes** har immunförsvaret förstört de insulinproducerande cellerna, så att kroppen själv inte kan bilda insulin. Den debuterar ofta tidigt i livet och behandlas alltid med **insulin** som injektion. Vid **typ 2-diabetes**, som är betydligt vanligare, bildas insulin men cellerna svarar sämre på det – så kallad **insulinresistens**. Den utvecklas oftast i vuxen ålder och hänger ihop med ärftlighet, övervikt och stillasittande.',
      },
      {
        heading: 'Symtom och behandling',
        body: 'Vanliga symtom är ökad törst, stora urinmängder och trötthet. Behandlingen syftar till att hålla blodsockret i balans. Vid typ 2 börjar man med levnadsvanor (kost och motion) och tabletter, t.ex. **metformin**, medan insulin kan behövas senare. Målet är att förebygga **komplikationer** i ögon, njurar, nerver och hjärt-kärlsystem.',
      },
    ],
    keyTerms: [
      { term: 'Glukos', definition: 'Det socker i blodet som cellerna använder som bränsle.' },
      { term: 'Insulin', definition: 'Hormon som sänker blodsockret genom att låta celler ta upp glukos.' },
      { term: 'Hyperglykemi', definition: 'För högt blodsocker.' },
      { term: 'Insulinresistens', definition: 'När cellerna svarar sämre på insulin (typiskt vid typ 2).' },
      { term: 'Metformin', definition: 'Vanlig förstahandstablett vid typ 2-diabetes.' },
    ],
    takeaways: [
      'Diabetes = kroniskt högt blodsocker pga problem med insulin.',
      'Typ 1: insulinbrist, behandlas med insulin. Typ 2: insulinresistens.',
      'Behandlingen ska hålla blodsockret stabilt och förebygga komplikationer.',
    ],
  },

  hypertoni: {
    title: 'Hypertoni och hjärtsvikt',
    intro:
      'Högt blodtryck och hjärtsvikt är två vanliga tillstånd i hjärt-kärlsystemet. De hänger ofta ihop och är centrala mål för många läkemedel.',
    sections: [
      {
        heading: 'Vad är högt blodtryck?',
        body: 'Blodtrycket är det tryck blodet utövar mot kärlväggarna. Det anges med två tal – det högre vid hjärtslaget (**systoliskt**) och det lägre mellan slagen (**diastoliskt**). Vid **hypertoni** är trycket kroniskt förhöjt, vilket sliter på kärlen och tvingar hjärtat att arbeta hårdare. Eftersom det sällan ger symtom kallas det ibland "den tysta sjukdomen", men det ökar risken för stroke och hjärtinfarkt.',
      },
      {
        heading: 'När hjärtat inte orkar',
        body: '**Hjärtsvikt** innebär att hjärtat inte förmår pumpa tillräckligt med blod för kroppens behov. Det kan bero på tidigare hjärtinfarkt, långvarigt högt blodtryck eller sjuka hjärtklaffar. Vanliga symtom är **andfåddhet**, trötthet och svullnad (**ödem**) i ben och fötter, eftersom vätska samlas när cirkulationen blir trög.',
      },
      {
        heading: 'Behandling',
        body: 'Vid hypertoni används levnadsvanor och blodtryckssänkande läkemedel som **ACE-hämmare**, betablockerare och diuretika (vätskedrivande). Vid hjärtsvikt används liknande läkemedel för att avlasta hjärtat och minska vätskeöverskottet. Målet är att lindra symtom och bromsa försämring.',
      },
    ],
    keyTerms: [
      { term: 'Systoliskt / diastoliskt', definition: 'Blodtrycket vid hjärtslaget respektive mellan slagen.' },
      { term: 'Hypertoni', definition: 'Kroniskt förhöjt blodtryck.' },
      { term: 'Hjärtsvikt', definition: 'När hjärtat inte pumpar tillräckligt för kroppens behov.' },
      { term: 'Ödem', definition: 'Svullnad av vätska som samlats i vävnaden.' },
      { term: 'ACE-hämmare', definition: 'Läkemedelsgrupp som sänker blodtryck och avlastar hjärtat.' },
    ],
    takeaways: [
      'Hypertoni = kroniskt högt blodtryck, ofta utan symtom.',
      'Hjärtsvikt = hjärtat pumpar för svagt; ger andfåddhet och ödem.',
      'Behandlas med blodtryckssänkande och vätskedrivande läkemedel.',
    ],
  },

  'kol-astma': {
    title: 'KOL och astma',
    intro:
      'KOL och astma är två kroniska sjukdomar i luftvägarna som båda gör det svårare att andas. De behandlas i stor utsträckning med inhalerade läkemedel.',
    sections: [
      {
        heading: 'Astma',
        body: '**Astma** är en kronisk inflammation i luftvägarna som gör dem överkänsliga. Vid en attack drar musklerna kring luftrören ihop sig och slemhinnan svullnar, så att rören blir trängre. Det ger **pip i bröstet**, hosta och andnöd. Besvären kommer ofta i anfall, utlösta av t.ex. allergener, kyla eller ansträngning, och är till stor del **reversibla** – luftvägarna kan vidgas igen.',
      },
      {
        heading: 'KOL',
        body: '**KOL** (kroniskt obstruktiv lungsjukdom) orsakas nästan alltid av långvarig **rökning**. Lungvävnaden och luftvägarna skadas gradvis och förträngningen blir till stor del bestående. Symtomen – andfåddhet, slemhosta och försämrad kondition – kommer smygande och förvärras med åren. Till skillnad från astma är skadan vid KOL i hög grad oåterkallelig.',
      },
      {
        heading: 'Behandling',
        body: 'Båda behandlas främst med **inhalatorer**. **Luftrörsvidgande** läkemedel öppnar upp luftvägarna, medan inhalerat **kortison** dämpar inflammationen. Vid astma är kortison en hörnsten; vid KOL är rökstopp den viktigaste åtgärden för att bromsa förloppet.',
      },
    ],
    keyTerms: [
      { term: 'Astma', definition: 'Kronisk, anfallsvis luftvägsinflammation med oftast reversibel förträngning.' },
      { term: 'KOL', definition: 'Kroniskt obstruktiv lungsjukdom, oftast orsakad av rökning.' },
      { term: 'Reversibel', definition: 'Återställbar – luftvägarna kan vidgas igen.' },
      { term: 'Luftrörsvidgande', definition: 'Läkemedel som öppnar upp förträngda luftvägar.' },
      { term: 'Inhalator', definition: 'Hjälpmedel som ger läkemedel direkt ned i luftvägarna.' },
    ],
    takeaways: [
      'Astma: anfallsvis, ofta reversibel inflammation i luftvägarna.',
      'KOL: oftast rökorsakad, bestående lungskada.',
      'Behandlas med inhalerade luftrörsvidgande och kortison.',
    ],
  },

  reumatism: {
    title: 'Reumatiska sjukdomar',
    intro:
      'Reumatiska sjukdomar drabbar främst leder och rörelseorgan. Många av dem är autoimmuna, det vill säga immunförsvaret angriper kroppens egen vävnad.',
    sections: [
      {
        heading: 'Autoimmun inflammation',
        body: 'Vid de inflammatoriska reumatiska sjukdomarna riktar immunförsvaret av misstag sin attack mot kroppen själv – det kallas att sjukdomen är **autoimmun**. Den vanligaste är **reumatoid artrit (RA)**, där lederna blir inflammerade. Inflammationen ger de klassiska tecknen rodnad, värme, svullnad och smärta, och kan med tiden förstöra brosk och ben i leden.',
      },
      {
        heading: 'Symtom och förlopp',
        body: 'Typiska symtom vid RA är **ledvärk**, svullna leder och uttalad **morgonstelhet** som kan sitta i flera timmar. Sjukdomen är ofta **symmetrisk** och drabbar gärna småleder i händer och fötter. Förloppet växlar mellan skov (försämringar) och lugnare perioder. Andra reumatiska tillstånd, som artros, beror i stället på förslitning av brosk snarare än inflammation.',
      },
      {
        heading: 'Behandling',
        body: 'Målet är att dämpa inflammationen och hindra ledskador. **Antiinflammatoriska** läkemedel (NSAID) och kortison lindrar symtomen, medan så kallade **bromsmediciner** (DMARD) och moderna **biologiska läkemedel** påverkar själva sjukdomsprocessen. Tidig behandling ger bäst chans att skydda lederna.',
      },
    ],
    keyTerms: [
      { term: 'Autoimmun', definition: 'När immunförsvaret angriper kroppens egen vävnad.' },
      { term: 'Reumatoid artrit', definition: 'Vanlig autoimmun ledsjukdom med kronisk inflammation.' },
      { term: 'Morgonstelhet', definition: 'Stelhet i lederna efter vila, typiskt på morgonen.' },
      { term: 'Bromsmedicin (DMARD)', definition: 'Läkemedel som påverkar själva sjukdomsförloppet.' },
      { term: 'Biologiska läkemedel', definition: 'Moderna läkemedel som riktas mot specifika delar av immunförsvaret.' },
    ],
    takeaways: [
      'Många reumatiska sjukdomar är autoimmuna och inflammatoriska.',
      'Reumatoid artrit ger ledvärk, svullnad och morgonstelhet.',
      'Behandlas med NSAID, kortison samt broms- och biologiska läkemedel.',
    ],
  },
}
