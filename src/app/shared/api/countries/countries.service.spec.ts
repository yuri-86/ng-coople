import { TestBed } from '@angular/core/testing';

import { CountriesService } from './countries.service';
import {HttpClientModule} from '@angular/common/http';

describe('CountriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: CountriesService = TestBed.get(CountriesService);
    expect(service).toBeTruthy();
  });
});
