import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavLateralComponent } from '../../Nav/nav-lateral/nav-lateral.component';
import { NavSuperiorComponent } from '../../Nav/nav-superior/nav-superior.component';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [    
    RouterOutlet,
    NavLateralComponent,
    NavSuperiorComponent

  ],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {

}
