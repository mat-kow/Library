import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { AuthorComponent } from './components/author/author.component';
import { BooksComponent } from './components/books/books.component';
import {AppRoutingModule} from './modules/app-routing/app-routing.module';
import { AuthorsComponent } from './components/authors/authors.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoriesComponent } from './components/categories/categories.component';
import {FormsModule} from '@angular/forms';
import { AuthorFormComponent } from './components/author-form/author-form.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { BookFormComponent } from './components/book-form/book-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AuthorComponent,
    BooksComponent,
    AuthorsComponent,
    CategoryComponent,
    CategoriesComponent,
    AuthorFormComponent,
    CategoryFormComponent,
    BookFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
