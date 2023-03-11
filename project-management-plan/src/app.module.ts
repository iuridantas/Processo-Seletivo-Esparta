import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/database.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [DatabaseModule,ProjectModule],
})
export class AppModule {}
