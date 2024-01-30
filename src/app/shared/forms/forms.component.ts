import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
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
