import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/env';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class GetCustomerDataService {
  private apiUrl = enviroment.baseUrl+'api/Invoice/Customer';
  
  constructor(private http: HttpClient) { }

  getRecords(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getRecordDetails(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  deleteRecord(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
  saveRecord(customerData: User): Observable<any> {
    const url = `${this.apiUrl}`; // Remove the trailing `/` in the URL
    return this.http.post(url, customerData); // Provide the URL and customerData as arguments
 }

}
