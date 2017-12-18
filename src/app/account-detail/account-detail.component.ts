import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Global } from '../shared';


@Component({
    selector: 'app-account-detail',
    templateUrl: './account-detail.component.html',
    styleUrls: ['./account-detail.scss']
})


export class AccountDetailComponent implements OnInit {

        constructor(public router: Router, private http: HttpClient) { }

        public name: string =  "Jitendra Kumar";
        public bankName: string =  "Axis bank";
        public accountNumber: string = "915010028640077";
        public ifsc: string = "UTIB0000004";
        public accountType: string = "Saving";

        ngOnInit() {
        }
}
