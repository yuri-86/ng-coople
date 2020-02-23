import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {NgxsModule} from '@ngxs/store';
import {AddressListState} from './shared/state/address-list.state';
import {HeaderComponent} from './common/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {MainComponent} from './common/main/main.component';
import {ItemsListComponent} from './common/items-list/items-list.component';
import {ItemComponent} from './common/item/item.component';
import {AddressPipe} from './common/pipes/address.pipe';
import {ItemAddEditComponent} from './common/item-add-edit/item-add-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoadableModule} from './shared/loadable/loadable.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([AddressListState]),
        HttpClientModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        LoadableModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        ItemsListComponent,
        ItemComponent,
        AddressPipe,
        ItemAddEditComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
