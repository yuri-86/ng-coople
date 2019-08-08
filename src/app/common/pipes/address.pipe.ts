import { Pipe, PipeTransform } from '@angular/core';
import {AddressInfo} from '../../shared/model/address.model';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(data: AddressInfo): string {
    return `${data.street}, ${data.city}, ${data.country}, ${data.zip}
    `;
  }
}
