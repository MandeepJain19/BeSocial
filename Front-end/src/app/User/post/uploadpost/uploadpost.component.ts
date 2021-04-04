import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';
import { error } from 'protractor';


@Component({
  selector: 'app-uploadpost',
  templateUrl: './uploadpost.component.html',
  styleUrls: ['./uploadpost.component.css']
})
export class UploadpostComponent implements OnInit {
 usersdata
 httpError: boolean = false;
    errorType: String
    errorMsg : String
    ale
  constructor(private user: UserService,public route: Router) { 
    this.user.user().subscribe(
      data =>{
        this.user.getUser(data)
         .subscribe(
           data => {this.usersdata = data},
           error => {}
         )
      },
      error => this.route.navigate(['login'])) 
  }

  ngOnInit(): void {
  }
  url=" ";

  onselectFile(e: { target: { files: Blob[]; }; }){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }

  image: any 
  selectImage(event: { target: { files: string | any[]; }; }){
    if(event.target.files.length > 0){
        const file = event.target.files[0];
        this.image = file
    }
}
   //close alert flash 
alertClass = "visible";
close(){
   
   this.alertClass = "invisible"
}

  onClickSubmit(data: { [x: string]: any; }){
    const formData = new FormData(); 
    for (const property in data) {
            formData.append(`${property}`,`${data[property]}`)
    }
    formData.append('image', this.image)
    
    this.user.addpost(formData,this.usersdata.username).subscribe(
     data=> {this.route.navigate(['profile'])},
     error=>{
       this.httpError = true;
      this.errorMsg = error.error
      this.errorType = 'danger'
      this.alertClass = "visible" }
    )
  }
 
 
}
