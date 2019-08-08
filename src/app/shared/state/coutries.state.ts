import {Action, NgxsOnInit, Selector, State, StateContext} from '@ngxs/store';
import {generateLoadableError, Loadable, onLoadableError, onLoadableInit, onLoadableLoad, onLoadableSuccess} from '../model/loadable.model';
import {catchError, map} from 'rxjs/operators';
import {asapScheduler, of} from 'rxjs';
import {Country} from '../../../assets/mockup/countries';
import {LoadCountries, LoadCountriesError, LoadCountriesSuccess} from './countries.actions';
import {CountriesMockService} from '../api/countries/countries-mock.service';

export interface CountriesStateModel {
  countries: Loadable<Country[]>;
}

@State<CountriesStateModel>({
  name: 'countries',
  defaults: {
    countries: onLoadableInit()
  }
})

export class CountriesState implements NgxsOnInit {

  constructor(protected service: CountriesMockService) {
  }

  @Selector()
  static fetchCountries(state: CountriesStateModel): Country[] {
    return state && state.countries && state.countries.data;
  }

  @Action(LoadCountries, {cancelUncompleted: true})
  loadCountries(ctx: StateContext<CountriesStateModel>) {
    ctx.patchState({
      countries: onLoadableLoad<Country[]>()
    });

    return this.remoteCountries(ctx);
  }

  @Action(LoadCountriesSuccess, {cancelUncompleted: true})
  loadCountriesSuccess(ctx: StateContext<CountriesStateModel>, {payload}: LoadCountriesSuccess) {
    ctx.patchState({
      countries: onLoadableSuccess<Country[]>(payload)
    });
  }

  @Action(LoadCountriesError, {cancelUncompleted: true})
  loadCountriesError(ctx: StateContext<CountriesStateModel>, {payload}: LoadCountriesError) {
    ctx.patchState({
      countries: onLoadableError<null>(payload)
    });
  }

  protected remoteCountries(ctx: StateContext<CountriesStateModel>) {
    return this.service
      .fetchCountries()
      .pipe(
        map((data: Country[]) =>
          asapScheduler.schedule(() =>
            ctx.dispatch(new LoadCountriesSuccess(data))
          )
        ),
        catchError(error =>
          of(
            asapScheduler.schedule(() =>
              ctx.dispatch(new LoadCountriesError(generateLoadableError(error.message, error.status)))
            )
          )
        )
      );
  }

  ngxsOnInit(ctx: StateContext<CountriesStateModel>) {
    ctx.dispatch(new LoadCountries());
  }
}
