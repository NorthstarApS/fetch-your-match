export const plans = [
  {
    name: "Gratis",
    price: "0 kr.",
    highlight: false,
    features: [
      "Opret profil",
      "Basal Fetch",
      "Se profiler",
      "Like og match",
      "Chat frit",
      "Basale filtre",
    ],
  },
  {
    name: "Plus",
    price: "29 kr./md.",
    highlight: true,
    features: [
      "Advanced Fetch",
      "Ubegrænsede likes",
      "Alle relevante filtre",
      "Se hvem der liker dig",
      "Avanceret matchscore",
      "“Hvorfor matcher vi?”",
      "Gemte Fetches",
      "Ekstra synlighed",
    ],
  },
  {
    name: "Datez+",
    price: "49 kr./md.",
    highlight: false,
    features: [
      "Alt i Plus",
      "Premium på hele Datez-netværket",
      "iDatez",
      "QueerDatez",
      "PartnerHub24",
      "MatchFetch",
    ],
  },
] as const;
