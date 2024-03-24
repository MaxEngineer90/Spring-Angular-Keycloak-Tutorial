import { TestBed } from '@angular/core/testing';

import { GreetingBackendService } from './greeting-backend.service';

describe('GreetingBackendService', () => {
  let service: GreetingBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreetingBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
