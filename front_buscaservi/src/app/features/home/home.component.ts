// src/app/features/home/home.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredServices = [
    { name: 'Plomero', description: 'Servicios de plomería profesionales.', image: 'assets/img/plomero.jpg' },
    { name: 'Electricista', description: 'Soluciones eléctricas a medida.', image: 'assets/img/electricista.jpg' },
    { name: 'Limpieza', description: 'Servicios de limpieza para hogares y oficinas.', image: 'assets/img/limpieza.jpg' },
    { name: 'Pintor', description: 'Cuidado y mantenimiento de jardines.', image: 'assets/img/pintor.jpg' },
  ];

  // Testimonios de los usuarios
  testimonials = [
    { message: 'Excelente servicio y atención al cliente.', author: 'Juan Pérez' },
    { message: 'Los mejores profesionales, muy recomendados.', author: 'María González' },
    { message: 'Rápidos y efectivos en su trabajo.', author: 'Carlos López' }
  ];

  contactService(serviceName: string) {
    console.log(`Servicio contratado: ${serviceName}`);
  }
}
