import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() authChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  loginForm: FormGroup;
  loginMessage: string = '';

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:3000/api/login', this.loginForm.value)
        .subscribe((response: any) => {
          this.loginMessage = 'Inicio de sesión exitoso';
          console.log('Se ha iniciado sesión:', response);

          // Guardar el usuario en localStorage
          localStorage.setItem('user', JSON.stringify(response.user));

          // Emitir el cambio de autenticación
          this.authChange.emit(true);

          // Redirige a la página principal o a otra ruta deseada
          this.router.navigate(['/']);
        }, (error) => {
          this.loginMessage = 'Error en el inicio de sesión';
          console.error('Error al iniciar sesión:', error);
        });
    } else {
      this.loginMessage = 'Por favor, completa el formulario correctamente.';
    }
  }
}