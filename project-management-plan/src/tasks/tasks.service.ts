import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { TaskRepository } from './tasks.repository';


@Injectable()
export class TasksService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const newTask = {
      ...createTaskDto,
      id: randomUUID(),
    };
    const createTask = await this.taskRepository.createTask(newTask);
    return createTask;
  }

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.findAllTasks();
  }

  async findAllByProject(projectId: string): Promise<Task[]> {
    return await this.taskRepository.findAllTaskByProject(projectId);
  }

  async findOne(id: string): Promise<Task> {
    return await this.taskRepository.findTaskById(id);
  }

  async update(updateTaskDto: UpdateTaskDto): Promise<Task>  {
    return await this.taskRepository.updateTask(updateTaskDto);
  }

  async remove(id: string): Promise<string> {
    await this.taskRepository.deleteTask(id);
    return 'tarefa excluido com sucesso';
  }
}
