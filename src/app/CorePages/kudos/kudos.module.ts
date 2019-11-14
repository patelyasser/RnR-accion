import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KudosRoutingModule } from './kudos-routing.module';
import { KudosComponent } from './kudos.component';

import { FormioModule } from 'angular-formio';


@NgModule({
  declarations: [KudosComponent],
  imports: [
    CommonModule,
    KudosRoutingModule,
    FormioModule
  ]
})
export class KudosModule { }
