import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { UserService } from 'app/services/user.service';
import {Profile} from '../interfaces/profile'
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})


export class ViewProfileComponent implements OnInit {
  username
  usersdata
  constructor(private activatedRoute : ActivatedRoute, private route : Router, private user : UserService) { 

    this.activatedRoute.paramMap.subscribe(params => { 
      this.username= params.get('username'); 
  })
    this.route.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd){
          this.user.user().subscribe(
            data =>{ this.currentuser = data
              this.user.getUser(this.username)
              .subscribe(
                (data :Profile) => {
                          this.usersdata = data,
                          console.log(data)
                        },
                error => {this.route.navigate(['login'])}
              )
            },
            error => this.route.navigate(['login'])) 
    }})

}


  ngOnInit(): void {
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
   currentuser
   //like
  toggle(id){
    if(!this.click2){
      if(!this.show){
        this.buttn = "ui red button";
       //s this.like++;
        this.show = true
        this.click1=true
           this.status = true
        console.log(this.currentuser)
        console.log(id)
        this.user.likepost(id)
        .subscribe(
          data=>{this.user.getUser(this.currentuser)
            .subscribe(
              (data :Profile) => {
                        this.usersdata = data,
                        console.log(data)
                      },
              error => {this.route.navigate(['login'])}
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
            this.user.getUser(this.currentuser)
            .subscribe(
              (data :Profile) => {
                        this.usersdata = data,
                        console.log(data)
                      },
              error => {this.route.navigate(['login'])}
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
  
  toogleProp: boolean = true//follow
  toogleProp2: boolean = true//following
  followersclick : boolean = false
  followingclick : boolean = false
  toogleFollow(){
    this.usersdata.followersList.forEach(user => {
      if(user.username === this.currentuser && this.usersdata.isprivate === true){
        if(this.toogleProp2){
          if(this.toogleProp){
            this.toogleProp = false
            this.followersclick = true
          }else{
            this.toogleProp = true
            this.followersclick = false
          }
        }
      }
    });
   
  }
  toogleFollowing(){
    this.usersdata.followingList.forEach(user => {
      if(user.username === this.currentuser && this.usersdata.isprivate === true){
    

    if(this.toogleProp){
      if(this.toogleProp2){
        this.toogleProp2 = false
        this.followingclick = true
      }else{
        this.toogleProp2 = true
        this.followingclick = false

      }
    }
  }})
  }


}
