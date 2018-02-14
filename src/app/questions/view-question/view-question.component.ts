import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Global } from '../../shared';

@Component({
    selector: 'app-view-question',
    templateUrl: './view-question.component.html',
    styleUrls: ['./view-question.component.scss']
})

export class ViewQuestionsComponent implements OnInit {

        private API_ENDPOINT: string = `${Global.API_ENDPOINT}/question`;
        private id: string;
        private slug: string;
        public question = {};

        constructor(
            private http: HttpClient,
            private activatedRoute: ActivatedRoute) { }

        ngOnInit() {
            this.activatedRoute.params.subscribe((params: Params) => {
                this.id = params['id'];
                this.slug = params['slug'];               
            });            
            this.getAnswersByQuestionId(this.id, this.slug);
        }

        getAnswersByQuestionId(id, slug) {
            let url = `${this.API_ENDPOINT}/get-answers/${id}/${slug}`;
            this.http.get(url).subscribe((data: any)=> {
                this.question = data.result;
            }, (err) => {
                alert(err.message);
            });
        }

        updateNewAnswer(newAnswer) {

            if (newAnswer) {

            let url = `${this.API_ENDPOINT}/add-new-answers/${this.question['_id']}/${this.question['slug']}`;
            this.http.post(url, {ans:newAnswer}).subscribe((data: any)=> {
                this.question = data.result;
            }, (err) => {
                alert(err.message);
            });
            }else{
                alert('Answer missing');
            }
        }


}