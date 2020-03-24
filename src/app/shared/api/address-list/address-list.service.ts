import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Address} from '../../model/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressListService {

  constructor(private http: HttpClient) {
  }

  fetchAddressList(): Observable<Address[]> {
    return this._fetchAddressList();
  }

  fetchStreamAddressList(): Observable<Address[]> {
    return this._fetchStreamAddressList();
  }

  /*
     * ==========
     * Overwrite the methods below in mock services in order to isolate the server for tests
     * ==========
     */

  // TODO: Connect to database, use only the mock service

  protected _fetchAddressList(): Observable<Address[]> {
    return this.http
      .get<Address[]>(`localhost:4200`)
      .pipe(catchError((error: any) => throwError(error)));
  }

  protected _fetchStreamAddressList(): Observable<Address[]> {
    return this.http
      .get<Address[]>(`localhost:4200`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
