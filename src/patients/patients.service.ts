import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { patients } from '@prisma/client';

@Injectable()
export class PatientsService {
  constructor(private prisma: PrismaService) {}

  async create(data: patients): Promise<patients> {
    return this.prisma.patients.create({ data });
  }

  async findAll(): Promise<patients[]> {
    return this.prisma.patients.findMany();
  }

  async findOne(email: string): Promise<patients> {
    return this.prisma.patients.findUnique({ where: { email } });
  }

  async update(email: string, data: Partial<patients>): Promise<patients> {
    return this.prisma.patients.update({ where: { email }, data });
  }

  async remove(email: string): Promise<patients> {
    return this.prisma.patients.delete({ where: { email } });
  }
}
