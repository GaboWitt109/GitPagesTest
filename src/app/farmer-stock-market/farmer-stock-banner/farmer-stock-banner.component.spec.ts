import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerStockBannerComponent } from './farmer-stock-banner.component';

describe('FarmerStockBannerComponent', () => {
  let component: FarmerStockBannerComponent;
  let fixture: ComponentFixture<FarmerStockBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerStockBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerStockBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
