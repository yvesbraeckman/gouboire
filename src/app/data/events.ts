/**
 * De agenda. Bijwerken gebeurt uitsluitend hier.
 *
 * `datum` stuurt zowel de sortering als het automatisch verbergen: wat voorbij
 * is, verdwijnt vanzelf uit de lijst. Een event blijft zichtbaar op de dag zelf.
 */
export interface Event {
  readonly titel: string;
  /** ISO-datum, YYYY-MM-DD. */
  readonly datum: string;
  readonly tijd: string;
  readonly plaats: string;
  readonly tekst: string;
}

export const EVENTS: readonly Event[] = [
  {
    titel: 'Puus Pruuft',
    datum: '2026-09-20',
    tijd: '13u – 19u',
    plaats: 'Hoogstraat Puurs, ter hoogte van het oude gemeentehuis',
    tekst:
      'Wij staan met een stand op Pukema – Puus Pruuft. Kom langs voor een ' +
      'babbel, een glaasje of een ontdekking uit ons assortiment, en geniet ' +
      'ondertussen van het optreden van Portland op het Dorpshart.',
  },
  {
    titel: 'Gouboire Kuier',
    datum: '2026-12-06',
    tijd: '13u – 19u',
    plaats: 'Fransveld 9, 2870 Puurs-Sint-Amands',
    tekst:
      '“Kuier” is Afrikaans voor gezellig samenzijn, en dat is precies de ' +
      'bedoeling: een ontspannen namiddag met onze Zuid-Afrikaanse topwijnen, ' +
      'aangevuld met een paar Europese verrassingen. Er staan hapjes klaar, en ' +
      'wie weet ga je naar huis met een exclusieve fles.',
  },
];
