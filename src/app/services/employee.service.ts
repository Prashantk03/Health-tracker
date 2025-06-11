import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = `${environment.apiUrl}/api/users`;

  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post(this.baseUrl, data);
  }

  updateEmployee(id: string, data: any): Observable<any> {
    return this._http.put(`${this.baseUrl}/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get(this.baseUrl);
  }

  deleteEmployee(id: string): Observable<any> {
    return this._http.delete(`${this.baseUrl}/${id}`);
  }
}

