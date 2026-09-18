import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PhotoSlot } from '../ui/photo-slot';
import { IconMountains, IconVine } from '../ui/icons';
import { CatalogusDownload } from '../ui/catalogus-download';
import { CATALOGI, type Catalogus } from '../data/catalogus';
import { REGIOS, UITGELICHT, type Regio, type Wijn } from '../data/assortiment';

@Component({
  selector: 'app-assortiment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PhotoSlot, IconMountains, IconVine, CatalogusDownload],
  templateUrl: './assortiment.html',
  styleUrl: './assortiment.scss',
})
export class Assortiment {
  protected readonly regios: readonly Regio[] = REGIOS;
  protected readonly uitgelicht: readonly Wijn[] = UITGELICHT;
  protected readonly catalogi: readonly Catalogus[] = CATALOGI;
}
