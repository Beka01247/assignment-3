import { Controller, Get, Post } from '@nestjs/common';
import { QueriesService } from './queries.service';

@Controller('queries')
export class QueriesController {
  constructor(private readonly queriesService: QueriesService) {}

  
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

  
  @Get('countries-avg-salary-virology')
  async getCountriesAndAvgSalaryForVirology() {
    return this.queriesService.getCountriesAndAvgSalaryForVirology();
  }

  @Get('departments-covid19-employees')
  async getDepartmentsWithCovid19Cases() {
    return this.queriesService.getDepartmentsWithCovid19Cases();
  }

  
  @Post('double-salary')
  async doubleSalaryForCovid19PublicServants() {
    return this.queriesService.doubleSalaryForCovid19PublicServants();
  }

  @Post('delete-users')
  async deleteUsersWithSubstringInName() {
    return this.queriesService.deleteUsersWithSubstringInName();
  }
  
  @Get('top-countries-total-patients')
  async getTopCountriesWithHighestPatients() {
    return this.queriesService.getTopCountriesWithHighestPatients();
  }

  
  @Get('total-covid19-patients')
  async getTotalPatientsWithCovid19() {
    return this.queriesService.getTotalPatientsWithCovid19();
  }

  
  @Post('create-view-patient-diseases')
  async createPatientDiseasesView() {
    return this.queriesService.createPatientDiseasesView();
  }

  
  @Get('patients-from-view')
  async getPatientsFromView() {
    return this.queriesService.getPatientsFromView();
  }
}
