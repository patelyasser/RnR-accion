import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificatesRoutingModule } from './certificates-routing.module';
import { CertificateComponent } from './certificates.component';


@NgModule({
  declarations: [CertificateComponent],
  imports: [
    CommonModule,
    CertificatesRoutingModule
  ]
})
export class CertificatesModule { }
