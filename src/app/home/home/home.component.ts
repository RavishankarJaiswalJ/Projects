import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyprofileComponent } from 'src/app/my-profile/myprofile/myprofile.component';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
newHero() {
throw new Error('Method not implemented.');
}
showFormControls(arg0: any) {
throw new Error('Method not implemented.');
}
model: any;
heroForm: any;
  constructor(public dialog: MatDialog) {}
  openDialog(){
    this.dialog.open(MyprofileComponent)
  
 }
 powers=[23,232,3434,'']
 onSubmit(){

 }
 ravi="Ravishankar"
 submitted=false;

}
