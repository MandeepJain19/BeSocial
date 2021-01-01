import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { LoginComponent } from './Authentication/login/login.component';
import { SignupComponent } from './Authentication/signup/signup.component';
import { ProfileComponent } from './User/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import { UserService } from './services/user.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
   
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
