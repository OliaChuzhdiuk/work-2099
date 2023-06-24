import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
 calculatePasswordStrength(password: string): string {
    if (!password) {return 'gray'; }

if (password.length < 8) {
      return 'red'; 
    }
if (/^[a-zA-Z]+$/.test(password) || /^\d+$/.test(password) || /^[^\w\s]+$/.test(password)) {
      return 'red'; 
    }

if (/^[a-zA-Z]+\W+$/.test(password) || /^[a-zA-Z]+\d+$/.test(password) || /^\d+\W+$/.test(password)) {
      return 'yellow';
    }

    return 'green';
  }
}
