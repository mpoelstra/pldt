import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { JOURNEY_LEVELS } from '../../journey/journey-data';

@Component({
  selector: 'app-level-2-the-observer',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './level-2-the-observer.component.html',
  styleUrl: './level-2-the-observer.component.scss',
})
export class Level2TheObserverComponent {
  readonly level = JOURNEY_LEVELS[2];
  readonly previousLevel = JOURNEY_LEVELS[1];
  readonly nextLevel = JOURNEY_LEVELS[3];
}
