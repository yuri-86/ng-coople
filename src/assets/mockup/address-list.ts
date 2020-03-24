import {Address} from '../../app/shared/model/address.model';
import {generateEntryPoints} from "@angular-devkit/build-angular/src/angular-cli-files/utilities/package-chunk-sort";
import {Observable, of} from 'rxjs';

export const addressList: Address[] = [
  {
    id: '1',
    name: 'Gherkin',
    address: {
      street: '30 St Mary Axe',
      city: 'London',
      zip: 'ABCEZ',
      country: 'United Kingdom'
    }
  },
  {
    id: '2',
    name: `St.Paul's Cathedral`,
    address: {
      street: 'St. Paul\'s Churchyard',
      city: 'London',
      zip: 'ABCEZ',
      country: 'United Kingdom'
    }
  },
  {
    id: '3',
    name: 'Tower Bridge',
    address: {
      street: 'Tower Bridge Rd',
      city: 'London',
      zip: 'ABCEZ',
      country: 'United Kingdom'
    }
  },
  {
    id: '4',
    name: 'The Shard',
    address: {
      street: '32 London Bridge St',
      city: 'London',
      zip: 'ABCEZ',
      country: 'United Kingdom'
    }
  }
];

const randomIntFromInterval = (min, max): number => Math.floor(Math.random() * (max - min + 1) + min);

export const generateList = (): Address[] => {
  const result: Address[] = [];
  for (let i = 0; i < 100; i++) {
    result.push(addressList[randomIntFromInterval(0, addressList.length - 1)]);
  }
  return result;
};

export const generateListStream = (): Observable<Address[]> => {
  return of(generateList());
};
