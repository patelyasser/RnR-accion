import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgesRoutingModule } from './badges-routing.module';
import { BadgesComponent } from './badges.component';

import { FormioModule } from 'angular-formio';
import { GiveBadgesComponent } from './give-badges/give-badges.component';

@NgModule({
  declarations: [BadgesComponent, GiveBadgesComponent],
  imports: [
    CommonModule,
    BadgesRoutingModule,
    FormioModule
  ]
})
export class BadgesModule { }
