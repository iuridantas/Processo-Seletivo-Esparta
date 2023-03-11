import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ApiTags } from '@nestjs/swagger';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';

@ApiTags('profile')
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('/create')
  async create(@Body() createProjectDto: CreateProjectDto) {
    try{
      return await this.projectService.create(createProjectDto);
    } catch(err){
      HandleException(err);
    }
  }

  @Get()
  findAll() {
    try{ 
    return this.projectService.findAll();
    } catch(err){
      HandleException(err);
    }
  }

  @Get('/find/:id')
  async findOne(@Param('id') id: string) {
    try{ 
    return await this.projectService.findOne(id);
  } catch(err){
    HandleException(err);
  }
  }

  @Patch('/update')
  async update(@Body() updateProjectDto: UpdateProjectDto) {
    try{ 
    return await this.projectService.update(updateProjectDto);
  } catch(err){
    HandleException(err);
  }
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    try{ 
    return await this.projectService.remove(id);
  } catch(err){
    HandleException(err);
  }
  }
}
