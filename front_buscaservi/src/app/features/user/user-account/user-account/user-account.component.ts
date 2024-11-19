import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [CommonModule], // Asegúrate de incluir CommonModule aquí
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css'] 
})
export class UserAccountComponent {
  services = [
    { name: 'Plomero', description: 'Servicios de plomería profesionales.', image: 'assets/img/plomero.jpg' },
    { name: 'Electricista', description: 'Soluciones eléctricas a medida.', image: 'assets/img/electricista.jpg' },
    { name: 'Limpieza', description: 'Servicios de limpieza para hogares y oficinas.', image: 'assets/img/limpieza.jpg' },
    { name: 'Pintor', description: 'Cuidado y mantenimiento de jardines.', image: 'assets/img/pintor.jpg' },
    { name: 'Gasista', description: 'Instalación y reparación de sistemas de gas.', image: 'assets/img/gasista.png' },
    { name: 'Aire Acondicionado', description: 'Instalación y mantenimiento de aires acondicionados.', image: 'assets/img/aire acondicionado.webp' },
    { name: 'Carpintero', description: 'Servicios de carpintería personalizados.', image: 'assets/img/carpintero.avif' },
    { name: 'Alarmas', description: 'Instalación de sistemas de alarma y seguridad.', image: 'assets/img/alarma.jpg' },
    { name: 'Cerrajero', description: 'Servicios de cerrajería y apertura de puertas.', image: 'assets/img/cerrajero.jpg' },
  ];

  constructor(private router: Router) {} // Inyecta Router

  contactService(serviceName: string) {
    console.log(`Contratando servicio: ${serviceName}`);
    // Redirige a la página de proveedores, pasando el nombre del servicio
    this.router.navigate(['/provider-list'], { queryParams: { service: serviceName } });
  }
}




