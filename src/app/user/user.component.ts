// user.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { GetCustomerDataService } from '../services/get-customer-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
 // styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder,
    private customerService:GetCustomerDataService,
    private routner:Router) {
    this.userForm = this.fb.group({
      salutation: ['', Validators.required],
      initials: [''],
      firstname: [''],
      firstname_ascii: [''],
      gender: [false],
      firstname_country_rank: [''],
      firstname_country_frequency: [''],
      lastname: [''],
      lastname_ascii: [''],
      lastname_country_rank: [''],
      lastname_country_frequency: [''],
      email: [''],
      password: [''],
      country_code: [''],
      country_code_alpha: [''],
      country_name: [''],
      primary_language_code: [''],
      primary_language: [''],
      balance: [0], // Assuming it's a number
      phone_Number: [''],
      currency: [''],
      partitionKey: [''],
      rowKey: [''],
      timestamp: [''],
      eTag: ['']
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    // You can save the data to a service or API here
    const userData: User = this.userForm.value;
    console.log('User data to save:', userData);
  this.customerService.saveRecord(userData).subscribe(respo=>{
    console.log('saved successfully');
  })
  }
  onCancel()
  {
    this.routner.navigate(['/customer']);
  }
}
