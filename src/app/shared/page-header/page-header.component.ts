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
    constructor(
    	private loginService: CheckIsLoggedService,
    	private router: Router) {

        this.loginService.IsUserLoggedIn.subscribe( value => {
            this.isUserLoggedIn = value;
        });

    }

    ngOnInit() {
    	this.isLoggedIn();
    } 
    
    isLoggedIn(status?) {

    	let auth = localStorage.getItem('_auth');
    	if (auth) {
    		this.isUserLoggedIn = true;
    	}

    }	

    logout() {
    	localStorage.removeItem('_auth');
    	this.isUserLoggedIn = false;
    	this.router.navigateByUrl('/entry');
    }
}
