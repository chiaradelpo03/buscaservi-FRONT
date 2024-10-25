import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; 

@Component({
  selector: 'app-provider-list',
  standalone: true, // Añade esta línea
  imports: [CommonModule, RouterModule],
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {
  providers: any[] = []; // Array para almacenar los proveedores
  serviceName: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient, // Inyecta HttpClient
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.serviceName = params['service']; // Obtiene el nombre del servicio desde los parámetros
      this.loadProviders(); // Carga los proveedores
    });
  }

  loadProviders() {
    const apiUrl = 'http://localhost:3000/api/prestadores'; // Cambia esto a tu URL de API
    this.http.get<any[]>(`${apiUrl}`).subscribe(data => {
      // Filtrar proveedores por servicio
      this.providers = data.filter(provider => provider.service === this.serviceName);
      console.log(this.providers); // Para verificar que los datos se están obteniendo correctamente
    });
  }

  contactProvider(providerId: number) {
    console.log(`Contactando proveedor con ID: ${providerId}`);
    // Aquí puedes implementar la lógica para contactar al proveedor, como redirigir a una página de detalles.
  }
}

