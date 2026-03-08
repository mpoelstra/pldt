import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { JOURNEY_LEVELS } from '../../journey/journey-data';

@Component({
  selector: 'app-level-6-quest-complete',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './level-6-quest-complete.component.html',
  styleUrl: './level-6-quest-complete.component.scss',
})
export class Level6QuestCompleteComponent {
  private readonly destroyRef = inject(DestroyRef);
  private celebrationTimeout: ReturnType<typeof setTimeout> | null = null;

  readonly level = JOURNEY_LEVELS[6];
  readonly firstLevel = JOURNEY_LEVELS[0];
  readonly showCelebration = signal(false);
  readonly confettiPieces = Array.from({ length: 18 }, (_, index) => index);

  constructor() {
    this.destroyRef.onDestroy(() => {
      if (this.celebrationTimeout) {
        clearTimeout(this.celebrationTimeout);
      }
    });
  }

  triggerCelebration(): void {
    this.showCelebration.set(false);

    if (this.celebrationTimeout) {
      clearTimeout(this.celebrationTimeout);
    }

    requestAnimationFrame(() => {
      this.showCelebration.set(true);
      this.celebrationTimeout = setTimeout(() => {
        this.showCelebration.set(false);
        this.celebrationTimeout = null;
      }, 3600);
    });
  }
}
