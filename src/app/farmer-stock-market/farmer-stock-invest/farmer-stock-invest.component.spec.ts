import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerStockInvestComponent } from './farmer-stock-invest.component';

describe('FarmerStockInvestComponent', () => {
  let component: FarmerStockInvestComponent;
  let fixture: ComponentFixture<FarmerStockInvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerStockInvestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerStockInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
