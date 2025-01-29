import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoMutualCerradoDescriptionComponent } from './fondo-mutual-cerrado-description.component';

describe('FondoMutualCerradoDescriptionComponent', () => {
  let component: FondoMutualCerradoDescriptionComponent;
  let fixture: ComponentFixture<FondoMutualCerradoDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FondoMutualCerradoDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FondoMutualCerradoDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
