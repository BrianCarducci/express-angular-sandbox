import { TestBed, inject } from '@angular/core/testing';

import { DumbServiceService } from './dumb-service.service';

describe('DumbServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DumbServiceService]
    });
  });

  it('should be created', inject([DumbServiceService], (service: DumbServiceService) => {
    expect(service).toBeTruthy();
  }));
});
