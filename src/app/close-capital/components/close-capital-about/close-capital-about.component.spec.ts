import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseCapitalAboutComponent } from './close-capital-about.component';

describe('CloseCapitalAboutComponent', () => {
  let component: CloseCapitalAboutComponent;
  let fixture: ComponentFixture<CloseCapitalAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseCapitalAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloseCapitalAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
