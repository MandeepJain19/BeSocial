import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
     // enctype: "multipart/form-data"
  })
}
  
  constructor(private http: HttpClient) { }

  register(body :any[]){
    console.log(body)
    return this.http.post("http://localhost:7860/signup",body)
  }

}