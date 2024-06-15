import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-nav-lateral',
  standalone: true,
  imports: [MatSidenavModule,RouterModule,MatListModule,MatButtonModule],
  templateUrl: './nav-lateral.component.html',
  styleUrl: './nav-lateral.component.css'
})
export class NavLateralComponent {

}
