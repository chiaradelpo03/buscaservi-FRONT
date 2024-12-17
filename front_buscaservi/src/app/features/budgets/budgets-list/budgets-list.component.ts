import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresupuestoService } from '../budgets-list/presupuesto.service';
import { BudgetDetailModalComponent } from '../budgets-list/budget-detail-modal.component';


@Component({
  selector: 'app-budgets-list',
  standalone: true, // Esto hace que el componente sea independiente
  imports: [CommonModule,BudgetDetailModalComponent],
  templateUrl: './budgets-list.component.html',
  styleUrls: ['./budgets-list.component.css']
})
export class BudgetsListComponent implements OnInit {
  presupuestos: any[] = [];
  presupuestoSeleccionado: any | null = null;


  constructor(private presupuestoService: PresupuestoService) {}


  ngOnInit(): void {
    this.obtenerPresupuestos();
  }


  obtenerPresupuestos(): void {
    this.presupuestoService.getPresupuestos().subscribe(
      (data) => {
        this.presupuestos = data;
      },
      (error) => {
        console.error('Error al obtener presupuestos:', error);
      }
    );
  }


  verDetalles(id: number): void {
    this.presupuestoSeleccionado = this.presupuestos.find(p => p.id === id);
    console.log(`Ver detalles del presupuesto con ID: ${id}`);
    // Redirigir a una página de detalles o mostrar más información
  }
}
