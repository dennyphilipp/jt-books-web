import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private apiUrl = 'http://localhost:5077/api/subject';

  constructor(private http: HttpClient) { }

  createSubject(description: string): Observable<any> {
    const body = { description };
    return this.http.post(this.apiUrl, body);
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/find-all`);
  }
}
