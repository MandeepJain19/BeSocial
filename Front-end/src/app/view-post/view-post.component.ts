import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'app/services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  postid;
  post;
  commentmsg;
  currentUser;
  commentList;
  constructor(private activatedRoute: ActivatedRoute, private user : UserService) {

    this.activatedRoute.paramMap.subscribe(params => { 
      this.postid = params.get('id');
      this.user.currentuser().subscribe(
        data => {
          this.currentUser = data
        }
      )

      this.user.getPost(this.postid).subscribe(
        data => {
            this.post = data
            console.log(data)
            this.commentList = this.post.comment
        },
        error => {window.alert("something went wrong")}
      )
  });
   }

  ngOnInit(): void {
    // window.scrollTo(100,0)
  }

  comment(id){

    if(this.commentmsg != "" && this.commentmsg != " "){
      
      console.log("here")
      this.user.comment(id,this.commentmsg).subscribe(
        data => {
          this.commentList.push({ 
            comment : this.commentmsg,
            author : this.currentUser.username,
            authorimage : this.currentUser.img
          }) 
                this.commentmsg = " "
        })
    }
  }

  report(id){
    console.log(id)
    this.user.report(id).subscribe(
      data=>{
        window.alert("reported")
      }
    )
  }

}
