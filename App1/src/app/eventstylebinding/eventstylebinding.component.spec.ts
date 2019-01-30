import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventstylebindingComponent } from './eventstylebinding.component';

describe('EventstylebindingComponent', () => {
  let component: EventstylebindingComponent;
  let fixture: ComponentFixture<EventstylebindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventstylebindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventstylebindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
