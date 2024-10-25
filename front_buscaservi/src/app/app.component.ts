import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./features/home/home.component";
import { HeaderComponent } from "./features/shared/header/header.component";
import { FooterComponent } from "./features/shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NgIf, 
    CommonModule, 
    RouterModule, 
    HomeComponent, 
    HeaderComponent, 
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrección: 'styleUrls' en plural
})
export class AppComponent {
  title = 'front_buscaservi';
}
