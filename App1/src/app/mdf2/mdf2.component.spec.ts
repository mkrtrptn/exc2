import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MDF2Component } from './mdf2.component';

describe('MDF2Component', () => {
  let component: MDF2Component;
  let fixture: ComponentFixture<MDF2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MDF2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MDF2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
