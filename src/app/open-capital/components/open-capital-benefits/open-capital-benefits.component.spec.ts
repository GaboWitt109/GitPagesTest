import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCapitalBenefitsComponent } from './open-capital-benefits.component';

describe('OpenCapitalBenefitsComponent', () => {
  let component: OpenCapitalBenefitsComponent;
  let fixture: ComponentFixture<OpenCapitalBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenCapitalBenefitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenCapitalBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
