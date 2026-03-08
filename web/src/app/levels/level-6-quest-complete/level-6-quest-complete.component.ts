import { ChangeDetectionStrategy, Component } from '@angular/core';

import { JOURNEY_LEVELS } from '../../journey/journey-data';
import { DefaultLevelPageComponent } from '../shared/default-level-page.component';

@Component({
  selector: 'app-level-6-quest-complete',
  imports: [DefaultLevelPageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './level-6-quest-complete.component.html',
  styleUrl: './level-6-quest-complete.component.scss',
})
export class Level6QuestCompleteComponent {
  readonly level = JOURNEY_LEVELS[6];
}
