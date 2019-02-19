import { TestBed } from '@angular/core/testing';

import { BoockServiceService } from './boock-service.service';

describe('BoockServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoockServiceService = TestBed.get(BoockServiceService);
    expect(service).toBeTruthy();
  });
});
