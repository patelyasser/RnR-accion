import { Component, ElementRef, Input, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { asideMenuCssClasses } from '../shared-lib';

@Component({
  selector: 'app-aside, cui-aside',
  templateUrl: `./app-aside.component.html`,
  styleUrls: ['./app-aside.component.scss']
})
export class AppAsideComponent implements OnInit, OnDestroy {
  @Input() offCanvas: boolean;
  @Input() eventsData;
  @Input() notificationsData;


  private readonly fixedClass = 'aside-menu-fixed';
  private display: boolean = false;
  private fixed: boolean = true;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {
    renderer.addClass(hostElement.nativeElement, 'aside-menu');
  }

  ngOnInit(): void {
    this.isFixed(this.fixed);
    this.isOffCanvas(this.offCanvas);
    this.displayBreakpoint(this.display);
  }
  
  ngOnDestroy(): void {
    console.log('ng destroy')
    this.renderer.removeClass(this.document.body, this.fixedClass);
  }

  isFixed(fixed: boolean = this.fixed): void {
    if (fixed) {
      this.renderer.addClass(this.document.body, this.fixedClass);
    }
  }

  isOffCanvas(offCanvas: boolean = this.offCanvas): void {
    if (offCanvas) {
      this.renderer.addClass(this.document.body, 'aside-menu-off-canvas');
    }
  }

  displayBreakpoint(display: any = this.display): void {
    if (display !== false) {
      const cssClass = this.display ? `aside-menu-${this.display}-show` : asideMenuCssClasses[0];
      this.renderer.addClass(this.document.body, cssClass);
    }
  }
}
