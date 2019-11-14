import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KudosComponent } from './kudos.component';


const routes: Routes = [
  {
    path: '',
    component: KudosComponent,
    data: {
      title: 'Kudos'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KudosRoutingModule { }
