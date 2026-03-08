import { Routes } from '@angular/router';

import { FIRST_LEVEL_SLUG } from './journey/journey-data';
import { JourneyShellComponent } from './journey/journey-shell.component';
import { Level0CharacterSelectComponent } from './levels/level-0-character-select/level-0-character-select.component';
import { Level1TheStageComponent } from './levels/level-1-the-stage/level-1-the-stage.component';
import { Level2TheObserverComponent } from './levels/level-2-the-observer/level-2-the-observer.component';
import { Level3ThePitfallsComponent } from './levels/level-3-the-pitfalls/level-3-the-pitfalls.component';
import { Level4TheRewriteComponent } from './levels/level-4-the-rewrite/level-4-the-rewrite.component';
import { Level5TheInfluenceComponent } from './levels/level-5-the-influence/level-5-the-influence.component';
import { Level6QuestCompleteComponent } from './levels/level-6-quest-complete/level-6-quest-complete.component';

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
        component: Level0CharacterSelectComponent,
      },
      {
        path: 'the-stage',
        component: Level1TheStageComponent,
      },
      {
        path: 'the-observer',
        component: Level2TheObserverComponent,
      },
      {
        path: 'the-pitfalls',
        component: Level3ThePitfallsComponent,
      },
      {
        path: 'overtuigingen',
        component: Level4TheRewriteComponent,
      },
      {
        path: 'cirkel-van-invloed',
        component: Level5TheInfluenceComponent,
      },
      {
        path: 'quest-complete',
        component: Level6QuestCompleteComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: FIRST_LEVEL_SLUG,
  },
];
