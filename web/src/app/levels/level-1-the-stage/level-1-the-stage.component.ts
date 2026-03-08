import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { JOURNEY_LEVELS } from '../../journey/journey-data';

@Component({
  selector: 'app-level-1-the-stage',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './level-1-the-stage.component.html',
  styleUrl: './level-1-the-stage.component.scss',
})
export class Level1TheStageComponent {
  readonly level = JOURNEY_LEVELS[1];
  readonly previousLevel = JOURNEY_LEVELS[0];
  readonly nextLevel = JOURNEY_LEVELS[2];
}
