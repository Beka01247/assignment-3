import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { publicservant } from '@prisma/client';

@Injectable()
export class PublicservantService {
  constructor(private prisma: PrismaService) {}

  
  async create(data: publicservant): Promise<publicservant> {
    return this.prisma.publicservant.create({ data });
  }

  
  async findAll(): Promise<publicservant[]> {
    return this.prisma.publicservant.findMany();
  }

  
  async findOne(email: string): Promise<publicservant> {
    return this.prisma.publicservant.findUnique({ where: { email } });
  }

  
  async update(email: string, data: Partial<publicservant>): Promise<publicservant> {
    return this.prisma.publicservant.update({ where: { email }, data });
  }

  
  async remove(email: string): Promise<publicservant> {
    return this.prisma.publicservant.delete({ where: { email } });
  }
}
