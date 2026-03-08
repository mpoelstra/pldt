import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { JOURNEY_LEVELS } from '../../journey/journey-data';

@Component({
  selector: 'app-level-0-character-select',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './level-0-character-select.component.html',
  styleUrl: './level-0-character-select.component.scss',
})
export class Level0CharacterSelectComponent {
  readonly level = JOURNEY_LEVELS[0];
  readonly nextLevel = JOURNEY_LEVELS[1];
}
