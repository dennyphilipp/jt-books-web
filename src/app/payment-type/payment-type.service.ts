import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentType } from './payment-type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {
  private apiUrl = 'http://localhost:5077/api/payment-type';

  constructor(private http: HttpClient) { }

  create(name: string): Observable<any> {
    const body = { name };
    return this.http.post(this.apiUrl, body);
  }

  update(paymentType: PaymentType): Observable<any> {
    const body = paymentType;
    return this.http.put(this.apiUrl, body);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/find-all`);
  }
}
