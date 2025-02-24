import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required ] ],
    email: [ '', [ Validators.required ] ],
    userName: [ '', [ Validators.required ] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ] ],
    passwordTwo: [ '', [ Validators.required ] ],
  })

  constructor (
    private fb: FormBuilder,
  ) {}

  onSubmit (  ) {

    // TODO: Obtener la validación de un servicio

  }

}
