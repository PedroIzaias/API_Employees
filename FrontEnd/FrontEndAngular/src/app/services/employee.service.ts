import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = `${environment.ApiUrl}/Employee`

  constructor( private  http: HttpClient ) { }

  GetEmployees() : Observable<> { 

  }

}
