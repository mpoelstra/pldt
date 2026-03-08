import { ChangeDetectionStrategy, Component } from '@angular/core';

import { JOURNEY_LEVELS } from '../../journey/journey-data';
import { DefaultLevelPageComponent } from '../shared/default-level-page.component';

@Component({
  selector: 'app-level-3-the-pitfalls',
  imports: [DefaultLevelPageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './level-3-the-pitfalls.component.html',
  styleUrl: './level-3-the-pitfalls.component.scss',
})
export class Level3ThePitfallsComponent {
  readonly level = JOURNEY_LEVELS[3];
}
