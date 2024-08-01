import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  name: string;
  mail: string;
  password: string;
  birthdate: string;
  phone: number;
  address: string;
  createdAt: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<User[]>('http://localhost:3000/api/users')
      .subscribe((data) => {
        this.users = data;
      }, (error) => {
        console.error('Error fetching users:', error);
      });
  }
}
