import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserService } from 'app/services/user.service';
import { Router,NavigationEnd } from '@angular/router';
import { error } from 'protractor';
import { AdminService } from 'app/services/admin.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    status:boolean 
   currentUser ={}
    private toggleButton: any;
    private sidebarVisible: boolean;
    userinfo;
    searchText = ""
    constructor(public location: Location, private element : ElementRef, public users : UserService, public route: Router, private alluser : AdminService) {
        this.sidebarVisible = false;
       this.route.events.subscribe((ev) => {
        if (ev instanceof NavigationEnd){

            users.navuser().subscribe(
                data=>{this.currentUser= data,this.status = true},
                error=>{}
            )

            alluser.allusers().subscribe(
                data=>{
                    this.userinfo = data
                }
            )
        }})
    }
    ngOnInit() {
        
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];      
    }
    
    
    
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
    

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    call(){
    }
    logout(){
        this.users.logout()
        .subscribe(
            data=> { this.status=false, this.route.navigate(['login'])},
            error=> {this.status=false, this.route.navigate(['login'])}
        )
        
    }
    clear(){
        this.searchText =' '
    }

}
