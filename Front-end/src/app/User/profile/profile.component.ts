import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  like:number=15;
  dislike:number=15;
  show :boolean = false;
  click1:boolean=false;
  click2:boolean=false;
   buttn = "ui red basic button";
   buttn2 = "ui black basic button";
   userdata:any[];
   //like
  toggle(){
    if(!this.click2){
      if(!this.show){
        this.buttn = "ui red button";
        this.like++;
        this.show = true
        this.click1=true
      }
      else{
        this.buttn = "ui red basic button";
        this.like--;
        this.show = false
        this.click1=false
      }
   }
  }
  //dislike
  toggle2(){
    if(!this.click1){
      if(!this.show){
        this.buttn2 = "ui black button";
        this.dislike++;
        this.show = true
        this.click2=true
      }
      else{
        this.buttn2 = "ui black basic button";
        this.dislike--;
        this.show = false
        this.click2=false
      }
  }
  }
  toogleProp: boolean = true//follow
  toogleProp2: boolean = true//following
  toogleFollow(){
    if(this.toogleProp2){
      if(this.toogleProp){
        this.toogleProp = false
      }else{
        this.toogleProp = true
      }
    }
  }
  toogleFollowing(){
    if(this.toogleProp){
      if(this.toogleProp2){
        this.toogleProp2 = false
      }else{
        this.toogleProp2 = true
      }
    }
  }

  constructor( private user : UserService) { }

  ngOnInit(): void {
    this.user.getuser().subscribe((response:any[])=>{
      this.userdata= response
      console.log(this.userdata)
    })
  }



}
