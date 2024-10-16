import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing-module'; // Asegúrate de que este archivo contenga tus rutas

// Componentes
import { AppComponent } from './app.component';
import { UserListComponent } from './features/user/user-list/user-list.component';
import { HomeComponent } from './features/home/home.component';
import { FooterComponent } from './features/shared/footer/footer.component';
import { HeaderComponent } from './features/shared/header/header.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ProviderListComponent } from './features/providers/provider-list/provider-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProviderListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    ReactiveFormsModule, 
    FormsModule, 
    AppRoutingModule // Asegúrate de que AppRoutingModule esté aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
