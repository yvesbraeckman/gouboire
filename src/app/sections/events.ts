import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconGrapes } from '../ui/icons';
import { EVENTS, type Event } from '../data/events';

/** Event plus de afgeleide, leesbare datumdelen. */
interface EventWeergave extends Event {
  readonly dag: string;
  readonly maand: string;
  readonly voluit: string;
}

@Component({
  selector: 'app-events',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconGrapes],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class Events {
  protected readonly komende: readonly EventWeergave[] = Events.komendeEvents();

  private static komendeEvents(): readonly EventWeergave[] {
    const vandaag = Events.vandaagISO();
    return EVENTS
      .filter((e) => e.datum >= vandaag)
      .sort((a, b) => a.datum.localeCompare(b.datum))
      .map((e) => ({ ...e, ...Events.datumDelen(e.datum) }));
  }

  /**
   * Vandaag als YYYY-MM-DD in de lokale tijdzone. Bewust niet via
   * `toISOString()`: dat rekent naar UTC en zet de datum er in West-Europa 's
   * avonds een dag naast.
   */
  private static vandaagISO(): string {
    const d = new Date();
    const p = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  }

  /**
   * De datum lokaal opbouwen uit de losse delen. `new Date('2026-09-20')` wordt
   * als UTC-middernacht geparseerd, waardoor een bezoeker ten westen van
   * Greenwich de dag ervoor te zien krijgt.
   */
  private static datumDelen(iso: string): Omit<EventWeergave, keyof Event> {
    const [jaar, maand, dag] = iso.split('-').map(Number);
    const d = new Date(jaar, maand - 1, dag);
    return {
      dag: String(dag),
      maand: new Intl.DateTimeFormat('nl-BE', { month: 'short' })
        .format(d).replace('.', ''),
      voluit: new Intl.DateTimeFormat('nl-BE', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
      }).format(d),
    };
  }
}
