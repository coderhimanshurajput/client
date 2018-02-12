import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Global } from '../shared';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {

		public question = {};
		private API_ENDPOINT: string = `${Global.API_ENDPOINT}/question`;
		public questionList: boolean = true;
		public questions: any;
        constructor(public router: Router, private http: HttpClient) { }

        ngOnInit() {
        	this.getQuestions();
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
        	console.log(this.question);
        	let url = `${this.API_ENDPOINT}/add-new`;
        	this.http.post(url, this.question).subscribe((data: any)=> {
	    		console.log(data)
	    	}, (err) => {
	    		alert(err.message);
	    	})

        }
}