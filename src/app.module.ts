import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { QueriesModule } from './queries/queries.module';
import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';
import { DiseasetypeModule } from './diseasetype/diseasetype.module';
import { CountryModule } from './country/country.module';
import { DiseaseModule } from './disease/disease.module';
import { DiscoverModule } from './discover/discover.module';
import { PatientdiseaseModule } from './patientdisease/patientdisease.module';
import { PublicservantModule } from './publicservant/publicservant.module';
import { DoctorModule } from './doctor/doctor.module';
import { SpecializeModule } from './specialize/specialize.module';
import { RecordModule } from './record/record.module';

@Module({
  imports: [PrismaModule, QueriesModule, UsersModule, PatientsModule, DiseasetypeModule, CountryModule, DiseaseModule, DiscoverModule, PatientdiseaseModule, PublicservantModule, DoctorModule, SpecializeModule, RecordModule],
})
export class AppModule {}
