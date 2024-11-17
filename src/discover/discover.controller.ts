import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { DiscoverService } from './discover.service';
import { discover } from '@prisma/client';

@Controller('discover')
export class DiscoverController {
  constructor(private readonly discoverService: DiscoverService) {}

  
  @Post()
  create(@Body() data: discover) {
    return this.discoverService.create(data);
  }

  
  @Get()
  findAll() {
    return this.discoverService.findAll();
  }

  
  @Get(':cname/:disease_code')
  findOne(@Param('cname') cname: string, @Param('disease_code') disease_code: string) {
    return this.discoverService.findOne(cname, disease_code);
  }

  
  @Put(':cname/:disease_code')
  update(
    @Param('cname') cname: string,
    @Param('disease_code') disease_code: string,
    @Body() data: Partial<discover>,
  ) {
    return this.discoverService.update(cname, disease_code, data);
  }

  
  @Delete(':cname/:disease_code')
  remove(@Param('cname') cname: string, @Param('disease_code') disease_code: string) {
    return this.discoverService.remove(cname, disease_code);
  }
}
