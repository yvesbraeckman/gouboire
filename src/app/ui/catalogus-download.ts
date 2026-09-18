import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { IconDoc } from './icons';
import { Catalogus } from '../data/catalogus';

/**
 * Downloadblok voor de catalogus-PDF. Neemt een lijst documenten aan, zodat er
 * later moeiteloos een apart bestand per regio bij kan zonder de layout te
 * herzien.
 */
@Component({
  selector: 'app-catalogus-download',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconDoc],
  template: `
    <ul class="lijst">
      @for (item of documenten(); track item.bestand) {
        <li class="kaart">
          <span class="kaart__icoon"><app-icon-doc /></span>

          <div class="kaart__body">
            <h3 class="h3 kaart__titel">{{ item.titel }}</h3>
            <p class="kaart__tekst">{{ item.omschrijving }}</p>

            <dl class="meta">
              <div><dt>Formaat</dt><dd>PDF · {{ item.grootte }}</dd></div>
              <div><dt>Bijgewerkt</dt><dd>{{ item.bijgewerkt }}</dd></div>
            </dl>

          </div>

          <a class="btn btn--primary kaart__knop" [href]="item.bestand"
             target="_blank" rel="noopener"
             [attr.aria-label]="item.titel + ' openen als PDF'">
            Catalogus openen
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor"
                 stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M8 2v9m0 0 3.5-3.5M8 11 4.5 7.5M2.5 13.5h11" />
            </svg>
          </a>
        </li>
      }
    </ul>
  `,
  styles: `
    :host { display: block; }

    .lijst { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--s-4); }

    .kaart {
      display: grid;
      gap: var(--s-4);
      align-items: start;
      padding: clamp(var(--s-4), 4vw, var(--s-7));
      border: 1px solid var(--c-line);
      border-radius: var(--r-lg);
      background: var(--c-paper);
      box-shadow: 0 1px 0 var(--c-line-soft);
    }

    .kaart__icoon { color: var(--c-terracotta); width: 44px; }
    .kaart__titel { margin-bottom: var(--s-1); }
    .kaart__tekst { color: var(--c-ink-soft); max-width: 48ch; }

    .meta {
      display: flex;
      flex-wrap: wrap;
      gap: var(--s-2) var(--s-6);
      margin-top: var(--s-3);
      padding-top: var(--s-3);
      border-top: 1px solid var(--c-line-soft);
    }

    .meta dt {
      font-family: var(--f-brand);
      font-size: .68rem;
      letter-spacing: .24em;
      text-transform: uppercase;
      color: var(--c-ink-soft);
    }

    .meta dd { margin: 0; font-weight: 500; }

    .kaart__knop { justify-self: start; }

    @media (min-width: 860px) {
      .kaart {
        grid-template-columns: 44px 1fr auto;
        align-items: center;
        column-gap: var(--s-5);
      }
      .kaart__knop { justify-self: end; }
    }
  `,
})
export class CatalogusDownload {
  readonly documenten = input.required<readonly Catalogus[]>();
}
