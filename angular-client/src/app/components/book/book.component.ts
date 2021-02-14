import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../model/Book';
import {Location} from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: Book;
  books: Book[] = [];
  showingEdit = false;

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.get(id).subscribe(book => this.book = book);
  }

  delete(): void {
    this.bookService.delete(this.book.id).subscribe(_ => this.goBack());
  }
  showEdit(): void {
    this.showingEdit = true;
  }
  goBack(): void {
    this.location.back();
  }
}
