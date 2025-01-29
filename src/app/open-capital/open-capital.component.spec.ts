import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCapitalComponent } from './open-capital.component';

describe('OpenCapitalComponent', () => {
  let component: OpenCapitalComponent;
  let fixture: ComponentFixture<OpenCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenCapitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
