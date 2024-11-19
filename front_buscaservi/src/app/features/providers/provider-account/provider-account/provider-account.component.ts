import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Provider {
  id: number;
  name: string;
  mail: string;
  phone: string;
  address: String;
  service: string;
}

interface ServiceRequest {
  id: number;
  serviceName: string;
  description: string;
}

@Component({
  selector: 'app-provider-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './provider-account.component.html',
  styleUrls: ['./provider-account.component.css']
})
export class ProviderAccountComponent implements OnInit {
  provider: Provider | null = null; // Cambiar a null para verificar si se carga correctamente
  serviceRequests: ServiceRequest[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadProviderData(); // Cargar los datos del proveedor
    this.loadServiceRequests(); // Cargar las solicitudes de servicio
  }

  loadProviderData() {
    const providerData = localStorage.getItem('user'); // Obtener datos del usuario desde localStorage
    if (providerData) {
      this.provider = JSON.parse(providerData); // Convertir a objeto
    } else {
      console.error('No se encontraron datos del proveedor en localStorage');
    }
  }

  loadServiceRequests() {
    this.http.get<ServiceRequest[]>('http://localhost:3000/api/service-requests')
      .subscribe((data) => {
        this.serviceRequests = data;
      }, (error) => {
        console.error('Error al cargar las solicitudes de servicio:', error);
      });
  }

  acceptRequest(requestId: number) {
    console.log(`Solicitud aceptada: ${requestId}`);
  }

  rejectRequest(requestId: number) {
    console.log(`Solicitud rechazada: ${requestId}`);
  }
}
