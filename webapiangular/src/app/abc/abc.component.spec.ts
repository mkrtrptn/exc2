import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcComponent } from './abc.component';

describe('AbcComponent', () => {
  let component: AbcComponent;
  let fixture: ComponentFixture<AbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
  it('Add Method' ,()=>
{
  expect(component.sum(10,20)).toBe(30)
});



});
