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

    findOne(id){
        const book = this.books.find(book => book.id==id);
        return book;
    }

    update(id:string, updateBook:IBook){
        const index = this.books.findIndex(book => book.id == id);
        this.books.splice(index,1,updateBook);
    }
    remove(id){
        const index = this.books.findIndex(book => book.id == id);
        this.books.splice(index,1);
    }
}
