import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DebitCardComponent } from '../../Repeats/debit-card/debit-card.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TransaccionService } from '../../../service/transaccion.service';
import { Transaccion } from '../../../models/Transaccion';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transaccion',
  standalone: true,
  imports: [
    DebitCardComponent,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    RouterLink,
    MatCard,
    MatIcon,
    MatProgressBarModule
  ],
  templateUrl: './transaccion.component.html',
  styleUrl: './transaccion.component.css'
})
export class TransaccionComponent implements OnInit{
  name: string = '';
  expiryDate: Date = new Date();
  cardNumber: string = '';
  cvv: string = '';


  dataSource = new MatTableDataSource<Transaccion>();
  //dataSource =  [{"reserva":"Viaje","fecha":"12/04/2024","hora":"11:33 Am", "monto":"S/10","tipoReserva":"Gasto"}]
  displayedColumns:string[] = ['reserva','fecha','hora','monto','tipo']

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  //Saldo
  saldo:string = (400).toString()
  progress:number = 300


  constructor(private transaccionService:TransaccionService){

  }
  ngOnInit(): void {
    //Lista de tarjetas
    //ngfor
    this.name = 'El nombre';
    this.expiryDate = new Date();
    this.cardNumber = '4434 5678 9012 3456';
    this.cvv= '124';  

    this.getAll();

  }


  getAll(){
    /*this.libroService.getAll().subscribe((data:Libro[])=>{
      this.dataSource = new MatTableDataSource<Libro>(data);
      this.dataSource.paginator = this.paginator;


    });*/
    //this.dataSource.paginator = this.paginator
    this.dataSource = new MatTableDataSource(this.transaccionService.getAll());
    this.dataSource.paginator = this.paginator;


  }




  



}
