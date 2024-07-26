import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:5077/api/book';

  constructor(private http: HttpClient) { }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  update(book: Book): Observable<Book> {
    return this.http.put<Book>(this.apiUrl, book);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/find-all`);
  }
}
