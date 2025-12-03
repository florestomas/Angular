import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance; //Es la instancia de nuestro appComponent

    expect(app).toBeTruthy();
  });

  it('should be 3', () => {
    // AAA, Arrange, Act, Assert
    // Arrange
    const num1 = -2;
    const num2 = 5;

    // Act
    const result = num1 + num2;

    // Assert
    /* if (result !== 3) { OBSOLETO, HAY Q USAR expect()
      throw new Error('no es 3');
    } */

    expect(result).toBe(3);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    console.log(compiled); // nuestro codigo HTL del app component

    //expect(compiled.querySelector('h1')?.textContent).toContain('Hello, zoneless-calculator-fr');
  });
});
