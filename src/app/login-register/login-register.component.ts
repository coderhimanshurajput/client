import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Global } from '../shared';

@Component({
    selector: 'app-questions',
    templateUrl: './login-register.component.html',
    styleUrls: ['./login-register.component.scss']
})

export class LoginRegisterComponent implements OnInit {

        public register = {};
        public pwdField: boolean = true;
        public loginPage: boolean = true;
		private API_ENDPOINT: string = `${Global.API_ENDPOINT}/user-profile`;

        constructor( 
            public router: Router, 
            private http: HttpClient,
            private location: Location) { }

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
                console.log(data);
                if (data.status == 'success' && data.statusCode == 200) {
                    localStorage.setItem('_auth', data.auth);
                    alert('loggedin successfully');
                    // this.location.back();
                }
            }, (err) => {
                alert(err.message);
            });            
        }

}