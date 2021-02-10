import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8081/api/book/';

    constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    console.log(this.apiUrl);
    return this.http.get<Book[]>(this.apiUrl);
  }
  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }
}

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Book {
  id: number;
  title: string;
  authors: Author[];
  category: Category;
}


