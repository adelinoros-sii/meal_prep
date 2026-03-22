/** Estimări orientative; ajustează după cântar și progres săptămânal. */

export const profile = {
  weightKg: 94,
  age: 27,
  goalKgLoss: 8,
  trainingPerWeek: 4,
  trainingTime:
    "Sală după ora 19:00 — o masă densă (paste + pui) înainte de antrenament, ovăz după; nu mai ai nevoie de două porții identice cu cartofi.",
  note:
    "Țintă: ~0,5–0,7 kg/săptămână (deficit moderat). Dacă energia scade sau antrenamentul suferă: +15 g paste uscat sau +1 albuș la omletă. Dacă ai foame după sală, verifică mai întâi hidratarea.",
};

/** Jumătate cupă = jumătate din cupa măsură din tub (nu pahar); ~15 g pudră tipic ISO. */
export const wheyNote =
  "Genius Nutrition ISO Whey X5: jumătate cupă (scoop) — verifică pe etichetă (≈12–15 g proteine per ½ scoop).";

export const dailyTotals = {
  kcal: "~2050–2150",
  proteinG: "~175–185",
  note: "O singură masă cu cartofi/zi; paste cu pui înainte de sală; ovăz + whey după antrenament (ultima masă).",
};

export const meals = [
  {
    id: "breakfast",
    title: "Mic dejun — omletă în lipie",
    items: [
      "1× lipie integrală (≈45–55 g)",
      "3× ouă mari",
      "25 g șuncă de pui",
      "20–25 g cașcaval afumat / mix light",
      "Opțional: ardei, spanac congelat, ceapă (fără ulei în plus dacă folosești tigaie antiaderentă)",
    ],
    kcal: "~470–510",
    protein: "~32–36 g",
  },
  {
    id: "lunch",
    title: "Prânz — piept de pui + cartofi fierți",
    items: [
      "155 g piept de pui la cuptor (porție cântărită gătită)",
      "300 g cartofi fierți (cântărit gata fierți)",
      "100 g salată / murături / legume crude",
      "Condimente: sare, piper, ierburi (fără sosuri calorice mari)",
    ],
    kcal: "~410–440",
    protein: "~40–44 g",
  },
  {
    id: "prewo",
    title: "Înainte de sală (~17:30–18:30) — paste cu pui",
    items: [
      "65 g paste uscat (penne / fusilli / spaghetti; cântărit înainte de fierbere)",
      "145 g piept de pui la cuptor / la tigaie (bucăți mici, condimentat)",
      "150–200 g sos de roșii (passata / pulpă) + ceapă, usturoi, busuioc",
      "100 g legume (ardei, ciuperci, spanac) — opțional în aceeași tigaie",
      "1 linguriță ulei măsline (max.) sau gătire cu spray / tigaie antiaderentă",
    ],
    kcal: "~480–520",
    protein: "~44–48 g",
  },
  {
    id: "prewo2",
    title: "Opțional — doar dacă ultima masă a fost cu >4 h înainte de sală",
    items: [
      "½ banană mică sau 1 banană mică (~80–100 g) — cu 45–60 min înainte de antrenament",
    ],
    kcal: "~50–90",
    protein: "~0,5 g",
  },
  {
    id: "dinner",
    title: "După antrenament — ovăz + ½ scoop proteine (ultima masă)",
    items: [
      "70 g ovăz (uscat)",
      "80 g iaurt proteic Milbona (Lidl)",
      "210 ml lapte proteic Milbona (Lidl) — sau lapte + pudră dacă îți place consistența",
      "½ cupă (scoop) Genius Nutrition ISO Whey X5 — amestecă în lapte rece înainte de a turna peste ovăz",
      "⅕ linguriță semințe chia (sau 1 linguriță împărțită la 5 zile — aici porție zilnică mică)",
      "⅕ banană (felii subțiri)",
      "⅕ kiwi",
      "Scorțișoară",
    ],
    kcal: "~540–580",
    protein: "~48–55 g",
  },
];

export const shoppingLidl = [
  {
    category: "Proteine & lactate",
    items: [
      "Lapte proteic Milbona (Lidl) — ~1,5 l/săpt (210 ml × 7)",
      "Iaurt proteic Milbona (Lidl) — ~560 g/săpt (80 g × 7)",
      "Ouă — 21 buc/săpt (3 × 7 omlete)",
      "Piept de pui — ~2,1–2,3 kg/săpt (total ~300 g gătit/zi la cele două mese cu pui)",
      "Șuncă de pui — ~200 g/săpt (25 g × 7)",
      "Cașcaval afumat / mix light — ~200 g/săpt (20–25 g × 7)",
    ],
  },
  {
    category: "Carbohidrați & fibre",
    items: [
      "Cartofi — ~2,1–2,3 kg/săpt (300 g fierți/zi la prânz; pierdere mică la fiert față de greutatea cumpărată)",
      "Paste grâu integral / normale — ~450–500 g uscat/săpt (65 g × 7 ≈ 455 g)",
      "Passata / pulpă de roșii — 2–3 borcane sau cutii",
      "Ovăz — ~500 g pachet (70 g × 7 ≈ 490 g)",
      "Lipii integrale — 7 buc (una/zi)",
      "Banane — ~8 buc/săpt (opțional ½ pre-WO + ⅕ în ovăz × 7)",
      "Kiwi — ~2–3 buc/săpt (⅕ kiwi/zi)",
    ],
  },
  {
    category: "Extra",
    items: [
      "Semințe chia (dacă nu ai)",
      "Salată / roșii / castraveți / murături (borcan)",
      "Scorțișoară",
      "Genius Nutrition ISO Whey X5 (nu e la Lidl — ia din magazin suplimente / online)",
    ],
  },
];

export const carbNotes =
  "Cartofi: o singură porție/zi (300 g fierți) ține carbohidrații din zona veche a prânzului. Paste: 65 g uscat ≈ carbohidrați similari cu o porție medie de orez/paste clasice; dacă folosești paste integrale, poți urca la 70 g uscat. Timing: mănâncă pastele cu 1–1,5 h înainte de sală ca să nu alergi cu stomacul plin.";
