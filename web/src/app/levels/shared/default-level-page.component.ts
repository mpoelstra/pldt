import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { JOURNEY_LEVELS, JourneyLevel } from '../../journey/journey-data';

@Component({
  selector: 'app-default-level-page',
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './default-level-page.component.html',
  styleUrl: './default-level-page.component.scss',
})
export class DefaultLevelPageComponent {
  readonly level = input.required<JourneyLevel>();
  private readonly levels = JOURNEY_LEVELS;

  readonly previousLevel = computed(() => {
    const index = this.level().id;
    return index > 0 ? this.levels[index - 1] : null;
  });

  readonly nextLevel = computed(() => {
    const index = this.level().id;
    return index < this.levels.length - 1 ? this.levels[index + 1] : null;
  });
}
