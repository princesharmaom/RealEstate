import { TestBed } from '@angular/core/testing';

import { TofetchService } from './tofetch.service';

describe('TofetchService', () => {
  let service: TofetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TofetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
