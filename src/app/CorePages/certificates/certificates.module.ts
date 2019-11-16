import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesRoutingModule } from './certificates-routing.module';
import { CertificateComponent } from './certificates.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [CertificateComponent],
  imports: [
    CommonModule,
    CertificatesRoutingModule,
    BsDropdownModule.forRoot()
  ]
})
export class CertificatesModule { }
