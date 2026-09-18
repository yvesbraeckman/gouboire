import { Component, ChangeDetectionStrategy, input } from '@angular/core';

/**
 * Hand-getekende SVG-accenten. Alles tekent met `currentColor`, zodat de
 * kleur meekomt uit de tokens van de sectie waarin het icoon staat.
 */

@Component({
  selector: 'app-icon-vine',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg viewBox="0 0 120 200" fill="none" stroke="currentColor" stroke-width="1.3"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M60 196C60 150 52 120 44 96 36 72 34 48 42 22c2-8 6-14 10-18" />
      <path d="M44 96c-14-4-24-14-27-30-1-6 0-11 2-15 12 3 22 12 26 26 2 7 1 13-1 19Z" />
      <path d="M50 62c13-6 21-17 21-33 0-6-2-11-5-15-11 6-18 16-18 31 0 7 1 13 2 17Z" />
      <path d="M54 130c15-3 26-13 30-29 2-6 1-11-1-16-12 4-21 14-25 29-2 7-3 13-4 16Z" />
      <path d="M42 22c-6-6-8-13-6-21" />
      <circle cx="82" cy="150" r="7" /><circle cx="96" cy="163" r="7" />
      <circle cx="68" cy="163" r="7" /><circle cx="82" cy="176" r="7" />
      <path d="M82 143c0-8 3-14 9-18" />
    </svg>
  `,
  styles: `:host { display: block; }`,
})
export class IconVine {}

@Component({
  selector: 'app-icon-grapes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg viewBox="0 0 100 120" fill="none" stroke="currentColor" stroke-width="1.5"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M50 34V16c0-6 5-10 12-11" />
      <path d="M50 22c-8-6-18-7-27-3 3 9 10 15 20 16" />
      <circle cx="50" cy="46" r="11" /><circle cx="32" cy="62" r="11" />
      <circle cx="68" cy="62" r="11" /><circle cx="41" cy="80" r="11" />
      <circle cx="59" cy="80" r="11" /><circle cx="50" cy="98" r="11" />
    </svg>
  `,
  styles: `:host { display: block; }`,
})
export class IconGrapes {}

