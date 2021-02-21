import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './Authentication/login/login.component';
import { SignupComponent } from './Authentication/signup/signup.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ProfileComponent } from './User/profile/profile.component';
import { HomeComponent } from './User/home/home.component';

import { NavbarComponent } from './shared/navbar/navbar.component';

import { EditpostComponent } from './User/post/editpost/editpost/editpost.component';
import { ChatoutsideComponent } from './User/chats/chatoutside/chatoutside.component';
import { UploadpostComponent } from './User/post/uploadpost/uploadpost.component';




const routes: Routes =[
    //{ path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'dashboard', component: HomeComponent },
    { path: 'home',component: ComponentsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'nav', component: NavbarComponent },
    { path: 'icon',component: NucleoiconsComponent },
    { path: 'addpost',component: UploadpostComponent},
    { path: 'editpost',component: EditpostComponent},
    { path: 'chatoutside',component: ChatoutsideComponent}
    
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }