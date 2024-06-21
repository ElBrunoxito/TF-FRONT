
import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink, RouterModule } from '@angular/router';
import { UserService } from '../../../service/Auth/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserLogin } from '../../../models/User';
import { AuthService } from '../../../service/Auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  public loginGroup! : FormGroup;

  constructor(
    private userService:UserService,
    private fb:FormBuilder,
    private snackBar:MatSnackBar,
    private router:Router,
    private authService:AuthService
  ){
   
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.loginGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }



  login(){
    //console.log(this.loginGroup.value as UserLogin);
    if(this.loginGroup.valid){
      const userLogin :UserLogin = this.loginGroup.value;
      this.userService.login(userLogin).subscribe(
        response=>{
          if(response.user && response.token){

            //localStorage.setItem('token',response.token)
            //console.log(response.token)
            this.authService.setToken(response.token);

            this.snackBar.open('Logeado correctamente', '', {
              duration: 3000
            });
            //this.router.navigate(['../../principal']);
            this.router.navigate(['auth/addtarjeta']);

          }

        },
        err=>{
          this.snackBar.open('algo salio mals', '', {
            duration: 3000
          });
        }

      );
      
    }
    else{
      console.log("no valido")
    }
  }



}
