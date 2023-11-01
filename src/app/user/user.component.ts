// user.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
 // styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group(new User()); // Create a form group based on the User model
  }

  ngOnInit() {
  }

  onSubmit() {
    // You can save the data to a service or API here
    const userData: User = this.userForm.value;
    console.log('User data to save:', userData);
  }
}
