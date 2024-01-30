import { Component } from '@angular/core';
import { HomeComponent } from './home/home/home.component';
import { FormsComponent } from './shared/forms/forms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pract1';
  CurrentItem='Televion'

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}


