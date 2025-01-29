import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendivaloresBannerComponent } from './rendivalores-banner.component';

describe('RendivaloresBannerComponent', () => {
  let component: RendivaloresBannerComponent;
  let fixture: ComponentFixture<RendivaloresBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendivaloresBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RendivaloresBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
