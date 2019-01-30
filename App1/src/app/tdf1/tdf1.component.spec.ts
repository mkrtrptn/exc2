import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TDF1Component } from './tdf1.component';

describe('TDF1Component', () => {
  let component: TDF1Component;
  let fixture: ComponentFixture<TDF1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDF1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDF1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
