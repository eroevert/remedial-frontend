import {Employeedata} from './employeedata';
import {City} from './city';
import {AcademicLevel} from './academicLevel';
import {Profession} from './profession';

export class AcademicInformation {
    employeeKey: number;
    academicInformationKey: number;
    cityKey: number;
    academicLevelKey: number;
    professionKey: number;
    status: string;
    start: string;
    end: string;
    institution: string;
    academicTitle: boolean;
    nationalTitle: boolean;
    employeeByEmployeeKey: Employeedata;
    cityByCityKey: City;
    academicLevelByAcademicLevelKey: AcademicLevel;
    professionByProfessionKey: Profession;
}
