import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { PayrollComponent } from 'src/app/payroll/payroll/payroll.component';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {
  title="Hello Ravi"
  constructor(public dialog: MatDialog){
    
  }
  delete(){
    this.dialog.open(PayrollComponent)
  }
  openDialog(){

  }
  imageUrl="assets/firefox.png"

  handleButtonClick(){
    alert("Hello Click me")
    }
    colors="red";
}
