import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:8081/api/category';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  get(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }

  save(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category);
  }

  delete(id: number): Observable<Category> {
    return this.http.delete<Category>(`${this.apiUrl}/${id}`);
  }
  edit(category: Category, id: number): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/${id}`, category);
  }
}
