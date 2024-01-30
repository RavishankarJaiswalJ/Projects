import { Component } from '@angular/core';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent {
  handleButtonClick(){
    console.log("Hello Ravi")
  }
  // onSubmit(){

  // }
  // user="";
  user = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit() {
    if (this.user.name && this.user.email && this.user.password) {
      // Form is valid, you can submit the data or perform other actions here
      console.log('Form submitted with user data:', this.user);
    }
  }

}