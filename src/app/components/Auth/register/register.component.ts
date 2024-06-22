import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/Auth/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/Auth/auth.service';
import { UserRegister } from '../../../models/User';
import { City } from '../../../models/City';
import { CityService } from '../../../service/city.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgFor,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  public registerGroup!:FormGroup;





  cities:City[] = []


  constructor(
    private fb:FormBuilder,
    private snackBar:MatSnackBar,
    private router:Router,
    private userService:UserService,
    private authService:AuthService,
    private cityService:CityService
  ){}


  ngOnInit(): void {
    this.getCities();

    this.registerGroup = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      lastName: ['', [Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required,Validators.email]],
      dni: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(5)]],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],      
    });


  }



  register(){
    if(this.registerGroup.valid){
      //console.log("tmr")
      const UserRegister :UserRegister = this.registerGroup.value as UserRegister;

      UserRegister.cityId = Number(this.registerGroup.value['city']);
      UserRegister.dni = UserRegister.dni.toString()
      console.log(UserRegister)
      

      
      this.userService.register(UserRegister).subscribe(
        response=>{
          if(response.user && response.token){

            this.authService.setId(response.user.id)
            this.authService.setToken(response.token);

            this.snackBar.open('Registrado correctamente', '', {
              duration: 3000
            });
            this.router.navigate(['auth/addtarjeta']);

          }

        },
        err=>{
          this.snackBar.open('Dni, Email o usuario ya exitente', '', {
            duration: 3000
          });
        }

      );
      
    }
    else{
      this.snackBar.open('Dni, Email no validos', '', {
        duration: 3000
      });
    }
  }

  getCities(){
    this.cityService.getAllCities().subscribe(
      data=>{
        this.cities = data as City[]
      }
    );
  }

  volver(){ 
    window.history.back();
  }

}
