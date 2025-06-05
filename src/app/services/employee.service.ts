import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/users`, data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`${this.baseUrl}/employees/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('${this.baseUrl}/employees');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}/employees/${id}`);
  }
}
