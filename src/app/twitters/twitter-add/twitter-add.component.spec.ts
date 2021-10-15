import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterAddComponent } from './twitter-add.component';

describe('TwitterAddComponent', () => {
  let component: TwitterAddComponent;
  let fixture: ComponentFixture<TwitterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
