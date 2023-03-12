import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('task')
@Controller('task')
export class TasksController  {
  constructor(private readonly taskService: TasksService) {}

  @Post('/create')
  async create(@Body() createTasksDto: CreateTaskDto) {
    try{
      return await this.taskService.create(createTasksDto);
    } catch(err){
      HandleException(err);
    }
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':projectId/tasks')
  findAllByProject(@Param('projectId') projectId: string) {
    try{ 
      return this.taskService.findAllByProject(projectId);
    } catch(err){
      HandleException(err);
    }
  }

  @Get('/find/:id')
  async findOne(@Param('id') id: string) {
    try{ 
    return await this.taskService.findOne(id);
  } catch(err){
    HandleException(err);
  }
  }

  @Patch('/update/:id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    try{ 
    return await this.taskService.update(id, updateTaskDto);
  } catch(err){
    HandleException(err);
  }
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    try{ 
    return await this.taskService.remove(id);
  } catch(err){
    HandleException(err);
  }
  }
}