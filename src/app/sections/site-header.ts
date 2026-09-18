import {
  Component, ChangeDetectionStrategy, signal, HostListener, afterNextRender,
} from '@angular/core';

interface NavLink { readonly id: string; readonly label: string; }

@Component({
  selector: 'app-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly links: readonly NavLink[] = [
    { id: 'verhaal', label: 'Mijn verhaal' },
    { id: 'zuid-afrika', label: 'Zuid-Afrika' },
    { id: 'assortiment', label: 'Assortiment' },
    { id: 'events', label: 'Events' },
    { id: 'contact', label: 'Contact' },
  ];

  protected readonly gescrolld = signal(false);
  protected readonly menuOpen = signal(false);

  constructor() {
    /* Niet wachten op het eerste scroll-event. Wie de site rechtstreeks op een
       anker opent (/#contact) landt halverwege de pagina, maar die sprong
       gebeurt pas nadat Angular de secties heeft gerenderd — zonder deze
       controle blijft de kop dan in lichte uitvoering staan: wit op crème,
       dus onzichtbaar. */
    afterNextRender(() => this.onScroll());
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.gescrolld.set(window.scrollY > 24);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.menuOpen()) this.sluit();
  }

  protected toggle(): void {
    this.menuOpen.update((v) => !v);
    document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
  }

  protected sluit(): void {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
  }
}
