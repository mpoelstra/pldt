import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { JOURNEY_LEVELS } from '../../journey/journey-data';

@Component({
  selector: 'app-level-4-the-rewrite',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './level-4-the-rewrite.component.html',
  styleUrl: './level-4-the-rewrite.component.scss',
})
export class Level4TheRewriteComponent {
  readonly level = JOURNEY_LEVELS[4];
  readonly nextLevel = JOURNEY_LEVELS[5];
}
