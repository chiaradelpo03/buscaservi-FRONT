import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { UserListComponent } from './features/user/user-list/user-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { FooterComponent } from './features/shared/footer/footer.component';
import { HeaderComponent } from './features/shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    UserListComponent,
    AppComponent,
    ReactiveFormsModule,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: []
})
export class AppModule { }
