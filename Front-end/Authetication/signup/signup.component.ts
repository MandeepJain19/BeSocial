import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

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
    constructor() { }

    ngOnInit() {}
   
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
