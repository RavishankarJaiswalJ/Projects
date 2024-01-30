import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes } from '@angular/router';

const routes: Routes=[
    {path:'home',component:HomeComponent}
]


@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [HomeComponent
    ],
    imports: [
        CommonModule,
      
        RouterModule.forChild(routes),
        FormsModule,
        SharedModule
    ]
})
export class HomeModule { }
