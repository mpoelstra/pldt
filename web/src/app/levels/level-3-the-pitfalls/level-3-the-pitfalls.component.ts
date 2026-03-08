import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { JOURNEY_LEVELS } from '../../journey/journey-data';

@Component({
  selector: 'app-level-3-the-pitfalls',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './level-3-the-pitfalls.component.html',
  styleUrl: './level-3-the-pitfalls.component.scss',
})
export class Level3ThePitfallsComponent {
  readonly level = JOURNEY_LEVELS[3];
  readonly nextLevel = JOURNEY_LEVELS[4];
}
