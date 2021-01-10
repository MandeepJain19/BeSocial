import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  test : Date = new Date();
  focus;
  focus1;
  dataArray : any[]
  httpError:boolean = false
  errorMsg;
  errorType;
  public loggedinUser;
  constructor(private userLogin : UserService, private route : Router) {}
   
   moveToSignup(){
    this.route.navigate(['signup'])
    }
ngOnInit(): void {
}

alertClass = "visible";
close(){
    console.log(this.alertClass)
   this.alertClass = "invisible"
}

onClickSubmit(data){
   this.userLogin.login(data)
   .subscribe(
     data => {
       //console.log(data)
       this.route.navigate(['profile'])
      },
     error => {
       console.log(error.message)
      this.httpError = true;
      this.errorMsg = error.error.message
      this.errorType = 'danger'
      this.alertClass = "visible";
     }
   )
}

}