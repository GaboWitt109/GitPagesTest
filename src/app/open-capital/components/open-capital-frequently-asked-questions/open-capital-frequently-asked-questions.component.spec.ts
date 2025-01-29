import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCapitalFrequentlyAskedQuestionsComponent } from './open-capital-frequently-asked-questions.component';

describe('OpenCapitalFrequentlyAskedQuestionsComponent', () => {
  let component: OpenCapitalFrequentlyAskedQuestionsComponent;
  let fixture: ComponentFixture<OpenCapitalFrequentlyAskedQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenCapitalFrequentlyAskedQuestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenCapitalFrequentlyAskedQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
