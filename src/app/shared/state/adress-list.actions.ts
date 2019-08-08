import {Address} from '../model/address.model';
import {LoadableError} from '../model/loadable.model';


export class AddressAdd {
  static readonly type = '[Address List] Add Address';

  constructor(public payload: Address) {
  }
}

export class AddressEdit {
  static readonly type = '[Address List] Update Address';

  constructor(public id: string, public payload: Address) {
  }
}

export class AddressFormUpdate {
  static readonly type = '[Address List][Form] Update';

  constructor(public payload: Address) {
  }
}

export class AddressFormSuccess {
  static readonly type = '[Address List][Form] Update Success';
}

export class LoadAddressList {
  static readonly type = '[Address List][Load] Loading';
}

export class LoadAddressListError {
  static readonly type = '[Address List][Load] Error';

  constructor(public payload: LoadableError) {
  }
}

export class LoadAddressListSuccess {
  static readonly type = '[Address List][Load] Success';

  constructor(public payload: Address[]) {
  }
}
