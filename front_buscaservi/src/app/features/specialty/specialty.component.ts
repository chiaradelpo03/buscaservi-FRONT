import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-specialty',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './specialty.component.html',
  styleUrls: ['./specialty.component.css']
})
export class SpecialtyComponent implements OnInit {
  specialties: any[] = [];
  newSpecialty = { nombreSpeciality: '', descripcionSpeciality: '' };
  editSpecialty: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllSpecialties();
  }

  // Obtener todas las especialidades
  getAllSpecialties(): void {
    this.http.get('/api/specialties').subscribe((data: any) => {
      this.specialties = data;
    });
  }

  // Crear una nueva especialidad
  addSpecialty(): void {
    this.http.post('/api/specialties', this.newSpecialty).subscribe(() => {
      this.getAllSpecialties(); // Actualiza la lista de especialidades
      this.newSpecialty = { nombreSpeciality: '', descripcionSpeciality: '' }; // Limpia el formulario
    });
  }

  // Eliminar una especialidad
  deleteSpecialty(idSpeciality: number): void {
    this.http.delete(`/api/specialties/${idSpeciality}`).subscribe(() => {
      this.getAllSpecialties(); // Actualiza la lista de especialidades
    });
  }

  // Establecer la especialidad a editar
  setEditSpecialty(specialty: any): void {
    this.editSpecialty = { ...specialty }; // Copia de la especialidad
  }

  // Actualizar la especialidad
  updateSpecialty(): void {
    this.http.put(`/api/specialties/${this.editSpecialty.idSpeciality}`, this.editSpecialty).subscribe(() => {
      this.getAllSpecialties(); // Actualiza la lista
      this.editSpecialty = null; // Limpia el formulario de edición
    });
  }

  // Cancelar la edición
  cancelEdit(): void {
    this.editSpecialty = null;
  }
}
