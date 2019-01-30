import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayWithngModelComponent } from './two-way-withng-model.component';

describe('TwoWayWithngModelComponent', () => {
  let component: TwoWayWithngModelComponent;
  let fixture: ComponentFixture<TwoWayWithngModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayWithngModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayWithngModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
