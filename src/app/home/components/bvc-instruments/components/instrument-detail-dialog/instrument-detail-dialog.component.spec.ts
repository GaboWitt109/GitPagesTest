import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentDetailDialogComponent } from './instrument-detail-dialog.component';

describe('InstrumentDetailDialogComponent', () => {
  let component: InstrumentDetailDialogComponent;
  let fixture: ComponentFixture<InstrumentDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstrumentDetailDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstrumentDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
