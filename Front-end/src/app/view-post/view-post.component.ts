import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  postid
  post
  constructor(private activatedRoute: ActivatedRoute, private user : UserService) {

    this.activatedRoute.paramMap.subscribe(params => { 
      this.postid = params.get('id'); 

      this.user.getPost(this.postid).subscribe(
        data => {
           console.log(data)
            this.post = data
        },
        error => {}
      )
  });
   }

  ngOnInit(): void {
    window.scrollTo(20,0)
  }

}
