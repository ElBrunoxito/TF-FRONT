import { Component } from '@angular/core';
import { DebitCardComponent } from '../../Repeats/debit-card/debit-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { format } from 'date-fns';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-tarjeta',
  standalone: true,
  imports: [
    DebitCardComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],
  templateUrl: './add-tarjeta.component.html',
  styleUrl: './add-tarjeta.component.css'
})
export class AddTarjetaComponent {

  nombre: string = '';
  fechaExpiracion: Date = new Date();
  number: string = ''
  cvv: string = '';




}
