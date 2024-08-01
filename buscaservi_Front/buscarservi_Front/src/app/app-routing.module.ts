import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-list', component: UserListComponent }
];
