import {Component, OnInit} from '@angular/core';
import {AddressListState} from '../../shared/state/address-list.state';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';
import {Address} from '../../shared/model/address.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Select(AddressListState.addressList)
  addressList$: Observable<Address[]>;

  constructor() {
  }

  ngOnInit() {
  }

}
