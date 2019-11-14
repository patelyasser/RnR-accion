import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './shared/error/404.component';
import { P500Component } from './shared/error/500.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path: "",
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./CorePages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'badges',
        loadChildren: () => import('./CorePages/badges/badges.module').then(m => m.BadgesModule)
      },
      {
        path: 'kudos',
        loadChildren: () => import('./CorePages/kudos/kudos.module').then(m => m.KudosModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
