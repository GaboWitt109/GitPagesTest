import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerStockAboutComponent } from './farmer-stock-about.component';

describe('FarmerStockAboutComponent', () => {
  let component: FarmerStockAboutComponent;
  let fixture: ComponentFixture<FarmerStockAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerStockAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerStockAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
