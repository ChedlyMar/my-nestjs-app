import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  
  constructor(private taskService: TaskService) {}

  @Get()
  getAllTaskes() {
    return this.taskService.getAllTasks();
  }

  @Get(":id")
  getTaskById(@Param("id") id:string){
    return this.taskService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto:CreateTaskDto){
    return this.taskService.createTask(createTaskDto);
  }

}
