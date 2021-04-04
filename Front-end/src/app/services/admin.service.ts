import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'appliction/JSON'
  })
}

  constructor(private http: HttpClient) { }

  allusers(){
    return this.http.get('http://localhost:7860/usersdata',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  reportedPost(){
    return this.http.get('http://localhost:7860/post/reported',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
  }

