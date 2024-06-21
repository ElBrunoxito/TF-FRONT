import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';


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

  ngOnInit(): void {
    //Recupera datos de service Backend y inicializa las variables

    this.getDatos();
    console.log(localStorage.getItem('token'));
    
  }

  getDatos(){

  }

}
