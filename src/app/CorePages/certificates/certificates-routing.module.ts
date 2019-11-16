import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificateComponent } from './certificates.component';


const routes: Routes = [
  {
    path: '',
    component: CertificateComponent,
    data: {
      title: 'Certificates'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificatesRoutingModule { }
