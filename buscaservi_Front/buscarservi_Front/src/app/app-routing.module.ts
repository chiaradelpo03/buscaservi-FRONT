import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { LoginComponent } from './auth/login/login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UserRegisterComponent}
];