/** Gestileerde Kaapse berglijn — verwijst naar het Zuid-Afrikaanse wijnland. */
@Component({
  selector: 'app-icon-mountains',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg viewBox="0 0 200 90" [attr.preserveAspectRatio]="flat() ? 'none' : null"
         fill="none" stroke="currentColor" stroke-width="1.5"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M2 86c14-2 22-10 30-24 8-14 14-24 24-24s16 8 22 20" />
      <path d="M60 74c10-16 18-34 30-46 8-8 16-8 24 0 8 8 14 22 20 34" />
      <path d="M110 30h30" />
      <path d="M144 66c10-14 18-22 26-22s18 12 28 26" />
      <path d="M6 86h190" stroke-width="1.1" opacity=".5" />
    </svg>
  `,
  styles: `
    :host { display: block; }
    svg { width: 100%; height: 100%; }
  `,
})
export class IconMountains {
  /** Rekt het silhouet uit tot een brede, vlakke horizonlijn. */
  readonly flat = input(false);
}

/**
 * Contour van Zuid-Afrika, met Lesotho als binnengrens. De geometrie komt uit
 * Natural Earth 1:50m (publiek domein), geprojecteerd equirectangulair met
 * breedtecorrectie op 28,5 ZB en vereenvoudigd tot 90 punten voor de landsgrens
 * en 17 voor Lesotho — genoeg voor een herkenbaar silhouet op deze maat.
 */
@Component({
  selector: 'app-icon-south-africa',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg viewBox="0 0 120 105" fill="none" stroke="currentColor" stroke-width="1.4"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <defs>
        <radialGradient id="gouboire-wijnstreek">
          <stop offset="0%" stop-opacity=".85" />
          <stop offset="45%" stop-opacity=".4" />
          <stop offset="100%" stop-opacity="0" />
        </radialGradient>
        <clipPath id="gouboire-za-clip">
          <use href="#gouboire-za-land" />
        </clipPath>
      </defs>

      <path id="gouboire-za-land" vector-effect="non-scaling-stroke" d="M94.3 0.4L96.5 0.0L100.3 1.2L105.6 1.2L108.3 2.1L110.2 11.1
               L113.3 18.5L113.2 31.7L109.3 29.9L107.7 30.7L104.8 35.4L104.8 38.5
               L108.2 42.3L111.7 42.9L113.2 42.9L113.5 38.8L120.0 39.1L117.4 50.3
               L116.3 52.8L108.7 60.1L101.0 73.3L90.6 84.3L83.3 90.6L74.2 96.0
               L68.3 96.3L66.6 98.8L62.5 98.2L61.2 99.9L59.5 99.9L52.9 98.4
               L49.8 99.1L44.6 98.5L42.3 99.0L39.0 101.6L33.2 101.5L29.8 102.3
               L26.1 105.0L23.3 104.7L20.8 103.6L21.0 102.6L19.4 101.4L17.4 101.5
               L16.8 99.1L15.0 99.4L14.7 101.3L13.8 99.1L13.9 98.0L14.7 97.5
               L14.5 96.1L10.2 88.7L11.1 87.7L12.2 88.1L13.7 86.0L12.9 79.7
               L6.6 68.9L3.7 60.3L0.0 53.8L2.2 52.4L3.1 49.7L4.4 48.9
               L6.7 50.9L7.3 54.4L12.1 55.9L20.4 56.1L20.6 55.1L22.6 53.4
               L25.8 52.4L25.8 21.9L29.1 24.9L31.7 31.3L31.9 33.4L30.5 35.7
               L30.9 38.8L38.3 39.0L44.9 33.1L46.9 27.5L48.3 26.3L50.7 26.1
               L54.4 28.7L60.6 30.5L65.7 29.6L66.7 28.7L69.1 21.6L72.6 20.5
               L75.8 17.4L77.7 11.9L82.6 8.7L85.9 4.5L90.5 2.8L92.6 0.6Z" />
      <path vector-effect="non-scaling-stroke" d="M89.7 66.1L92.3 64.6L92.7 62.8L93.8 61.6L94.5 59.2L93.8 57.7
               L91.3 55.9L88.9 53.5L86.0 54.4L84.0 55.9L82.4 56.4L79.2 61.2
               L77.4 62.1L79.9 67.9L82.5 70.2L84.7 70.5L87.2 66.5Z"
            stroke-width="1" opacity=".5" />
      <ellipse class="streek" clip-path="url(#gouboire-za-clip)"
               cx="17.7" cy="97.5" rx="8" ry="6.5" />
    </svg>
  `,
  styles: `
    :host { display: block; }
    /* De Kaapse wijnstreek als zachte zone. Losse streekcontouren kunnen hier
       niet: alle streken samen beslaan 6,5 × 9 eenheden van de 120 × 105, wat
       op de grootste weergave zo'n 23 × 31 px is. Vandaar één gloed die zegt
       wáár het vandaan komt, zonder precisie te suggereren.
       Geklipt op de landcontour, anders zweeft ze in zee. */
    .streek { fill: url(#gouboire-wijnstreek); stroke: none; }
    #gouboire-wijnstreek stop { stop-color: var(--c-gold-light); }
  `,
})
export class IconSouthAfrica {}

@Component({
  selector: 'app-icon-bottle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg viewBox="0 0 60 160" fill="none" stroke="currentColor" stroke-width="1.5"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M24 4h12v34c0 8 12 16 12 32v78a8 8 0 0 1-8 8H20a8 8 0 0 1-8-8V70c0-16 12-24 12-32V4Z" />
      <path d="M12 96h36" stroke-width="1.1" opacity=".55" />
      <path d="M22 12h16" stroke-width="1.1" opacity=".55" />
    </svg>
  `,
  styles: `:host { display: block; }`,
})
export class IconBottle {}

@Component({
  selector: 'app-icon-doc',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg viewBox="0 0 48 60" fill="none" stroke="currentColor" stroke-width="1.5"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M30 2H8a6 6 0 0 0-6 6v44a6 6 0 0 0 6 6h32a6 6 0 0 0 6-6V18L30 2Z" />
      <path d="M30 2v16h16" />
      <path d="M12 32h24M12 42h24M12 22h10" stroke-width="1.3" opacity=".7" />
    </svg>
  `,
  styles: `:host { display: block; }`,
})
export class IconDoc {}
