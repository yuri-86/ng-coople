import {Injectable} from '@angular/core';
import {BehaviorSubject, interval, Observable, of, Subject} from 'rxjs';
import {AddressListService} from './address-list.service';
import {Address} from '../../model/address.model';
import {addressList, generateList} from '../../../../assets/mockup/address-list';
import {distinctUntilChanged, map, mergeMap, scan, take, tap} from 'rxjs/operators';

interface IMessagesOperation extends Function {
  callback: Record<(messages: Address[]): Address[]>;
}

@Injectable({
  providedIn: 'root'
})
export class AddressListMockService extends AddressListService {
  currentUser: Subject<Address> = new BehaviorSubject<Address>(null);

  protected _fetchAddressList(): Observable<Address[]> {
    return of<Address[]>(generateList());
  }

  protected _fetchStreamAddressList(): Observable<Address[]> {
    return interval(1000)
      .pipe(
        map(value => addressList),
        map(r => r[Math.floor(Math.random() * r.length)]),
        // mergeMap(v => addressList),
        scan((acc, v) => [...acc, v], []),
        distinctUntilChanged(),
        take(100)
      )
      ;
  }
}
