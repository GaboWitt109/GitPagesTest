import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendivaloresAboutComponent } from './rendivalores-about.component';

describe('RendivaloresAboutComponent', () => {
  let component: RendivaloresAboutComponent;
  let fixture: ComponentFixture<RendivaloresAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendivaloresAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RendivaloresAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
