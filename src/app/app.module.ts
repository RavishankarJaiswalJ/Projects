import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { matarial } from './mat/mat.module';
import { HeaderComponent } from './header/header.component'
import { HomeModule } from './home/home.module'
import { MyProfileModule } from './my-profile/my-profile.module'
import { PayrollModule } from './payroll/payroll/payroll.module';
import { PersonalDetailsModule } from './personal-details/personal-details.module';
import { ReimbursementsModule } from './reimbursements/reimbursements.module';
import { SelfServicesModule } from './self-services/self-services.module';
import { TravelandGuestHouseModule } from './traveland-guest-house/traveland-guest-house.module';
import { BenifitsModule } from './benifits/benifits.module';
import { DivercityandInclusionModule } from './divercityand-inclusion/divercityand-inclusion.module';
import { LeaveandAttendenceModule } from './leaveand-attendence/leaveand-attendence.module';
import { CoorporateServicesModule } from './coorporate-services/coorporate-services.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from './shared/shared.module';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    SidenavComponent,
    HeroFormComponent,
    MainComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    MyProfileModule,
    PayrollModule,
    PersonalDetailsModule,
    ReimbursementsModule,
    SelfServicesModule,
    TravelandGuestHouseModule,
    BenifitsModule,
    DivercityandInclusionModule,
    LeaveandAttendenceModule,
    CoorporateServicesModule,
    SharedModule,
    FormsModule,
    matarial,
    // FlexLayoutModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
