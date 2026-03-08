import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { JOURNEY_LEVELS } from '../../journey/journey-data';

@Component({
  selector: 'app-level-5-the-influence',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './level-5-the-influence.component.html',
  styleUrl: './level-5-the-influence.component.scss',
})
export class Level5TheInfluenceComponent {
  readonly level = JOURNEY_LEVELS[5];
  readonly nextLevel = JOURNEY_LEVELS[6];
}
