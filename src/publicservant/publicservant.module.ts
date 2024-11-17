import { Module } from '@nestjs/common';
import { PublicservantService } from './publicservant.service';
import { PublicservantController } from './publicservant.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  controllers: [PublicservantController],
  providers: [PublicservantService],
  imports: [PrismaModule]
})
export class PublicservantModule {}
