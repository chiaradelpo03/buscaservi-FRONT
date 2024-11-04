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
    { name: 'Plomero', description: 'Servicios de plomería profesionales.', image: 'https://aprende.com/wp-content/uploads/2022/01/instalacion-de-una-tuberia-funciones-del-plomero.jpg'},
    { name: 'Electricista', description: 'Soluciones eléctricas a medida.', image: 'https://forjandoelfuturo.com.ar/wp-content/uploads/2021/12/electricidad.jpg' },
    { name: 'Limpieza', description: 'Servicios de limpieza para hogares y oficinas.', image: 'https://www.grupms.es/wp-content/uploads/2018/09/servicio-de-limpieza-a-domicilio-consejos.jpg' },
    { name: 'Pintor', description: 'Cuidado y mantenimiento de jardines.', image: 'https://pinturashipopotamo.es/wp-content/uploads/2020/01/como-elegir-un-buen-pintor.jpg' },
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
