import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @ApiProperty()
    id: string;
  
    @ApiProperty()
    description: string;
  
    @ApiProperty()
    status: string;

    @ApiProperty()
    deadline: string;
}
