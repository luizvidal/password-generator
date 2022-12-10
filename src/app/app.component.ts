import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeSymbols = false;
  includeNumbers = false;
  password = '';
  invalid = true;

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeLength(value: string) {
    const parsedValue = Number(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
      console.log(this.length)
    } else {
      this.length = 0;
    }
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'qwertyuiopasdfghjklçzxcvbnm';
    const symbols = '!@#$%¨&*()_+^~{}?|/ ';
    let validChars = '';
    if (this.includeLetters) validChars += letters;
    if (this.includeSymbols) validChars += symbols;
    if (this.includeNumbers) validChars += numbers;
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    console.log(this.length);
    this.password = generatedPassword;
  }
}
