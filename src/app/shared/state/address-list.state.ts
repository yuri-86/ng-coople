import {Action, NgxsOnInit, Selector, State, StateContext} from '@ngxs/store';
import {Address} from '../model/address.model';
import {generateLoadableError, Loadable, onLoadableError, onLoadableInit, onLoadableLoad, onLoadableSuccess} from '../model/loadable.model';
import {
  AddressAdd,
  AddressEdit, AddressFormSuccess,
  AddressFormUpdate,
  LoadAddressList,
  LoadAddressListError,
  LoadAddressListSuccess
} from './adress-list.actions';
import {catchError, map} from 'rxjs/operators';
import {asapScheduler, of} from 'rxjs';
import {AddressListMockService} from '../api/address-list/address-list-mock.service';

export interface AddressListStateModel {
  addressList: Loadable<Address[]>;
  addressForm: Address;
}

@State<AddressListStateModel>({
  name: 'addressList',
  defaults: {
    addressList: onLoadableInit(),
    addressForm: null
  }
})

export class AddressListState implements NgxsOnInit {

  constructor(protected service: AddressListMockService) {
  }

  @Selector()
  static loadableAddressList(state: AddressListStateModel): Loadable<Address[] | null> {
    return state.addressList || null;
  }

  @Selector()
  static addressFormFetch(state: AddressListStateModel): Address {
    return state && state.addressForm;
  }

  @Selector()
  static addressList(state: AddressListStateModel): Address[] {
    return state && state.addressList && state.addressList.data;
  }

  @Action(AddressAdd, {cancelUncompleted: true})
  addressAdd(ctx: StateContext<AddressListStateModel>, action: AddressAdd) {
    const state = ctx.getState();
    ctx.patchState({
      addressList: onLoadableSuccess<Address[]>([...state.addressList.data, action.payload])
    });
  }

  @Action(AddressEdit, {cancelUncompleted: true})
  addressEdit(ctx: StateContext<AddressListStateModel>, action: AddressEdit) {

    const state = ctx.getState();
    const newState = state.addressList.data.filter(({id}) => id !== action.id);

    ctx.patchState({
      addressList: onLoadableSuccess<Address[]>([
        ...newState,
        action.payload
      ])
    });
    ctx.dispatch(new AddressFormSuccess());
  }

  @Action(AddressFormUpdate, {cancelUncompleted: true})
  addressFormUpdate(ctx: StateContext<AddressListStateModel>, action: AddressFormUpdate) {

    ctx.patchState({
      addressForm: action.payload
    });
  }

  @Action(AddressFormSuccess, {cancelUncompleted: true})
  addressFormSuccess(ctx: StateContext<AddressListStateModel>, action: AddressFormSuccess) {

    ctx.patchState({
      addressForm: null
    });
  }

  @Action(LoadAddressList, {cancelUncompleted: true})
  loadAddressList(ctx: StateContext<AddressListStateModel>) {
    ctx.patchState({
      addressList: onLoadableLoad<Address[]>()
    });

    return this.remoteAddressList(ctx);
  }

  @Action(LoadAddressListSuccess, {cancelUncompleted: true})
  loadAddressListSuccess(ctx: StateContext<AddressListStateModel>, {payload}: LoadAddressListSuccess) {
    ctx.patchState({
      addressList: onLoadableSuccess<Address[]>(payload)
    });
  }

  @Action(LoadAddressListError, {cancelUncompleted: true})
  loadAddressListError(ctx: StateContext<AddressListStateModel>, {payload}: LoadAddressListError) {
    ctx.patchState({
      addressList: onLoadableError<null>(payload)
    });
  }

  protected remoteAddressList(ctx: StateContext<AddressListStateModel>) {
    return this.service
      .fetchAddressList()
      .pipe(
        map((data: Address[]) =>
          asapScheduler.schedule(() =>
            ctx.dispatch(new LoadAddressListSuccess(data))
          )
        ),
        catchError(error =>
          of(
            asapScheduler.schedule(() =>
              ctx.dispatch(new LoadAddressListError(generateLoadableError(error.message, error.status)))
            )
          )
        )
      );
  }

  ngxsOnInit(ctx: StateContext<AddressListStateModel>) {
    ctx.dispatch(new LoadAddressList());
  }
}
