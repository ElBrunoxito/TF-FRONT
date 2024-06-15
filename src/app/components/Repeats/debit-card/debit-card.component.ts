import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-debit-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './debit-card.component.html',
  styleUrl: './debit-card.component.css'
})
export class DebitCardComponent implements OnChanges {
  @Input() name: string = '';
  @Input() expiryDate: string = '';
  @Input() cardNumber: string = '';
  @Input() cvv: string = '';

  maskedCVV: string = '';
  cardType: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cvv']) {
      const cvvValue = changes['cvv'].currentValue;
      //this.maskedCVV = this.cvv.replace(/\d/g, (digit, index) => (index < this.cvv.length - 1 ? '*' : digit));
      this.maskedCVV = cvvValue.replace(/\d/g, (digit: string, index: number) => (index < cvvValue.length - 1 ? '*' : digit));

    }
    if (changes['cardNumber']) {
      this.detectCardType(changes['cardNumber'].currentValue);
    }
  }


  detectCardType(cardNumber: string) {
    // Limpiar el número de tarjeta de espacios y guiones
    const cleanedCardNumber = cardNumber.replace(/\s+/g, '');

    // Regex y rangos para detectar el tipo de tarjeta
    const visaRegex = /^4/;
    const mastercardRegex = /^5[1-5]/;
    const amexRegex = /^3[47]/;
    const discoverRegex = /^6(?:011|5)/;

    if (visaRegex.test(cleanedCardNumber)) {
      this.cardType = 'visa';
    } else if (mastercardRegex.test(cleanedCardNumber)) {
      this.cardType = 'mastercard';
    } else if (amexRegex.test(cleanedCardNumber)) {
      this.cardType = 'amex';
    } else if (discoverRegex.test(cleanedCardNumber)) {
      this.cardType = 'discover';
    } else {
      this.cardType = 'unknown';  // Tipo de tarjeta desconocido
    }
  }
}
