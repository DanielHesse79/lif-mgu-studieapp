# LIF MGU – Studieapp

Fristående studieapp för den som förbereder sig inför **LIF-auktorisationen**
(läkemedelsinformatör) i Sverige, på **MGU-nivå** (medicinsk grundutbildning).
Byggd för någon utan medicinsk bakgrund.

> Appen är inte officiellt material från Lif eller Läkemedelsakademin och ersätter
> inte aktuella MGU-läsanvisningar eller kurslitteratur. Medicinskt innehåll behöver
> granskas mot dessa källor innan appen används som huvudsakligt studiematerial.

## Lägen per modul

- **Lär dig** – korta, statiska studieöversikter med nyckelbegrepp. Valfri AI kan förenkla eller fördjupa, och AI-text märks som medicinskt ogranskad.
- **Öva** – 150 frågor per modul med adaptiv svårighet och viktad repetition.
- **Övningsprov** – 20 ämnesbalanserade frågor, tidtagning och resultat per ämne. Läget efterliknar inte den officiella MGU-tentamen.

## Moduler

1. **Grundvetenskap** – anatomi, cellbiologi, genetik, fysiologi, immunologi
2. **Farmakologi** – ADME, receptorer, läkemedelsgrupper
3. **Sjukdomslära** – internmedicin/endokrinologi, onkologi, neurologi, psykiatri, infektion

## Stack

React + Vite · Tailwind CSS · Anthropic SDK · localStorage för persistens.

Claude-anropen går via en **serverless-proxy** (`/api/claude`). API-nyckeln ligger
bara på servern (env-variabel) och bundlas aldrig in i webbläsarkoden.

## Kom igång lokalt

```bash
npm install
cp .env.example .env.local   # fyll i din ANTHROPIC_API_KEY
npm run dev
```

Öppna http://localhost:5173. Vite-konfigurationen kör automatiskt samma
API-handler som Vercel använder, som dev-server-middleware – du behöver alltså
inte Vercel CLI för att köra lokalt.

## Deploy på Vercel

1. Importera repot i Vercel (ramverket detekteras som Vite).
2. Lägg till miljövariabeln `ANTHROPIC_API_KEY` (och valfritt `CLAUDE_MODEL`)
   under **Project Settings → Environment Variables**.
3. Deploy. Filerna i `/api` körs som serverless-funktioner; `vercel.json`
   ser till att alla andra rutter pekar mot SPA:n.

Endpointen har storleksgränser och en enkel, instanslokal hastighetsbegränsning.
För en publik eller större driftsättning bör autentisering och en distribuerad kvot
läggas till via driftplattformen eller en extern rate-limit-tjänst.

## Installera som app på mobilen (PWA)

Appen är en PWA (via `vite-plugin-pwa`) och kan installeras utan App Store:

- **iPhone:** öppna sidan i Safari → Dela → *Lägg till på hemskärmen*.
- **Android:** öppna i Chrome → menyn → *Installera app*.

Efter första besöket fungerar lektioner, övning och övningsprov offline
(allt innehåll ligger i bygget och cachas av service workern). AI-funktionerna
(`/api/claude`) kräver nät och fungerar bara där API:t körs, alltså på Vercel,
inte på GitHub Pages. Nya versioner hämtas automatiskt nästa gång appen öppnas
med nät. Framsteg sparas i `localStorage` på enheten; på iPhone har den
installerade appen sin egen lagring, skild från Safari.

## Projektstruktur

```
api/
  claude.js          Serverless-proxy mot Claude (tvingad tool-use → strukturerad JSON)
  _lib/prompts.js    Systemprompter + utdataschema per uppgift
src/
  data/modules.js    Moduler → ämnesområden → lektioner (driver navigering & täckning)
  data/lessons/      Statiska studieöversikter
  data/questions/    Frågebanker (150 frågor per modul)
  lib/
    api.js           Klient mot /api/claude
    storage.js       localStorage-hjälp + datum/streak-logik
  context/AppContext.jsx   Global state: progress, streak, lärcache
  components/        Layout, ProgressBar, RichText
  pages/
    Dashboard.jsx    Täckning per modul/ämne, streak, fokusförslag
    Module.jsx       Modulöversikt med de tre lägena
    modes/Learn.jsx     Lär dig-läget
    modes/Practice.jsx  Adaptiv övning
    modes/Test.jsx      Ämnesbalanserat övningsprov
tests/
  practice.test.mjs  Enhetstester för repetitions- och svårighetslogik
```

## Datalagring

All progress sparas i `localStorage` under nyckelprefixet `lif-mgu:`:

- `lif-mgu:state` – lästa lektioner, streak, övningsstatistik och provhistorik
- `lif-mgu:learn-cache` – genererade lärtexter (så att de inte regenereras i onödan)

En lektion räknas som läst först när användaren väljer **Markera som läst**.

## Kvalitetskontroller

```bash
npm run test             # rena enhetstester
npm run verify:content   # lektioner, frågor, facit och datakopplingar
npm run check            # tester + innehållskontroll + produktionsbygge
```

## Felsökning

**"Connection error" / `UNABLE_TO_VERIFY_LEAF_SIGNATURE` när en lärtext ska genereras**
Uppstår i nät med en TLS-inspektionsproxy (vanligt i företagsnät, t.ex. Netskope/Zscaler)
som signerar om HTTPS med ett företags-rot-CA. Det CA:t finns i operativsystemets
certifikatlager men inte i Nodes egen lista, så serverns anrop till Anthropic faller.
Hanteras i `api/claude.js` genom att en HTTPS-agent matas med systemets CA-certifikat
(`tls.getCACertificates('system')`). Inget behöver göras manuellt; fungerar även på Vercel.

**"ANTHROPIC_API_KEY ser ut som en platshållare"**
Du har inte bytt ut platshållaren i `.env.local`. Lägg in din riktiga nyckel
(börjar med `sk-ant-`) och **starta om** dev-servern (nyckeln läses in vid start).

**Vit skärm**
Borde inte hända (en ErrorBoundary fångar renderingsfel), men prova `Ctrl+Shift+R`
eller knappen "Nollställ data och starta om" om sparad localStorage-data blivit inkompatibel.

## Kvarvarande innehållsarbete

- Mappa lektioner och frågor mot aktuella MGU-målbeskrivningar och läsanvisningar.
- Låt läkare/apotekare granska varje lektion och fråga; spara källa, upplaga,
  granskare och granskningsdatum som metadata.
- Fortsätt fördjupa endokrinologi i sjukdomsläran och de korta studieöversikterna.
- Kalibrera svårighetsgrader och distraktorer mot verkliga kunskapsmål.
