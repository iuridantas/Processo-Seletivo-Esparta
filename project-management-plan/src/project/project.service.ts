import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { ProjectRepository } from './project.repository';

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const newProject = {
      ...createProjectDto,
      id: randomUUID(),
    };
    const createProject = await this.projectRepository.createProject(newProject);
    return createProject;
  }

  async findAll(): Promise<Project[]> {
    return await this.projectRepository.findAllProjects();
  }

  async findOne(id: string): Promise<Project> {
    return await this.projectRepository.findProjectById(id);
  }

  async update(updateProjectDto: UpdateProjectDto): Promise<Project>  {
    return await this.projectRepository.updateProject(updateProjectDto);
  }

  async remove(id: string): Promise<string> {
    await this.projectRepository.deleteProject(id);
    return 'Projeto excluido com sucesso';
  }
}
