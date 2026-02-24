import { TestBed } from '@angular/core/testing';

import { Sessionexpired } from './sessionexpired';

describe('Sessionexpired', () => {
  let service: Sessionexpired;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sessionexpired);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
