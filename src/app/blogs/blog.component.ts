import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Global } from '../shared';


@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

        constructor(public router: Router, private http: HttpClient) { }
        ngOnInit() {
        }
}

