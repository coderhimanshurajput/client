import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Global, AuthService } from '../../shared';

@Component({
    selector: 'app-view-question',
    templateUrl: './view-question.component.html',
    styleUrls: ['./view-question.component.scss']
})

export class ViewQuestionsComponent implements OnInit {

        private API_ENDPOINT: string = `${Global.API_ENDPOINT}/question`;
        private id: string;
        private slug: string;
        public question;
        newAnswer:string;
        titleEdit:boolean = false;
        editMyAns:boolean = false;

        constructor(
            private http: HttpClient,
            private activatedRoute: ActivatedRoute,
            private authService: AuthService) { }

        ngOnInit() {
            this.activatedRoute.params.subscribe((params: Params) => {
                this.id = params['id'];
                this.slug = params['slug'];               
            });            
            this.getAnswersByQuestionId(this.id, this.slug);
        }

        getAnswersByQuestionId(id, slug) {
            this.question = {};
            let url = `${this.API_ENDPOINT}/get-answers/${id}/${slug}`;
            this.http.get(url).subscribe((data: any)=> {
                this.question = data.result;
            }, (err) => {
                alert(err.message);
            });
        }

        updateNewAnswer(newAnswer) {

            if (!this.authService.getToken()) {
                return alert("Login required to perform this action");
            }

            if (newAnswer && newAnswer.length>0) {
                let url = `${this.API_ENDPOINT}/add-new-answers/${this.question['_id']}/${this.question['slug']}`;
                this.http.post(url, {ans:newAnswer}).subscribe((data: any)=> {
                    this.question = data.result;
                    this.getAnswersByQuestionId(this.id, this.slug);
                    this.newAnswer = '';
                    alert(data.message);
                }, (err) => {
                    if (err.status === 401 || err.status === 400) {
                        alert(err.error.message);
                    }else{
                        alert(err.message);                        
                    }
                });
            }else{
                alert('Answer missing');
            }
        }

        editTitle() {
            this.titleEdit = this.titleEdit ? false : true;
        }

        updateTitle() {

            if (this.question.title) {
                let url = `${this.API_ENDPOINT}/update-title`;
                let obj = {
                    title: this.question.title,
                    author_id: this.question.author_id,
                    _id: this.question._id
                }
                this.http.put(url, obj).subscribe((data: any)=> {
                         this.changeTitleField();
                }, (err) => {
                    alert(err.message);
                });
                }else{
                    alert('Answer missing');
                }                
        }

        updateAnswer() {
            if (this.newAnswer) {
                let url = `${this.API_ENDPOINT}/update-answer`;
                let obj = {
                    ans: this.newAnswer,
                    _id: this.question._id,
                    ansId: this.question.ansId,
                    ans_by: this.question.ans_by
                };
                this.http.put(url, obj).subscribe((data: any)=> {
                      this.getAnswersByQuestionId(this.id, this.slug);                         
                      this.editMyAns = false;
                      this.newAnswer = '';
                }, (err) => {
                    alert(err.message);
                });
                }else{
                    alert('Answer missing');
                } 

        }
        changeTitleField() {
            this.titleEdit = this.titleEdit ? false : true; 
        }

        editAnswer(answer, ansId, ans_by) {
            this.editMyAns = true;
            this.newAnswer = answer;
            this.question.ansId = ansId;
            this.question.ans_by = ans_by;
        }        

        cancelUpdateAns() {
            this.editMyAns = false;
        }

        deleteAnswer(quesId, ansId, readerId, index) {

            if (confirm('Are you sure to delete')) {
                let url = `${this.API_ENDPOINT}/delete/${ansId}/${readerId}/${quesId}`;            
                this.http.delete(url).subscribe((data: any)=> {
                    this.question.answer.splice(index, 1)
                     alert('Deleted successfully');
                }, (err) => {
                    alert(err.message);
                });
            }

        }
}