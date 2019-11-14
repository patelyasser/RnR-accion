import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgesRoutingModule } from './badges-routing.module';
import { BadgesComponent } from './badges.component';

import { FormioModule } from 'angular-formio';

@NgModule({
  declarations: [BadgesComponent],
  imports: [
    CommonModule,
    BadgesRoutingModule,
    FormioModule
  ]
})
export class BadgesModule { }
