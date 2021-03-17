import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { UserService } from 'app/services/user.service';
import { Profile } from '../../interfaces/profile';

@Component({
  selector: 'app-find-friend',
  templateUrl: './find-friend.component.html',
  styleUrls: ['./find-friend.component.css']
})


export class FindFriendComponent implements OnInit {
  users : Profile
 currentuser = {}

  constructor(private user : UserService, private route: Router) { 

    this.route.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd){
          this.user.currentuser().subscribe(
            data =>{ console.log(data)
              this.currentuser = data
              user.getallusers().subscribe(
                (data: Profile) =>{
                  this.users = data
                  console.log(data)},
                error=>{console.log(error)}
              )
            },
            error => this.route.navigate(['login'])) 
    }})
 console.log(this.currentuser)



    
    
  }

  follow(followid){
   // console.log(followid)
    this.user.follow(followid).subscribe(
      data=>{
        this.user.currentuser().subscribe(
          data =>{ console.log(data)
            this.currentuser = data
          },
          error => {}
          ) 
      },
      error=>{}
    )
  }

  ngOnInit(): void {
  }

}
