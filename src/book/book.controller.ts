import { Body, Controller, Get, Post } from '@nestjs/common';
import { IBook } from './book.model';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  
  @Post()
  create(@Body() createBook: IBook) {
    return this.bookService.create(createBook);
    
  }

  @Get()
  findAll() {    
    return this.bookService.findAll() ;
  }

  

}
