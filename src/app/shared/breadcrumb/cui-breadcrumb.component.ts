import {Component, ElementRef, Inject, Input, OnDestroy, OnInit, Renderer2, OnChanges, ChangeDetectorRef} from '@angular/core';
import {DOCUMENT} from '@angular/common';

import {AppBreadcrumbService} from './app-breadcrumb.service';

@Component({
  selector: 'cui-breadcrumb',
  templateUrl: './cui-breadcrumb.component.html',
  styleUrls: ['./cui-breadcrumb.component.scss']
})
export class CuiBreadcrumbComponent implements OnInit, OnDestroy {
  @Input() fixed: boolean;

  public breadcrumbs;
  isDashboard: boolean;

  private readonly fixedClass = 'breadcrumb-fixed';
  initialDatePickerFlag = false;
  isSearch: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    public service: AppBreadcrumbService
  ) { }

  public ngOnInit(): void {
    this.isFixed(this.fixed);
    this.breadcrumbs = this.service.breadcrumbs;
    this.breadcrumbs.subscribe(data => {
      if (data[1] && data[1]['url']) {
        this.isDashboard = data[1]['url'].includes('dashboard');
        if (!this.isDashboard) {
          this.initialDatePickerFlag = false;
        }
        this.isSearch = data[1]['url'].includes('search-result');
      }
    });
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, this.fixedClass);
  }

  isFixed(fixed: boolean = this.fixed): void {
    if (fixed) {
      this.renderer.addClass(this.document.body, this.fixedClass);
    }
  }

}
