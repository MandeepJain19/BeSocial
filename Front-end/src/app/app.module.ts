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
import { HomeComponent } from './User/home/home.component';
import { NgFlashModule} from 'ng-flash';

import { EditpostComponent } from './User/post/editpost/editpost/editpost.component';
import { ChatoutsideComponent } from './User/chats/chatoutside/chatoutside.component';
import { Globals } from './global';
import { UploadpostComponent } from './User/post/uploadpost/uploadpost.component';
import { EditProfileComponent } from './User/edit-profile/edit-profile.component';
import { FindFriendComponent } from './User/find-friend/find-friend.component';
import { ActivityComponent } from './User/activity/activity.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ChatSystemComponent } from './User/chat-system/chat-system.component';
import { ChatService } from './services/chat.service';
import { SearchpipePipe } from './User/chat-system/searchpipe.pipe';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    HomeComponent,
  
    EditpostComponent,
    ChatoutsideComponent,
    UploadpostComponent,
    EditProfileComponent,
    FindFriendComponent,
    ActivityComponent,
    ViewPostComponent,
    ViewProfileComponent,
    ChatSystemComponent,
    SearchpipePipe,
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
    NgFlashModule,
    
    
  
  ],
  providers: [UserService, NavbarComponent, Globals, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
