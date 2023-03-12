import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';


@Injectable()
export class TasksService {
  private task: Task[] = [];

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createTask = {
      ...createTaskDto,
      id: randomUUID(),
    };
    this.task.push(createTask);
    return createTask;
  }

  async findAll(): Promise<Task[]> {
    return this.task;
  }

  async findAllByProject(projectId: string): Promise<Task[]> {
    return this.task.filter(task => task.projectId === projectId);
  }

  async findOne(taskId: string): Promise<Task> {
    const findById = this.task.find((task) => task.id === taskId);
    return findById;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task>  {
    this.task.map((task, index) => {
      if (task.id === id) {
        const updatedTrainig = Object.assign(task, updateTaskDto);
        this.task.splice(index, 1, updatedTrainig);
      }
    });
    return await this.findOne(id);
  }

  async remove(taskId: string): Promise<boolean> {
    const existTask = this.task.find((task) => task.id === taskId);
    if (!existTask) {
      return false;
    }
    this.task.map((project, index) => {
      if (project.id === taskId) {
        this.task.splice(index, 1);
      }
    });
    return true;
  }
}
