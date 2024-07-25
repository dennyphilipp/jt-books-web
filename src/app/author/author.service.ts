import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from './author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = 'http://localhost:5077/api/author';

  constructor(private http: HttpClient) { }

  create(name: string): Observable<any> {
    const body = { name };
    return this.http.post(this.apiUrl, body);
  }

  update(author: Author): Observable<any> {
    const body = author;
    return this.http.put(this.apiUrl, body);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/find-all`);
  }
}
