import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { users } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  
  @Post()
  create(@Body() data: users) {
    return this.usersService.create(data);
  }

  
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  
  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.usersService.findOne(email);
  }

  
  @Put(':email')
  update(@Param('email') email: string, @Body() data: Partial<users>) {
    return this.usersService.update(email, data);
  }

  
  @Delete(':email')
  remove(@Param('email') email: string) {
    return this.usersService.remove(email);
  }
}
