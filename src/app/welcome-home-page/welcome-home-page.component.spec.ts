import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeHomePageComponent } from './welcome-home-page.component';

describe('WelcomeHomePageComponent', () => {
  let component: WelcomeHomePageComponent;
  let fixture: ComponentFixture<WelcomeHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
