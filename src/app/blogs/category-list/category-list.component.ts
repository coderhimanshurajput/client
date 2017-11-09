import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Global } from '../../shared';


@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss']
})

export class CategoryListComponent implements OnInit {

        private API_ENDPOINT: string = `${Global.API_ENDPOINT}/blog-management`;
        public categoryList;
        private href: string;
        private page: string;

        constructor(public router: Router, private http: HttpClient) {}

        ngOnInit() {
        	this.getCategoryList();
        }

        
        getCategoryList() {
        	let url = `${this.API_ENDPOINT}/category-list?s=a&f=f`;
	    	this.http.get(url).subscribe((data: any)=> {
	    		this.categoryList = data.result;
	    	}, (err) => {
	    		alert(err.message);
	    	});       	
        }
}

