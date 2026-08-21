import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

export type Network = "MatchFetch" | "iDatez" | "QueerDatez" | "PartnerHub24";

export type Profile = {
  id: string;
  name: string;
  age: number;
  city: string;
  distanceKm: number;
  score: number;
  photo: string;
  blurb: string;
  tags: string[];
  intention: string;
  network: Network;
  reasons: string[];
  prompts: { q: string; a: string }[];
};

export const profiles: Profile[] = [
  {
    id: "emma",
    name: "Emma",
    age: 31,
    city: "Odense",
    distanceKm: 12,
    score: 91,
    photo: p1,
    blurb: "Jeg leder efter en, der både gider spontane ture og søndag på sofaen.",
    tags: ["Rejser", "Hund", "Natur", "Ikke-ryger"],
    intention: "Forhold",
    network: "iDatez",
    reasons: [
      "I søger begge et forhold",
      "I bor 12 km fra hinanden",
      "I deler 4 interesser: natur, rejser, hund, madlavning",
      "I har begge angivet, at familie er vigtigt",
      "I er begge ikke-rygere",
    ],
    prompts: [
      { q: "Min perfekte søndag er…", a: "Morgentur i skoven, brunch og alt for lang tid i køkkenet." },
      { q: "Du får bonuspoint hvis…", a: "Du siger ja til en spontan tur til Ærø." },
    ],
  },
  {
    id: "mikkel",
    name: "Mikkel",
    age: 36,
    city: "Svendborg",
    distanceKm: 31,
    score: 88,
    photo: p2,
    blurb: "Skovture, brætspil og en klar plan om at finde noget, der holder.",
    tags: ["Natur", "Har børn", "Ikke-ryger", "Løb"],
    intention: "Forhold",
    network: "MatchFetch",
    reasons: [
      "I søger begge et forhold",
      "I har begge børn og er åbne for flere",
      "I deler interessen for natur og løb",
      "Han er inden for din afstand på 40 km",
    ],
    prompts: [
      { q: "Jeg bliver alt for engageret, når…", a: "Nogen nævner brætspilsregler forkert." },
      { q: "Min perfekte søndag er…", a: "Løbetur, bagværk og ingen aftaler." },
    ],
  },
  {
    id: "sara",
    name: "Sara",
    age: 29,
    city: "Odense",
    distanceKm: 6,
    score: 86,
    photo: p3,
    blurb: "Griner højt, planlægger dårligt, elsker byen og lange middage.",
    tags: ["Mad", "Kultur", "Rejser", "Forhold"],
    intention: "Forhold",
    network: "QueerDatez",
    reasons: [
      "I bor 6 km fra hinanden",
      "I deler 3 interesser: mad, kultur, rejser",
      "I søger begge noget seriøst",
    ],
    prompts: [
      { q: "Du får bonuspoint hvis…", a: "Du kender et sted med god pasta og dårlig belysning." },
      { q: "Min perfekte søndag er…", a: "Loppemarked og biograf om aftenen." },
    ],
  },
  {
    id: "line",
    name: "Line",
    age: 41,
    city: "Nyborg",
    distanceKm: 24,
    score: 84,
    photo: p4,
    blurb: "Hund, hav og hjemmebag. Søger nogen at dele hverdagen med.",
    tags: ["Hund", "Strand", "Har børn", "Ikke-ryger"],
    intention: "Forhold",
    network: "PartnerHub24",
    reasons: [
      "I er begge ikke-rygere",
      "I deler interessen for natur og dyr",
      "I søger begge et forhold",
    ],
    prompts: [
      { q: "Min perfekte søndag er…", a: "Vinterbadning og bagefter kaffe i en bunke tæpper." },
      { q: "Jeg bliver alt for engageret, når…", a: "Nogen roser min hund." },
    ],
  },
  {
    id: "jonas",
    name: "Jonas",
    age: 34,
    city: "Middelfart",
    distanceKm: 38,
    score: 81,
    photo: p5,
    blurb: "Arkitekt, elsker byture, dårlige ordspil og gode planer.",
    tags: ["Design", "Cykling", "Kaffe", "Forhold"],
    intention: "Forhold",
    network: "iDatez",
    reasons: [
      "I nævner begge rejser i jeres profiler",
      "I søger begge et forhold",
      "Han er inden for din udvidede afstand",
    ],
    prompts: [
      { q: "Du får bonuspoint hvis…", a: "Du gider cykle 20 km for en is." },
      { q: "Min perfekte søndag er…", a: "Museum, kaffe, ingen alarm." },
    ],
  },
  {
    id: "amalie",
    name: "Amalie",
    age: 30,
    city: "Odense",
    distanceKm: 9,
    score: 79,
    photo: p6,
    blurb: "Ny i byen. Søger nogen at udforske Fyn med – helst over lang tid.",
    tags: ["Natur", "Musik", "Ikke-ryger", "Vil have børn"],
    intention: "Forhold",
    network: "MatchFetch",
    reasons: [
      "I vil begge gerne have børn",
      "I bor 9 km fra hinanden",
      "I deler interessen for natur og musik",
    ],
    prompts: [
      { q: "Min perfekte søndag er…", a: "Ny rute, ny café, gammel playliste." },
      { q: "Jeg bliver alt for engageret, når…", a: "Vi laver fælles playlister." },
    ],
  },
];

export const defaultChips = ["30–40 år", "Fyn", "Ikke-ryger", "Forhold", "Maks 25 km"];

export const examplePrompt =
  "Jeg leder efter en mand mellem 35 og 45, helst på Fyn. Han må gerne have børn, være ikke-ryger og være klar på et seriøst forhold.";

export const networks: { name: Network; note: string }[] = [
  { name: "MatchFetch", note: "Søgning" },
  { name: "iDatez", note: "Dating bredt" },
  { name: "QueerDatez", note: "LGBTQ+" },
  { name: "PartnerHub24", note: "Seriøst" },
];

export function getProfile(id: string) {
  return profiles.find((p) => p.id === id);
}
