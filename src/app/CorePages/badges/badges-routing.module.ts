import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadgesComponent } from './badges.component';
import { GiveBadgesComponent } from './give-badges/give-badges.component';


const routes: Routes = [
  {
    path: '',
    component: BadgesComponent,
    data: {
      title: 'Badges'
    }
  },
  {
    path: 'add',
    component: GiveBadgesComponent,
    data: {
      title: 'Give Badges',
      parent: {
        title: 'Badges',
        url: '/badges'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadgesRoutingModule { }
