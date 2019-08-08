import {LoadableError} from '../model/loadable.model';
import {Country} from '../../../assets/mockup/countries';

export class LoadCountries {
  static readonly type = '[Countries][Load] Loading';
}

export class LoadCountriesError {
  static readonly type = '[Countries][Load] Error';

  constructor(public payload: LoadableError) {
  }
}

export class LoadCountriesSuccess {
  static readonly type = '[Countries][Load] Success';

  constructor(public payload: Country[]) {
  }
}
