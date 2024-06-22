import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { UserService } from '../../../service/Auth/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-nav-superior',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './nav-superior.component.html',
  styleUrl: './nav-superior.component.css'
})
export class NavSuperiorComponent implements OnInit{
  balance:number = 0;
  username:String = ''
  
  constructor(
    private userService:UserService,
    private snackBar:MatSnackBar,
  ){}

  ngOnInit(): void {
      this.getBalance();
      this.getDataUser();
  }


  getBalance(){
    
    this.userService.getUser().subscribe(
      user=>{
        this.balance = user.balance;
        this.username = user.username
      },
      error=>{
        this.snackBar.open('Error al cargar datos', '', {
          duration: 1500
        });
      }
    )
  }

  getDataUser(){

  }

}
