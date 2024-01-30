import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


const matarial = [MatRippleModule, MatSlideToggleModule,MatIconModule,MatSidenavModule,MatListModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, matarial],
  exports: [matarial],
})
export class MatModule {}
