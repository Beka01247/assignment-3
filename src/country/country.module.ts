import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  controllers: [CountryController],
  providers: [CountryService],
  imports: [PrismaModule]
})
export class CountryModule {}
