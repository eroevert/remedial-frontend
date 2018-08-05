import {Currency} from './currency';

export class SalaryScale {
  salaryScaleKey: number;
  currencyKey: number;
  name: string;
  numberCases: number;
  basicSalary: number;
  status: string;
  start: string;
  end: string;
  currencyByCurrencyKey: Currency;
}
