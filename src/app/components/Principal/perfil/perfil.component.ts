import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    MatCardModule,
    MatGridListModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,

    ReactiveFormsModule

  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  public userName :String= "Perfil";
  //Aqui se llenan los campos
  nombresFormControl = new FormControl({value:'',disabled:true}, [Validators.required]);
  apellidosFormControl = new FormControl({value:'',disabled:true}, [Validators.required]);
  DNIFormControl = new FormControl({value:'',disabled:true}, [Validators.required,Validators.pattern(/^\d{8}$/)]);
  emailFormControl = new FormControl({value:'',disabled:true}, [Validators.required, Validators.email]);
  direccionFormControl = new FormControl({value:'',disabled:true}, [Validators.required]);
  telefonoFormControl = new FormControl({value:'',disabled:true}, [Validators.required]);

  form = new FormGroup([
    this.nombresFormControl,
    this.apellidosFormControl,
    this.DNIFormControl,
    this.emailFormControl,
    this.direccionFormControl,
    this.telefonoFormControl
  ]);


  constructor(){
  }

  ngOnInit(): void {
    this.nombresFormControl.setValue('dasd');
    this.apellidosFormControl.setValue('dsadasd');
    this.DNIFormControl.setValue('12345678');
    this.emailFormControl.setValue('dsadasd@gmail.com');
    this.direccionFormControl.setValue('dsadasd');
    this.telefonoFormControl.setValue('dsadasd');
    
  }


  clickTodosLosCampos(){
    //funcion para habilitar inputs
    this.nombresFormControl.disabled ? this.nombresFormControl.enable():this.nombresFormControl.disable();
    this.apellidosFormControl.disabled ? this.apellidosFormControl.enable():this.apellidosFormControl.disable()
    this.DNIFormControl.disabled ? this.DNIFormControl.enable() :  this.DNIFormControl.disable()
    this.emailFormControl.disabled ? this.emailFormControl.enable() :  this.emailFormControl.disable()
    this.direccionFormControl.disabled ?  this.direccionFormControl.enable() :  this.direccionFormControl.disable()
    this.telefonoFormControl.disabled ? this.telefonoFormControl.enable() :  this.telefonoFormControl.disable() 
  }

  guardar(){
    //Funcion para editar mis datos guardar button

  }


} 
