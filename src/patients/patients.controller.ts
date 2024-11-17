import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { patients } from '@prisma/client';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  create(@Body() data: patients) {
    return this.patientsService.create(data);
  }

  @Get()
  findAll() {
    return this.patientsService.findAll();
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.patientsService.findOne(email);
  }

  @Put(':email')
  update(@Param('email') email: string, @Body() data: Partial<patients>) {
    return this.patientsService.update(email, data);
  }

  @Delete(':email')
  remove(@Param('email') email: string) {
    return this.patientsService.remove(email);
  }
}
