import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class QueriesService {
  constructor(private prisma: PrismaService) {}

  async getBacterialDiseasesBefore2020() {
    return this.prisma.disease.findMany({
      where: {
        pathogen: 'Bacteria',
        discover: {
          some: {
            first_enc_date: { lt: new Date('2020-01-01') },
          },
        },
      },
    });
  }

  async getDoctorsWithoutInfectiousDiseases() {
    return this.prisma.doctor.findMany({
      where: {
        NOT: {
          specialize: {
            some: { diseasetype: { description: 'infectious diseases' } },
          },
        },
      },
      include: { users: true },
    });
  }

  async getDoctorsWithMultipleSpecializations() {
    const doctorsWithCounts = await this.prisma.specialize.groupBy({
      by: ['email'],
      _count: {
        id: true,
      },
    });
  
    const doctorEmails = doctorsWithCounts
      .filter((group) => group._count.id > 2)
      .map((group) => group.email);
  
    return this.prisma.doctor.findMany({
      where: {
        email: {
          in: doctorEmails,
        },
      },
      include: {
        users: true,
      },
    });
  }  

  async getCountriesAndAvgSalaryForVirology() {
    return this.prisma.users.groupBy({
      by: ['cname'],
      _avg: { salary: true },
      where: {
        doctor: {
          specialize: {
            some: { diseasetype: { description: 'virology' } },
          },
        },
      },
    });
  }

  async getDepartmentsWithCovid19Cases() {
    return this.prisma.publicservant.groupBy({
      by: ['department'],
      _count: { email: true },
      where: {
        record: { some: { disease_code: 'COVID' } },
      },
    });
  }

  async doubleSalaryForCovid19PublicServants() {
    return this.prisma.users.updateMany({
      where: {
        publicservant: {
          record: {
            some: { disease_code: 'COVID', total_patients: { gt: 3 } },
          },
        },
      },
      data: { salary: { multiply: 2 } },
    });
  }

  async deleteUsersWithSubstringInName() {
    return this.prisma.users.deleteMany({
      where: {
        OR: [
          { name: { contains: 'bek', mode: 'insensitive' } },
          { name: { contains: 'gul', mode: 'insensitive' } },
        ],
      },
    });
  }

  async getTopCountriesWithHighestPatients() {
    return this.prisma.record.groupBy({
      by: ['cname'],
      _sum: { total_patients: true },
      orderBy: { _sum: { total_patients: 'desc' } },
      take: 2,
    });
  }

  async getTotalPatientsWithCovid19() {
    return this.prisma.record.aggregate({
      _sum: { total_patients: true },
      where: { disease_code: 'COVID' },
    });
  }

  async createPatientDiseasesView() {
    const sql = `
      CREATE OR REPLACE VIEW patient_diseases_view AS
      SELECT
        u.name AS patient_name,
        u.surname AS patient_surname,
        pd.disease_code
      FROM users u
      INNER JOIN patientdisease pd ON u.email = pd.email;
    `;
    return this.prisma.$executeRawUnsafe(sql);
  }

  async getPatientsFromView() {
    const sql = `
      SELECT
        CONCAT(patient_name, ' ', patient_surname) AS full_name,
        disease_code
      FROM patient_diseases_view;
    `;
    return this.prisma.$queryRawUnsafe(sql);
  }
  
}
