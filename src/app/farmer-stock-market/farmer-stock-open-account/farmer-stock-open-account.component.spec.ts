import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerStockOpenAccountComponent } from './farmer-stock-open-account.component';

describe('FarmerStockOpenAccountComponent', () => {
  let component: FarmerStockOpenAccountComponent;
  let fixture: ComponentFixture<FarmerStockOpenAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerStockOpenAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerStockOpenAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
