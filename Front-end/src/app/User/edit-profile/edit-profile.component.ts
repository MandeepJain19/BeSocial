import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
username;
usersdata;
  constructor(private activatedRoute : ActivatedRoute,private user : UserService, public route : Router, ) {
    this.activatedRoute.paramMap.subscribe(params => { 
      this.username= params.get('username'); 
  })
  this.user.getUser(this.username).subscribe(
    data => { 
      this.usersdata = data
      console.log(this.usersdata)
    },
    error =>{ route.navigate(['profile'])}
  )
   }

  ngOnInit(): void {

  }


  update(data){
    console.log(data)
   
    this.user.updateProfile(data,this.usersdata.username).subscribe(
      data => {
        console.log(data)
        this.route.navigate(['profile'])
      },
      error => {
        this.route.navigate(['profile'])
      }
    )

  }
}
