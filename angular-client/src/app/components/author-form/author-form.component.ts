import {Component, Input, OnInit, Output} from '@angular/core';
import {Author} from '../../model/Author';
import {AuthorService} from '../../services/author.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {
  @Input() model = new Author(-1, '', '');
  @Input() @Output() authors: Author[];

  constructor(private authorService: AuthorService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.authorService.save(this.model).subscribe(savedAuthor => this.authors.push(savedAuthor));
    this.model = new Author(-1, '', '');
  }
}
