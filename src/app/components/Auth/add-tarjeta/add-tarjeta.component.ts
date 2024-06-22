import { Component } from '@angular/core';
import { DebitCardComponent } from '../../Repeats/debit-card/debit-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { format } from 'date-fns';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DebitCardService } from '../../../service/User/debit-card.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DebitCard } from '../../../models/DebitCard';
import { AuthService } from '../../../service/Auth/auth.service';

@Component({
  selector: 'app-add-tarjeta',
  standalone: true,
  imports: [
    DebitCardComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-tarjeta.component.html',
  styleUrl: './add-tarjeta.component.css'
})
export class AddTarjetaComponent {

  nombre: string = '';
  fechaExpiracion: Date = new Date();
  number: string = ''
  cvv: string = '';

  public addCardGroup!: FormGroup;

  constructor(
    private fb:FormBuilder,
    private debitCardService:DebitCardService,
    private snackBar:MatSnackBar,
    private router:Router,
    private authService:AuthService
  ){
    this.addCardGroup = this.fb.group({
      numberCard: ['', Validators.required],
      nombre: ['', [Validators.required]],
      expirationDate:[this.fechaExpiracion,Validators.required],
      cvv:['',Validators.required]
    });

    console.log(localStorage.getItem('token'));
  }


  addTarjeta(){
    //console.log(this.addCardGroup.value as DebitCard);
    if(this.addCardGroup.valid){
    //if(true){
      const debitCard:DebitCard = this.addCardGroup.value as DebitCard;

      /*
      const dc : DebitCard = {
        bankId:1,
        cvv:123,
        userId:7,
        expirationDate:new Date("2029-05-03"),
        numberCard:"0123456789",
        password:"1234"
      };*/
      
      debitCard.bankId = 1;
      debitCard.userId = Number(this.authService.getId())
      debitCard.password = "3134"
      debitCard.cvv = this.addCardGroup.value['cvv']
      //debitCard.cvv = 123;


      console.log(debitCard);
      //console.log(dc)
      this.debitCardService.addDebitCard(debitCard)!.subscribe(
        response=>{
          console.log(response)

          if(response){
            this.snackBar.open('Tarjeta agregado correctarmente correctamente', '', {
              duration: 3000
            });
            this.router.navigate(['../../principal']);
            //this.router.navigate(['auth/addtarjeta']);

          }

        },
        err=>{
          this.snackBar.open('algo salio mal DC', '', {
            duration: 3000
          });
          console.info(err)
        }
      );

    }

  }



}
