import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './shared/error/404.component';
import { P500Component } from './shared/error/500.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import { AppAsideModule } from './shared/aside/app-aside.module';
import { AppBreadcrumbModule } from './shared/breadcrumb/app-breadcrumb.module';
import { AppFooterModule } from './shared/footer/app-footer.module';
import { AppHeaderModule } from './shared/header/app-header.module';
import { AppSidebarModule } from './shared/sidebar/app-sidebar.module';
import { LayoutModule } from './shared/shared-lib';
import { CeiboShare } from 'ng2-social-share';


// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { BrowserDetectService } from './shared/services/browser-detect.service';
import { SharedModule } from './shared/shared.module';
import { NgxSocialButtonModule, SocialServiceConfig } from "ngx-social-button";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    LayoutModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    CeiboShare
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
  BrowserDetectService],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
