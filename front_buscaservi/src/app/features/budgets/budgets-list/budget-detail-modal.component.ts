import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  // Asegúrate de importar CommonModule aquí


@Component({
  selector: 'app-budget-detail-modal',
  template: `
    <div class="modal">
      <h2>Detalles del presupuesto</h2>
      <p><strong>Servicio:</strong> {{ presupuesto.servicio }}</p>
      <p><strong>Proveedor:</strong> {{ presupuesto.proveedor }}</p>
      <p><strong>Precio estimado:</strong> {{ presupuesto.precio | currency }}</p>
      <button (click)="cerrarModal()">Cerrar</button>
    </div>
  `,
  styleUrls: ['./budget-detail-modal.component.css'],
  standalone: true,
  imports: [CommonModule]  
})
export class BudgetDetailModalComponent {
  @Input() presupuesto: any;


  cerrarModal() {
    // Acción para cerrar el modal
  }
}
