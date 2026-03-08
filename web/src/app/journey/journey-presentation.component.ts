import { CommonModule, DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { FIRST_LEVEL_SLUG, JOURNEY_LEVELS, JourneyLevel } from './journey-data';

@Component({
  selector: 'app-journey-presentation',
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './journey-presentation.component.html',
  styleUrl: './journey-presentation.component.scss',
})
export class JourneyPresentationComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);

  readonly levels = JOURNEY_LEVELS;
  readonly totalLevels = JOURNEY_LEVELS.length;

  private readonly currentSlug = toSignal(
    this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('slug') ?? FIRST_LEVEL_SLUG),
    ),
    { initialValue: FIRST_LEVEL_SLUG },
  );

  readonly currentLevel = computed<JourneyLevel>(() => {
    const matchedLevel = this.levels.find((level) => level.slug === this.currentSlug());
    return matchedLevel ?? this.levels[0];
  });

  readonly currentIndex = computed(() =>
    this.levels.findIndex((level) => level.slug === this.currentLevel().slug),
  );

  readonly previousLevel = computed(() => {
    const index = this.currentIndex();
    return index > 0 ? this.levels[index - 1] : null;
  });

  readonly nextLevel = computed(() => {
    const index = this.currentIndex();
    return index < this.levels.length - 1 ? this.levels[index + 1] : null;
  });

  readonly progressLabel = computed(() => `${this.currentIndex() + 1}/${this.totalLevels}`);
  readonly progressWidth = computed(() => `${((this.currentIndex() + 1) / this.totalLevels) * 100}%`);
  constructor() {
    const handleKeydown = (event: KeyboardEvent): void => {
      const target = event.target;
      const activeTagName = target instanceof HTMLElement ? target.tagName : '';

      if (activeTagName === 'INPUT' || activeTagName === 'TEXTAREA' || activeTagName === 'SELECT') {
        return;
      }

      if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault();
        this.goNext();
      }

      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault();
        this.goPrevious();
      }

      if (event.key === 'Home') {
        event.preventDefault();
        this.navigateTo(this.levels[0].slug);
      }

      if (event.key === 'End') {
        event.preventDefault();
        this.navigateTo(this.levels[this.levels.length - 1].slug);
      }
    };

    this.document.defaultView?.addEventListener('keydown', handleKeydown);
    this.destroyRef.onDestroy(() => {
      this.document.defaultView?.removeEventListener('keydown', handleKeydown);
    });
  }

  navigateTo(slug: string): void {
    void this.router.navigate(['/', slug]);
  }

  goPrevious(): void {
    const previousLevel = this.previousLevel();

    if (previousLevel) {
      this.navigateTo(previousLevel.slug);
    }
  }

  goNext(): void {
    const nextLevel = this.nextLevel();

    if (nextLevel) {
      this.navigateTo(nextLevel.slug);
    }
  }
}
