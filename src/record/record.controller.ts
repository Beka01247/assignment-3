import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RecordService } from './record.service';
import { record } from '@prisma/client';

@Controller('records')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  
  @Post()
  create(@Body() data: record) {
    return this.recordService.create(data);
  }

  
  @Get()
  findAll() {
    return this.recordService.findAll();
  }

  
  @Get(':email/:cname/:disease_code')
  findOne(
    @Param('email') email: string,
    @Param('cname') cname: string,
    @Param('disease_code') disease_code: string,
  ) {
    return this.recordService.findOne(email, cname, disease_code);
  }

  
  @Put(':email/:cname/:disease_code')
  update(
    @Param('email') email: string,
    @Param('cname') cname: string,
    @Param('disease_code') disease_code: string,
    @Body() data: Partial<record>,
  ) {
    return this.recordService.update(email, cname, disease_code, data);
  }

  
  @Delete(':email/:cname/:disease_code')
  remove(
    @Param('email') email: string,
    @Param('cname') cname: string,
    @Param('disease_code') disease_code: string,
  ) {
    return this.recordService.remove(email, cname, disease_code);
  }
}
