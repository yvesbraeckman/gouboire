import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconMountains, IconSouthAfrica } from '../ui/icons';

interface Pijler { readonly titel: string; readonly tekst: string; }

@Component({
  selector: 'app-zuid-afrika',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconMountains, IconSouthAfrica],
  templateUrl: './zuid-afrika.html',
  styleUrl: './zuid-afrika.scss',
})
export class ZuidAfrika {
  protected readonly pijlers: readonly Pijler[] = [
    {
      titel: 'Diversiteit',
      tekst: 'Van frisse Chenin tot stevige rode blends — de breedte van het land ' +
        'blijft verrassen.',
    },
    {
      titel: 'Vakmanschap',
      tekst: 'Wijnmakers die hun terroir door en door kennen en dat in de fles ' +
        'weten te leggen.',
    },
    {
      titel: 'Eigenzinnige stijl',
      tekst: 'Wijnen die durven afwijken van het gebaande pad, met een uitgesproken ' +
        'eigen karakter.',
    },
  ];
}
