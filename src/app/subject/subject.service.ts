import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from './subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private apiUrl = 'http://localhost:5077/api/subject';

  constructor(private http: HttpClient) { }

  create(description: string): Observable<any> {
    const body = { description };
    return this.http.post(this.apiUrl, body);
  }

  update(subject: Subject): Observable<any> {
    const body = subject;
    return this.http.put(this.apiUrl, body);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/find-all`);
  }
}
