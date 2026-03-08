import { Routes } from '@angular/router';

import { FIRST_LEVEL_SLUG } from './journey/journey-data';
import { JourneyShellComponent } from './journey/journey-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: JourneyShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: FIRST_LEVEL_SLUG,
      },
      {
        path: 'character-select',
        loadComponent: () =>
          import('./levels/level-0-character-select/level-0-character-select.component').then(
            (m) => m.Level0CharacterSelectComponent,
          ),
      },
      {
        path: 'the-stage',
        loadComponent: () =>
          import('./levels/level-1-the-stage/level-1-the-stage.component').then(
            (m) => m.Level1TheStageComponent,
          ),
      },
      {
        path: 'the-observer',
        loadComponent: () =>
          import('./levels/level-2-the-observer/level-2-the-observer.component').then(
            (m) => m.Level2TheObserverComponent,
          ),
      },
      {
        path: 'the-pitfalls',
        loadComponent: () =>
          import('./levels/level-3-the-pitfalls/level-3-the-pitfalls.component').then(
            (m) => m.Level3ThePitfallsComponent,
          ),
      },
      {
        path: 'overtuigingen',
        loadComponent: () =>
          import('./levels/level-4-the-rewrite/level-4-the-rewrite.component').then(
            (m) => m.Level4TheRewriteComponent,
          ),
      },
      {
        path: 'cirkel-van-invloed',
        loadComponent: () =>
          import('./levels/level-5-the-influence/level-5-the-influence.component').then(
            (m) => m.Level5TheInfluenceComponent,
          ),
      },
      {
        path: 'quest-complete',
        loadComponent: () =>
          import('./levels/level-6-quest-complete/level-6-quest-complete.component').then(
            (m) => m.Level6QuestCompleteComponent,
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: FIRST_LEVEL_SLUG,
  },
];
