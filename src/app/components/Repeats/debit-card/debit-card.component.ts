import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-debit-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './debit-card.component.html',
  styleUrl: './debit-card.component.css'
})
export class DebitCardComponent implements OnChanges {
  @Input() name: string = '';
  @Input() expiryDate: Date = new Date();
  @Input() cardNumber: string = '';
  @Input() cvv: string = '';

  maskedCVV: string = '';
  cardType: string = '';

  fechaExpiracion :string = ''
  numero :string = ''

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cvv']) {
      const cvvValue = changes['cvv'].currentValue;
      //this.maskedCVV = this.cvv.replace(/\d/g, (digit, index) => (index < this.cvv.length - 1 ? '*' : digit));
      //this.maskedCVV = cvvValue.replace(/\d/g, (digit: string, index: number) => (index < cvvValue.length - 1 ? '*' : digit));
      this.maskedCVV = cvvValue

    }
    if (changes['expiryDate']) {
      const date = changes['expiryDate'].currentValue;
      this.detectExpiryDate(date);
    }


    if (changes['cardNumber']) {
      this.detectCardType(changes['cardNumber'].currentValue);
    }

  }






  detectExpiryDate(expiryDate:Date){
    //const expiryDate = expirydate;
    //const today = new Date();

    //today.setHours(0, 0, 0, 0);
    //expiryDate.setHours(0, 0, 0, 0);

    //if (expiryDate > today) {
     //   console.log('expiryDate es posterior a hoy');
        this.fechaExpiracion = format(expiryDate,'MM/yy');
     // } else {
        
    //}
  }


  detectCardType(cardNumber: string) {
    // Limpiar el número de tarjeta de espacios y guiones
    const cleanedCardNumber = cardNumber.replace(/\s+/g, '');
    this.numero = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');

    // Regex y rangos para detectar el tipo de tarjeta
    const visaRegex = /^4/;
    const mastercardRegex = /^5[1-5]/;
    const discoverRegex = /^6(?:011|5)/;

    if (visaRegex.test(cleanedCardNumber)) {
      this.cardType = 'visa';
    } else if (mastercardRegex.test(cleanedCardNumber)) {
      this.cardType = 'mastercard';
    } else if (discoverRegex.test(cleanedCardNumber)) {
      this.cardType = 'discover';
    } else {
      this.cardType = 'unknown'; // Tipo de tarjeta desconocido
    }
    //console.log(this.cardType)
  }
}
