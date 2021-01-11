import { Injectable } from '@nestjs/common';
import { IBook } from './book.model';

@Injectable()
export class BookService {
  
    private readonly books:IBook[] = []

    create(book:IBook){
        
        this.books.push(book);
        return this.books[0]
    }

    findAll() {
        return this.books;
    }
}
