import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseCapitalBannerComponent } from './close-capital-banner.component';

describe('RendivaloresBannerComponent', () => {
  let component: CloseCapitalBannerComponent;
  let fixture: ComponentFixture<CloseCapitalBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseCapitalBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CloseCapitalBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
