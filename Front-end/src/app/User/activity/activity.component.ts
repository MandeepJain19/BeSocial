import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  currentuser = {}
  constructor(private user : UserService,private route : Router) {

    this.route.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd){
          this.user.currentuser().subscribe(
            data =>{
              this.currentuser = data
             
             },
            error => this.route.navigate(['login'])) 
          }
  })
}

  ngOnInit(): void {
  }

  acceptReq(id){
    this.user.acceptReq(id).subscribe(
      data=>{
        this.user.currentuser().subscribe(
          data =>{
            this.currentuser = data
           },
           error=>{

           })
      },
      error=>{}
    )
  }
  rejectReq(id){
    console.log(id)
  }

  follow(followid){
     this.user.follow(followid).subscribe(
       data=>{
         this.user.currentuser().subscribe(
           data =>{ 
             this.currentuser = data
           },
           error => {window.alert("something went Wron")}
           ) 
       },
       error=>{window.alert("something went Wron")}
     )
   }

   followBackUser(id){
     this.user.followBackUser(id).subscribe(
      
      data => {this.user.currentuser().subscribe(
        data =>{ 
          this.currentuser = data
        },
        error => { window.alert("something went Wron")}
        ) 
    },
    error=>{window.alert("something went Wron")}
  )
}


}
