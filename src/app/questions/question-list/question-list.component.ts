import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Global, AuthService } from '../../shared';

@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.scss']
})

export class QuestionsListComponent implements OnInit {

        question = <any>{};
        private API_ENDPOINT: string = `${Global.API_ENDPOINT}/question`;
        public questionList: boolean = true;
        public questions: any;
        constructor(
            public router: Router, 
            private http: HttpClient,
            private authService: AuthService) { }

        ngOnInit() {
            let userInfo = this.authService.getUserInfo()
            if (userInfo) {
               this.question.author = userInfo.first_name ? userInfo.first_name : '';
            }
        	this.getQuestions();
        }
        userInfo() {
            let info = this.authService.getUserInfo();
            return info;
        }
        getQuestions() {
        	let url = `${this.API_ENDPOINT}/question-list`;
        	this.http.get(url).subscribe((data: any)=> {
	    		this.questions = data.result;
	    	}, (err) => {
	    		alert(err.message);
	    	})
        }
        listOrAsk() {
        	this.questionList = this.questionList ? false : true;
        }

        questionSubmit() {
        	let url = `${this.API_ENDPOINT}/add-new`;
        	this.http.post(url, this.question).subscribe((data: any)=> {
	    		this.questionList = true;
                alert(data.message);
	    	}, (err) => {
                if (err.status === 400) {
                    alert(err.error.message);
                }else{
	    		    alert(err.message);
                }
	    	})

        }
}