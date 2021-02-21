import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  constructor() {
   }

  ngOnInit(): void {

    window.scrollTo(10,0)
  }

  

}
