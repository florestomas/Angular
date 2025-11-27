import { Component, HostListener, viewChildren } from '@angular/core';
import { CalculatorButton } from '../calculator-button/calculator-button';

@Component({
  selector: 'calculator',
  imports: [CalculatorButton],
  templateUrl: './calculator.html',
  styles: [
    `
      /* @reference "tailwindcss";
      .is-command {
        @apply bg-indigo-700/20;
      }   aca no va porque afeca a todas las clases*/
    `,
  ],
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)',
  },
})
export class Calculator {
  public calculatorButtons = viewChildren(CalculatorButton);

  handleClick(key: string) {
    console.log({ key });
  }

  // @HostListener('document:keyup', ['$event']) Retrocompatilibidad
  handleKeyboardEvent(event: KeyboardEvent) {
    const keyEquivalents: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      '*': 'x',
      '/': '÷',
      Enter: '=',
    };

    const key = event.key;

    const keyValue = keyEquivalents[key] ?? key;

    this.handleClick(keyValue);

    this.calculatorButtons().forEach((button) => {
      button.keyboardPressedStyle(keyValue);
    });
  }
}
