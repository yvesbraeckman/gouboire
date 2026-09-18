import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { IconBottle, IconMountains, IconVine } from './icons';

/**
 * Plaatshouder voor een foto die nog aangeleverd moet worden.
 * De `ratio` staat al op de definitieve verhouding, zodat de layout niet
 * verspringt zodra het echte beeld erin komt. Vervangen gebeurt later
 * op deze ene plek.
 */
@Component({
  selector: 'app-photo-slot',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconBottle, IconMountains, IconVine],
  template: `
    <figure class="slot" [style.aspect-ratio]="ratio()">
      <div class="slot__art">
        @switch (motif()) {
          @case ('bergen') { <app-icon-mountains /> }
          @case ('fles') { <app-icon-bottle /> }
          @default { <app-icon-vine /> }
        }
      </div>
      @if (caption()) {
        <figcaption class="slot__caption">{{ caption() }}</figcaption>
      }
    </figure>
  `,
  styles: `
    :host { display: block; }

    .slot {
      position: relative;
      display: grid;
      place-items: center;
      margin: 0;
      overflow: hidden;
      border-radius: var(--r-lg);
      background:
        radial-gradient(120% 90% at 25% 15%, rgba(201, 162, 39, .28), transparent 60%),
        linear-gradient(155deg, var(--c-paper-deep), var(--c-paper-warm) 55%, #e2d3ba);
      box-shadow: inset 0 0 0 1px var(--c-line-soft);
    }

    .slot__art {
      color: var(--c-olive);
      opacity: .5;
      width: 38%;
      max-width: 190px;
    }

    .slot__art > * { width: 100%; }

    .slot__caption {
      position: absolute;
      inset-inline: 0;
      bottom: 0;
      padding: var(--s-2) var(--s-3);
      text-align: center;
      font-family: var(--f-brand);
      font-size: .72rem;
      letter-spacing: .18em;
      text-transform: uppercase;
      color: var(--c-ink-soft);
      background: rgba(247, 241, 231, .72);
    }
  `,
})
export class PhotoSlot {
  readonly ratio = input('4 / 5');
  readonly motif = input<'rank' | 'bergen' | 'fles'>('rank');
  readonly caption = input('foto nog aan te leveren');
}
