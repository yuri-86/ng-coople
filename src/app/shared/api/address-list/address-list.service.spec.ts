import {TestBed} from '@angular/core/testing';

import {AddressListService} from './address-list.service';
import {HttpClientModule} from '@angular/common/http';

describe('AddressListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: AddressListService = TestBed.get(AddressListService);
    expect(service).toBeTruthy();
  });
});
