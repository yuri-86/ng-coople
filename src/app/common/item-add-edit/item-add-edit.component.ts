import {ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Select, Store} from '@ngxs/store';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {MatSnackBar} from '@angular/material';
import {Address} from '../../shared/model/address.model';
import {AddressAdd, AddressEdit} from '../../shared/state/adress-list.actions';
import {AddressListState} from '../../shared/state/address-list.state';
import {CountriesState} from '../../shared/state/coutries.state';
import {combineLatest, Observable} from 'rxjs';
import {Country} from '../../../assets/mockup/countries';

@Component({
  selector: 'app-item-add-edit',
  templateUrl: './item-add-edit.component.html',
  styleUrls: ['./item-add-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemAddEditComponent implements OnInit, OnDestroy {
  @Select(CountriesState.fetchCountries)
  countries$: Observable<Country[]>;

  @ViewChild('formDirective', {static: false})
  formDirective: NgForm;

  title = 'Address';
  snackBarAction: string;
  buttonName: string;
  addressId = null;
  formGroup: FormGroup;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private element: ElementRef
  ) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(1)]),
      street: new FormControl('', [Validators.required, Validators.minLength(1)]),
      city: new FormControl('', [Validators.required, Validators.minLength(1)]),
      country: new FormControl(''),
      zip: new FormControl('', [Validators.required, Validators.pattern('^ABC[a-zA-Z0-9]{0,2}$')])
    });

    combineLatest(
      [
        this.store.select(AddressListState.addressFormFetch),
        this.countries$
      ]).pipe(
      untilDestroyed(this)
    ).subscribe(data => {
      if (data && data[0] && data[1]) {
        const {name, address, id}: Address = data[0];
        const country = data[1].find(value => value.name === address.country);
        this.formGroup.patchValue({
          name,
          street: address.street,
          city: address.city,
          country: country.name,
          zip: address.zip
        });
        this.snackBarAction = 'The address has been updated';
        this.buttonName = 'Update address';
        this.addressId = id;
        return;
      }
      this.snackBarAction = 'The address has been added';
      this.buttonName = 'Add address';
      this.addressId = null;
    });
  }

  ngOnDestroy() {
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const {name, street, city, country, zip} = this.formGroup.value;
      console.log('c - ', country);
      if (this.addressId) {
        this.store.dispatch(new AddressEdit(this.addressId, {
          id: this.addressId,
          name,
          address: {street, city, country, zip}
        }));
      } else {
        this.store.dispatch(new AddressAdd({
          id: `${name}:${new Date().valueOf()}`,
          name,
          address: {street, city, country, zip}
        }));
      }

      this.openSnackBar(this.formGroup.value.name + '\'', this.snackBarAction);
      this.formDirective.resetForm();
    }
  }

  onError(inputName: string): string {
    const errors = this.formGroup.controls[inputName].errors;

    for (const error in errors) {
      if (errors.hasOwnProperty(error)) {
        switch (error) {
          case 'required':
            return `This field is required`;
          case 'minlength':
            return `Please enter at least ${errors[error].requiredLength} characters`;
          case 'maxlength':
            return `Maximum characters should be ${errors[error].requiredLength}`;
          case 'pattern':
            return `Zip code should start with 'ABC' and contains max 5 characters`;
          default:
            return `Invalid field`;
        }
      }
    }
  }

  protected openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }

  protected scrollToTarget(selector: string) {
    const el: HTMLElement | null = this.element.nativeElement.querySelector(
      selector
    );
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({behavior: 'smooth'});
      }, 100);
    }
  }

}
