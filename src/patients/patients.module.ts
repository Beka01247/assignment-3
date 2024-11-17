import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  controllers: [PatientsController],
  providers: [PatientsService],
  imports: [PrismaModule]
})
export class PatientsModule {}
