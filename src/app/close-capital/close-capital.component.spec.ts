import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseCapitalComponent } from './close-capital.component';

describe('CloseCapitalComponent', () => {
  let component: CloseCapitalComponent;
  let fixture: ComponentFixture<CloseCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseCapitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloseCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
