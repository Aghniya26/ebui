import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mini1Component } from './mini1.component';

describe('Mini1Component', () => {
  let component: Mini1Component;
  let fixture: ComponentFixture<Mini1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mini1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mini1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
