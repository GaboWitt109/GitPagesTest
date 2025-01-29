import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerroristFinancingComponent } from './terrorist-financing.component';

describe('TerroristFinancingComponent', () => {
  let component: TerroristFinancingComponent;
  let fixture: ComponentFixture<TerroristFinancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerroristFinancingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerroristFinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
