import { TestBed } from '@angular/core/testing';

import { FindingService } from './finding.service';

describe('FindingService', () => {
  let service: FindingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
