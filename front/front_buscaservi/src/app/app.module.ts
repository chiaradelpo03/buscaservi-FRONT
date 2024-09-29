import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa el módulo de cliente HTTP
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Agrega FormsModule
import { RouterModule } from '@angular/router';

// Componentes
import { AppComponent } from './app.component';
import { UserListComponent } from './features/user/user-list/user-list.component';
import { HomeComponent } from './features/home/home.component';
import { FooterComponent } from './features/shared/footer/footer.component';
import { HeaderComponent } from './features/shared/header/header.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';

// Rutas
import { routes } from './app-routing-module'; // Asegúrate de que este archivo contenga tus rutas

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Usa HttpClientModule aquí
    ReactiveFormsModule, // Para formularios reactivos
    FormsModule, // Agrega FormsModule aquí para manejar formularios basados en plantillas
    RouterModule.forRoot(routes) // Para la configuración de rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
