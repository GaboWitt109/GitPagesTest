import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoMutualCerradoComponent } from './fondo-mutual-cerrado.component';

describe('FondoMutualCerradoComponent', () => {
  let component: FondoMutualCerradoComponent;
  let fixture: ComponentFixture<FondoMutualCerradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FondoMutualCerradoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FondoMutualCerradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
