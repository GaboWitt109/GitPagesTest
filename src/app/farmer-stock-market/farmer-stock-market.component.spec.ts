import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerStockMarketComponent } from './farmer-stock-market.component';

describe('FarmerStockMarketComponent', () => {
  let component: FarmerStockMarketComponent;
  let fixture: ComponentFixture<FarmerStockMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerStockMarketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerStockMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
