import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [MatCardModule,MatGridListModule,FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  public userName :String= "Perfil";
  nombresFormControl = new FormControl('', [Validators.required]);
  apellidosFormControl = new FormControl('', [Validators.required]);
  DNIFormControl = new FormControl('', [Validators.required,Validators.pattern(/^\d{8}$/)]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  DireccionFormControl = new FormControl('', [Validators.required]);
  telefonoFormControl = new FormControl('', [Validators.required]);





} 
