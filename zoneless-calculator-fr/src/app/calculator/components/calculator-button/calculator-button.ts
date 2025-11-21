import { Attribute, Component } from '@angular/core';
import { ɵEmptyOutletComponent } from '@angular/router';

@Component({
  selector: 'calculator-button',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './calculator-button.html',
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',

    // attribute: 'hola, voz de homero',
    // 'data-size': 'XL',
  },
})
export class CalculatorButton {}
