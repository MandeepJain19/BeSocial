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
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')

    })}

    dislikepost(id){
      const postdata =  {id : id}
      return this.http.put(`http://localhost:7860/dislikepost`,postdata,{
        observe:'body',
        withCredentials:true,
        headers:new HttpHeaders().append('Content-Type','application/json')

      })}

      //find friends
      getallusers(){
        return this.http.get("http://localhost:7860/allusers",{
          observe:'body',
          withCredentials:true,
          headers:new HttpHeaders().append('Content-Type','application/json')
        })}

        follow(id){
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

                  chatUser(){
                    return this.http.get("http://localhost:7860/chat/user",{
                      observe:'body',
                      withCredentials:true,
                      headers:new HttpHeaders().append('Content-Type','application/json')
                    })}

                    oldChats(sender,receiver){
      
                    return this.http.get(`http://localhost:7860/message/${sender}/${receiver}`,{
                    observe:'body',
                    withCredentials:true,
                    headers:new HttpHeaders().append('Content-Type','application/json')
                      })
                    }

                    comment(id,text){
                      
                      let comment =  {comment : text}
                      return this.http.post(`http://localhost:7860/comment/${id}`,comment,{
                        observe:'body',
                        withCredentials:true,
                      })}
                    
                      report(id){
                        const report =  {id : id}
                        return this.http.put(`http://localhost:7860/post/report/`,report,{
                          observe:'body',
                          withCredentials:true,
                          headers:new HttpHeaders().append('Content-Type','application/json')
                        })}

                      delete(id){
                        return  this.http.delete(`http://localhost:7860/post/delete/${id}`)
                      }
                        

                  }