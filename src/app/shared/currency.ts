import {Country} from './country';

export class Currency {
  currencyKey: number;
  countryKey: number;
  name: string;
  code: string;
  status: string;
  countryByCountryKey: Country;
}
