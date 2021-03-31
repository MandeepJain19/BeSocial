import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { UserService } from 'app/services/user.service';
import { ChatService } from '../../services/chat.service';
import { Pipe} from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-chat-system',
  templateUrl: './chat-system.component.html',
  styleUrls: ['./chat-system.component.css']
})
export class ChatSystemComponent implements OnInit {

  message: string = "";
  sendMsgList;
  recieveMsgList = [];
  messages = [];
  userdata;
  onlineUsers;
  friends = [];
  searchText: string
  constructor(private user: UserService, private chatservice : ChatService, private route : Router ) {

    this.route.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd){
        this.user.chatUser().subscribe(
          data=>{
            this.searchText = ''
            this.userdata = data
            this.friends = this.userdata.followingList
  
             
            this.chatservice.onlineUsers().subscribe(
              onlineUser => {
                console.log(onlineUser)
                this.onlineUsers = onlineUser
              }
            )
        },
          error=>{
            route.navigate(['login'])
          }
        )

       
    }})


    
   }

  ngOnInit(): void {

    this.chatservice.initSocket()
//chat is initilixe in dashboard
    
    this.chatservice.getMessage().subscribe(
      msg =>{
        this.sendMsgList.push(msg)
        console.log(msg)
      },
    )

   
  }

  toUser:string = ""
  selectedUser :string 
  property = false
  userSelected(user){

 
     
    this.toUser = user.username
    this.selectedUser = user
    this.property = true
    console.log(this.selectedUser)
  

// bring old chats
console.log("userdata"+ this.userdata.username)
console.log("to user"+ this.toUser)

this.user.oldChats(this.userdata.username,this.toUser).subscribe(
  data => { 
            this.sendMsgList = (data)
            console.log(this.sendMsgList)
  },
  error => {console.log(error)}
)

    this.chatservice.join(user.username)
  }

  sendMessage(){

    moment()

   let time = moment().format("DD/MMM,h:mmA");

   if(this.message != "" && this.message != " "){
    this.chatservice.sendMessage({to : this.toUser,from: this.userdata.username , msg : this.message, time: time })
    
    this.sendMsgList.push({ 'message' : this.message, 'sendername': this.userdata.username, receivername : this.toUser, time : time})
    this.message = " "
    console.log(this.message)
    console.log(this.sendMsgList)
   
  }}

 

}
