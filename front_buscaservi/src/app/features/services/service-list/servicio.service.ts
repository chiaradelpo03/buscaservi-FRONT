import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {


  private baseUrl = 'http://localhost:3000/api/services'; 

  constructor(private http: HttpClient) { }


  // Función para obtener la lista de servicios
  getServices(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
