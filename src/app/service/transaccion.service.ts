import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaccion } from '../models/Transaccion'

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {
  
  constructor(http:HttpClient) { }




  getAll(){
    const transaccion: Transaccion[] = [
    {
      "id":1,
      "reserva":"Viaje",
      "fecha" :new Date(),
      "hora":new Date(),
      "monto":10,
      "tipoReserva":"Gasto"
    },
  ];
    return transaccion;
  }
}
