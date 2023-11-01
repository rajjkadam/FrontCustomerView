import { Component, Input,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent {
   Cusomerddata: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    // The 'data' parameter now contains the value passed from the parent component
    console.log(this.data); // This will log the 'record' data
    this.Cusomerddata=data;
  }
}
