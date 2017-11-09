import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Global } from '../../shared';


@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.scss']
})

export class BlogListComponent implements OnInit {

        private API_ENDPOINT: string = `${Global.API_ENDPOINT}/blog-management`;
        public blogs;
        private id: string;
        private name: string;

        constructor(
            public router: Router,
            private http: HttpClient,
            private activatedRoute: ActivatedRoute) {}

        ngOnInit() {

            this.activatedRoute.params.subscribe((params: Params) => {
                this.id = params['id'];
                this.name = params['name'];               
            });
        	this.getBlogList(this.id, this.name);
        }   

        getBlogList(id, name) {
        	let url = `${this.API_ENDPOINT}/blog/${id}/${name}`;
	    	this.http.get(url).subscribe((data: any)=> {
	    		this.blogs = data.result;
	    	}, (err) => {
	    		alert(err.message);
	    	});       	
        }
}

