import { TestBed } from '@angular/core/testing';

import { Upcomingtours } from './upcomingtours';

describe('Upcomingtours', () => {
  let service: Upcomingtours;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Upcomingtours);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
