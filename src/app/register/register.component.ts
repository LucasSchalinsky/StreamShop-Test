import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      'name': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'cellphone': ['', [Validators.required]],
      'notifications': [true],
      'licenseTerms':  [false, [Validators.requiredTrue]],
    });

    console.log(this.registerForm);

  }

  onSubmit(){
    alert('Formulário enviado com sucesso!');
  }

}
