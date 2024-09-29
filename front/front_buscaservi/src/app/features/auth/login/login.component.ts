import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoggedIn: boolean = false;
  loginMessage: string = '';
  user = {
    mail: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:3000/api/login', this.user)
      .subscribe((response) => {
        this.isLoggedIn = true;
        this.loginMessage = 'Inicio de sesión exitoso';
        console.log('Se ha iniciado sesión:', response);
      }, (error) => {
        this.isLoggedIn = false;
        this.loginMessage = 'Error en el inicio de sesión';
        console.error('Error al iniciar sesión:', error);
      });
  }
}
