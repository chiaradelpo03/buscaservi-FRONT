import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front_buscaservi';
  UserLoginOn:boolean = false;

  constructor(){ }

  ngOnInit(): void {}
}
