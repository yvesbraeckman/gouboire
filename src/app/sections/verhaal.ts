import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconGrapes, IconVine } from '../ui/icons';

interface Stap {
  readonly nr: string;
  readonly titel: string;
  readonly alineas: readonly string[];
  readonly accent: 'rank' | 'tros';
}

@Component({
  selector: 'app-verhaal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconGrapes, IconVine],
  templateUrl: './verhaal.html',
  styleUrl: './verhaal.scss',
})
export class Verhaal {
  protected readonly stappen: readonly Stap[] = [
    {
      nr: '01',
      titel: 'Ons moemoe Jeanne',
      accent: 'tros',
      alineas: [
        'De passie voor wijn en lekker eten kreeg ik mee van ons moemoe Jeanne. ' +
          'In al haar eenvoud was zij bijzonder fijngevoelig voor smaak en kwaliteit.',
        'Goed eten begon voor haar bij eerlijke producten, met zorg gekozen en met ' +
          'liefde bereid. Dat gevoel heeft mij nooit meer losgelaten.',
      ],
    },
    {
      nr: '02',
      titel: 'Waar het allemaal begon',
      accent: 'rank',
      alineas: [
        'Daarnaast hebben de vele reizen met mijn ouders mijn smaak en nieuwsgierigheid ' +
          'sterk gevormd. We trokken vaak naar toen nog minder gekende regio’s, zoals ' +
          'Galicië, waar lokale gastronomie en wijn onlosmakelijk verbonden zijn met ' +
          'cultuur en terroir.',
        'Onbewust werd daar het fundament gelegd van wie ik vandaag ben.',
      ],
    },
    {
      nr: '03',
      titel: 'Van passie naar vak',
      accent: 'tros',
      alineas: [
        'Ik sta zelf graag achter de kookpotten en geniet minstens even graag van goed ' +
          'eten aan tafel. Die liefde voor gastronomie bracht me ertoe me professioneel ' +
          'te verdiepen in wijn.',
        'Ik volgde de opleiding Sommelier bij Syntra en studeerde nadien af als ' +
          'Sommelier conseil aan de gerenommeerde Université du Vin in Suze-la-Rousse ' +
          'in Frankrijk.',
      ],
    },
    {
      nr: '04',
      titel: 'Het ontstaan van Gouboire',
      accent: 'rank',
      alineas: [
        'Na diverse ervaringen binnen de wijnsector bleef mijn fascinatie voor wijn en ' +
          'alles wat ermee te maken heeft, groeien.',
        'Uit die passie is Gouboire ontstaan.',
      ],
    },
  ];
}
