import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

/**
 * Web3Forms neemt de inzending aan en mailt ze door naar het adres dat aan de
 * sleutel hangt. De sleutel is bedoeld om openbaar in de pagina te staan.
 *
 * Wisselen van dienst raakt alleen deze twee constanten en `naarPayload()`.
 */
const ENDPOINT = 'https://api.web3forms.com/submit';
const SLEUTEL = 'cc3fdff1-d4df-4440-aa86-0727a7147d11';

type Status = 'rust' | 'bezig' | 'gelukt' | 'mislukt';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly naam = signal('');
  protected readonly email = signal('');
  protected readonly bericht = signal('');

  /** Lokvak voor bots. Een mens ziet en bereikt het niet. */
  protected readonly lokvak = signal('');

  protected readonly status = signal<Status>('rust');
  protected readonly fout = signal('');

  protected async verstuur(event: Event): Promise<void> {
    event.preventDefault();
    if (this.status() === 'bezig') return;

    /* Ingevuld lokvak betekent een bot: doe alsof het gelukt is en verstuur
       niets, zodat hij niet gaat zoeken naar wat hem verraadde. */
    if (this.lokvak().trim()) {
      this.status.set('gelukt');
      return;
    }

    const melding = this.controleer();
    if (melding) {
      this.fout.set(melding);
      this.status.set('rust');
      return;
    }

    this.fout.set('');
    this.status.set('bezig');

    try {
      const antwoord = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: SLEUTEL,
          subject: `Nieuw bericht via gouboire.be — ${this.naam().trim()}`,
          from_name: 'Gouboire website',
          name: this.naam().trim(),
          email: this.email().trim(),
          message: this.bericht().trim(),
        }),
      });

      const data = await antwoord.json().catch(() => null);
      if (antwoord.ok && data?.success) {
        this.status.set('gelukt');
        this.naam.set('');
        this.email.set('');
        this.bericht.set('');
      } else {
        this.status.set('mislukt');
      }
    } catch {
      /* Geen netwerk, of de dienst is onbereikbaar. */
      this.status.set('mislukt');
    }
  }

  protected opnieuw(): void {
    this.status.set('rust');
    this.fout.set('');
  }

  /** Geeft een melding terug, of een lege string als alles klopt. */
  private controleer(): string {
    if (!this.naam().trim()) return 'Vul je naam in.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email().trim())) {
      return 'Vul een geldig e-mailadres in.';
    }
    if (this.bericht().trim().length < 2) return 'Schrijf even een bericht.';
    return '';
  }
}
