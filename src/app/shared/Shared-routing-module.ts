import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {path:'forms',component:FormsComponent},
//   { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  // {path:'**',component:FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }