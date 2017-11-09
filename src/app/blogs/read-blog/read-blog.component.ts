import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Global } from '../../shared';


@Component({
    selector: 'app-read-blog',
    templateUrl: './read-blog.component.html',
    styleUrls: ['./read-blog.component.scss']
})

export class ReadBlogComponent implements OnInit {

        private API_ENDPOINT: string = `${Global.API_ENDPOINT}/blog-management`;
        public blogDetail;
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
        	this.readBlog(this.id, this.name);
        }

        
        readBlog(id, name) {
        	let url = `${this.API_ENDPOINT}/blog-detail/${id}`;
            this.blogDetail = {}
	    	this.http.get(url).subscribe((data: any)=> {
	    		this.blogDetail = data.result;
	    	}, (err) => {
	    		alert(err.message);
	    	});       	
        }
}

