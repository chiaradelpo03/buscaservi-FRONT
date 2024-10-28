import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-register',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './provider-register.component.html',
  styleUrls: ['./provider-register.component.css']
})

export class ProviderRegisterComponent {
  isRegistered: boolean = false;
  registrationMessage: string = '';
  prestador = {
    name: '',
    mail: '',
    password: '',
    birthdate: '',
    phone: '',
    address: '',
    service: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('http://localhost:3000/api/prestadores', this.prestador)
      .subscribe(
        (response) => {
          this.isRegistered = true;
          this.registrationMessage = 'Registro exitoso';
          console.log('Prestador creado:', response);
          
          // Redirigir al login después de un registro exitoso
          this.router.navigate(['/login']);
        },
        (error) => {
          this.isRegistered = true;
          this.registrationMessage = 'Error en el registro';
          console.error('Error al crear prestador:', error);
        }
      );
  }
}


