import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogsComponent } from './dialogs/dialogs.component';
import { FormsModule } from '@angular/forms';
import { MatModule } from '../mat/mat.module';
import { FormsComponent } from './forms/forms.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './Shared-routing-module';



@NgModule({
  declarations: [
    DialogsComponent,
    FormsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatModule,
    AppRoutingModule
  ],
  exports:[FormsComponent,
  CardComponent]
})
export class SharedModule { }
