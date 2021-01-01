import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    day : number = this.test.getDate();
    month : number = this.test.getMonth(); nMonth = this.month+1;
    year: number = this.test.getFullYear();

    maxDate:String =String(this.year+"-"+this.nMonth+"-"+this.day)
    focus;
    focus1;
    constructor(private _route : Router, private _userSignup : UserService) { }

    ngOnInit() {}
   
    moveToLogin(){
        this._route.navigate(['login']);
    }

    image;
    selectImage(event){
        if(event.target.files.length > 0){
            const file = event.target.files[0];
            this.image = file;
            console.log(this.image)
        }
    }

    onClickSubmit(data){
         
        //data = JSON.stringify(data)
        //data.bind('image', this.image);
        //console.log(data)
       // this.image = JSON.stringify(this.image)
       
       //array.push(data)
       //data.push(this.image)
        //)console.log(array
       // let array = [];
       // array.push(data);
         // array.push('profileImage' ,this.image)
        // let formData : {}
        //formData.push(data, {
         //   file : this.image
       // })
        //formData.push('body', data)
        //formData.append('body', this.data)
  //console.log(formData); 

        //console.log(JSON.stringify(data));
        this._userSignup.register(data)
        .subscribe( 
            data => {console.log(data),this._route.navigate(['login'])},

            error => console.log(error)
        )
    }
  


    onSubmit(form : NgForm){
        console.log(form.value.date)
        let Date1 = new Date(form.value.date);
        let date2 = new  Date()
            if(Date1 >= date2){
                console.log("wrong")
                form.controls.date.setErrors({nottoday:false})
            }
            else{
                console.log("correct")
            }
    }
onChange(datecontrol :NgModel){
    console.log(datecontrol)
    let Date1 = new Date(datecontrol.value);
        let date2 = new  Date()
            if(Date1 >= date2){
                console.log("wrong")
                datecontrol.update.hasError=true
                datecontrol.control['date'].setErrors({'incorrect': true});
            }
            else{
                console.log("correct")
            }
  }


}
