import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { specialize } from '@prisma/client';

@Injectable()
export class SpecializeService {
  constructor(private prisma: PrismaService) {}

  
  async create(data: specialize): Promise<specialize> {
    return this.prisma.specialize.create({ data });
  }

  
  async findAll(): Promise<specialize[]> {
    return this.prisma.specialize.findMany();
  }

  
  async findOne(id: number, email: string): Promise<specialize> {
    return this.prisma.specialize.findUnique({
      where: {
        id_email: { id, email },
      },
    });
  }

  
  async update(id: number, email: string, data: Partial<specialize>): Promise<specialize> {
    return this.prisma.specialize.update({
      where: {
        id_email: { id, email },
      },
      data,
    });
  }

  
  async remove(id: number, email: string): Promise<specialize> {
    return this.prisma.specialize.delete({
      where: {
        id_email: { id, email },
      },
    });
  }
}
