import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { users } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  
  async create(data: users): Promise<users> {
    return this.prisma.users.create({ data });
  }

  
  async findAll(): Promise<users[]> {
    return this.prisma.users.findMany();
  }

  
  async findOne(email: string): Promise<users> {
    return this.prisma.users.findUnique({ where: { email } });
  }

  
  async update(email: string, data: Partial<users>): Promise<users> {
    return this.prisma.users.update({ where: { email }, data });
  }

  
  async remove(email: string): Promise<users> {
    return this.prisma.users.delete({ where: { email } });
  }
}
