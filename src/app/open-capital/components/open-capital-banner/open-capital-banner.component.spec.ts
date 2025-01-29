import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCapitalBannerComponent } from './open-capital-banner.component';

describe('OpenCapitalBannerComponent', () => {
  let component: OpenCapitalBannerComponent;
  let fixture: ComponentFixture<OpenCapitalBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenCapitalBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenCapitalBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
