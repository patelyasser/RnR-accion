import {Component, ElementRef, Inject, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-footer, cui-footer',
  templateUrl: `./app-footer.component.html`,
  styleUrls: ['app-footer.component.scss']
})
export class AppFooterComponent implements OnInit, OnDestroy {
  @Input() fixed: boolean;

  private readonly fixedClass = 'footer-fixed';
  public year: any;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {
    this.year = (new Date()).getFullYear();
    renderer.addClass(hostElement.nativeElement, 'app-footer');
  }

  ngOnInit(): void {
    this.isFixed(this.fixed);
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
