import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendivaloresDirectivesComponent } from './rendivalores-directives.component';

describe('RendivaloresDirectivesComponent', () => {
  let component: RendivaloresDirectivesComponent;
  let fixture: ComponentFixture<RendivaloresDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendivaloresDirectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RendivaloresDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
