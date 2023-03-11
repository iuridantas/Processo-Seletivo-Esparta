import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createProject(project: Project): Promise<Project> {
    try {
      return await this.prisma.project.create({ data: project });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }

  async updateProject(project: UpdateProjectDto): Promise<Project> {
    try {
      return await this.prisma.project.update({
        where: { id: project.id },
        data: project,
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }

  async deleteProject(id: string): Promise<Project> {
    try {
      return await this.prisma.project.delete({
        where: { id: id },
      });
    } catch (err) {
      throw new Exception(
        Exceptions.DatabaseException,
        'Projeto não encontrado',
      );
    }
  }

  async findAllProjects(): Promise<Project[]> {
    try {
      return await this.prisma.project.findMany();
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }

  async findProjectById(id: string): Promise<Project> {
    try {
      return await this.prisma.project.findUniqueOrThrow({
        where: { id: id },
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }
}
