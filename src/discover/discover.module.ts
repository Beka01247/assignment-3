import { Module } from '@nestjs/common';
import { DiscoverService } from './discover.service';
import { DiscoverController } from './discover.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  controllers: [DiscoverController],
  providers: [DiscoverService],
  imports: [PrismaModule]
})
export class DiscoverModule {}
