import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { Global } from '../shared';


@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

        private API_ENDPOINT: string = `${Global.API_ENDPOINT}/blog-management`;
        private categoryList;

        constructor(public router: Router, private http: HttpClient) {}

        ngOnInit() {

        }

}

