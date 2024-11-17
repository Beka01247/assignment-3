import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { discover } from '@prisma/client';

@Injectable()
export class DiscoverService {
  constructor(private prisma: PrismaService) {}

  
  async create(data: discover): Promise<discover> {
    return this.prisma.discover.create({ data });
  }

  
  async findAll(): Promise<discover[]> {
    return this.prisma.discover.findMany();
  }

  
  async findOne(cname: string, disease_code: string): Promise<discover> {
    return this.prisma.discover.findUnique({
      where: {
        cname_disease_code: { cname, disease_code },
      },
    });
  }

  
  async update(cname: string, disease_code: string, data: Partial<discover>): Promise<discover> {
    return this.prisma.discover.update({
      where: {
        cname_disease_code: { cname, disease_code },
      },
      data,
    });
  }

  
  async remove(cname: string, disease_code: string): Promise<discover> {
    return this.prisma.discover.delete({
      where: {
        cname_disease_code: { cname, disease_code },
      },
    });
  }
}
