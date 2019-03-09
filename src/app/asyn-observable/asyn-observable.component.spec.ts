import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynObservableComponent } from './asyn-observable.component';

describe('AsynObservableComponent', () => {
  let component: AsynObservableComponent;
  let fixture: ComponentFixture<AsynObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsynObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
