import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Address} from '../../shared/model/address.model';
import {Store} from '@ngxs/store';
import {AddressFormUpdate} from '../../shared/state/adress-list.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {
  @Input()
  item: Address;

  constructor(protected store: Store) {
  }

  ngOnInit() {
  }

  editAddress() {
    this.store.dispatch(new AddressFormUpdate(this.item));
    this.scroll();
  }

  private scroll() {
    window.scrollTo({top: 0, behavior: 'smooth'});;
  }
}
