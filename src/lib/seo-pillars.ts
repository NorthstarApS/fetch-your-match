import { SITE_NAME, absoluteUrl, type SeoPillarPath } from "@/lib/site";

export const dnaDisclaimer =
  "MatchFetch bruger ikke DNA, genetiske tests eller påstået videnskabelig sjæle-kompatibilitet. En matchscore er vejledende og bygger på det, I har skrevet: søgning, filtre, intention og profil. Den er ikke et bevis for, at I passer sammen.";

export const fetchSteps = [
  {
    title: "Beskriv dit match",
    body: "Skriv i almindeligt dansk, hvem du leder efter. Alder, område, intention og det, der betyder noget for dig.",
  },
  {
    title: "FETCH",
    body: "Vi omsætter teksten til filtre, du kan rette, og finder profiler der selv har valgt at være synlige.",
  },
  {
    title: "Start samtalen",
    body: "Se hvorfor I matcher, like, og chat frit. Chat er inkluderet på gratis.",
  },
] as const;

export type SeoSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type SeoFaq = { q: string; a: string };

export type SeoPillar = {
  path: SeoPillarPath;
  title: string;
  description: string;
  h1: string;
  lede: string;
  eyebrow: string;
  sections: SeoSection[];
  faqs: SeoFaq[];
};

