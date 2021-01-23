import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskEntity } from './entities/task.entity';
//import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>
  ){}

  async getTasks(): Promise<TaskEntity[]>{
    return await this.taskRepository.find();
  }

  async createTask(createTaskDto: CreateTaskDto):Promise<TaskEntity> {
    return await this.taskRepository.save(createTaskDto);
  }

  findAll() {
    return `This action returns all tasks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  // update(id: number, updateTaskDto: UpdateTaskDto) {
  //   return `This action updates a #${id} task`;
  // }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
