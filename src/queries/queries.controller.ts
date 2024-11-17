import { Controller, Get, Post } from '@nestjs/common';
import { QueriesService } from './queries.service';

@Controller('queries')
export class QueriesController {
  constructor(private readonly queriesService: QueriesService) {}

  // 1st point
  @Get('bacterial-diseases')
  async getBacterialDiseases() {
    return this.queriesService.getBacterialDiseasesBefore2020();
  }

  @Get('doctors-without-infectious-diseases')
  async getDoctorsWithoutInfectiousDiseases() {
    return this.queriesService.getDoctorsWithoutInfectiousDiseases();
  }

  @Get('doctors-with-multiple-specializations')
  async getDoctorsWithMultipleSpecializations() {
    return this.queriesService.getDoctorsWithMultipleSpecializations();
  }

  // 2nd point
  @Get('countries-avg-salary-virology')
  async getCountriesAndAvgSalaryForVirology() {
    return this.queriesService.getCountriesAndAvgSalaryForVirology();
  }

  @Get('departments-covid19-employees')
  async getDepartmentsWithCovid19Cases() {
    return this.queriesService.getDepartmentsWithCovid19Cases();
  }

  // 3rd point
  @Post('double-salary')
  async doubleSalaryForCovid19PublicServants() {
    return this.queriesService.doubleSalaryForCovid19PublicServants();
  }

  @Post('delete-users')
  async deleteUsersWithSubstringInName() {
    return this.queriesService.deleteUsersWithSubstringInName();
  }

  // 4th point is done without using the sql and so on, i did it in prisma schema

  // 5th point
  @Get('top-countries-total-patients')
  async getTopCountriesWithHighestPatients() {
    return this.queriesService.getTopCountriesWithHighestPatients();
  }

  // 6th point
  @Get('total-covid19-patients')
  async getTotalPatientsWithCovid19() {
    return this.queriesService.getTotalPatientsWithCovid19();
  }

  // 7th point
  @Post('create-view-patient-diseases')
  async createPatientDiseasesView() {
    return this.queriesService.createPatientDiseasesView();
  }

  // 8th point
  @Get('patients-from-view')
  async getPatientsFromView() {
    return this.queriesService.getPatientsFromView();
  }
}