export const seoPillars: SeoPillar[] = [
  {
    path: "/find-singler",
    title: "Find singler med en søgning | MatchFetch",
    description:
      "Find singler ud fra det, du skriver. FETCH blandt profiler på Datez-netværket, der selv har valgt at være synlige. Ikke DNA. Ikke swipe-først.",
    h1: "Find singler ud fra det, du faktisk leder efter",
    lede: "MatchFetch er dating-søgning. Du beskriver, hvem du leder efter. Så FETCH’er vi profiler, der passer til kriterierne – og som selv har slået synlighed til.",
    eyebrow: "FETCH, ikke tilfældig browsing",
    sections: [
      {
        heading: "Hvad “find singler” betyder her",
        paragraphs: [
          "De fleste “find singler”-sider viser en bunke kort og beder dig bladre. Her starter du med en søgning. Du siger, hvad du leder efter. Vi returnerer profiler, der matcher det – ikke et feed, du skal gætte dig igennem.",
          "Du finder kun personer, der har valgt at kunne findes via MatchFetch. Ingen automatisk synlighed på tværs af Datez-platforme uden samtykke.",
        ],
      },
      {
        heading: "Skriv det, du leder efter",
        paragraphs: [
          "En søgning kan være konkret: alder, Fyn, ikke-ryger, åben for børn, forhold. Den kan også være blødere: natur, hund, rolig hverdag. Teksten bliver til filtre, du kan fjerne eller justere før næste FETCH.",
        ],
        bullets: [
          "Naturligt sprog, ikke en lang formular først",
          "Filtre du selv retter, før du henter igen",
          "Resultater som profiler – navn, alder, område, intention",
        ],
      },
      {
        heading: "Hvor profilerne kommer fra",
        paragraphs: [
          "MatchFetch søger blandt profiler i Datez-netværket: MatchFetch, iDatez, QueerDatez og PartnerHub24. Kun der, hvor personen har slået synlighed til. Én konto kan bruges på tværs, hvis du allerede er i Datez-universet.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kan jeg finde singler i Danmark uden at swipe først?",
        a: "Ja. Den første handling er FETCH: du beskriver dit match, og vi viser relevante profiler. Swipe er ikke startpunktet.",
      },
      {
        q: "Ser jeg alle singler på Datez-netværket?",
        a: "Nej. Du ser kun profiler, der har valgt at være synlige på MatchFetch. Privacy styres af den enkelte.",
      },
      {
        q: "Er det DNA-matching?",
        a: "Nej. Vi sammenligner det, I skriver. Ingen genetik, ingen sjæle-algoritme.",
      },
    ],
  },
  {
    path: "/soeg-efter-et-match",
    title: "Søg efter et match | MatchFetch",
    description:
      "Søg efter et match i almindeligt dansk. FETCH omsætter din tekst til filtre og viser profiler, der passer. Score er vejledende – ikke DNA.",
    h1: "Søg efter et match i almindeligt dansk",
    lede: "Du behøver ikke kende de rigtige filter-navne. Skriv som du ville sige det. FETCH laver søgningen. Du retter det, der blev forstået forkert.",
    eyebrow: "Datingsøgning med FETCH",
    sections: [
      {
        heading: "Søgning først, justering bagefter",
        paragraphs: [
          "En god søgning efter et match er specifik nok til at skære fra – og åben nok til, at der er nogen at tale med. Du starter med teksten. Vi viser chips: alder, område, rygning, intention. Klik en chip væk, eller åbn flere filtre, og FETCH igen.",
          "Hvis resultatet er for smalt, foreslår vi en lille justering – for eksempel afstand. Du beslutter. Vi udvider ikke bag din ryg.",
        ],
      },
      {
        heading: "Hvad søgningen kan rumme",
        paragraphs: [
          "Det, folk typisk skriver, er alder, geografi, datingintention, børn, rygning og et par interesser. Resten kan vente. Progressive filtre er bevidst: ikke 40 felter i ét skema.",
        ],
        bullets: [
          "Alder og afstand",
          "Hvem du vil møde, og hvad du leder efter",
          "Børn, rygning, livsstil, område",
        ],
      },
      {
        heading: "Når I matcher på papiret",
        paragraphs: [
          "“Hvorfor matcher vi?” forklarer overlap med korte sætninger: samme intention, tæt på hinanden, delte interesser. Det er dokumentation for søgningen – ikke en påstand om, at I er skabt for hinanden.",
        ],
      },
    ],
    faqs: [
      {
        q: "Skal jeg bruge særlige søgeord?",
        a: "Nej. Skriv almindeligt dansk. Vi omsætter det til filtre, du kan rette.",
      },
      {
        q: "Kan søgningen gemmes?",
        a: "Gemte Fetches ligger i Plus (29 kr./md.). Gratis har basal Fetch.",
      },
      {
        q: "Hvor præcis er et “match”?",
        a: "Score er vejledende og afrundet. Den bygger på profil og søgning – ikke DNA eller skjult personlighedstest.",
      },
    ],
  },
  {
    path: "/dating-uden-swipe",
    title: "Dating uden swipe-først | MatchFetch",
    description:
      "Dating der starter med FETCH: beskriv dit match, se profiler der passer. Ingen swipe-bunke som første skridt. Matchscore er vejledende, ikke DNA.",
    h1: "Dating der starter med en søgning",
    lede: "Her er den første handling FETCH. Du beskriver, hvem du leder efter, og får profiler tilbage. Kort-bunken er ikke produktet.",
    eyebrow: "Søgning først",
    sections: [
      {
        heading: "Hvad der er anderledes",
        paragraphs: [
          "Swipe-apps er bygget til at bladre. MatchFetch er bygget til at spørge. Du kan stadig like og skrive – men du begynder med kriterier, ikke med det næste ansigt.",
          "Resultaterne er en liste eller et grid: billede, navn, alder, område, intention og en kort begrundelse. Du vælger, hvem du åbner. Du scroller ikke for at “fortjene” et match.",
        ],
      },
      {
        heading: "Når swipe alligevel findes ude i markedet",
        paragraphs: [
          "Hvis du leder efter dating uden swipe som start, er det fordi tilfældig browsing trætter. Det løser vi ikke med et nyt kort-design. Vi løser det med en søgemaskine: FETCH, justér, FETCH igen.",
        ],
      },
      {
        heading: "Samtale uden ekstra trin",
        paragraphs: [
          "Chat er frit på gratis. Fra et resultat kan du gå til profil og samtale. Likes, der er skjulte, og gemte søgninger hører til Plus. Produktet er stadig søgningen – ikke et premium-swipe.",
        ],
      },
    ],
    faqs: [
      {
        q: "Er MatchFetch en swipe-app uden swipe?",
        a: "Nej. Det er dating-søgning. FETCH er handlingen. Resultater vises som profiler, ikke som en bunke du skal bladre for at komme videre.",
      },
      {
        q: "Kan jeg stadig like?",
        a: "Ja. Like, match og chat ligger efter søgningen. Gratis inkluderer basal Fetch, like og chat.",
      },
      {
        q: "Bruger I DNA eller “compatibility science”?",
        a: "Nej. Ingen genetik. Score forklarer overlap i det, I har angivet.",
      },
    ],
  },
  {
    path: "/find-en-der-passer-til-dig",
    title: "Find en, der passer til dig | MatchFetch",
    description:
      "Pasform ud fra det, I begge har sagt – ikke DNA. FETCH finder profiler efter din søgning. Matchscore er vejledende og kan forklares.",
    h1: "Find en, der passer til det, du har sagt",
    lede: "“Passer til dig” betyder her: overlap i det, I har skrevet. Intention, geografi, livsstil, interesser. Ikke en hemmelig personlighedsmodel. Ikke DNA.",
    eyebrow: "Pasform uden falsk videnskab",
    sections: [
      {
        heading: "Hvad vi kan sige – og hvad vi ikke kan",
        paragraphs: [
          "Vi kan sige: I leder begge efter et forhold. I bor inden for den afstand, du satte. I har begge skrevet natur og ikke-ryger. Det er pasform på oplysninger.",
          "Vi kan ikke sige, at I er soulmates, at kemien er målt, eller at et tal beviser fremtiden. Hvis en score vises, er den vejledende, afrundet til hele procent – og du kan åbne begrundelsen.",
        ],
      },
      {
        heading: "Derfor matcher I",
        paragraphs: [
          "Begrundelsen er korte linjer, ikke et essay. Den findes, så du kan se, hvorfor profilen kom med i FETCH – og ignorere den, hvis begrundelsen er tynd.",
        ],
        bullets: [
          "Samme datingintention",
          "Afstand, du selv har valgt",
          "Delte interesser eller livsstil fra profilerne",
        ],
      },
      {
        heading: "Du styrer synlighed",
        paragraphs: [
          "At nogen “passer” giver dem ikke ret til at finde dig. Du vælger, hvor din profil må vises i Datez-netværket. MatchFetch viser kun dem, der har valgt det samme.",
        ],
      },
    ],
    faqs: [
      {
        q: "Er matchscore DNA eller videnskab?",
        a: "Nej. Ingen DNA, ingen genetisk test, ingen påstået sjæle-kompatibilitet. Score summerer overlap i det, I har skrevet, og er vejledende.",
      },
      {
        q: "Hvorfor vises en procent så?",
        a: "For at sortere søgeresultatet. Du skal kunne åbne “Hvorfor matcher vi?” og se grundene. Avanceret score og forklaring er en del af Plus (29 kr./md.).",
      },
      {
        q: "Hvad hvis I ikke passer alligevel?",
        a: "Så passer I ikke. En FETCH er et udvalg, ikke en konklusion. Skriv, like eller gå videre.",
      },
    ],
  },
  {
    path: "/datingsogning",
    title: "Datingsøgning | MatchFetch",
    description:
      "Datingsøgning med FETCH: naturligt sprog, filtre du retter, profiler på Datez-netværket med samtykke. Ikke swipe-først. Ikke DNA-matching.",
    h1: "Datingsøgning på tværs af Datez-netværket",
    lede: "MatchFetch er søgemaskinen i Datez-universet. Du FETCH’er. Vi leder blandt profiler, der har slået MatchFetch-synlighed til – på MatchFetch, iDatez, QueerDatez og PartnerHub24.",
    eyebrow: "Søgemaskine til dating",
    sections: [
      {
        heading: "Søgning, ikke et nyt logo på samme feed",
        paragraphs: [
          "Datingsøgning her betyder: en forespørgsel, et resultat, en forklaring. Ikke et uendeligt kort. FETCH er brand-handlingen – samme betydning som “søg”, men det er den knap og det verbum, produktet er bygget omkring.",
        ],
      },
      {
        heading: "Netværket, uden skjult kryds-synlighed",
        paragraphs: [
          "Én Datez-konto kan række til flere måder at date på. Det er ikke det samme som, at din profil ligger åben overalt. Hver platform har en synlighedsafbryder. MatchFetch respekterer den.",
        ],
        bullets: [
          "MatchFetch – søgning",
          "iDatez – dating bredt",
          "QueerDatez – LGBTQ+",
          "PartnerHub24 – seriøst",
        ],
      },
      {
        heading: "Hvad en datingsøgning ikke er",
        paragraphs: [
          "Det er ikke en chatbot, der dater for dig. Det er ikke en database-formular fra 2010. Det er ikke DNA. Teknologien sidder bag kriterierne. Menneskene er i resultatet.",
        ],
      },
    ],
    faqs: [
      {
        q: "Hvad er datingsøgning på MatchFetch?",
        a: "Du beskriver et match, trykker FETCH, og får profiler der matcher filtrene og har givet samtykke til at blive fundet.",
      },
      {
        q: "Søger I på hele internettet?",
        a: "Nej. Kun Datez-netværket, og kun profiler med MatchFetch slået til.",
      },
      {
        q: "Koster det at søge?",
        a: "Basal Fetch er gratis. Plus er 29 kr./md. med avanceret Fetch og gemte søgninger. Datez+ er 49 kr./md. med premium på hele netværket.",
      },
    ],
  },
  {
    path: "/soeg-med-en-bedre-profil",
    title: "Søg med en bedre profil | MatchFetch",
    description:
      "En tydelig profil gør FETCH mere præcis – for dig og for dem, der leder efter dig. Gratis, Plus 29 kr./md. og Datez+ 49 kr./md. Ikke DNA.",
    h1: "Søg med en profil, der kan læses",
    lede: "FETCH bliver skarpere, når profilen siger det samme som søgningen: intention, hverdag, det du vil og det du ikke vil. En “bedre profil” er tydelig – ikke iscenesat, og ikke et DNA-stempel.",
    eyebrow: "Profil + FETCH",
    sections: [
      {
        heading: "Hvad der faktisk hjælper en søgning",
        paragraphs: [
          "Skriv datingintention. Skriv område. Skriv et par konkrete ting (hund, skov, by, børn, ro). Brug prompts, hvis du har dem: en søndag, et bonuspoint, noget du bliver for optaget af. Det er de felter, både din FETCH og andres FETCH kan ramme.",
          "Billeder skal ligne dig. Tomme slogans (“bare vær dig selv”) giver tomme begrundelser. Vi opfinder ikke dybde, du ikke har skrevet.",
        ],
      },
      {
        heading: "Synlighed er en del af profilen",
        paragraphs: [
          "En god profil, der er slået fra på MatchFetch, kan ikke findes her. Tjek hvor du må vises. Det er ikke skjult i en undersøgelse – det er en del af privatlivet i Datez-netværket.",
        ],
      },
      {
        heading: "Hvad Plus og Datez+ ændrer",
        paragraphs: [
          "Gratis: opret profil, basal Fetch, se profiler, like, match, chat, basale filtre. Plus (29 kr./md.): avanceret Fetch, alle relevante filtre, se hvem der liker dig, avanceret score, “Hvorfor matcher vi?”, gemte Fetches, ekstra synlighed. Datez+ (49 kr./md.): alt i Plus plus premium på iDatez, QueerDatez, PartnerHub24 og MatchFetch.",
          "Ingen binding. Ingen skjulte gebyrer. Opsig når du vil. Vi oplyser ikke brugerantal eller “success rates”, vi ikke kan dokumentere.",
        ],
      },
    ],
    faqs: [
      {
        q: "Gør Plus min profil “bedre” automatisk?",
        a: "Nej. Plus kan give ekstra synlighed og gemte Fetches. Teksten og billederne er stadig dit ansvar.",
      },
      {
        q: "Hvad koster det?",
        a: "Gratis er 0 kr. Plus er 29 kr./md. Datez+ er 49 kr./md.",
      },
      {
        q: "Bliver min profil DNA-vurderet?",
        a: "Nej. Ingen DNA, ingen genetisk score. Andre FETCH’er dig ud fra det, du har skrevet og slået til.",
      },
    ],
  },
];

export function getSeoPillar(path: SeoPillarPath) {
  const pillar = seoPillars.find((p) => p.path === path);
  if (!pillar) throw new Error(`Unknown SEO pillar: ${path}`);
  return pillar;
}

export function seoPillarHead(path: SeoPillarPath) {
  const pillar = getSeoPillar(path);
  const url = absoluteUrl(pillar.path);
  return {
    meta: [
      { title: pillar.title },
      { name: "description", content: pillar.description },
      { property: "og:title", content: pillar.title },
      { property: "og:description", content: pillar.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: "da_DK" },
      { property: "og:site_name", content: SITE_NAME },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pillar.title },
      { name: "twitter:description", content: pillar.description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${url}#webpage`,
              url,
              name: pillar.h1,
              description: pillar.description,
              inLanguage: "da",
              isPartOf: { "@type": "WebSite", name: SITE_NAME, url: absoluteUrl("/") },
            },
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              mainEntity: pillar.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: SITE_NAME, item: absoluteUrl("/fetch") },
                { "@type": "ListItem", position: 2, name: pillar.h1, item: url },
              ],
            },
          ],
        }),
      },
    ],
  };
}
