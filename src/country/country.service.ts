import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { country } from '@prisma/client';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}

  
  async create(data: country): Promise<country> {
    return this.prisma.country.create({ data });
  }

  
  async findAll(): Promise<country[]> {
    return this.prisma.country.findMany();
  }

  
  async findOne(cname: string): Promise<country> {
    return this.prisma.country.findUnique({ where: { cname } });
  }

  
  async update(cname: string, data: Partial<country>): Promise<country> {
    return this.prisma.country.update({ where: { cname }, data });
  }

  
  async remove(cname: string): Promise<country> {
    return this.prisma.country.delete({ where: { cname } });
  }
}
