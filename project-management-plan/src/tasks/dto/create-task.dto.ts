import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsString } from "class-validator";

export class CreateTaskDto {
    @ApiProperty()
    @IsString()
    projectId: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsString()
    status: string;

    @ApiProperty()
    @IsDateString()
    deadline: string;
}
