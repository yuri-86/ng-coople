import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './common/header/header.component';
import {MainComponent} from './common/main/main.component';
import {ItemsListComponent} from './common/items-list/items-list.component';
import {NgxsModule} from '@ngxs/store';
import {AddressListState} from './shared/state/address-list.state';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {ItemComponent} from './common/item/item.component';
import {HttpClientModule} from '@angular/common/http';
import {AddressPipe} from './common/pipes/address.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {ItemAddEditComponent} from './common/item-add-edit/item-add-edit.component';
import {MatButtonModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoadableModule} from './shared/loadable/loadable.module';
import {CountriesState} from './shared/state/coutries.state';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ItemsListComponent,
    ItemComponent,
    AddressPipe,
    ItemAddEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([AddressListState, CountriesState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule,
    BrowserAnimationsModule,
    LoadableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
