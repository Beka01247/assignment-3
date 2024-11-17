import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SpecializeService } from './specialize.service';
import { specialize } from '@prisma/client';

@Controller('specialize')
export class SpecializeController {
  constructor(private readonly specializeService: SpecializeService) {}

  
  @Post()
  create(@Body() data: specialize) {
    return this.specializeService.create(data);
  }

  
  @Get()
  findAll() {
    return this.specializeService.findAll();
  }

  
  @Get(':id/:email')
  findOne(@Param('id') id: number, @Param('email') email: string) {
    return this.specializeService.findOne(Number(id), email);
  }

  
  @Put(':id/:email')
  update(
    @Param('id') id: number,
    @Param('email') email: string,
    @Body() data: Partial<specialize>,
  ) {
    return this.specializeService.update(Number(id), email, data);
  }

  
  @Delete(':id/:email')
  remove(@Param('id') id: number, @Param('email') email: string) {
    return this.specializeService.remove(Number(id), email);
  }
}
