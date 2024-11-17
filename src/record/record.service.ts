import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { record } from '@prisma/client';

@Injectable()
export class RecordService {
  constructor(private prisma: PrismaService) {}

  
  async create(data: record): Promise<record> {
    return this.prisma.record.create({ data });
  }

  
  async findAll(): Promise<record[]> {
    return this.prisma.record.findMany();
  }

  
  async findOne(email: string, cname: string, disease_code: string): Promise<record> {
    return this.prisma.record.findUnique({
      where: {
        email_cname_disease_code: { email, cname, disease_code },
      },
    });
  }

  
  async update(
    email: string,
    cname: string,
    disease_code: string,
    data: Partial<record>,
  ): Promise<record> {
    return this.prisma.record.update({
      where: {
        email_cname_disease_code: { email, cname, disease_code },
      },
      data,
    });
  }

  
  async remove(email: string, cname: string, disease_code: string): Promise<record> {
    return this.prisma.record.delete({
      where: {
        email_cname_disease_code: { email, cname, disease_code },
      },
    });
  }
}
