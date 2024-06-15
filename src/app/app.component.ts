import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaPrincipalComponent } from './components/Principal/pagina-principal/pagina-principal.component';
import { LoginComponent } from './components/Auth/login/login.component';
import { InicioComponent } from './components/Principal/inicio/inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PaginaPrincipalComponent,
    LoginComponent,
    InicioComponent
    


  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TF_AW_G4';
}
