import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from '../mat/mat.module';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { SharedModule } from '../shared/shared.module';
import { MyprofileRoutingModule } from './myprofile/myprofile-routing.module';



@NgModule({
  declarations: [
    MyprofileComponent
  ],
  imports: [
    CommonModule,
    MatModule,
    MyprofileRoutingModule
    
  ]
})
export class MyProfileModule { }
