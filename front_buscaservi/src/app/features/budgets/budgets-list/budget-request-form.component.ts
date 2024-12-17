import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PresupuestoService } from './presupuesto.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-budget-request-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './budget-request-form.component.html',
  styleUrls: ['./budget-request-form.component.css']
})
export class BudgetRequestFormComponent implements OnInit {
  providerId!: number;
  serviceId!: number; // Este ID puede obtenerse de la navegación o de una selección previa
  userId: number = 1; // Supongamos que tienes autenticación y puedes recuperar el ID del usuario autenticado
  presupuestoForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private presupuestoService:PresupuestoService, private router:Router) {
    this.presupuestoForm = this.fb.group({
      date: ['', Validators.required],
      hour: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtiene el ID del proveedor desde la URL
    this.providerId = +this.route.snapshot.paramMap.get('id')!;

    // Aquí podrías obtener el ID del servicio si fuera relevante o asignarlo directamente
    this.serviceId = 1;
  }

  enviarFormulario(): void {
    if (this.presupuestoForm.valid) {
      const requestData = {
        date: this.presupuestoForm.value.date,
        hour: this.presupuestoForm.value.hour,
        description: this.presupuestoForm.value.description,
        state: 'pending', // Valor inicial por defecto
        idService: this.serviceId,
        idPrestador: this.providerId,
        idUser: this.userId 
      };

      console.log('Solicitud de presupuesto enviada:', requestData);
      this.presupuestoService.solicitarPresupuesto(requestData).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
        },
        (error) => {
          console.error('Error al enviar la solicitud:', error);
          alert('Hubo un error al enviar la solicitud, por favor inténtelo más tarde.');
        }
      );
    }else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}