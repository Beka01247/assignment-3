import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DiseaseTypeService } from './diseasetype.service';
import { diseasetype } from '@prisma/client';

@Controller('diseasetype')
export class DiseaseTypeController {
  constructor(private readonly diseaseTypeService: DiseaseTypeService) {}

  @Post()
  create(@Body() data: diseasetype) {
    return this.diseaseTypeService.create(data);
  }

  @Get()
  findAll() {
    return this.diseaseTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.diseaseTypeService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<diseasetype>) {
    return this.diseaseTypeService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.diseaseTypeService.remove(Number(id));
  }
}
