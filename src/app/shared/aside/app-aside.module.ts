import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '../shared-lib/layout/layout.module';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppAsideComponent } from './app-aside.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    TabsModule.forRoot()
  ],
  exports: [
    AppAsideComponent,
    LayoutModule
  ],
  declarations: [
    AppAsideComponent
  ]
})
export class AppAsideModule {}
