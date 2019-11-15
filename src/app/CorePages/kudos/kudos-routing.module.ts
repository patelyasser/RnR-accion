import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KudosComponent } from './kudos.component';
import { GiveKudosComponent } from './give-kudos/give-kudos.component';


const routes: Routes = [
  {
    path: '',
    component: KudosComponent,
    data: {
      title: 'Kudos'
    }
  },
  {
    path: 'add',
    component: GiveKudosComponent,
    data: {
      title: 'Give Kudos',
      parent: {
        title: 'Kudos',
        url: '/kudos'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KudosRoutingModule { }
