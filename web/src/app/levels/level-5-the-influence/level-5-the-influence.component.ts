import { ChangeDetectionStrategy, Component } from '@angular/core';

import { JOURNEY_LEVELS } from '../../journey/journey-data';
import { DefaultLevelPageComponent } from '../shared/default-level-page.component';

@Component({
  selector: 'app-level-5-the-influence',
  imports: [DefaultLevelPageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './level-5-the-influence.component.html',
  styleUrl: './level-5-the-influence.component.scss',
})
export class Level5TheInfluenceComponent {
  readonly level = JOURNEY_LEVELS[5];
}
