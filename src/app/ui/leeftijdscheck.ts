import {
  Component, ChangeDetectionStrategy, ElementRef, signal, viewChild,
  afterNextRender,
} from '@angular/core';

/** Waar iemand naartoe gaat die aangeeft jonger te zijn. */
const DOORVERWIJZING = 'https://www.vad.be';

/** Sleutel in localStorage; wie ooit bevestigde krijgt de vraag niet opnieuw. */
const SLEUTEL = 'gouboire-leeftijd';

/**
 * Leeftijdscheck bij het openen van de site — in België gevraagd door het
 * convenant rond alcoholreclame.
 *
 * De component is zelfstandig: hij leest en schrijft zijn eigen status, zodat
 * `app.html` er enkel `<app-leeftijdscheck />` bij hoeft te zetten.
 */
@Component({
  selector: 'app-leeftijdscheck',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (!bevestigd()) {
      <div class="poort" role="dialog" aria-modal="true"
           aria-labelledby="leeftijd-titel" (keydown)="vangTab($event)">
        <div class="poort__sluier" aria-hidden="true"></div>

        <div class="kaart">
          <span class="logo logo--volledig kaart__logo" role="img"
                aria-label="Gouboire"></span>

          <h1 class="kaart__titel" id="leeftijd-titel">Ben je 18 of ouder?</h1>

          <p class="kaart__tekst">
            Gouboire is een wijnhandel. Bevestig even je leeftijd voor je verder
            gaat.
          </p>

          <div class="kaart__knoppen">
            <button #ja type="button" class="btn btn--primary" (click)="bevestig()">
              Ja, ik ben 18 of ouder
            </button>
            <button #nee type="button" class="btn btn--ghost" (click)="weiger()">
              Nee
            </button>
          </div>

          <p class="kaart__voet">Geniet met mate.</p>
        </div>
      </div>
    }
  `,
  styles: `
    :host { display: contents; }

    .poort {
      position: fixed;
      inset: 0;
      z-index: 200;
      display: grid;
      place-items: center;
      padding: var(--s-4);
      overflow-y: auto;
    }

    /* De herofoto met een donkere sluier erover. Bewust de 1600-variant: de
       2400-versie is 1,1 MB en op dit vlak niet zichtbaar beter. */
    .poort__sluier {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(rgba(30, 25, 21, .74), rgba(30, 25, 21, .74)),
        url('/beeld/wijngaard-1600.jpg') center / cover no-repeat;
    }

    .kaart {
      position: relative;
      width: min(100%, 480px);
      padding: clamp(var(--s-5), 5vw, var(--s-8));
      border-radius: var(--r-lg);
      background: var(--c-paper);
      box-shadow: 0 24px 60px rgba(30, 25, 21, .35);
      text-align: center;
    }

    .kaart__logo {
      width: min(220px, 62%);
      margin-inline: auto;
      color: var(--c-ink);
    }

    .kaart__titel {
      margin-top: clamp(var(--s-5), 4vw, var(--s-6));
      font-family: var(--f-serif);
      font-size: clamp(1.5rem, 1.2rem + 1.2vw, 2rem);
      font-weight: 400;
      line-height: 1.15;
    }

    .kaart__tekst {
      margin-top: var(--s-3);
      margin-inline: auto;
      max-width: 34ch;
      color: var(--c-ink-soft);
    }

    .kaart__knoppen {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--s-3);
      margin-top: clamp(var(--s-5), 4vw, var(--s-6));
    }

    .kaart__voet {
      margin-top: var(--s-5);
      font-family: var(--f-brand);
      font-size: .68rem;
      letter-spacing: .26em;
      text-transform: uppercase;
      color: var(--c-ink-soft);
    }
  `,
})
export class Leeftijdscheck {
  private readonly ja = viewChild<ElementRef<HTMLButtonElement>>('ja');
  private readonly nee = viewChild<ElementRef<HTMLButtonElement>>('nee');

  protected readonly bevestigd = signal(Leeftijdscheck.alBevestigd());

  constructor() {
    if (!this.bevestigd()) {
      document.body.style.overflow = 'hidden';
      afterNextRender(() => this.ja()?.nativeElement.focus());
    }
  }

  protected bevestig(): void {
    try {
      localStorage.setItem(SLEUTEL, 'ja');
    } catch {
      /* Privénavigatie of opslag geblokkeerd: dan vragen we het gewoon opnieuw. */
    }
    document.body.style.overflow = '';
    this.bevestigd.set(true);
  }

  protected weiger(): void {
    window.location.href = DOORVERWIJZING;
  }

  /**
   * Tab houden binnen de twee knoppen. Eén `keydown`-handler met een eigen
   * controle op de toets: Angulars `(keydown.tab)` typeert `$event` als `Event`
   * en vangt shift+Tab niet. Geen `inert` op de rest van de pagina — dat zou een
   * extra wikkel in app.html vragen en deze component afhankelijk maken van zijn
   * omgeving.
   */
  protected vangTab(e: KeyboardEvent): void {
    if (e.key !== 'Tab') return;

    const eerste = this.ja()?.nativeElement;
    const laatste = this.nee()?.nativeElement;
    if (!eerste || !laatste) return;

    if (e.shiftKey && document.activeElement === eerste) {
      e.preventDefault();
      laatste.focus();
    } else if (!e.shiftKey && document.activeElement === laatste) {
      e.preventDefault();
      eerste.focus();
    }
  }

  private static alBevestigd(): boolean {
    try {
      return localStorage.getItem(SLEUTEL) === 'ja';
    } catch {
      return false;
    }
  }
}
