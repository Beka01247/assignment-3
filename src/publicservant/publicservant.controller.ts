import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PublicservantService } from './publicservant.service';
import { publicservant } from '@prisma/client';

@Controller('public-servants')
export class PublicservantController {
  constructor(private readonly publicServantService: PublicservantService) {}

  
  @Post()
  create(@Body() data: publicservant) {
    return this.publicServantService.create(data);
  }

  
  @Get()
  findAll() {
    return this.publicServantService.findAll();
  }

  
  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.publicServantService.findOne(email);
  }

  
  @Put(':email')
  update(@Param('email') email: string, @Body() data: Partial<publicservant>) {
    return this.publicServantService.update(email, data);
  }

  
  @Delete(':email')
  remove(@Param('email') email: string) {
    return this.publicServantService.remove(email);
  }
}
