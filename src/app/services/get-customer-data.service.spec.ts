import { TestBed } from '@angular/core/testing';

import { GetCustomerDataService } from './get-customer-data.service';

describe('GetCustomerDataService', () => {
  let service: GetCustomerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCustomerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
