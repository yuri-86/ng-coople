import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemsListComponent} from './items-list.component';
import {ItemComponent} from '../item/item.component';
import {AddressPipe} from '../pipes/address.pipe';
import {LoadableModule} from '../../shared/loadable/loadable.module';
import {NgxsModule} from '@ngxs/store';
import {AddressListState} from '../../shared/state/address-list.state';
import {HttpClientModule} from '@angular/common/http';

describe('ItemsListComponent', () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemsListComponent,
        ItemComponent,
        AddressPipe
      ],
      imports: [
        LoadableModule,
        NgxsModule.forRoot([AddressListState]),
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
