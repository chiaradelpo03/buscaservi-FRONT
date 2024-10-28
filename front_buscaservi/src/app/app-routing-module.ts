import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { UserListComponent } from './features/user/user-list/user-list.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ProviderListComponent } from './features/providers/provider-list/provider-list.component';
import { ProviderRegisterComponent } from './features/auth/provider-register/provider-register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'provider-list', component: ProviderListComponent },
  { path: 'provider-register', component: ProviderRegisterComponent },
  { path: '**', redirectTo: '' } 
];

export const AppRoutingModule = RouterModule.forRoot(routes);