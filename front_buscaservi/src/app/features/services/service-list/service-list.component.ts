import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../service-list/servicio.service'
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  servicios: any[] = []; // Array para almacenar los servicios


  constructor(private servicioService: ServicioService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.obtenerServicios();
  }


  obtenerServicios(): void {
    this.servicioService.getServices().subscribe(
      (data) => {
        this.servicios = data;
      },
      (error) => {
        console.error('Error al obtener servicios:', error);
      }
    );
  }
}
