import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[HttpService]
})
export class LoginComponent implements OnInit {
  test : Date = new Date();
  focus;
  focus1;
  dataArray : any[]
  constructor(private http : HttpService, public route : Router) {
    this.http.getdata()
    .subscribe((data :any[]) =>{
      console.log(data)
      this.dataArray = data
  });
   }  
   moveToSignup(){
    this.route.navigate(['signup'])
    }
ngOnInit(): void {
}
}