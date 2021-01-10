import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'appliction/JSON'
  })
}

formData : String[] = new Array

  constructor(private http: HttpClient) { }
 
  register(formData: FormData){
  
    return this.http.post("http://localhost:7860/signup",formData)
  }

  login(body: any){
    return this.http.post("http://localhost:7860/login",body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  
  getuser(){
    return this.http.get("http://localhost:7860/")
  }

}