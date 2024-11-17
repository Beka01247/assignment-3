import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { doctor } from '@prisma/client';

@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  
  @Post()
  create(@Body() data: doctor) {
    return this.doctorService.create(data);
  }

  
  @Get()
  findAll() {
    return this.doctorService.findAll();
  }

  
  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.doctorService.findOne(email);
  }

  
  @Put(':email')
  update(@Param('email') email: string, @Body() data: Partial<doctor>) {
    return this.doctorService.update(email, data);
  }

  
  @Delete(':email')
  remove(@Param('email') email: string) {
    return this.doctorService.remove(email);
  }
}
