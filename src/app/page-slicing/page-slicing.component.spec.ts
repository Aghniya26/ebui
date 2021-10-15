import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSlicingComponent } from './page-slicing.component';

describe('PageSlicingComponent', () => {
  let component: PageSlicingComponent;
  let fixture: ComponentFixture<PageSlicingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSlicingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSlicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
