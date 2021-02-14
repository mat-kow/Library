import {Component, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../model/Book';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../model/Category';
import {Author} from '../../model/Author';
import {AuthorService} from '../../services/author.service';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  @Input() model = new Book(-1, '', [], null);
  categories: Category[] = [];
  allAuthors: Author[] = [];
  @Input() @Output() books: Book[];

  constructor(
    private categoryService: CategoryService,
    private authorService: AuthorService,
    private bookService: BookService
  ) {
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(c => this.categories = c);
    this.authorService.getAll().subscribe(a => this.allAuthors = a);
  }

  submit(): void {
    this.bookService.save(this.model).subscribe(b => this.books.push(b));
  }

}
