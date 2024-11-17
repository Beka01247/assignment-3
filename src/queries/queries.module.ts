import { Module } from '@nestjs/common';
import { QueriesService } from './queries.service';
import { QueriesController } from './queries.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Import PrismaModule to use PrismaService
  controllers: [QueriesController], // Attach the controller
  providers: [QueriesService], // Attach the service
})
export class QueriesModule {}
