import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallFirslComponent } from './small-firsl.component';

describe('SmallFirslComponent', () => {
  let component: SmallFirslComponent;
  let fixture: ComponentFixture<SmallFirslComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallFirslComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallFirslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
