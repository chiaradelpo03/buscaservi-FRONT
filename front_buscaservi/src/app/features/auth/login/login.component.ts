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

          // Verifica lo que estás guardando
          console.log('Datos guardados en localStorage:', response.user);
  
          // Redirigir a la cuenta correspondiente según el tipo de usuario
          if (response.user.type === 'prestador') {
            this.router.navigate(['/provider-account']);
          } else {
            this.router.navigate(['/user-account']);
          }
        }, (error) => {
          this.loginMessage = 'Error en el inicio de sesión';
          console.error('Error al iniciar sesión:', error);
        });
    } else {
      this.loginMessage = 'Por favor, completa el formulario correctamente.';
    }
  }
}  