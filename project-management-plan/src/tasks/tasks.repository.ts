import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createTask(task: Task): Promise<Task> {
    try {
      return await this.prisma.tasks.create({
        data: task,
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }

  async updateTask(task: UpdateTaskDto): Promise<Task> {
    try {
      return await this.prisma.tasks.update({
        where: { id: task.id },
        data: task,
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }

  async findAllTasks(): Promise<Task[]> {
    try {
      return await this.prisma.tasks.findMany();
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }

  async findAllTaskByProject(projectId: string): Promise<Task[]> {
    try {
      return await this.prisma.tasks.findMany({
        where: { projectId },
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }

  async findTaskById(id: string): Promise<Task> {
    try {
      return await this.prisma.tasks.findUniqueOrThrow({
        where: { id: id },
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }

  async deleteTask(id: string): Promise<Task> {
    try {
      return await this.prisma.tasks.delete({
        where: { id: id },
      });
    } catch (err) {
      throw new Exception(
        Exceptions.DatabaseException,
        'Tarefa não encontrado',
      );
    }
  }
}
