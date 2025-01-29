import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BvcInstrumentsComponent } from './bvc-instruments.component';

describe('BvcInstrumentsComponent', () => {
  let component: BvcInstrumentsComponent;
  let fixture: ComponentFixture<BvcInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BvcInstrumentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BvcInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
