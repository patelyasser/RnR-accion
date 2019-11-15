import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveBadgesComponent } from './give-badges.component';

describe('GiveBadgesComponent', () => {
  let component: GiveBadgesComponent;
  let fixture: ComponentFixture<GiveBadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
