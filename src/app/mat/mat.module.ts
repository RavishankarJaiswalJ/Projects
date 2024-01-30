import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRippleModule} from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
// import {MatInputModule} from '@angular/material/input';



export const matarial = [
  MatRippleModule,
  MatSlideToggleModule,
  MatInputModule,
  MatIconModule,
  MatTabsModule,
  MatGridListModule,
  MatChipsModule,
  MatCardModule,
  MatButtonModule,
  MatListModule

]
;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matarial
  ],
  exports:[
    matarial
  ],
})
export class MatModule { }
