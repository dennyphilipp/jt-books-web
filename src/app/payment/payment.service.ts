import { Injectable } from '@angular/core';
import { Payment } from './payment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = 'http://localhost:5077/api/payment';

  constructor(private http: HttpClient) { }

  create(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.apiUrl, payment);
  }

  update(payment: Payment): Observable<Payment> {
    return this.http.put<Payment>(this.apiUrl, payment);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/find-all`);
  }
}
