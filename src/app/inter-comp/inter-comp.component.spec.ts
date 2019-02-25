import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterCompComponent } from './inter-comp.component';

describe('InterCompComponent', () => {
  let component: InterCompComponent;
  let fixture: ComponentFixture<InterCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
