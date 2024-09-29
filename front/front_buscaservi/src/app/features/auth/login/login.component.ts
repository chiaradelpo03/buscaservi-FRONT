import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoggedIn: boolean = false;
  loginMessage: string = '';

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:3000/api/login', this.loginForm.value)
        .subscribe((response: any) => {
          this.isLoggedIn = true;
          this.loginMessage = 'Inicio de sesión exitoso';
          console.log('Se ha iniciado sesión:', response);
          // Aquí puedes guardar el usuario en el localStorage o en un servicio de estado
          localStorage.setItem('user', JSON.stringify(response.user));
          // Redirige a la página principal o a otra ruta deseada
          this.router.navigate(['/']); // Cambia '/' por la ruta deseada
        }, (error) => {
          this.isLoggedIn = false;
          this.loginMessage = 'Error en el inicio de sesión';
          console.error('Error al iniciar sesión:', error);
        });
    }
  }
}
