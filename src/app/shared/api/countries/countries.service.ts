import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Country} from '../../../../assets/mockup/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) {
  }
f
  fetchCountries(): Observable<Country[]> {
    return this._fetchCountries();
  }

  /*
     * ==========
     * Overwrite the methods below in mock services in order to isolate the server for tests
     * ==========
     */

  // TODO: Connect to database, use only the mock service

  protected _fetchCountries(): Observable<Country[]> {
    return this.http
      .get<Country[]>(`localhost:4200`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
