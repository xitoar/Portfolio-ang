import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  apiDir: string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get(this.apiDir+"info/1");     
  }
  
}
