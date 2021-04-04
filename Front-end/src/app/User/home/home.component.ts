import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from 'app/services/user.service';
import {ChatService} from "../../services/chat.service"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  posts;
  currentuser;
  constructor(private user :UserService,private route: Router, private chatservice : ChatService) {
    this.route.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd){
          this.user.dashboard().subscribe(
            data=>{
              this.posts = data
              this.chatservice.initSocket()
            },
            error=>{route.navigate(['login'])}
          )

          this.user.user().subscribe(
            data=>{ 
              this.currentuser = data
            },

            error =>{route.navigate(['login'])}
          )
          
    }})
   }
   
  ngOnInit(): void {
    // window.scrollTo(10,0)
  }
  
  likepost(id){
    this.user.likepost(id).subscribe(
      data=> {
        this.user.dashboard().subscribe(
          data=>{
            this.posts = data
            this.chatservice.initSocket()
          },
          error=>{this.route.navigate(['login'])}
        )
      },
      error =>{
          window.alert(error.error.message)
      })
  }
  dislikepost(id){
    this.user.dislikepost(id).subscribe(
      data=> {
        this.user.dashboard().subscribe(
          data=>{
            this.posts = data
          },
          error=>{this.route.navigate(['login'])}
        )

          },
      error =>{
          
          window.alert(error.error.message)
      })
  }
}
