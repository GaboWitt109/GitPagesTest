import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoMutualDescriptionComponent } from './fondo-mutual-description.component';

describe('FondoMutualDescriptionComponent', () => {
  let component: FondoMutualDescriptionComponent;
  let fixture: ComponentFixture<FondoMutualDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FondoMutualDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FondoMutualDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
