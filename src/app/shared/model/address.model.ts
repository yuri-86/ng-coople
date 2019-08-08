export interface AddressInfo {
  street: string;
  city: string;
  country: string;
  zip: string;
}

export interface Address {
  id: string;
  name: string;
  address: AddressInfo;
}
