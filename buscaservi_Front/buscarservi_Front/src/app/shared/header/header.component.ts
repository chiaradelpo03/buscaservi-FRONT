import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderComponent, NgIf, CommonModule, RouterModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  UserLoginOn:boolean = false;

  constructor(){ }

  ngOnInit(): void {}

}
