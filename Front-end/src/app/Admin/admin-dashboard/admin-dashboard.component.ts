import { Component, OnInit } from '@angular/core';
import { AdminService } from 'app/services/admin.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
userdata;
post = 0;
likes= 25 ;
dislikes = 12;
posts;
reported ;
userpost =[];
  constructor(private admin : AdminService,private users : UserService ) {
    admin.allusers().subscribe(
      data=>{
        console.log(
          this.userdata = data)
          
          this.userdata.forEach(user => {
            // this.likes = this.likes+user.post.likes
            this.post = this.post + user.post.length
          });
      }
    )


    admin.reportedPost().subscribe(
      data=>{
         console.log(data)
        this.posts = data
        this.reported = this.posts.reportedPost
      }
    )
   }

  ngOnInit(): void {
  }

  dashboard: boolean = true;
  Dashboard(){
    if(this.dashboard){
      this.dashboard= false
    }else{
      if(this.userdetails || this.inpost ||  this.reports ){
        this.userdetails =false
        this.inpost = false
        this.reports = false
      }
      this.dashboard= true
    }
  }

  userdetails: boolean = false;
  userDetails(){
    
    if(this.userdetails){
      this.userdetails= false
    }else{
      if(this.dashboard || this.inpost || this.reports){
        this.dashboard =false
        this.inpost = false
        this.reports = false
      }
      this.userdetails= true
    }
  }

  inpost:boolean = false
  inappropriatePosts(){
    if(this.inpost){
      this.inpost= false
    }else{
      if(this.dashboard || this.userdetails || this.reports){
        this.userdetails =false
        this.dashboard = false
        this.reports = false
      }
      this.inpost= true
    }
  }

  reports: boolean = false
  report(){
    if(this.reports){
      this.reports = false
    }else{
      if(this.dashboard || this.userdetails || this.inpost){
        this.userdetails =false
        this.dashboard = false
        this.inpost = false
      }
      this.reports= true
    }
  }

  deletePost(id){
    console.log(id)
    this.users.delete(id).subscribe(
      data =>{
        window.alert("deleted")
      }
    )
  }

}
