import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { MyprofileComponent } from './my-profile/myprofile/myprofile.component';
import { PersonalDetailsComponent } from './personal-details/personal-details/personal-details.component';
import { LeaveandAttendenceComponent } from './leaveand-attendence/leaveand-attendence/leaveand-attendence.component';
import { PayrollComponent } from './payroll/payroll/payroll.component';
import { ReimbursementsComponent } from './reimbursements/reimbursements/reimbursements.component';
import { BenifitsComponent } from './benifits/benifits/benifits.component';
import { DivercityandInclusionComponent } from './divercityand-inclusion/divercityand-inclusion/divercityand-inclusion.component';
import { SelfServicesComponent } from './self-services/self-services/self-services.component';
import { CoorporateServicesComponent } from './coorporate-services/coorporate-services/coorporate-services.component';
import { TravelandGuestHouseComponent } from './traveland-guest-house/traveland-guest-house/traveland-guest-house.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: 'main',component:MainComponent},
  // {path:'myprofile',component:MyprofileComponent},
  // {path:'personaldetail',component:PersonalDetailsComponent},
  // {path:'leaveandattendence',component:LeaveandAttendenceComponent},
  // {path:'payroll',component:PayrollComponent},
  // {path:'reimbursements',component:ReimbursementsComponent},
  // {path:'benifits',component:BenifitsComponent},
  // {path:'divercityandinclusion',component:DivercityandInclusionComponent},
  // {path:'selfservices',component:SelfServicesComponent},
  // {path:'coorporateservices',component:CoorporateServicesComponent},
  // {path:'travelandguesthouse',component:TravelandGuestHouseComponent},
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfileModule) },
  { path: '', loadChildren: () => import('./personal-details/personal-details.module').then(m => m.PersonalDetailsModule) },
  { path: '', loadChildren: () => import('./leaveand-attendence/leaveand-attendence.module').then(m => m.LeaveandAttendenceModule) },
  { path: '', loadChildren: () => import('./payroll/payroll/payroll.module').then(m => m.PayrollModule) },
  { path: '', loadChildren: () => import('./reimbursements/reimbursements.module').then(m => m.ReimbursementsModule) },
  { path: '', loadChildren: () => import('./benifits/benifits.module').then(m => m.BenifitsModule) },
  { path: '', loadChildren: () => import('./divercityand-inclusion/divercityand-inclusion.module').then(m => m.DivercityandInclusionModule) },
  { path: '', loadChildren: () => import('./self-services/self-services.module').then(m => m.SelfServicesModule) },
  { path: '', loadChildren: () => import('./coorporate-services/coorporate-services.module').then(m => m.CoorporateServicesModule) },
  { path: '', loadChildren: () => import('./traveland-guest-house/traveland-guest-house.module').then(m => m.TravelandGuestHouseModule) },
  { path: '', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: '', loadChildren: () => import('././shared/shared.module').then(m => m.SharedModule) },
  {path:'**',component:MainComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
