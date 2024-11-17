import { Module } from '@nestjs/common';
import { DiseaseTypeController } from './diseasetype.controller';
import { DiseaseTypeService } from './diseasetype.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  controllers: [DiseaseTypeController],
  providers: [DiseaseTypeService],
  imports: [PrismaModule]
})
export class DiseasetypeModule {}
