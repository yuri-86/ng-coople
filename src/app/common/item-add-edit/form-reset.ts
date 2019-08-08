interface FormAddress {
  name: string;
  street: string;
  city: string;
  country: string;
  zip: string;
}

export const formReset = (form, {name = null, street = null, city = null, country = null, zip = null}: FormAddress) => {

  form.reset({name, street, city, country, zip});
};
