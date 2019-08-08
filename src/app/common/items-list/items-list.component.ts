import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Address} from '../../shared/model/address.model';
import {AddressListState} from '../../shared/state/address-list.state';
import {Observable} from 'rxjs';
import {Loadable} from '../../shared/model/loadable.model';
import {Select} from '@ngxs/store';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsListComponent implements OnInit {
  @Select(AddressListState.loadableAddressList)
  loadableAddressList$: Observable<Loadable<Address[]> | null>;

  @Input()
  items: Address[];

  constructor() {
  }

  ngOnInit() {
  }

}
