import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  services = [
    { name: 'Plomero', description: 'Servicios de plomería profesionales.', image: 'https://aprende.com/wp-content/uploads/2022/01/instalacion-de-una-tuberia-funciones-del-plomero.jpg'},
    { name: 'Electricista', description: 'Soluciones eléctricas a medida.', image: 'https://forjandoelfuturo.com.ar/wp-content/uploads/2021/12/electricidad.jpg' },
    { name: 'Limpieza', description: 'Servicios de limpieza para hogares y oficinas.', image: 'https://www.grupms.es/wp-content/uploads/2018/09/servicio-de-limpieza-a-domicilio-consejos.jpg' },
    { name: 'Pintor', description: 'Cuidado y mantenimiento de jardines.', image: 'https://pinturashipopotamo.es/wp-content/uploads/2020/01/como-elegir-un-buen-pintor.jpg' },
    { name: 'Gasista', description: 'Instalación y reparación de sistemas de gas.', image: 'https://www.santafe.gob.ar/ms/impulsa/wp-content/uploads/sites/67/2024/04/mantenimiento-instalacion-de-gas-1-1024x683-1.png' },
    { name: 'Aire Acondicionado', description: 'Instalación y mantenimiento de aires acondicionados.', image: 'https://storage.googleapis.com/proimagesingapur/offered-service/288-diagnostico-reparacion-aire-acondicionado/hogami-revision-aire-acondicionado-430x282.webp' },
    { name: 'Carpintero', description: 'Servicios de carpintería personalizados.', image: 'https://img.freepik.com/fotos-premium/carpintero-carpinteria-fabricacion-muebles-taller-carpinteria_130181-1172.jpg' },
    { name: 'Alarmas', description: 'Instalación de sistemas de alarma y seguridad.', image: 'https://rodych.es/wp-content/uploads/2017/03/alarma.jpg' },
    { name: 'Cerrajero', description: 'Servicios de cerrajería y apertura de puertas.', image: 'https://www.electroparvigo.com/como-encontrar-a-un-buen-cerrajero_img85498t1.jpg' },
  ];

  constructor(private router: Router) {} // Inyecta Router

  contactService(serviceName: string) {
    console.log(`Contratando servicio: ${serviceName}`);
    // Redirige a la página de proveedores, pasando el nombre del servicio
    this.router.navigate(['/provider-list'], { queryParams: { service: serviceName } });
  }
}

