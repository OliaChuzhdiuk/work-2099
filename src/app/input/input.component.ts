import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  password: string = '';
  enteringPassword: string = '';

  checkPassword() {
    const length = this.password.length;

    if (length === 0) {
      this.enteringPassword = '';
    } else if (length < 8) {
      this.enteringPassword = 'red';
    } else if (
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-])/.test(this.password)
    ) {
      this.enteringPassword = 'green';
    } else {
      this.enteringPassword = 'yellow';
    }
  }
}
