import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  posts 
  constructor(private user :UserService,private route: Router) {
    this.route.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd){
          this.user.dashboard().subscribe(
            data=>{
              console.log(data),
              this.posts = data
            },
            error=>{}
          )
    }})
   }
   currentuser
  ngOnInit(): void {
    window.scrollTo(10,0)
    this.user.user().subscribe(
      data=>{ this.currentuser = data},
      error =>{}
    )
    console.log(this.currentuser)
    
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
        this.buttn = "ui red button";
       //s this.like++;
        this.show = true
        this.click1=true
           this.status = true
        console.log(id)
        this.user.likepost(id)
        .subscribe(
          data=>{  this.user.dashboard().subscribe(
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
        this.buttn2 = "ui black button";
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
              error=>{}
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
