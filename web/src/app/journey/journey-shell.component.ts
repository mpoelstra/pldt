import { CommonModule, DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter, map, merge, of } from 'rxjs';

import { FIRST_LEVEL_SLUG, JOURNEY_LEVELS, JourneyLevel } from './journey-data';

@Component({
  selector: 'app-journey-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './journey-shell.component.html',
  styleUrl: './journey-shell.component.scss',
})
export class JourneyShellComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'pldt.presentation-mode';
  private readonly initialPresentationMode = (() => {
    const url = this.router.url || `/${FIRST_LEVEL_SLUG}`;
    const queryStart = url.indexOf('?');

    if (queryStart !== -1) {
      const params = new URLSearchParams(url.slice(queryStart + 1));
      if (
        params.get('presentation') === '1' ||
        params.get('present') === '1' ||
        params.get('mode') === 'presentation'
      ) {
        return true;
      }
    }

    return this.document.defaultView?.localStorage.getItem(this.storageKey) === 'true';
  })();

  private readonly currentUrl = toSignal(
    merge(
      of(this.router.url),
      this.router.events.pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(() => this.router.url),
      ),
    ),
    { initialValue: this.router.url || `/${FIRST_LEVEL_SLUG}` },
  );
  readonly presentationMode = signal(this.initialPresentationMode);

  readonly levels = JOURNEY_LEVELS;
  readonly totalLevels = JOURNEY_LEVELS.length;

  private readonly currentSlug = computed(() => {
    const trimmedUrl = this.currentUrl().replace(/^\//, '').split('?')[0];
    return trimmedUrl || FIRST_LEVEL_SLUG;
  });

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
    effect(() => {
      const enabled = this.presentationMode();
      this.document.body.classList.toggle('presentation-mode', enabled);
      this.document.documentElement.classList.toggle('presentation-mode', enabled);
      this.document.defaultView?.localStorage.setItem(this.storageKey, String(enabled));
    });

    const handleKeydown = (event: KeyboardEvent): void => {
      const target = event.target;
      const activeTagName = target instanceof HTMLElement ? target.tagName : '';

      if (activeTagName === 'INPUT' || activeTagName === 'TEXTAREA' || activeTagName === 'SELECT') {
        return;
      }

      if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault();
        const nextLevel = this.nextLevel();

        if (nextLevel) {
          this.goNext();
          return;
        }

        if (this.currentLevel().slug === 'quest-complete') {
          this.document.defaultView?.dispatchEvent(new CustomEvent('quest-complete-finish'));
        }
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

  togglePresentationMode(): void {
    this.presentationMode.update((value) => !value);
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
