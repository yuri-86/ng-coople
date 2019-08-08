import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AddressListService} from './address-list.service';
import {Address} from '../../model/address.model';
import {addressList} from '../../../../assets/mockup/address-list';

@Injectable({
  providedIn: 'root'
})
export class AddressListMockService extends AddressListService {
  protected _fetchAddressList(): Observable<Address[]> {
    return of<Address[]>(addressList);
  }
}
