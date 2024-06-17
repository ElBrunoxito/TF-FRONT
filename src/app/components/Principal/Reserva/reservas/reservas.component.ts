import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Reserva } from '../../../../models/Reserva';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [
    MatTableModule,
    RouterLink,
    MatPaginatorModule,
    MatIcon,
    MatButtonModule
  ],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent implements OnInit{

  dataSource = new MatTableDataSource<Reserva>();
  displayedColumns:string[] = ['reserva','fecha','hora','monto','tipo','interaccion']

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getAll();

  }


  getAll(){
        /*this.libroService.getAll().subscribe((data:Libro[])=>{
      this.dataSource = new MatTableDataSource<Libro>(data);
      this.dataSource.paginator = this.paginator;


    });*/
    //this.dataSource.paginator = this.paginator
    //this.dataSource = new MatTableDataSource(this.transaccionService.getAll());
    var data:Reserva[] = [
      { 
        "id":1,
        "reserva":"Viajes",
        "fecha":new Date(),
        "monto":100,
        "tipoReserva":"Ahorro"
      },
      { 
        "id":2,
        "reserva":"Viajes",
        "fecha":new Date(),
        "monto":100,
        "tipoReserva":"Ahorro"
      },
    ];
    this.dataSource = new MatTableDataSource(data)
    this.dataSource.paginator = this.paginator;
  }



  

  //Butons actions
  add(id:number){
    console.log("agregar" +id)
  }

  edit(id:number){
    console.log("editar" +id)

  }



}
