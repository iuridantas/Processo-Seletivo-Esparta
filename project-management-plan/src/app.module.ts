import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/database.module';
import { ProjectModule } from './project/project.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [DatabaseModule,ProjectModule, TasksModule],
})
export class AppModule {}
