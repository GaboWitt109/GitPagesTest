import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseCapitalFaqComponent } from './close-capital-faq.component';

describe('CloseCapitalFaqComponent', () => {
  let component: CloseCapitalFaqComponent;
  let fixture: ComponentFixture<CloseCapitalFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseCapitalFaqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloseCapitalFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
