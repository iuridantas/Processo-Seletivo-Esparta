import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  private projects: Project[] = [];

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const createProject = {
      ...createProjectDto,
      id: randomUUID(),
    };
    this.projects.push(createProject);
    return createProject;
  }

  async findAll(): Promise<Project[]> {
    return this.projects;
  }

  async findOne(projectId: string): Promise<Project> {
    const findById = this.projects.find((project) => project.id === projectId);
    return findById;
  }

  async update(updateProjectDto: UpdateProjectDto): Promise<Project>  {
    this.projects.map((project, index) => {
      if (project.id === updateProjectDto.id) {
        const UpdateProject = Object.assign(project, updateProjectDto);
        this.projects.splice(index, 1, UpdateProject);
      }
    });
    const UpdateProject = this.projects.find((project) => project.id === updateProjectDto.id);
    return UpdateProject;
  }

  async remove(projectId: string): Promise<boolean> {
    const existProject = this.projects.find((project) => project.id === projectId);
    if (!existProject) {
      return false;
    }
    this.projects.map((project, index) => {
      if (project.id === projectId) {
        this.projects.splice(index, 1);
      }
    });
    return true;
  }
}
