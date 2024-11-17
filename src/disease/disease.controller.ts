import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { DiseaseService } from './disease.service';
import { disease } from '@prisma/client';

@Controller('diseases')
export class DiseaseController {
  constructor(private readonly diseaseService: DiseaseService) {}

  
  @Post()
  create(@Body() data: disease) {
    return this.diseaseService.create(data);
  }

  
  @Get()
  findAll() {
    return this.diseaseService.findAll();
  }

  
  @Get(':disease_code')
  findOne(@Param('disease_code') disease_code: string) {
    return this.diseaseService.findOne(disease_code);
  }

  
  @Put(':disease_code')
  update(@Param('disease_code') disease_code: string, @Body() data: Partial<disease>) {
    return this.diseaseService.update(disease_code, data);
  }

  
  @Delete(':disease_code')
  remove(@Param('disease_code') disease_code: string) {
    return this.diseaseService.remove(disease_code);
  }
}
