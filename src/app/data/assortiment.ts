/**
 * Het assortiment: de twee regio's en de wijnen die uitgelicht worden.
 *
 * Bijwerken gebeurt uitsluitend hier. Een wijn vervangen of toevoegen is één
 * blok in `UITGELICHT`; de layout past zich aan.
 */

export interface Regio {
  readonly naam: string;
  readonly rol: string;
  readonly motief: 'bergen' | 'rank';
  readonly tekst: string;
}

export interface Wijn {
  /** Producent, in gewone kapitalisatie — de kapitalen komen uit de CSS. */
  readonly huis: string;
  readonly wijn: string;
  readonly streek: string;
  readonly land: string;
  readonly tekst: string;
  /** Pad in `public/beeld/`. Leeg zolang de packshot ontbreekt. */
  readonly foto?: string;
}

export const REGIOS: readonly Regio[] = [
  {
    naam: 'Zuid-Afrika',
    rol: 'Het hart',
    motief: 'bergen',
    tekst:
      'Het grootste deel van de kaart. Van de koele hellingen aan de kust tot ' +
      'de droge schistbodems van het binnenland — elke streek geeft een ander ' +
      'glas.',
  },
  {
    naam: 'Europa',
    rol: 'De aanvulling',
    motief: 'rank',
    tekst:
      'Een kleinere, bewust gehouden selectie, gegroeid uit reizen naar regio’s ' +
      'waar gastronomie en wijn onlosmakelijk verbonden zijn.',
  },
];

export const UITGELICHT: readonly Wijn[] = [
  {
    huis: 'Raats Family Wines',
    wijn: 'Chenin Blanc Old Vine',
    streek: 'Stellenbosch',
    land: 'Zuid-Afrika',
    foto: 'beeld/wijn-raats-chenin-blanc.png',
    tekst:
      'Een premium Chenin Blanc van oude wijnstokken, gemaakt door één van ' +
      'Zuid-Afrika’s meest gerenommeerde Chenin Blanc-wijnmakers. Rijk, ' +
      'verfijnd en complex: een wijn die perfect laat zien waarom Stellenbosch ' +
      'tot de wereldtop behoort.',
  },
  {
    huis: 'Ataraxia',
    wijn: 'Sauvignon Blanc',
    streek: 'Hemel-en-Aarde',
    land: 'Zuid-Afrika',
    foto: 'beeld/wijn-ataraxia-sauvignon-blanc.png',
    tekst:
      'Een verfijnde Sauvignon Blanc uit het koele Hemel-en-Aarde, waar ' +
      'mineraliteit, frisheid en elegantie perfect samenkomen. De levendige ' +
      'citrusaroma’s, strakke zuren en zuivere stijl maken dit een wijn die ' +
      'zowel aperitief als aan tafel indrukwekkend presteert.',
  },
  {
    huis: 'Maree Family Wines',
    wijn: 'Pieter and the Jackal',
    streek: 'Stellenbosch',
    land: 'Zuid-Afrika',
    tekst:
      'Een krachtige en elegante blend van Shiraz en Cabernet Sauvignon uit ' +
      'topwijngaarden in Stellenbosch, gerijpt op Franse eiken vaten voor extra ' +
      'diepgang en finesse. Een wijn met een authentiek Zuid-Afrikaans ' +
      'familieverhaal die elke liefhebber van karaktervolle rode wijn weet te ' +
      'verleiden.',
  },
  {
    huis: 'La Brune',
    wijn: 'Pinot Noir',
    streek: 'Elgin',
    land: 'Zuid-Afrika',
    foto: 'beeld/wijn-la-brune-pinot-noir.png',
    tekst:
      'Voor liefhebbers van Bourgogne die een uitzonderlijke ontdekking uit ' +
      'Zuid-Afrika zoeken: deze Pinot Noir combineert verfijning, puur rood ' +
      'fruit en een indrukwekkende terroirexpressie. Met een score van 96/100 ' +
      'van Tim Atkin bewijst La Brune dat Elgin tot de beste ' +
      'Pinot Noir-regio’s van het zuidelijk halfrond behoort.',
  },
];
