import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit {
  pageTitle = 'Sign up!';
  customerForm: FormGroup;
  customer = new Customer();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      confirmEmail: ''
    });
  }

  submit() {}
}
