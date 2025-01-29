import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseCapitalConformedComponent } from './close-capital-conformed.component';

describe('CloseCapitalConformedComponent', () => {
  let component: CloseCapitalConformedComponent;
  let fixture: ComponentFixture<CloseCapitalConformedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseCapitalConformedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloseCapitalConformedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
