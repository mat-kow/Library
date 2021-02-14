import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Author} from '../model/Author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = 'http://localhost:8081/api/author';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Author[]> {
    return this.http.get<Author[]>(this.apiUrl);
  }
  getAuthor(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.apiUrl}/${id}`);
  }

  save(model: Author): Observable<Author> {
    return this.http.post<Author>(this.apiUrl, model);
  }

  delete(id: number): Observable<Author> {
    return this.http.delete<Author>(`${this.apiUrl}/${id}`);
  }
  edit(author: Author, id: number): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/${id}`, author);
  }

}
