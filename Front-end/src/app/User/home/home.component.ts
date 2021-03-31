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
              console.log(data),
              this.posts = data
              this.chatservice.initSocket()
            },
            error=>{route.navigate(['login'])}
          )

          this.user.user().subscribe(
            data=>{ 
              console.log(data)
              this.currentuser = data
              console.log(this.currentuser)
            },

            error =>{route.navigate(['login'])}
          )
          
    }})
   }
   
  ngOnInit(): void {
    window.scrollTo(10,0)
    
    
  }
  like:number= 5;
  dislike:number=15;
  show :boolean = false;
  click1:boolean=false;
  click2:boolean=false;
   buttn = "ui red basic button";
   buttn2 = "ui black basic button";
   userdata:any[];
   status = false
   //like
  toggle(id){
    if(!this.click2){
      if(!this.show){
       //s this.like++;
       this.buttn = "ui red button"
        this.show = true
        this.click1=true
           this.status = true
        console.log(id)
        this.user.likepost(id)
        .subscribe(
          data=>{  
            this.user.dashboard().subscribe(
            data=>{
              console.log(data),
              this.posts = data

            },
            error=>{}
          )},
          error=>{console.log(error)}
        )
      }
      else{
        this.buttn = "ui red basic button";
        //this.like--;
        this.show = false
        this.click1=false
        this.status = false
      }
   }
  }
  //dislike
  toggle2(id){
    if(!this.click1){
      if(!this.show){
        // this.buttn2 = "ui black button";
        // this.posts.forEach(post => {
        //   if(post._id === id){
        //     post.likes++
        //   }
        // });
        //this.dislike++;
        this.show = true
        this.click2=true

        this.user.dislikepost(id)
        .subscribe(
          data=>{
            this.user.dashboard().subscribe(
              data=>{
                console.log(data),
                this.posts = data
              },
              error=>{ window.alert(error.message)}
            )
          },
          error=>{console.log(error)}
        )
      }
      else{
        this.buttn2 = "ui black basic button";
       // this.dislike--;
        this.show = false
        this.click2=false
      }
  }
  }

  

}
