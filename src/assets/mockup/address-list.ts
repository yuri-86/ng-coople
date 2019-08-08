import {Address} from '../../app/shared/model/address.model';

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
