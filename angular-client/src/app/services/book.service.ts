import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8081/api/book';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  get(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  save(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  delete(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.apiUrl}/${id}`);
  }
  edit(book: Book, id: number): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/${id}`, book);
  }
}

