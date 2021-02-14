import {Component, OnInit} from '@angular/core';
import {AuthorService} from '../../services/author.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Author} from '../../model/Author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author: Author;
  showingEdit = false;
  constructor(private authorService: AuthorService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getAuthor();
  }

  getAuthor(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.authorService.getAuthor(id).subscribe(a => this.author = a);
  }

  delete(): void {
    this.authorService.delete(this.author.id).subscribe(_ => this.goBack());
  }
  showEdit(): void {
    this.showingEdit = true;
  }
  goBack(): void {
    this.location.back();
  }

}
