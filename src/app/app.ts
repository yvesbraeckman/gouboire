import { Component, ChangeDetectionStrategy, afterNextRender } from '@angular/core';
import { SiteHeader } from './sections/site-header';
import { Hero } from './sections/hero';
import { Naam } from './sections/naam';
import { Verhaal } from './sections/verhaal';
import { ZuidAfrika } from './sections/zuid-afrika';
import { Assortiment } from './sections/assortiment';
import { Events } from './sections/events';
import { Contact } from './sections/contact';
import { SiteFooter } from './sections/site-footer';
import { Leeftijdscheck } from './ui/leeftijdscheck';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SiteHeader, Hero, Naam, Verhaal, ZuidAfrika,
    Assortiment, Events, Contact, SiteFooter, Leeftijdscheck,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor() {
    /* Geen automatisch herstel van de scrollpositie: bij een verversing hoort
       de bezoeker bovenaan te beginnen, bij de hero, en niet halverwege. */
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    afterNextRender(() => {
      if (!location.hash) return;

      /* De browser probeert bij het laden zelf naar het anker te springen, maar
         op dat moment heeft Angular de secties nog niet gerenderd. Vandaar hier,
         en zonder animatie: bij het openen hoor je er meteen te staan. */
      document.querySelector(location.hash)
        ?.scrollIntoView({ behavior: 'instant' as ScrollBehavior });

      this.wisAnker();
    });

    /* Na elke ankerklik het anker weer uit de URL halen. Een gedeelde link als
       /#contact blijft zo werken, maar een verversing daarna stuurt je niet
       telkens terug naar diezelfde sectie. */
    window.addEventListener('hashchange', () => this.wisAnker());
  }

  private wisAnker(): void {
    history.replaceState(null, '', location.pathname + location.search);
  }
}
