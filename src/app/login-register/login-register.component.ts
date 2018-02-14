import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Global } from '../shared';
import { CheckIsLoggedService } from './services/login-register.service'

@Component({
    selector: 'app-questions',
    templateUrl: './login-register.component.html',
    styleUrls: ['./login-register.component.scss']
})

export class LoginRegisterComponent implements OnInit {

        public register = {};
        public pwdField: boolean = true;
        public loginPage: boolean = true;
        private previousUrl: string;
		private API_ENDPOINT: string = `${Global.API_ENDPOINT}/user-profile`;

        constructor( 
            public router: Router, 
            private http: HttpClient,
            private loginService: CheckIsLoggedService,
            private location: Location) { 
            router.events
                .filter(event => event instanceof NavigationEnd)
                .subscribe((e:any) => {
                    this.previousUrl = e.url;
                });
        }

        ngOnInit() {

        }

        showHidePassword() {
            this.pwdField = this.pwdField ? false : true;
        }

        loginOrRegister() {
            this.loginPage = this.loginPage ? false : true;
        }

        registration() {
            let apiUrl = `${this.API_ENDPOINT}/register`;
            this.http.post(apiUrl, this.register).subscribe((data: any) => {
                console.log(data);
                alert('Registration success');
            }, (err) => {
                alert(err.message);
            });
        }

        login() {
            let apiUrl = `${this.API_ENDPOINT}/login`;
            this.http.post(apiUrl, this.register).subscribe((data: any) => {
                if (data.status == 'success' && data.statusCode == 200) {
                    localStorage.setItem('_auth', data.auth);    
                    this.loginService.IsUserLoggedIn.next(true);               
                    // alert('loggedin successfully');
                    if (history.length > 2) {
                        this.location.back();
                    }
                }
            }, (err) => {
                alert(err.message);
            });            
        }

}