import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './model/task.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class TaskService {

  tasks: Task[]= [];
  
  getAllTasks(){
    return this.tasks;
  }

  getTaskById(id: string): Task{
    const found = this.tasks.find(task => task.id === id);
    if(!found){
      throw new NotFoundException(`${id} dosen't exist`)
    }    
    return found;
  }

  createTask(createTaskDto:CreateTaskDto){
    const title= createTaskDto.title;
    const description= createTaskDto.description;

    const task: Task ={
      id:uuid(),
      title,
      description,
      status: TaskStatus.OPEN
    }
    this.tasks.push(task);
    
    return task;
  }

}
