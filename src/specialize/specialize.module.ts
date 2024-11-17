import { Module } from '@nestjs/common';
import { SpecializeService } from './specialize.service';
import { SpecializeController } from './specialize.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  controllers: [SpecializeController],
  providers: [SpecializeService],
  imports: [PrismaModule]
})
export class SpecializeModule {}
