import { TestBed } from '@angular/core/testing';

import { AdkarService } from './adkar.service';

describe('AdkarService', () => {
  let service: AdkarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdkarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
