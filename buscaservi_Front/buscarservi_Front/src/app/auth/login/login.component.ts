import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from '../../services/auth/LoginRequest';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) {
    this.loginForm = this.formBuilder.group({
      email: ['valmol0015@gmail.com', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
          // Navegar solo si el login fue exitoso
          this.router.navigateByUrl('');
        },
        error: (errorData) => {
          console.log(errorData);
          alert("Error al iniciar sesión.Verifique sus credenciales.");
        },
        complete: () => {
          console.info("Login completo");
          this.loginForm.reset();
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar. Por favor, complete todos los campos correctamente.");
    }
  }
}
