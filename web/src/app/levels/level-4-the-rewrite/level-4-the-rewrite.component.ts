import { ChangeDetectionStrategy, Component } from '@angular/core';

import { JOURNEY_LEVELS } from '../../journey/journey-data';
import { DefaultLevelPageComponent } from '../shared/default-level-page.component';

@Component({
  selector: 'app-level-4-the-rewrite',
  imports: [DefaultLevelPageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './level-4-the-rewrite.component.html',
  styleUrl: './level-4-the-rewrite.component.scss',
})
export class Level4TheRewriteComponent {
  readonly level = JOURNEY_LEVELS[4];
}
