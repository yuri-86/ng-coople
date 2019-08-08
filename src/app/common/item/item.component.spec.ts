import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemComponent} from './item.component';
import {AddressPipe} from '../pipes/address.pipe';
import {NgxsModule} from '@ngxs/store';
import {AddressListState} from '../../shared/state/address-list.state';
import {HttpClientModule} from '@angular/common/http';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemComponent,
        AddressPipe
      ],
      imports: [
        NgxsModule.forRoot([AddressListState]),
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
