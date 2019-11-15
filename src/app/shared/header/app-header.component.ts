import { Component, ElementRef, Input, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BrowserDetectService } from '../services/browser-detect.service';
import * as _ from 'lodash';
import { CommonFunctionsService } from '../services/common-functions.service';

@Component({
  selector: 'app-header, cui-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, OnDestroy {

  @Input() fixed: boolean;

  @Input() navbarBrand: any;
  @Input() navbarBrandFull: any;
  @Input() navbarBrandMinimized: any;
  @Input() navbarBrandText: any = { icon: '🅲', text: '🅲 CoreUI' };
  @Input() navbarBrandHref: ''; // deprecated, use navbarBrandRouterLink instead
  @Input() navbarBrandRouterLink: any[] | string = '';

  @Input() sidebarToggler: string | boolean;
  @Input() mobileSidebarToggler: boolean;

  @Input() asideMenuToggler: string | boolean;
  @Input() mobileAsideMenuToggler: boolean;
  @Input() hideSearchBar: boolean;

  private readonly fixedClass = 'header-fixed';
  navbarBrandImg: boolean;
  isOpen: boolean = false;
  public model = {
    searchTerm: ""
  }
  public recording: boolean;
  public voiceValue: string;
  public isChrome = true;
  public controlIf: number = 0
  suggestions: any;
  isResultListVisible: boolean = false;
  userFirstName: any;
  userName: string;
  notificationCount: number = 0;
  notifications = []
  private readonly breakpoints = ['xl', 'lg', 'md', 'sm', 'xs'];
  sidebarTogglerClass = 'd-none d-md-block';
  sidebarTogglerMobileClass = 'd-lg-none';
  asideTogglerClass = 'd-none d-md-block';
  asideTogglerMobileClass = 'd-lg-none';
  isRead: boolean = false;
  isThereNewNotifications;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private _browserService: BrowserDetectService,
  ) {
    renderer.addClass(hostElement.nativeElement, 'app-header');
    renderer.addClass(hostElement.nativeElement, 'navbar');
    // this.setUserName();
  }

  ngOnInit(): void {
    this.isFixed(this.fixed);
    this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
    this.navbarBrandRouterLink = this.navbarBrandRouterLink[0] ? this.navbarBrandRouterLink : this.navbarBrandHref;
    this.sidebarTogglerClass = this.setToggerBreakpointClass(<string>this.sidebarToggler);
    this.sidebarTogglerMobileClass = this.setToggerMobileBreakpointClass(<string>this.sidebarToggler);
    this.asideTogglerClass = this.setToggerBreakpointClass(<string>this.asideMenuToggler);
    this.asideTogglerMobileClass = this.setToggerMobileBreakpointClass(<string>this.asideMenuToggler);
  }
    
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, this.fixedClass);
  }

  /**
   * @returns Logs you out if you have an SSO session with your browser
   */
  logout() {
  }

  setUserName() {
    let userDetails: any = JSON.parse(localStorage.getItem("userDetails"));
    this.userFirstName = userDetails.firstName;
    this.userName = userDetails.firstName || userDetails.lastName ? `${userDetails.firstName || ''} ${userDetails.lastName || ''}` : userDetails.username;
  }

  isFixed(fixed: boolean = this.fixed): void {
    if (fixed) {
      this.renderer.addClass(this.document.body, this.fixedClass);
    }
  }
  
  setToggerBreakpointClass(breakpoint = 'md') {
    let togglerClass = 'd-none d-md-block';
    if (this.breakpoints.includes(breakpoint)) {
      const breakpointIndex = this.breakpoints.indexOf(breakpoint);
      togglerClass = `d-none d-${breakpoint}-block`;
    }
    return togglerClass;
  }

  setToggerMobileBreakpointClass(breakpoint = 'lg') {
    let togglerClass = 'd-lg-none';
    if (this.breakpoints.includes(breakpoint)) {
      togglerClass = `d-${breakpoint}-none`;
    }
    return togglerClass;
  }

}
