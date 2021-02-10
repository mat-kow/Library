import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from '../../components/book/book.component';
import {BooksComponent} from '../../components/books/books.component';

const routes: Routes = [
  {path: 'books', component: BooksComponent},
  {path: 'book/:id', component: BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
