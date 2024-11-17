import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { doctor } from '@prisma/client';

@Injectable()
export class DoctorService {
  constructor(private prisma: PrismaService) {}

  
  async create(data: doctor): Promise<doctor> {
    return this.prisma.doctor.create({ data });
  }

  
  async findAll(): Promise<doctor[]> {
    return this.prisma.doctor.findMany();
  }

  
  async findOne(email: string): Promise<doctor> {
    return this.prisma.doctor.findUnique({ where: { email } });
  }

  
  async update(email: string, data: Partial<doctor>): Promise<doctor> {
    return this.prisma.doctor.update({ where: { email }, data });
  }

  
  async remove(email: string): Promise<doctor> {
    return this.prisma.doctor.delete({ where: { email } });
  }
}
