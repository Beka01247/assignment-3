import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { patientdisease } from '@prisma/client';

@Injectable()
export class PatientdiseaseService {
  constructor(private prisma: PrismaService) {}

  
  async create(data: patientdisease): Promise<patientdisease> {
    return this.prisma.patientdisease.create({ data });
  }

  
  async findAll(): Promise<patientdisease[]> {
    return this.prisma.patientdisease.findMany();
  }

  
  async findOne(email: string, disease_code: string): Promise<patientdisease> {
    return this.prisma.patientdisease.findUnique({
      where: {
        email_disease_code: { email, disease_code },
      },
    });
  }

  
  async update(
    email: string,
    disease_code: string,
    data: Partial<patientdisease>,
  ): Promise<patientdisease> {
    return this.prisma.patientdisease.update({
      where: {
        email_disease_code: { email, disease_code },
      },
      data,
    });
  }

  
  async remove(email: string, disease_code: string): Promise<patientdisease> {
    return this.prisma.patientdisease.delete({
      where: {
        email_disease_code: { email, disease_code },
      },
    });
  }
}
