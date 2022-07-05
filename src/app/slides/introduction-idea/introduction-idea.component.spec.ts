import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionIdeaComponent } from './introduction-idea.component';

describe('IntroductionIdeaComponent', () => {
  let component: IntroductionIdeaComponent;
  let fixture: ComponentFixture<IntroductionIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionIdeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
