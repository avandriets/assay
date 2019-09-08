import { Routes } from '@angular/router';

import { MainContainerComponent } from './containers';

export const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    children: [
      {
        path: 'error',
        component: MainContainerComponent,
      }
    ],
  },
  { path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
