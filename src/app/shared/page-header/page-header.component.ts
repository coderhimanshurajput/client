import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckIsLoggedService } from '../../login-register/services/login-register.service'

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

	isUserLoggedIn: boolean;
    userInfo;
    constructor(
    	private loginService: CheckIsLoggedService,
    	private router: Router) {

        this.loginService.IsUserLoggedIn.subscribe( value => {
            this.isUserLoggedIn = value;
            this.updateUserHeader();
        });

    }

    ngOnInit() {
    	this.isLoggedIn();
        this.updateUserHeader()
    } 
    
    updateUserHeader() {
        this.userInfo = this.userPublicInfo();
    }

    
    userPublicInfo() {
        let data = JSON.parse(localStorage.getItem('_user'));
        return data;
    }

    isLoggedIn(status?) {

    	let auth = localStorage.getItem('_auth');
    	if (auth) {
    		this.isUserLoggedIn = true;
    	}

    }	

    logout() {
        localStorage.removeItem('_auth');
    	localStorage.removeItem('_user');
    	this.isUserLoggedIn = false;
    	this.router.navigateByUrl('/entry');
    }
}
