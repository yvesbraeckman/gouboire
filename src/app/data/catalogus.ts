/**
 * Metadata van de downloadbare catalogus.
 *
 * Bewust géén "prijslijst": het document bevat geen prijzen. Die verschillen
 * per klant en worden op aanvraag gegeven.
 *
 * Bijwerken = de PDF vervangen in `public/catalogus/` en hieronder de
 * bestandsnaam, grootte en editie aanpassen. Meer dan één document (bijvoorbeeld
 * apart per regio) kan gewoon aan deze array toegevoegd worden; de layout past
 * zich aan.
 */
export interface Catalogus {
  readonly titel: string;
  readonly omschrijving: string;
  readonly bestand: string;
  readonly grootte: string;
  readonly bijgewerkt: string;
}

export const CATALOGI: readonly Catalogus[] = [
  {
    titel: 'Catalogus 2026',
    omschrijving:
      'Het volledige aanbod, per regio geordend. Prijzen op aanvraag — ' +
      'neem gerust contact op.',
    bestand: 'catalogus/gouboire-catalogus-2026.pdf',
    grootte: '9,7 MB',
    bijgewerkt: 'editie 2026',
  },
];
