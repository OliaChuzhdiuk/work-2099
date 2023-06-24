import { Component, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { PasswordStrengthService } from '../service/password-strength.service';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  passwordForm: FormGroup;
  password: any;
  passwordStrength!: string;
  inputBorderClass: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private passwordStrengthService: PasswordStrengthService
  ) {
    this.passwordForm = this.formBuilder.group({
      password: '',
    });

    console.log(this.passwordStrengthService);
  }

  ngOnInit() {
    this.passwordForm.valueChanges.subscribe((value) => {
      const password = value.password;
      this.passwordStrength =
        this.passwordStrengthService.calculatePasswordStrength(password);

      console.log(this.passwordStrength);
      this.setInputBorderClass();
      this.onChange(this.password);
    });
  }

  private setInputBorderClass() {
    if (this.passwordStrength === 'red') {
      this.inputBorderClass = 'red';
    } else if (this.passwordStrength === 'yellow') {
      this.inputBorderClass = 'yellow';
    } else if (this.passwordStrength === 'green') {
      this.inputBorderClass = 'green';
    } else {
      this.inputBorderClass = '';
    }
  }
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.password = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}
}
