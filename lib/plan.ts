/** Estimări orientative; ajustează după cântar și progres săptămânal. */

export const profile = {
  weightKg: 94,
  age: 27,
  goalKgLoss: 8,
  trainingPerWeek: 4,
  note:
    "Țintă: ~0,5–0,7 kg/săptămână (deficit moderat). Dacă energia scade prea mult sau antrenamentul suferă, adaugă +20–30 g cartofi la prânz/cină sau +1 albuș la omletă.",
};

/** Jumătate cupă = jumătate din cupa măsură din tub (nu pahar); ~15 g pudră tipic ISO. */
export const wheyNote =
  "Genius Nutrition ISO Whey X5: jumătate cupă (scoop) — verifică pe etichetă (≈12–15 g proteine per ½ scoop).";

export const dailyTotals = {
  kcal: "~2060–2140",
  proteinG: "~175–185",
  note: "Fără gustarea cu toast. Prânz + post-antrenament identice (cartofi în loc de orez).",
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
      "160 g piept de pui la cuptor (crud cântărit ~185–195 g; după gătire ~160 g)",
      "300 g cartofi fierți (cântărit gata fierți — echivalent aprox. cu porția ta veche de orez + legume ca carbohidrați)",
      "100 g salată / murături / legume crude",
      "Condimente: sare, piper, ierburi (fără sosuri calorice mari)",
    ],
    kcal: "~420–450",
    protein: "~42–46 g",
  },
  {
    id: "prewo",
    title: "Pre-antrenament",
    items: ["1× banană medie (≈100–120 g)"],
    kcal: "~95–105",
    protein: "~1 g",
  },
  {
    id: "postwo",
    title: "Post-antrenament — aceeași masă ca la prânz",
    items: [
      "160 g piept de pui la cuptor",
      "300 g cartofi fierți",
      "100 g salată / murături",
    ],
    kcal: "~420–450",
    protein: "~42–46 g",
  },
  {
    id: "dinner",
    title: "Cină — ovăz (ultima masă) + ½ scoop proteine",
    items: [
      "70 g ovăz (uscat)",
      "80 g iaurt proteic",
      "210 ml lapte proteic (sau lapte + pudră dacă îți place consistența)",
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
      "Lapte proteic / semidegresat — ~1,5 l/săpt (210 ml × 7 zile + marjă)",
      "Iaurt proteic — ~600 g/săpt (80 g × 7)",
      "Ouă — 21 buc/săpt (3 × 7 omlete)",
      "Piept de pui — ~2,6–2,8 kg brut/săpt (pentru 2 × ~185 g brut/zi la prânz + post-WO; ajustează după pierdere la gătire)",
      "Șuncă de pui — ~200 g/săpt (25 g × 7)",
      "Cașcaval afumat / mix light — ~200 g/săpt (20–25 g × 7)",
    ],
  },
  {
    category: "Carbohidrați & fibre",
    items: [
      "Cartofi — ~4,5–5 kg brut/săpt (pentru 2 × 300 g fierți/zi; coaja pierde apă — ia puțin peste nevoia netă)",
      "Ovăz — ~500 g pachet (70 g × 7 ≈ 490 g)",
      "Lipii integrale — 7 buc (una/zi)",
      "Banane — ~9 buc/săpt (1 întreagă pre-WO + ⅕ × 7 pentru ovăz ≈ 1,4 banane extra → rotunjit 2 pachete mici sau cumpără la kilogram)",
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

export const potatoRationale =
  "300 g cartofi fierți aduc aprox. același ordin de mărime de carbohidrați ca 200 g orez gătit cu legume din planul inițial; dacă vrei mai strict, cântărește o săptămână și ajustează ±30 g.";
