// Menu data for Online Shop
export const categories = [
  { id: 178, name: 'PHỞ & SÚP · Suppen' },
  { id: 177, name: 'KHAI VỊ · Vorspeisen' },
  { id: 176, name: 'ĐẶC SẢN VỊT · Entengerichte' },
  { id: 175, name: 'MÓN CHÍNH · Hauptgerichte' },
  { id: 174, name: 'MÓN CHAY · Vegane Küche' },
  { id: 170, name: 'BÚN & MÌ · Nudelgerichte' },
]

export const menuItems = [
  {
    id: 13820, catId: 178,
    name: 'I LOVE PHO – Vietnamese Pho Soup',
    allergens: 'F',
    description: 'Kräftig klare Brühe mit Reisbandnudeln, vietnamesischen Kräutern, Zwiebeln und Koriander · Aromatic clear broth with rice noodles, Vietnamese herbs, onions and coriander · Pho ist das beliebteste Nationalgericht Vietnams',
    variants: [
      { label: 'a) Hähnchen / Chicken', price: 13.90 },
      { label: 'b) Rindfleisch / Beef', price: 14.90 },
      { label: 'c) Garnelen / Prawns', price: 14.90 },
      { label: 'd) Tofu (vegan)', price: 12.90 },
    ],
  },

  {
    id: 13815, catId: 177,
    name: '05. PFANNKUCHEN – VIETNAMESE PANCAKES',
    allergens: 'A,B,D,K,G',
    description: 'Hausgemachte Pfannkuchen gefüllt mit Entenstreifen, Gurkenstreifen, Salat, Koriander, Sesam & Erdnüssen, dazu Hoisin-Erdnuss-Soße',
    price: 5.50,
  },
  {
    id: 13814, catId: 177,
    name: '06. SOMMERROLLEN – CLASSIC SUMMERROLLS',
    allergens: 'B,K,G',
    description: 'Zwei vietnamesische Reispapierrollen gefüllt Reisnudeln, Salat, Gurkenstreifen, Karottenstreifen & vietn. Kräutern zum Dippen in Erdnuss-Hoisin-Sauce, wählbar mit:',
    variants: [
      { label: 'a) Ente', price: 5.50 },
      { label: 'b) Gemischt (Huhn, Tofu & Garnelen)', price: 5.50 },
      { label: 'c) Wok Rindfleisch', price: 5.50 },
      { label: 'd) Tofu', price: 5.50 },
    ],
  },
  {
    id: 13809, catId: 177,
    name: '07A. FRÜHLINGSROLLEN – SPRING ROLLS',
    allergens: 'D,C,K',
    description: 'Klassisch mit gehacktem Schweinefleisch. Serviert mit süßer Limetten-Fisch Sauce.',
    price: 5.50,
  },
  {
    id: 17596, catId: 177,
    name: '07B. MINI FRÜHLINGSROLLEN – Spring Rolls',
    allergens: 'D,C,K',
    vegan: true,
    description: 'Mini-Vegetarische Frühlingsrollen gefüllt mit Gemüse zum Dippen in Süß-Chilli Sosse',
    price: 4.50,
  },
  {
    id: 13807, catId: 177,
    name: '08. GRÜNE PAPAYA – PAPAYA SALAD',
    allergens: 'B,C,K',
    spicy: 2,
    description: 'Erfrischend scharfer grüne Papaya-Julienne, Chilli, Koriander, vietnamesischen Kräuter & geröstete Erdnüsse, mit süß-sauer-scharfem Dressing. Wahlweise mit:',
    variants: [
      { label: 'a. Garnelen', price: 7.50 },
      { label: 'b. Tofu & Seitan', price: 7.50 },
    ],
  },
  {
    id: 13806, catId: 177,
    name: '09. GRÜNE MANGO – MANGO SALAD',
    allergens: 'K,C,B',
    spicy: 1,
    description: 'Salat mit Mangostreifen, Lotusstengel, Karottenstreifen, Sprossen, gerösteten Erdnüssen, Sesam, vietnamesischen Kräutern & süßem Limetten Dressing. Wahlweise mit:',
    variants: [
      { label: 'a) Wok Rindfleisch', price: 6.50 },
      { label: 'b) Tofu & Seitan', price: 6.00 },
    ],
  },
  {
    id: 13805, catId: 177,
    name: '10. CHA LA LOT – BEEF WRAPPED IN LOLOT LEAF',
    allergens: 'K,B',
    description: 'Zartes Rinderhack in saftig grünen Betelblätter gewickelt und gebraten, serviert mit Limetten-Fisch-Vinaigrette, verfeinert mit Sesam',
    price: 5.50,
  },
  {
    id: 13804, catId: 177,
    name: '11. SATAY GA – CHICKEN SKEWERS',
    allergens: 'B',
    description: 'Marinierte Hühnerspieße gegrillt, zum Dippen mit hausgemachter Erdnusssoße',
    price: 5.50,
  },
  {
    id: 13803, catId: 177,
    name: '12. GYOZA BAKED DUMPLINGS',
    allergens: 'B',
    description: 'Gold gebackene Teigtaschen mit süß-scharfem Dressing. Wahlweise mit:',
    variants: [
      { label: 'a. Hühnerfleisch / chicken', price: 5.50 },
      { label: 'b. Vegetarisch mit Gemüse / Vegan', price: 5.50 },
    ],
  },
  {
    id: 17588, catId: 177,
    name: '14. STEAMED BAO BUNS',
    allergens: 'B,D,K',
    description: 'Zwei Mini-Hefeteilchen gefüllt mit Entenfiletstreifen, Salat, Gurken- und Karottenstreifen, verfeinert mit Koriander in Spicy-Mayo-Soße.',
    price: 6.50,
  },


  {
    id: 13802, catId: 176,
    name: '20. VIT MANGO – MANGO DUCK',
    allergens: 'D,G,K,I',
    description: 'Gegrillte Ente in frischer Mango-Kokosnussmilch Soße, dazu grünem Gemüse und Mangostücken, serviert mit knusprig panierte Kartoffelbällchen, verfeinert mit Sesam',
    price: 14.50,
  },
  {
    id: 13801, catId: 176,
    name: '21. VIT ORANGE – ORANGE DUCK',
    allergens: 'D,G,K',
    description: 'Gegrillte Ente in frischer Orangen-Kokosnussmilch Soße, dazu Orangenstücke und Salat, serviert mit Jasminreis',
    price: 14.50,
  },
  {
    id: 13800, catId: 176,
    name: '22. VIT NONG XEO – DUCK HOT PAN',
    allergens: 'D,G,L,K,I',
    description: 'Ente mit Wokgeschwenktem grünem Gemüse, übergossen mit Chop Soy Soße, in der heißen Platte serviert. Dazu Jasminreis',
    price: 14.90,
  },
  {
    id: 13799, catId: 176,
    name: '23. VIT QUAY GION – DUCK OYSTER',
    allergens: 'D,K,N,I',
    description: 'Ente mit Wokgeschwenktem grünen Gemüse & Pakchoi, verfeinert mit Austernsoße. Serviert mit Jasminreis',
    price: 14.50,
  },
  {
    id: 13798, catId: 176,
    name: '24. VIT CURRY DO – RED CURRY DUCK',
    allergens: 'B,D,G,I,K',
    spicy: 2,
    description: 'Gegrillte Ente in pikanter roten Thai-Curry Kokosnussmilchsoße, verfeinert mit Limettengras, Galgant & Limettenblättern, grünem Gemüse, serviert mit Jasminreis',
    price: 14.50,
  },
  {
    id: 13797, catId: 176,
    name: '25. VIT GION ERDNUSS – PEANUT DUCK',
    allergens: 'B,D,G,I,K',
    description: 'Gegrillte Ente in hausgemachter Erdnuss-Kokosmilchsoße mit grünem Gemüse, verfeinert mit gerösteten Erdnüssen, serviert mit Duftreis',
    price: 14.50,
  },
  {
    id: 16488, catId: 176,
    name: '26. PEKING DUCK NOODLES',
    allergens: '',
    description: 'Gegrillte Ente auf gebratenen Reisbandnudeln mit frischem Gemüse, Erdnüssen, Röstzwiebeln & vietnamesischen Kräutern',
    price: 14.90,
    extras: [
      { label: 'Extra Schale Curry Sosse', price: 2.50 },
      { label: 'Extra Schale Erdnussosse', price: 2.50 },
    ],
  },
  {
    id: 17152, catId: 176,
    name: '27. UDON DUCK',
    allergens: '',
    description: 'Gegrillte Ente auf gebratene Udon-Nudeln mit grünem Gemüse, herzhafter Sojareduktion, verfeinert mit Erdnüssen & Röstzwiebeln und Koriander',
    price: 14.90,
  },

  // ── CLASSIC MAIN COURSE (175) ──────────────────────────────────────────
  {
    id: 16489, catId: 175,
    name: '30. DUI GA – CRISPY TERIYAKI CHICKEN',
    allergens: 'I, K',
    description: 'Knuspriges Hühnerschenkel ohne Knochen in herzhafter Austernsoße mit grünes Gemüse, verfeinert mit Koriander und Teriyaki Soße, serviert mit Jasminreis',
    price: 12.50,
  },
  {
    id: 13796, catId: 175,
    name: '31. GA NUONG VUNG – GRILLED TAMARINDE CHICKEN',
    allergens: 'I,K',
    description: 'Zartes mariniertes Hühnerfilet gegrillt, dazu gedämpftes grünes Gemüse, hausgemachte Süß-sauer-scharfe Soße aus der Tamarinde-frucht, serviert mit Jasminreis',
    price: 12.50,
  },
  {
    id: 13795, catId: 175,
    name: '34. BO XAO CAY TOI – HOT GARLIC BEEF',
    allergens: 'I,K,C',
    spicy: 2,
    description: 'Im Wok geschwenkter Angus Beefspitzen mit grünem Wokgemüse verfeinert mit Knoblauch & Chilli Soße, serviert mit Jasminreis',
    price: 12.50,
  },
  {
    id: 13794, catId: 175,
    name: '35. THAP CAM XEO – MIX & MATCH PLATE',
    allergens: 'I,K,C',
    description: 'Im Wok geschwenkte Garnelen, Hühnerfleisch, Rindfleisch, dazu grünem Gemüse, übergossen mit Austernsoße, verfeinert mit Sesam, Koriander & Jasminreis, serviert in der heißen Platte',
    price: 14.90,
  },
  {
    id: 13792, catId: 175,
    name: '36. SALMON BOWL',
    allergens: 'I,K,C',
    description: 'Gebratenes Lachsfilet auf Wokgemüse, abgeschmeckt mit dunkler würzigen Sauce, verfeinert mit Sesam & Koriander, serviert mit Duftreis',
    price: 14.90,
  },

]
