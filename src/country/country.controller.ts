import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CountryService } from './country.service';
import { country } from '@prisma/client';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  
  @Post()
  create(@Body() data: country) {
    return this.countryService.create(data);
  }

  
  @Get()
  findAll() {
    return this.countryService.findAll();
  }

  
  @Get(':cname')
  findOne(@Param('cname') cname: string) {
    return this.countryService.findOne(cname);
  }

  
  @Put(':cname')
  update(@Param('cname') cname: string, @Body() data: Partial<country>) {
    return this.countryService.update(cname, data);
  }

  
  @Delete(':cname')
  remove(@Param('cname') cname: string) {
    return this.countryService.remove(cname);
  }
}
