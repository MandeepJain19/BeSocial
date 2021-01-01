import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { IcheckPost } from 'app/checkPost';
//import { Observable } from 'rxjs';
//import { map } from 'rxjs-compat/operator/map';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

   url = "http://localhost:7860/followers";
               
  constructor(private http : HttpClient){
     console.log("http server Initiated ");
  }
 
    getdata(){
      return this.http.get(this.url)
    }
}