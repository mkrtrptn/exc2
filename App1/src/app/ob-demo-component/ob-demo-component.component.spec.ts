import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObDemoComponentComponent } from './ob-demo-component.component';

describe('ObDemoComponentComponent', () => {
  let component: ObDemoComponentComponent;
  let fixture: ComponentFixture<ObDemoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObDemoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
