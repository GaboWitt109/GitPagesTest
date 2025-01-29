import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCapitalFinancialInformationComponent } from './open-capital-financial-information.component';

describe('OpenCapitalFinancialInformationComponent', () => {
  let component: OpenCapitalFinancialInformationComponent;
  let fixture: ComponentFixture<OpenCapitalFinancialInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenCapitalFinancialInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenCapitalFinancialInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
