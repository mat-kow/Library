import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {Book} from '../../model/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.bookService.getAll().subscribe(books => this.books = books);
  }

}
