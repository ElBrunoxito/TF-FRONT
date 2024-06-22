import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { DebitCardService } from '../../../service/User/debit-card.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{

  displayedColumns: string[] = ['reserva','fecha','estado'];

  public dataSource = [{'reserva':'Youtube','fecha':'12 abril 2024','estado': 'Pagado'},];
  public disponible:String = "S/ 0.00";
  public total:String = "S/ 0.00" ;
  public cardInfo:String = "**** **** **** " + ("1234567812347203").substring(12,16)
  public actualizacionInfo :String = "Pago de tarjeta subsanado";

  constructor(
    private debitCardService:DebitCardService,
    private snackBar:MatSnackBar
  ){

  }

  ngOnInit(): void {
    //Recupera datos de service Backend y inicializa las variables

    this.getDatos();
    
  }

  getDatos(){
    this.debitCardService.getDebitCard().subscribe(
      data =>{
        var cardNumber = data.numberCard;
        console.log(cardNumber);
        this.cardInfo = "**** **** **** "+ cardNumber.substring(12,16)
      },
      error=>{
        this.snackBar.open('Error al cargar los datos de tarjeta', '', {
          duration: 3000
        });
      }
    );

  }

}
