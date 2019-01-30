import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MDF1Component } from './mdf1.component';

describe('MDF1Component', () => {
  let component: MDF1Component;
  let fixture: ComponentFixture<MDF1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MDF1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MDF1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
