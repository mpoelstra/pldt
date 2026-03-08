import { Routes } from '@angular/router';

import { JourneyPresentationComponent } from './journey/journey-presentation.component';
import { FIRST_LEVEL_SLUG } from './journey/journey-data';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: FIRST_LEVEL_SLUG,
  },
  {
    path: ':slug',
    component: JourneyPresentationComponent,
  },
  {
    path: '**',
    redirectTo: FIRST_LEVEL_SLUG,
  },
];
