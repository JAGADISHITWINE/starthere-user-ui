import { TestBed } from '@angular/core/testing';

import { CancleBookings } from './cancle-bookings';

describe('CancleBookings', () => {
  let service: CancleBookings;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancleBookings);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
