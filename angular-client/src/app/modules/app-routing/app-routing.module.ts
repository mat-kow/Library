import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from '../../components/book/book.component';
import {BooksComponent} from '../../components/books/books.component';
import {AuthorsComponent} from '../../components/authors/authors.component';
import {AuthorComponent} from '../../components/author/author.component';
import {CategoriesComponent} from '../../components/categories/categories.component';
import {CategoryComponent} from '../../components/category/category.component';

const routes: Routes = [
  {path: 'books', component: BooksComponent},
  {path: 'book/:id', component: BookComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'category/:id', component: CategoryComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'author/:id', component: AuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
