import { TestBed } from '@angular/core/testing';

import { BvcService } from './bvc.service';

describe('BvcService', () => {
  let service: BvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
