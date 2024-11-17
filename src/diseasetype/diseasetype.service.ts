import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { diseasetype } from '@prisma/client';

@Injectable()
export class DiseaseTypeService {
  constructor(private prisma: PrismaService) {}

  async create(data: diseasetype): Promise<diseasetype> {
    return this.prisma.diseasetype.create({ data });
  }

  async findAll(): Promise<diseasetype[]> {
    return this.prisma.diseasetype.findMany();
  }

  async findOne(id: number): Promise<diseasetype> {
    return this.prisma.diseasetype.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<diseasetype>): Promise<diseasetype> {
    return this.prisma.diseasetype.update({ where: { id }, data });
  }

  async remove(id: number): Promise<diseasetype> {
    return this.prisma.diseasetype.delete({ where: { id } });
  }
}
