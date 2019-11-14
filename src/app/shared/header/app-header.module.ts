import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '../shared-lib/layout/layout.module';
import { AppHeaderComponent } from './app-header.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    AppHeaderComponent,
    LayoutModule
  ],
  declarations: [
    AppHeaderComponent
  ]
})
export class AppHeaderModule {}
