import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  isRegistered: boolean = false;
  registrationMessage: string = '';
  user = {
    name: '',
    mail:'',
    password:'',
    birthdate: '',
    phone:'',
    address: ''
  };

  constructor(private http: HttpClient){}

  onSubmit() {
    this.http.post('http://localhost:3000/api/users', this.user)
      .subscribe((response) => {
        this.isRegistered = true;
        this.registrationMessage = 'Registro exitoso';
        console.log('Se puedo crear un usuario:', response);
        
      }, (error) => {
        this.isRegistered = true;
        this.registrationMessage = 'Error en el registro';
        console.error('Error al crear un usuario:', error);
      });
  }

}
