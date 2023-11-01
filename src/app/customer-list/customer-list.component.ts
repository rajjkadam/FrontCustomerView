import { Component, OnInit } from '@angular/core';
import { GetCustomerDataService } from '../services/get-customer-data.service';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit  {
  listCustomer:Array<any>=[];
constructor(private customerService:GetCustomerDataService,
  private router: Router,
  public dialog: MatDialog){
  
}
ngOnInit() {
 this.refreshCustomerList();
}
showDetails(record: any): void {
  const dialogRef = this.dialog.open(CustomerDetailsComponent, {
    data: record
  });
}
deleteRecord(record: any): void {
  // const index = this.res.indexOf(record);
  // if (index !== -1) {
  //   this.res.splice(index, 1);
  this.customerService.deleteRecord(record.id).subscribe(res=>{
    
  })
  }
  createCustomer(){
    this.router.navigate(['/addCustomer']);
 }
 openConfirmationDialog(item: any): void {
  const confirmation = window.confirm('Are you sure you want to delete this item?');

  if (confirmation) {
    this.deleteRecord(item); // Call the deletion function if the user confirms
  }
}

 refreshCustomerList() {
  this.customerService.getRecords().subscribe(res=>{
    
    this.listCustomer=res;
    console.log('data',this.listCustomer);
  });
 } 
}


