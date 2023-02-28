import { TestBed } from '@angular/core/testing';

import { LoggerrService } from './loggerr.service';

describe('LoggerrService', () => {
  let service: LoggerrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
