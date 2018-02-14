import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions.component';
import { QuestionsListComponent } from './question-list/question-list.component';
import { ViewQuestionsComponent } from './view-question/view-question.component';

const routes: Routes = [
    { 
    	path: '', component: QuestionsComponent, children: [
        {
            path: 'list', 
            component: QuestionsListComponent 
        },
        {
            path: ':id/:slug', 
            component: ViewQuestionsComponent 
        }
    ] }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
