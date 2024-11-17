import { Module } from '@nestjs/common';
import { DiseaseController } from './disease.controller';
import { DiseaseService } from './disease.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  controllers: [DiseaseController],
  providers: [DiseaseService],
  imports: [PrismaModule]
})
export class DiseaseModule {}
