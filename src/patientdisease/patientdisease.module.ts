import { Module } from '@nestjs/common';
import { PatientdiseaseService } from './patientdisease.service';
import { PatientdiseaseController } from './patientdisease.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  controllers: [PatientdiseaseController],
  providers: [PatientdiseaseService],
  imports: [PrismaModule]
})
export class PatientdiseaseModule {}
