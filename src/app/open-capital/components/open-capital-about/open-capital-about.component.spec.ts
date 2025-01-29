import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCapitalAboutComponent } from './open-capital-about.component';

describe('OpenCapitalAboutComponent', () => {
  let component: OpenCapitalAboutComponent;
  let fixture: ComponentFixture<OpenCapitalAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenCapitalAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenCapitalAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
