import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCapitalStarterLinksComponent } from './open-capital-starter-links.component';

describe('OpenCapitalStarterLinksComponent', () => {
  let component: OpenCapitalStarterLinksComponent;
  let fixture: ComponentFixture<OpenCapitalStarterLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenCapitalStarterLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenCapitalStarterLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
