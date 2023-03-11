import { Module } from '@nestjs/common';
import { ProjectController } from './project/project.controller';
import { ProjectModule } from './project/project.module';
import { ProjectService } from './project/project.service';

@Module({
  imports: [ProjectModule],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class AppModule {}
