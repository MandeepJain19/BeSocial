import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'protractor';

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
  
  //isloogedin current user 
user(){
  return this.http.get("http://localhost:7860/user",{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
}

//user profile data 
getUser(username){
  console.log(username)
  return this.http.get(`http://localhost:7860/profile/${username}`,{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
  }

dashboard(username){
  return this.http.get("http://localhost:7860/dashboard/"+username)
}

navuser(){
  return this.http.get("http://localhost:7860/navuser",{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
}


logout(){
  return this.http.get("http://localhost:7860/logout",{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })}

  addpost(body,username){
    return this.http.post(`http://localhost:7860/post/${username}`,body,{
    observe:'body',
    withCredentials:true
  })}

  like(username){
    return this.http.post(`http://localhost:7860/post/${username}/like`,{
      observe:'body',
      withCredentials:true
    })
  }

}