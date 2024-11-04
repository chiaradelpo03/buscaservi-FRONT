import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  UserLoginOn: boolean = false;
  userType: string = ''; // Agrega esta línea para definir userType

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const user = localStorage.getItem('user');
      if (user) {
        this.UserLoginOn = true;
        const parsedUser = JSON.parse(user); // Parsear el objeto del usuario
        this.userType = parsedUser.type || ''; // Asigna el tipo de usuario
      }
    }
  }

  logout() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('user');
    }
    this.UserLoginOn = false;
    this.userType = ''; // Reiniciar el tipo de usuario al cerrar sesión
    this.router.navigate(['/login']);
  }
}
