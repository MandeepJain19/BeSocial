
import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';
import {NgFlashService} from 'ng-flash'

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    day : number = this.test.getDate();
    month : number = this.test.getMonth(); nMonth = this.month+1;
    year: number = this.test.getFullYear()
    maxDate:String =String(this.year+"-"+this.nMonth+"-"+this.day)
    httpError: boolean = false;
    errorType: String
    errorMsg : String
    focus: any;
    focus1: any;
    
    
    constructor(private _route : Router, private _userSignup : UserService) { }

    ngOnInit() {}
   
    moveToLogin(){
        this._route.navigate(['login']);
    }

    alertClass = "visible";
close(){
    console.log(this.alertClass)
   this.alertClass = "invisible"
}

    image: string | Blob;
    selectImage(event: { target: { files: string | any[]; }; }){
        if(event.target.files.length > 0){
            const file = event.target.files[0];
            this.image = file
        }
    }
    onClickSubmit(data: any){  
        const formData = new FormData(); 
        for (const property in data) {
                formData.append(`${property}`,`${data[property]}`)
        }
        formData.append('image', this.image)
        this._userSignup.register(formData)
        .subscribe( 
            data => {console.log(data),this._route.navigate(['login'])},
            error => {
                    this.httpError = true;
                    this.errorMsg = error.error
                    this.errorType = 'danger'
                    this.alertClass = "visible";    
            }
        )
    }
    



}
