import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Body } from '@angular/http/src/body';
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

  likepost(id){
    const postdata =  {id : id}
    return this.http.put(`http://localhost:7860/likepost`,postdata,{
      observe:'body',
      withCredentials:true
    })}

    dislikepost(id){
      const postdata =  {id : id}
      return this.http.put(`http://localhost:7860/dislikepost`,postdata,{
        observe:'body',
        withCredentials:true
      })}

      //find friends
      getallusers(){
        return this.http.get("http://localhost:7860/allusers",{
          observe:'body',
          withCredentials:true,
          headers:new HttpHeaders().append('Content-Type','application/json')
        })}

        follow(id){
          //console.log("follow")
          const follow =  {id : id}
          return this.http.put(`http://localhost:7860/follow`,follow,{
            observe:'body',
            withCredentials:true,
            headers:new HttpHeaders().append('Content-Type','application/json')
          })}
          
          currentuser(){
            return this.http.get(`http://localhost:7860/currentuser`,{
              withCredentials:true,
              headers:new HttpHeaders().append('Content-Type','application/json')
            })}

            acceptReq(id){
              const follow =  {id : id}
              return this.http.put(`http://localhost:7860/confirmreq`,follow,{
                observe:'body',
                withCredentials:true,
                headers:new HttpHeaders().append('Content-Type','application/json')
              })}

              followBackUser(id){
                const follow =  {id : id}
                return this.http.put(`http://localhost:7860/followBackUser`,follow,{
                  observe:'body',
                  withCredentials:true,
                  headers:new HttpHeaders().append('Content-Type','application/json')
                })}

                dashboard(){
                  return this.http.get("http://localhost:7860/dashboard/",{
                    observe:'body',
                    withCredentials:true,
                    headers:new HttpHeaders().append('Content-Type','application/json')
                  })}

                  getPost(id){
                    
                return this.http.get(`http://localhost:7860/getpost/${id}`,{
                  observe:'body',
                  withCredentials:true,
                  headers:new HttpHeaders().append('Content-Type','application/json')
                })}

                updateProfile(userdata: FormData,username: any){
                 // const body = {data : userdata}
                  return this.http.put(`http://localhost:7860/profile/edit/${username}`,userdata,{
                    // observe:'body',
                    withCredentials:true,
                    
                  })}

}