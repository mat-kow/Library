import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../../services/author.service';
import {Author} from '../../model/Author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Author[] = [];
  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.authorService.getAll().subscribe(authors => this.authors = authors);
  }
}
