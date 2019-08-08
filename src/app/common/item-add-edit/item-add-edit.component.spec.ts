import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAddEditComponent } from './item-add-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule, MatSnackBarModule} from '@angular/material';
import {NgxsModule} from '@ngxs/store';
import {AddressListState} from '../../shared/state/address-list.state';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('ItemAddEditComponent', () => {
  let component: ItemAddEditComponent;
  let fixture: ComponentFixture<ItemAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAddEditComponent ],
      imports: [
        NgxsModule.forRoot([AddressListState]),
        ReactiveFormsModule,
        MatInputModule,
        MatSnackBarModule,
        HttpClientModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
