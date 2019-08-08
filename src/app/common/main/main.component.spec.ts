import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainComponent} from './main.component';
import {ItemsListComponent} from '../items-list/items-list.component';
import {ItemComponent} from '../item/item.component';
import {NgxsModule} from '@ngxs/store';
import {AddressListState} from '../../shared/state/address-list.state';
import {HttpClientModule} from '@angular/common/http';
import {AddressPipe} from '../pipes/address.pipe';
import {ItemAddEditComponent} from '../item-add-edit/item-add-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule, MatSnackBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoadableModule} from '../../shared/loadable/loadable.module';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        ItemsListComponent,
        ItemComponent,
        ItemAddEditComponent,
        AddressPipe
      ],
      imports: [
        NgxsModule.forRoot([AddressListState]),
        HttpClientModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        LoadableModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
