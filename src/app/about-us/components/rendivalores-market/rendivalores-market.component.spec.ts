import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendivaloresMarketComponent } from './rendivalores-market.component';

describe('RendivaloresMarketComponent', () => {
  let component: RendivaloresMarketComponent;
  let fixture: ComponentFixture<RendivaloresMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendivaloresMarketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RendivaloresMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
