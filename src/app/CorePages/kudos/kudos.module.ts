import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormioModule } from 'angular-formio';

import { KudosRoutingModule } from './kudos-routing.module';
import { KudosComponent } from './kudos.component';
import { GiveKudosComponent } from './give-kudos/give-kudos.component';

@NgModule({
  declarations: [KudosComponent, GiveKudosComponent],
  imports: [
    CommonModule,
    KudosRoutingModule,
    FormioModule
  ]
})
export class KudosModule { }
