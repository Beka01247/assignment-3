import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PatientdiseaseService } from './patientdisease.service';
import { patientdisease } from '@prisma/client';

@Controller('patient-disease')
export class PatientdiseaseController {
  constructor(private readonly patientDiseaseService: PatientdiseaseService) {}

  
  @Post()
  create(@Body() data: patientdisease) {
    return this.patientDiseaseService.create(data);
  }

  
  @Get()
  findAll() {
    return this.patientDiseaseService.findAll();
  }

  
  @Get(':email/:disease_code')
  findOne(@Param('email') email: string, @Param('disease_code') disease_code: string) {
    return this.patientDiseaseService.findOne(email, disease_code);
  }

  
  @Put(':email/:disease_code')
  update(
    @Param('email') email: string,
    @Param('disease_code') disease_code: string,
    @Body() data: Partial<patientdisease>,
  ) {
    return this.patientDiseaseService.update(email, disease_code, data);
  }

  
  @Delete(':email/:disease_code')
  remove(@Param('email') email: string, @Param('disease_code') disease_code: string) {
    return this.patientDiseaseService.remove(email, disease_code);
  }
}
