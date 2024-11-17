import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { disease } from '@prisma/client';

@Injectable()
export class DiseaseService {
  constructor(private prisma: PrismaService) {}

  
  async create(data: disease): Promise<disease> {
    return this.prisma.disease.create({ data });
  }

  
  async findAll(): Promise<disease[]> {
    return this.prisma.disease.findMany();
  }

  
  async findOne(disease_code: string): Promise<disease> {
    return this.prisma.disease.findUnique({ where: { disease_code } });
  }

  
  async update(disease_code: string, data: Partial<disease>): Promise<disease> {
    return this.prisma.disease.update({ where: { disease_code }, data });
  }

  
  async remove(disease_code: string): Promise<disease> {
    return this.prisma.disease.delete({ where: { disease_code } });
  }
}
