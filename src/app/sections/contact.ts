import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly naam = signal('');
  protected readonly email = signal('');
  protected readonly bericht = signal('');

  /**
   * TODO: het formulier verstuurt nog niets. De verzending (mailservice of
   * form-endpoint) wordt in een latere fase aangesloten.
   */
  protected verstuur(event: Event): void {
    event.preventDefault();
    console.info('[contact] nog niet aangesloten', {
      naam: this.naam(),
      email: this.email(),
      bericht: this.bericht(),
    });
  }
}
