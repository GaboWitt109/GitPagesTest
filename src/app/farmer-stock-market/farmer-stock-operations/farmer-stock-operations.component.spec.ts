import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerStockOperationsComponent } from './farmer-stock-operations.component';

describe('FarmerStockOperationsComponent', () => {
  let component: FarmerStockOperationsComponent;
  let fixture: ComponentFixture<FarmerStockOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerStockOperationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerStockOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
