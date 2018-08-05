import {Country} from './country';
import {AcademicInformation} from './academicInformation';

export class City {
  cityKey: number;
  code: string;
  name: string;
  countryKey: number;
  academicInformationsByCityKey: AcademicInformation;
  countryByCountryKey: Country;
  // workExperiencesByCityKey: WorkExperience;
}
