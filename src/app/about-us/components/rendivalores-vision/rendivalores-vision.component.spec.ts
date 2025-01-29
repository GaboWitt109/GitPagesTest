import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendivaloresVisionComponent } from './rendivalores-vision.component';

describe('RendivaloresVisionComponent', () => {
  let component: RendivaloresVisionComponent;
  let fixture: ComponentFixture<RendivaloresVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendivaloresVisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RendivaloresVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
