import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementFormsComponent } from './requirement-forms.component';

describe('RequirementFormsComponent', () => {
  let component: RequirementFormsComponent;
  let fixture: ComponentFixture<RequirementFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequirementFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequirementFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
