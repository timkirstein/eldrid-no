// Blog post content. Add a new post by pushing another object here, then run
// `node build.mjs` to regenerate the static HTML, sitemap.xml and llms.txt.
//
// bodyHtml is hand-written semantic HTML (h2/p/ul/blockquote) rather than
// Markdown -- there's no Markdown pipeline in this repo and nine posts don't
// justify adding one.

export const posts = [
  {
    slug: 'svindel-mot-eldre-i-norge-full-oversikt',
    title: 'Svindel mot eldre i Norge: full oversikt over de vanligste metodene',
    description:
      'Hundretusener av eldre nordmenn er rammet av svindel. Her er en oversikt over de mest utbredte metodene i 2026 — og hvordan du kjenner dem igjen.',
    date: '2026-09-02',
    tags: ['Oversikt'],
    intro:
      'Dette er startsiden for Eldrids svindelguide. Vi oppdaterer den etter hvert som nye svindelmetoder dukker opp, og lenker videre til en egen, grundigere artikkel om hver enkelt metode.',
    bodyHtml: `
      <p>Svindel mot eldre er ikke lenger unntaket — det er blitt en av de mest utbredte formene for kriminalitet i Norge. Ifølge tall omtalt av <a href="https://www.nkvts.no/aktuelt/hundretusener-av-eldre-er-utsatt-for-okonomisk-svindel/" target="_blank" rel="noopener">NKVTS</a> oppgir rundt 200 000 nordmenn å ha vært rammet av digital svindel, og i enkelte undersøkelser svarer så mange som 1 av 4 eldre at de selv har opplevd et svindelforsøk. Konsekvensene er ikke bare økonomiske: NKVTS peker også på alvorlige psykiske belastninger hos ofrene, som depresjon og i noen tilfeller selvmordstanker.</p>
      <p>Det som gjør svindel mot eldre spesielt vanskelig å stoppe, er at metodene stadig endrer seg. Svindlerne tester ut hva som fungerer, og bytter raskt kanal når politiet og bankene advarer mot én bestemt type melding. Denne oversikten samler de metodene vi ser oftest omtalt i norske medier og hos politiet, bankene og Forbrukerrådet gjennom 2025 og 2026, med en lenke til en dypere artikkel om hver av dem.</p>

      <h2>De vanligste svindelmetodene mot eldre akkurat nå</h2>
      <ul>
        <li><strong>Falske politi- og bankoppringninger ("spoofing")</strong> — svindlere forfalsker nummeret sitt slik at det ser ut som banken eller politiet ringer. <a href="/blogg/spoofing-falske-politi-og-bankoppringninger/">Les mer →</a></li>
        <li><strong>Vipps- og Skatteetaten-svindel</strong> — falske meldinger om restskatt eller "kontokapring" som ber deg vippse eller bekrefte via en lenke. <a href="/blogg/vipps-svindel-og-falsk-restskatt/">Les mer →</a></li>
        <li><strong>AI-stemmekloning og barnebarnsvindel</strong> — en kunstig, klonet stemme som høres ut som barnet eller barnebarnet ditt, i akutt pengenød. <a href="/blogg/ai-stemmekloning-barnebarnsvindel/">Les mer →</a></li>
        <li><strong>Kjærlighetssvindel</strong> — en ny "kjæreste" på nett som etter hvert trenger penger til reise, tollavgift eller en krise. <a href="/blogg/kjaerlighetssvindel-nettdating/">Les mer →</a></li>
        <li><strong>Falske BankID-SMS-er</strong> — meldinger om at BankID er "sperret" eller må "fornyes" via en lenke. <a href="/blogg/falsk-bankid-sms-phishing/">Les mer →</a></li>
        <li><strong>Investerings- og kryptosvindel</strong> — løfter om garantert, høy avkastning på "investeringer" som i realiteten går rett til svindlerne. <a href="/blogg/investeringssvindel-og-kryptosvindel/">Les mer →</a></li>
        <li><strong>Falske pakke-SMS-er ("smishing")</strong> — meldinger fra "Posten" eller "Bring" om en pakke som ikke kunne leveres. <a href="/blogg/falske-pakke-sms-smishing/">Les mer →</a></li>
        <li><strong>Gavekortsvindel</strong> — du blir bedt om å kjøpe Apple- eller Google-gavekort og lese opp koden på baksiden. <a href="/blogg/gavekortsvindel/">Les mer →</a></li>
      </ul>

      <h2>Hvorfor rammer det eldre spesielt hardt?</h2>
      <p>Det handler sjelden om at eldre er "lettlurte". Svindlerne bruker bevisste psykologiske grep — tidspress, autoritet (politi, bank, Skatteetaten) og skam — som er laget for å omgå sunn fornuft hos hvem som helst. Det som gjør eldre til et yndet mål, er ofte mer praktisk: mange bor alene, har ikke alltid noen å sjekke en mistenkelig melding med der og da, og har spart opp midler som gjør dem attraktive for kriminelle nettverk. Undersøkelser fra bankene viser dessuten at eldre kvinner er sterkt overrepresentert blant ofrene for flere av metodene over.</p>

      <h2>Slik kan Eldrid hjelpe</h2>
      <p>Eldrid er laget nettopp for situasjonen der du sitter alene med en melding du er usikker på, klokken er sent, og du ikke vil "bry" noen. Ta et skjermbilde av meldingen, e-posten eller annonsen, og del den til Eldrid — akkurat som du ville delt et bilde til en app. På sekunder får du et av tre svar: <strong>BEDRAGERI</strong>, <strong>USIKKER</strong> eller <strong>EKTE</strong>, forklart i vanlig språk og med en konkret anbefaling, aldri bare et rødt eller grønt lys. Er du pårørende, kan du bli varslet automatisk hvis noe ser tydelig farlig ut — uten å måtte sjekke telefonen til noen andre.</p>
    `,
    faq: [
      {
        q: 'Hvor mange eldre rammes av svindel i Norge?',
        a: 'Rundt 200 000 nordmenn oppgir å ha vært utsatt for digital svindel, og i enkelte undersøkelser svarer så mange som 1 av 4 eldre at de har opplevd et svindelforsøk, ifølge tall omtalt av NKVTS.',
      },
      {
        q: 'Hva er den vanligste svindelmetoden mot eldre akkurat nå?',
        a: 'Det varierer over tid, men falske oppringninger fra "politiet" eller "banken" (spoofing), Vipps-relatert svindel og falske BankID-SMS-er er blant de mest omtalte metodene i Norge i 2025–2026.',
      },
      {
        q: 'Hva bør jeg gjøre hvis jeg mottar en mistenkelig melding?',
        a: 'Ikke svar, ikke trykk på lenker, og ikke gi fra deg BankID-koder eller kontoopplysninger. Ta heller et skjermbilde og få det vurdert — for eksempel ved å dele det med Eldrid — før du eventuelt handler.',
      },
    ],
    sources: [
      { title: 'NKVTS: Hundretusener av eldre er utsatt for økonomisk svindel', url: 'https://www.nkvts.no/aktuelt/hundretusener-av-eldre-er-utsatt-for-okonomisk-svindel/' },
      { title: 'Finans Norge: Norske bankers bekjempelse av svindel 2026', url: 'https://www.finansnorge.no/tema/okonomisk-kriminalitet/svindel/status-og-tiltak-mot-svindel-for-2026/' },
    ],
  },

  {
    slug: 'spoofing-falske-politi-og-bankoppringninger',
    title: 'Falske politi- og bankoppringninger: derfor virker "spoofing" så ekte',
    description:
      'Elleve personer er dømt for å ha svindlet 150 eldre for 28 millioner kroner ved å utgi seg for politi og bank på telefon. Slik fungerer "spoofing" — og slik kjenner du det igjen.',
    date: '2026-08-20',
    tags: ['Telefonsvindel'],
    intro:
      'Et av de største svindeloppgjørene mot eldre i Norge noensinne handlet om noe så enkelt som et forfalsket telefonnummer.',
    bodyHtml: `
      <p>Sommeren 2026 ble elleve personer dømt til fengselsstraffer mellom 90 dager og tre år for å ha svindlet rundt 150 eldre mennesker i Norge for til sammen 28 millioner kroner, ifølge <a href="https://www.document.no/2026/07/10/elleve-personer-domt-for-svindel-av-eldre-for-28-millioner-kroner/" target="_blank" rel="noopener">document.no</a>. Nettverket sto bak et enormt volum av samtaler — fra oktober 2023 til oktober 2024 skal de ha ringt rundt 90 000 anrop til norske borgere, med eldre kvinner som et særlig utsatt mål. Flere av de tiltalte utga seg for å ringe fra politiet eller fra norske banker, ifølge <a href="https://www.adressa.no/nyheter/innenriks/i/8pB6XA/utga-seg-for-aa-vaere-politi-tiltalt-for-svindel-av-eldre-for-28-millioner-kroner" target="_blank" rel="noopener">Adresseavisen</a>.</p>
      <p>Politiet i Oslo advarte så sent som i juni 2026 om lignende forsøk, blant annet et tilfelle der et ektepar ble oppringt av noen som hevdet å være politi og fortalte at det var opprettet kontoer i navnet deres, omtalt av <a href="https://www.aftenposten.no/norge/i/6qBJE8/politiet-med-ny-advarsel-om-svindelforsoek-mot-eldre" target="_blank" rel="noopener">Aftenposten</a>.</p>

      <h2>Hva er "spoofing"?</h2>
      <p>Spoofing betyr at svindleren forfalsker avsendernummeret, slik at telefonen din viser et nummer som ligner banken din, politiets sentralbord eller til og med et nummer i din egen kommune. Det finnes ingen sikker måte å avsløre spoofing bare ved å se på nummeret — det er nettopp derfor det er så effektivt.</p>
      <p>Et typisk forløp: du blir oppringt av noen som presenterer seg med tittel og myndighet — "politibetjent", "sikkerhetsavdelingen i banken", "Økokrim". De forteller at kontoen din er kompromittert, at det er opprettet lån i ditt navn, eller at pengene dine må "sikres" umiddelbart. Løsningen de tilbyr er alltid den samme: overfør pengene til en "trygg konto", oppgi BankID-kode, eller installer et fjernstyringsprogram "så vi kan hjelpe deg".</p>

      <h2>Tre ting ekte politi og banker aldri gjør</h2>
      <ul>
        <li>De ber deg aldri overføre penger til en "sikker konto" — dette finnes ikke.</li>
        <li>De ber deg aldri oppgi BankID-passord, engangskoder eller PIN-koder over telefon.</li>
        <li>De legger aldri press på deg for å få deg til å handle med det samme, uten å kunne legge på og ringe tilbake selv.</li>
      </ul>
      <p>Det tryggeste du kan gjøre hvis du er usikker, er å legge på og selv ringe banken eller politiet (02800) tilbake på et nummer du finner selv — aldri et nummer den som ringte deg oppga.</p>

      <h2>Slik kan Eldrid hjelpe</h2>
      <p>Mange av disse svindelforsøkene følges opp med en SMS eller e-post for å "bekrefte" historien fra telefonsamtalen — for eksempel en falsk kvittering, et "sakspapir" eller en lenke til en "trygg side". Får du en slik oppfølging, kan du ta et skjermbilde og dele det med Eldrid for en rask, uavhengig vurdering, i tillegg til å legge på og ringe tilbake selv. Har du en panikknapp-kontakt lagt inn i Eldrid, kan du også trykke "Ring hjelpen min" for å få tak i en pårørende umiddelbart hvis du er usikker eller redd.</p>
    `,
    faq: [
      {
        q: 'Kan jeg stole på nummeret som vises når politiet eller banken ringer?',
        a: 'Nei. Svindlere kan forfalske avsendernummeret ("spoofing") slik at det ser ut som et ekte nummer fra banken eller politiet, selv om samtalen kommer fra noen andre.',
      },
      {
        q: 'Ber politiet eller banken noen gang om at jeg overfører penger til en "sikker konto"?',
        a: 'Nei, aldri. Dette er alltid et tegn på svindel. Legg på, og ring tilbake selv på et nummer du finner på egen hånd.',
      },
    ],
    sources: [
      { title: 'document.no: Elleve dømt for svindel av eldre for 28 millioner kroner', url: 'https://www.document.no/2026/07/10/elleve-personer-domt-for-svindel-av-eldre-for-28-millioner-kroner/' },
      { title: 'Aftenposten: Politiet med ny advarsel om svindelforsøk mot eldre', url: 'https://www.aftenposten.no/norge/i/6qBJE8/politiet-med-ny-advarsel-om-svindelforsoek-mot-eldre' },
      { title: 'Adresseavisen: Tiltalt for svindel av eldre for 28 millioner kroner', url: 'https://www.adressa.no/nyheter/innenriks/i/8pB6XA/utga-seg-for-aa-vaere-politi-tiltalt-for-svindel-av-eldre-for-28-millioner-kroner' },
    ],
  },

  {
    slug: 'vipps-svindel-og-falsk-restskatt',
    title: 'Vipps-svindel: falsk restskatt og hvorfor Vipps nå bruker en KI-vakt kalt Olga',
    description:
      'Skatteetaten advarer mot svindlere som ber om "restskatt" via Vipps. Se hvordan svindelen fungerer, og hvordan Vipps sin nye KI-agent Olga forsøker å stanse den.',
    date: '2026-08-05',
    tags: ['Vipps', 'Phishing'],
    intro: 'Vipps er blitt en del av hverdagen for de fleste nordmenn — og dermed også et av svindlernes foretrukne verktøy.',
    bodyHtml: `
      <p>Skatteetaten går årlig ut med advarsler om økt svindelaktivitet rundt utsendelsen av skatteoppgjøret. Ifølge <a href="https://www.vg.no/nyheter/i/43BBvR/skatteetaten-advarer-svindlere-ber-om-restskatt-paa-vipps" target="_blank" rel="noopener">VG</a> har enkelte i det siste blitt kontaktet på telefon med beskjed om å betale "restskatt" via Vipps — noe Skatteetaten aldri gjør. Det vanlige mønsteret er at du blir oppringt eller får en SMS om at du skylder penger, med en lenke eller et Vipps-krav som ser overraskende ekte ut.</p>
      <p>Svindlere som retter seg mot eldre, vet at gruppen ofte har stor tillit til det som ser ut som en offentlig etat eller en kjent tjeneste — og at Vipps oppleves som "trygt" fordi det er en app de fleste kjenner og bruker daglig. Ifølge medieomtale er det særlig eldre kvinner som har blitt utsatt for denne typen forsøk.</p>

      <h2>Vipps' eget svar: KI-agenten "Olga"</h2>
      <p>Vipps har selv beskrevet en kraftig vekst i svindelforsøk knyttet til tjenesten, og har innført en KI-basert vakt internt kalt "Olga", som analyserer mønstre for å avgjøre om det faktisk er brukeren selv som for eksempel bytter telefon, eller om noen forsøker å kapre kontoen, ifølge <a href="https://www.nettavisen.no/okonomi/vipps-stopper-konto-kapring-med-sin-nye-ki-agent-olga/s/5-95-2768476" target="_blank" rel="noopener">Nettavisen</a>. Det er et godt eksempel på at også svindelbekjempelse blir stadig mer automatisert — men ingen automatisk vakt fanger opp alt, og det siste, avgjørende steget er ofte fortsatt at et menneske trykker "godkjenn" i appen sin.</p>

      <h2>Slik kjenner du igjen en falsk Vipps-forespørsel</h2>
      <ul>
        <li>Skatteetaten, banken eller det offentlige ber deg aldri betale via Vipps som svar på en telefonsamtale eller SMS.</li>
        <li>Et ekte Vipps-krav fra en du kjenner viser navnet og telefonnummeret til avsenderen tydelig i appen — vær ekstra kritisk hvis noe virker forhastet.</li>
        <li>Bruk aldri en lenke i en SMS eller e-post for å "logge inn i Vipps" — åpne alltid appen direkte.</li>
      </ul>

      <h2>Slik kan Eldrid hjelpe</h2>
      <p>Får du en SMS, e-post eller melding som ber deg betale, bekrefte eller logge inn via en lenke — ta et skjermbilde før du gjør noe som helst, og del det med Eldrid. Du får en vurdering i vanlig språk (BEDRAGERI, USIKKER eller EKTE) og et konkret råd om hva du bør gjøre videre, i stedet for å måtte stole på magefølelsen alene midt i en stressende situasjon.</p>
    `,
    faq: [
      {
        q: 'Ber Skatteetaten noen gang om betaling via Vipps på telefon eller SMS?',
        a: 'Nei. Skatteetaten sender ikke krav om restskatt via telefonsamtale eller SMS med betaling gjennom Vipps. Slike henvendelser er svindel.',
      },
      {
        q: 'Hva er Olga hos Vipps?',
        a: 'Olga er en intern KI-basert sikkerhetsfunksjon hos Vipps som skal oppdage mønstre som tyder på kontokapring eller svindelforsøk, blant annet ved bytte av telefon.',
      },
    ],
    sources: [
      { title: 'VG: Skatteetaten advarer — svindlere ber om restskatt på Vipps', url: 'https://www.vg.no/nyheter/i/43BBvR/skatteetaten-advarer-svindlere-ber-om-restskatt-paa-vipps' },
      { title: 'Nettavisen: Vipps stopper konto-kapring med sin nye KI-agent Olga', url: 'https://www.nettavisen.no/okonomi/vipps-stopper-konto-kapring-med-sin-nye-ki-agent-olga/s/5-95-2768476' },
    ],
  },

  {
    slug: 'ai-stemmekloning-barnebarnsvindel',
    title: 'AI-stemmekloning: når "barnebarnet" som ringer er en robot',
    description:
      'Deepfake-svindel har økt over 2000 % på tre år. Slik brukes AI-klonede stemmer til å utgi seg for barn og barnebarn i akutt pengenød — og slik beskytter du deg.',
    date: '2026-07-22',
    tags: ['AI-svindel', 'Deepfake'],
    intro:
      'Du trenger bare noen sekunder med lyd av en persons stemme for å lage en overbevisende, kunstig kopi av den i dag.',
    bodyHtml: `
      <p>Den klassiske "barnebarnsvindelen" — der noen ringer og later som de er et barnebarn i akutt nød for penger — er langt fra ny. Det nye er hvor overbevisende den er blitt. Ifølge <a href="https://www.digi.no/artikler/svindlere-bruker-kunstig-intelligens-til-a-utgi-seg-som-familiemedlemmer-stjeler-penger/527391" target="_blank" rel="noopener">Digi.no</a> bruker svindlere nå kunstig intelligens til å klone stemmer og utgi seg for familiemedlemmer, og myndigheter internasjonalt advarer om en kraftig økning i denne typen "besteforeldre-svindel". I ett tilfelle omtalt av Digi.no ble stemmen til en datter klonet med KI i et forsøk på å presse moren hennes for penger.</p>
      <p>Ifølge sikkerhetsselskapet Signicat har antallet deepfake-svindelforsøk økt med over 2000 prosent på tre år. Det trengs i praksis bare et kort lydklipp — hentet for eksempel fra en video på sosiale medier — for å lage en stemme som er vanskelig å skille fra den ekte, ifølge <a href="https://www.cw.no/kunstig-intelligens-ntb-svindel/ai-klonet-stemme-stiller-sporsmal-ved-om-en-kan-stole-pa-egen-horsel/2136262" target="_blank" rel="noopener">Computerworld</a>.</p>

      <h2>Slik foregår svindelen typisk</h2>
      <p>Du får en oppringning fra et ukjent nummer, ofte om kvelden eller i en stresset situasjon. En gråtende eller nervøs stemme som høres ut som barnet eller barnebarnet ditt forteller om en ulykke, en pågripelse eller en akutt regning — og ber deg, gjerne via en "advokat" eller "politibetjent" som tar over telefonen, om å overføre penger raskt og ikke fortelle det til andre i familien før alt er "ordnet".</p>
      <p>Det er nettopp kombinasjonen av en kjent stemme og et akutt tidspress som gjør denne svindelen så farlig — den er laget for å koble ut den sunne fornuften din i noen få, avgjørende minutter.</p>

      <h2>Slik beskytter du deg</h2>
      <ul>
        <li>Legg på, og ring personen selv tilbake på nummeret du allerede har lagret — ikke et nummer du får oppgitt i samtalen.</li>
        <li>Avtal gjerne et hemmelig "kodeord" i familien som ekte familiemedlemmer kan bruke i en nødsituasjon.</li>
        <li>Vær ekstra skeptisk hvis noen ber deg holde samtalen hemmelig for resten av familien — det er nesten alltid et faresignal.</li>
      </ul>

      <h2>Slik kan Eldrid hjelpe</h2>
      <p>Eldrid kan ikke lytte til en telefonsamtale mens den pågår, men de fleste slike svindelforsøk etterlater seg spor du kan sjekke i etterkant eller underveis — en SMS med et kontonummer, en e-post fra en påstått "advokat", eller en betalingsforespørsel. Del et skjermbilde av dette med Eldrid for en rask, uavhengig vurdering før du overfører noe som helst. Har du lagt inn en pårørende som nødkontakt, kan du også trykke "Ring hjelpen min" for å diskutere situasjonen med noen du stoler på, i stedet for å stå alene med avgjørelsen.</p>
    `,
    faq: [
      {
        q: 'Hvor mye lyd trenger en svindler for å klone en stemme?',
        a: 'I praksis kan et kort lydklipp på bare noen sekunder, for eksempel fra en video på sosiale medier, være nok til å lage en overbevisende kunstig kopi av en stemme.',
      },
      {
        q: 'Hva bør jeg gjøre hvis jeg mottar en oppringning fra en "gråtende" slektning som ber om penger raskt?',
        a: 'Legg på, og ring personen tilbake selv på et nummer du allerede har lagret. Overfør aldri penger under tidspress før du har bekreftet identiteten på en annen kanal.',
      },
    ],
    sources: [
      { title: 'Digi.no: Svindlere bruker kunstig intelligens til å utgi seg som familiemedlemmer', url: 'https://www.digi.no/artikler/svindlere-bruker-kunstig-intelligens-til-a-utgi-seg-som-familiemedlemmer-stjeler-penger/527391' },
      { title: 'Digi.no: Klonet stemmen til datteren med KI', url: 'https://www.digi.no/artikler/klonet-stemmen-til-datteren-med-ki-forsokte-a-presse-moren-for-penger/533675' },
      { title: 'Computerworld: AI-klonet stemme stiller spørsmål ved om en kan stole på egen hørsel', url: 'https://www.cw.no/kunstig-intelligens-ntb-svindel/ai-klonet-stemme-stiller-sporsmal-ved-om-en-kan-stole-pa-egen-horsel/2136262' },
    ],
  },

  {
    slug: 'kjaerlighetssvindel-nettdating',
    title: 'Kjærlighetssvindel: nordmenn lurt for 24 millioner kroner på nett',
    description:
      'Antall kjærlighetssvindel-saker har tredoblet seg hos enkelte banker. Nesten 80 % av ofrene for økonomisk svindel er over 60 år. Slik gjenkjenner du varselsignalene.',
    date: '2026-07-08',
    tags: ['Kjærlighetssvindel'],
    intro:
      'En ny bekjentskap på nett som virker for god til å være sann, kombinert med ensomhet, er en av de kostbareste svindelformene som finnes.',
    bodyHtml: `
      <p>Ifølge Økokrim ble nordmenn svindlet for 24 millioner kroner gjennom kjærlighetssvindel i fjor. Nordea melder om en tredobling i antall saker der kunder er lurt til å gi eller overføre penger til kjærlighetssvindlere. Ifølge Sparebank 1 er nesten 80 prosent av dem som i dag rammes av økonomisk svindel, 60 år eller eldre — og eldre kvinner med profil på sosiale medier eller datingsider er en særlig utsatt gruppe.</p>
      <p>Mønsteret er som regel det samme: kontakten starter uskyldig, ofte via en sosial medieplattform eller en datingtjeneste, og bygges opp over uker eller måneder med daglige, varme meldinger. Når tilliten og de følelsesmessige båndene er sterke nok, begynner personen å be om penger — typisk til reisekostnader for å endelig møtes, en plutselig sykdom, eller et "forretningsproblem" som løses med et lite lån. Beløpene kan raskt bli store; tap på flere hundre tusen kroner er ikke uvanlig.</p>

      <h2>Vanlige varselsignaler</h2>
      <ul>
        <li>Personen vil aldri videochatte eller møtes fysisk, og har alltid en god unnskyldning for det.</li>
        <li>Kjærlighetserklæringer kommer svært raskt, ofte i løpet av dager.</li>
        <li>Bilder som brukes i profilen kan gjenfinnes andre steder på nett med et enkelt bildesøk.</li>
        <li>Før eller siden kommer det en ber om penger — reise, toll, sykehusregning eller en "investering" dere skal gjøre sammen.</li>
      </ul>

      <h2>Hvorfor er dette så vanskelig å stoppe selv?</h2>
      <p>Kjærlighetssvindel er spesielt vanskelig fordi offeret ofte ikke opplever seg selv som lurt, men som forelsket — og fordi svindleren aktivt oppfordrer til hemmelighold ("familien vil ikke forstå dette"). Det gjør det ekstra viktig å ha en nøytral, ikke-dømmende måte å få sjekket meldinger på, uten å måtte innrømme forholdet til noen man kjenner først.</p>

      <h2>Slik kan Eldrid hjelpe</h2>
      <p>Eldrid dømmer aldri følelsene dine — bare meldingen du deler. Er du usikker på en profil, en melding eller en pengeforespørsel fra noen du har møtt på nett, kan du dele et skjermbilde med Eldrid og få en rådgivende, diskré vurdering, uten at noen andre i familien trenger å vite om det før du selv er klar. Hvis noe ser tydelig farlig ut, får du et konkret råd om hva du bør gjøre — aldri bare et avvisende "nei".</p>
    `,
    faq: [
      {
        q: 'Hvor mye tapte nordmenn på kjærlighetssvindel i fjor?',
        a: 'Ifølge Økokrim ble nordmenn svindlet for rundt 24 millioner kroner gjennom kjærlighetssvindel.',
      },
      {
        q: 'Hvem rammes oftest av kjærlighetssvindel?',
        a: 'Eldre, ofte enslige eller nylig etterlatte, er en særlig utsatt gruppe. Ifølge Sparebank 1 er nesten 80 % av dagens ofre for økonomisk svindel 60 år eller eldre.',
      },
      {
        q: 'Hva er et sikkert tegn på kjærlighetssvindel?',
        a: 'Det klareste varselsignalet er når en ny bekjentskap fra nett ber om penger — uansett grunn — og alltid finner en unnskyldning for å ikke møtes fysisk eller videochatte.',
      },
    ],
    sources: [
      { title: 'DNB: Kjærlighetssvindel', url: 'https://www.dnb.no/okonomisk-radgiver/sikkerhet/svindel/kjarlighetssvindel' },
      { title: 'f-b.no: Kjærlighetssvindel på valentinsdagen — dette er faretegnene', url: 'https://www.f-b.no/kjarlighetssvindel-pa-valentinsdagen-dette-er-faretegnene/s/5-59-3520047' },
    ],
  },

  {
    slug: 'falsk-bankid-sms-phishing',
    title: 'Falsk BankID-SMS: derfor er dette en av de farligste svindelmetodene',
    description:
      'BankID sender aldri SMS med lenker. Likevel er falske "BankID sperret"-meldinger blant de mest utbredte phishing-forsøkene mot norske eldre. Slik unngår du å bli lurt.',
    date: '2026-06-24',
    tags: ['Phishing', 'BankID'],
    intro:
      'Fordi BankID gir tilgang til nær sagt alt — bank, forsikring, det offentlige — er en falsk BankID-melding en av de mest ødeleggende svindelformene som finnes.',
    bodyHtml: `
      <p>Et typisk forløp starter med en SMS eller e-post om at BankID-en din er sperret, utgått, eller under mistenkelig bruk, med en lenke du bes trykke på for å "løse problemet". Lenken fører til en falsk side som ser nesten identisk ut som den ekte BankID- eller nettbank-siden. Der blir du bedt om å logge inn og bekrefte med engangskoder — koder svindlerne i realiteten bruker til å logge inn på din ekte konto i sanntid.</p>
      <p>Ifølge BankID selv er regelen enkel og absolutt: <em>BankID sender aldri SMS med lenker.</em> Får du en SMS med en lenke som utgir seg for å komme fra BankID, er det alltid svindel. Banker og politiet ber heller aldri om BankID-passord, koder eller PIN via e-post, SMS eller telefon, ifølge <a href="https://bankid.no/raadene-som-beskytter-deg-mot-bankid-svindel" target="_blank" rel="noopener">BankID.no</a>.</p>

      <h2>Hvorfor treffer dette eldre spesielt hardt?</h2>
      <p>Mange eldre er mindre vant til å navigere nettsider daglig, og har dermed vanskeligere for å oppdage de små detaljene som avslører en forfalsket side — en litt feil URL, en logo som er svakt uskarp, eller et skjema som ber om mer informasjon enn nødvendig. Svindlerne vet dette, og retter derfor en stor andel av disse meldingene mot eldre.</p>

      <h2>Fem tegn på en falsk BankID-melding</h2>
      <ul>
        <li>Meldingen inneholder en lenke du bes trykke på.</li>
        <li>Den skaper hast — "sperres i dag", "handle umiddelbart".</li>
        <li>Avsendernummeret er ukjent eller ser uvanlig ut, selv om navnet som vises kan være forfalsket.</li>
        <li>Du blir bedt om å oppgi kode, passord eller personnummer på en side du kom til via lenken.</li>
        <li>Språket har små, unaturlige feil eller en ordlyd som ikke ligner det banken din vanligvis bruker.</li>
      </ul>

      <h2>Slik kan Eldrid hjelpe</h2>
      <p>Får du en SMS eller e-post som nevner BankID og inneholder en lenke, er dette akkurat den typen melding Eldrid er laget for å vurdere. Ta et skjermbilde før du trykker på noe som helst, og del det med Eldrid. Du får raskt beskjed om meldingen ser ut som BEDRAGERI, om den er USIKKER og trenger et par oppfølgingsspørsmål, eller om den faktisk er EKTE — sammen med et konkret neste steg.</p>
    `,
    faq: [
      {
        q: 'Sender BankID SMS med lenker?',
        a: 'Nei. BankID sender aldri SMS med lenker. En SMS med en lenke som hevder å komme fra BankID er alltid svindel.',
      },
      {
        q: 'Hva bør jeg gjøre hvis jeg allerede har trykket på en falsk BankID-lenke?',
        a: 'Ikke oppgi flere koder. Kontakt banken din umiddelbart på et nummer du finner selv (ikke fra meldingen), og be om å sperre BankID og kontoen din.',
      },
    ],
    sources: [
      { title: 'BankID: Rådene som beskytter deg mot BankID-svindel', url: 'https://bankid.no/raadene-som-beskytter-deg-mot-bankid-svindel' },
      { title: 'Gjensidige: Slik fungerer BankID-svindel steg for steg', url: 'https://www.gjensidige.no/godtforberedt/okonomi/slik-fungerer-bankid-svindel-steg-for-steg' },
    ],
  },

  {
    slug: 'investeringssvindel-og-kryptosvindel',
    title: 'Investeringssvindel: tapene har økt fra 864 millioner til 2,1 milliarder kroner',
    description:
      'Investeringssvindel i Norge har mer enn doblet seg siden 2020. Løfter om garantert avkastning på krypto er blant de vanligste fellene — og pengene er nesten alltid tapt for godt.',
    date: '2026-06-10',
    tags: ['Investeringssvindel', 'Krypto'],
    intro:
      'Løftet er alltid det samme: stor, garantert avkastning, uten risiko. Realiteten er at pengene som regel er tapt i det øyeblikket de er overført.',
    bodyHtml: `
      <p>Investeringssvindel i Norge har vokst kraftig de siste årene — fra 864 millioner kroner i 2020 til 2,1 milliarder kroner i 2024, ifølge tall gjengitt av <a href="https://www.gjensidige.no/godtforberedt/okonomi/mange-nordmenn-blir-rundlurt-av-denne-svindelen" target="_blank" rel="noopener">Gjensidige</a>. DNB anslår at flere hundre tusen nordmenn har vært utsatt for slike forsøk. Den vanligste varianten er falske tilbud om å investere i digital valuta som Bitcoin eller Ethereum, ofte utløst av en annonse på sosiale medier med et bilde av en kjendis eller en historie om noen som "ble rik på kort tid".</p>
      <p>Selv om yngre menn i økende grad lar seg friste av krypto-hypen, peker Finanstilsynet på at eldre og ensomme fortsatt er et tradisjonelt mål for denne typen svindel — nettopp fordi svindlerne bygger en personlig relasjon over tid før "investeringstilbudet" kommer på bordet.</p>

      <h2>Slik foregår svindelen typisk</h2>
      <ul>
        <li>Du blir kontaktet, ofte via sosiale medier eller etter å ha klikket på en annonse, av noen som presenterer seg som "rådgiver" eller "megler".</li>
        <li>En falsk, men troverdig utseende nettside eller app viser at "investeringen" din vokser raskt.</li>
        <li>Når du ønsker å ta ut pengene, dukker det opp uventede "gebyrer" eller "skatter" du må betale først.</li>
        <li>Til slutt er kontakten borte, og pengene lar seg som regel ikke spore tilbake — spesielt ikke når de er betalt i kryptovaluta.</li>
      </ul>
      <p>Finanstilsynet er tydelig på at når penger først er overført til investeringssvindlere via kryptoplattformer, er de i praksis tapt for godt. Det finnes ingen "myndighet" eller "advokat" som kan hjelpe deg å hente pengene tilbake mot et forskudd — det er i seg selv nok et svindelforsøk, ofte rettet mot de som allerede er blitt lurt én gang.</p>

      <h2>Slik kan Eldrid hjelpe</h2>
      <p>Blir du kontaktet med et investeringstilbud, en lenke til en "meglerplattform" eller en melding om at investeringen din må "bekreftes" med et innskudd til, del et skjermbilde med Eldrid før du overfører noe. Det gjelder også om noen tar kontakt og lover å hjelpe deg med å få tilbake penger du allerede har tapt — det er ofte en ny svindel, ikke en løsning på den forrige.</p>
    `,
    faq: [
      {
        q: 'Hvor mye har investeringssvindel i Norge økt?',
        a: 'Fra 864 millioner kroner i 2020 til 2,1 milliarder kroner i 2024, ifølge tall gjengitt av Gjensidige.',
      },
      {
        q: 'Kan jeg få tilbake penger jeg har tapt i kryptosvindel?',
        a: 'Det er svært vanskelig. Ifølge Finanstilsynet er penger som er overført til svindlere via kryptoplattformer som regel tapt for godt. Vær også ekstra skeptisk til noen som tar betalt for å "hjelpe deg" å få pengene tilbake.',
      },
    ],
    sources: [
      { title: 'Gjensidige: Mange nordmenn blir rundlurt av denne svindelen', url: 'https://www.gjensidige.no/godtforberedt/okonomi/mange-nordmenn-blir-rundlurt-av-denne-svindelen' },
      { title: 'Finanstilsynet: Svindel med kryptovaluta', url: 'https://www.finanstilsynet.no/forbrukerinformasjon/svindel-med-kryptovaluta/' },
    ],
  },

  {
    slug: 'falske-pakke-sms-smishing',
    title: 'Falske pakke-SMS-er: "Bring"-svindelen som treffer nesten alle',
    description:
      'Posten og Bring advarer jevnlig mot falske SMS-er om en pakke som ikke kunne leveres. Slik ser svindelen ut, og hvorfor den fungerer så godt.',
    date: '2026-05-27',
    tags: ['Smishing', 'SMS-svindel'],
    intro:
      'Fordi nesten alle venter på en pakke i ny og ne, er dette en av de mest effektive og hyppige svindelmetodene på SMS.',
    bodyHtml: `
      <p>Posten Bring har flere ganger advart mot SMS-svindel der mottakeren får beskjed om at en pakke ikke kunne leveres, og må "oppdatere adresseopplysninger" eller betale et lite gebyr via en lenke. En typisk melding kan lyde: <em>«Pakken din er kommet til leveringsområdet, men vi kunne ikke levere den. Oppdater adresseopplysningene dine. Ellers blir pakken returnert.»</em> Lenken fører til en falsk side laget for å samle inn kortopplysninger eller personinformasjon.</p>
      <p>Posten Bring understreker at de aldri sender SMS eller e-post med lenker der du skal oppgi kortnummer eller andre personopplysninger. Det første varseltegnet er ofte selve avsendernummeret — det er sjelden det samme som Postens offisielle korte kodenummer — men svindlere blir stadig flinkere til å etterligne også dette.</p>

      <h2>Hvorfor virker denne svindelen så godt?</h2>
      <p>"Smishing" (SMS-phishing) utnytter en hektisk hverdag: meldingen kommer ofte akkurat når du faktisk venter en pakke, eller er generisk nok til å treffe uansett. Fordi beløpet som etterspørres ("et lite gebyr på noen kroner") virker ubetydelig, senker mange guarden — men det er selve kortopplysningene, ikke gebyret, som er målet.</p>

      <h2>Slik unngår du å bli lurt</h2>
      <ul>
        <li>Trykk aldri på lenker i SMS-er om pakkelevering — gå heller direkte til fraktselskapets app eller nettside, som du selv søker deg fram til.</li>
        <li>Last aldri ned en app du får tipset om via en lenke i SMS eller e-post — hent den alltid direkte fra App Store eller Google Play.</li>
        <li>Er du usikker på om du faktisk venter en pakke, sjekk ordrebekreftelsen fra butikken du handlet hos i stedet for å stole på SMS-en.</li>
      </ul>

      <h2>Slik kan Eldrid hjelpe</h2>
      <p>Denne typen melding er blant de enkleste for Eldrid å vurdere raskt: del et skjermbilde av SMS-en, så sjekker Eldrid blant annet lenken og avsenderen opp mot kjente svindelmønstre og gir deg en klar anbefaling — før du eventuelt taster inn noe som helst av personlig informasjon.</p>
    `,
    faq: [
      {
        q: 'Sender Posten eller Bring SMS med betalingslenker?',
        a: 'Nei. Posten Bring sender aldri SMS eller e-post med lenker der du skal oppgi kortnummer eller andre personopplysninger for å motta en pakke.',
      },
      {
        q: 'Jeg venter faktisk en pakke — hvordan vet jeg om SMS-en er ekte?',
        a: 'Ikke trykk på lenken i meldingen. Gå i stedet direkte til fraktselskapets offisielle app eller nettside, eller sjekk sporingsinformasjonen i ordrebekreftelsen fra butikken.',
      },
    ],
    sources: [
      { title: 'VG: Posten advarer — svindlere sender falske pakkemeldinger', url: 'https://www.vg.no/nyheter/i/73Gn49/posten-advarer-svindlere-sender-falske-pakkemeldinger' },
      { title: 'Posten: Oppdag falsk e-post og SMS', url: 'https://www.posten.no/kundeservice/nettsvindel/oppdag-falsk-e.post-og-sms' },
    ],
  },

  {
    slug: 'gavekortsvindel',
    title: 'Gavekortsvindel: hvorfor svindlere elsker Apple- og Google-gavekort',
    description:
      'DNB melder om vedvarende gavekortsvindel der eldre overtales til å kjøpe store summer i Apple-gavekort og lese opp koden til en fremmed. Slik gjenkjenner du forsøket.',
    date: '2026-05-13',
    tags: ['Gavekortsvindel'],
    intro:
      'Hvis noen ber deg kjøpe et gavekort og lese opp koden på baksiden til dem, er det svindel — uansett hvem de utgir seg for å være.',
    bodyHtml: `
      <p>DNB melder om vedvarende gavekortsvindel der ofrene, ofte eldre, overtales til å kjøpe gavekort for relativt store summer i dagligvarebutikker — som regel Apple- eller Google-produkter. Svindelen starter typisk med kontakt via telefon, e-post, SMS eller sosiale medier, der noen utgir seg for en sjef, kollega, venn eller en du stoler på, og ber deg kjøpe gavekort som en "tjeneste" eller fordi det haster.</p>
      <p>Når gavekortene er kjøpt, blir du bedt om å skrape av koden på baksiden og enten sende et bilde av den eller lese den opp over telefon. I det øyeblikket koden er delt, kan svindlerne bruke den selv eller videreselge den med rabatt, ofte betalt i kryptovaluta — og pengene er tapt for godt.</p>

      <h2>Flere varianter av samme triks</h2>
      <p>Ifølge <a href="https://www.svindel.no/artikler/2025/ferske-svindeltrender-fra-bankene-gavekort-falske-meldinger-og-hjemmebesok/" target="_blank" rel="noopener">bankenes egen oversikt over ferske svindeltrender</a> dukker gavekortsvindel opp i flere varianter: en "sjef" som sender en SMS og ber deg kjøpe gavekort til en overraskelse for de ansatte, et "barnebarn" som trenger hjelp raskt, eller en "kjæreste" fra en kjærlighetssvindel som plutselig trenger penger til en krise. Fellestrekket er alltid det samme — gavekort i stedet for kontooverføring, fordi det er raskere å omsette og vanskeligere å spore.</p>

      <h2>Tre spørsmål som avslører svindelen</h2>
      <ul>
        <li>Ber noen deg kjøpe et gavekort og lese opp koden til dem? Da er det svindel, uansett hvem de sier de er.</li>
        <li>Kom forespørselen på SMS eller e-post fra en "leder" eller "kollega" du normalt ville snakket med ansikt til ansikt eller på telefon om noe så viktig?</li>
        <li>Blir du bedt om å holde kjøpet hemmelig, eller om å skynde deg fordi det haster akkurat nå?</li>
      </ul>

      <h2>Slik kan Eldrid hjelpe</h2>
      <p>Får du en melding som ber deg kjøpe gavekort — fra en "sjef", et familiemedlem eller noen du har møtt på nett — del et skjermbilde med Eldrid før du går til butikken. Det tar noen sekunder, og kan spare deg for et tap det ofte er umulig å reversere i etterkant.</p>
    `,
    faq: [
      {
        q: 'Er det alltid svindel når noen ber meg kjøpe et gavekort og lese opp koden?',
        a: 'Ja, praktisk talt alltid. Ingen legitim virksomhet, myndighet eller ekte familiemedlem ber deg betale en regning eller "hjelpe til" ved å kjøpe gavekort og lese opp koden på baksiden.',
      },
      {
        q: 'Kan jeg få tilbake pengene hvis jeg allerede har delt gavekortkoden?',
        a: 'Det er svært vanskelig. Koden kan brukes eller videreselges umiddelbart etter at den er delt. Kontakt likevel butikken og gavekortutstederen så raskt som mulig — i noen få tilfeller kan et ubrukt kort sperres.',
      },
    ],
    sources: [
      { title: 'DNB: Gavekortsvindlerne herjer fortsatt — eldre mest utsatt', url: 'https://www.dnb.no/dnbnyheter/no/samfunn/na-blir-mange-utsatt-for-gavekortsvindel' },
      { title: 'svindel.no: Ferske svindeltrender — gavekort, falske meldinger og hjemmebesøk', url: 'https://www.svindel.no/artikler/2025/ferske-svindeltrender-fra-bankene-gavekort-falske-meldinger-og-hjemmebesok/' },
    ],
  },
];
