// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { HeaderComponent } from "./features/shared/header/header.component";
import { FooterComponent } from "./features/shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    CommonModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrección: 'styleUrls' en plural
})
export class AppComponent {
  title = 'front_buscaservi';
  userLoggedIn: boolean = false;

  handleAuthChange(isLoggedIn: boolean) {
    this.userLoggedIn = isLoggedIn; // Actualizar el estado de autenticación
  }
}
