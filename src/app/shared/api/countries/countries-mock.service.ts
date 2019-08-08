import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CountriesService} from './countries.service';
import {countries, Country} from '../../../../assets/mockup/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesMockService extends CountriesService {
  protected _fetchCountries(): Observable<Country[]> {
    return of<Country[]>(countries);
  }
}
