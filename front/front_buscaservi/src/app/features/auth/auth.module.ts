import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule   } from '@angular/forms'; // Asegúrate de importar FormsModule
import { LoginComponent} from './login/login.component'; // Importa LoginComponent

@NgModule({
  declarations: [
    LoginComponent // Declara el componente LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule, // Importa CommonModule
    FormsModule // Importa FormsModule para usar ngModel
  ],
  exports: [
    LoginComponent // Exporta LoginComponent si es necesario
  ]
})
export class AuthModule { }
