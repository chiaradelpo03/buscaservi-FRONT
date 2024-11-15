import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  private apiUrl = 'http://localhost:3000/api/service-requests'; 

  constructor(private http: HttpClient) { }

  solicitarPresupuesto(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // Método para obtener los presupuestos
  /*getPresupuestos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Hace la petición GET al backend
  }*/
}