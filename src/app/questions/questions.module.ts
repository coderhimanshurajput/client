import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';
import { CKEditorModule } from 'ng2-ckeditor';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { QuestionsListComponent } from './question-list/question-list.component';
import { ViewQuestionsComponent } from './view-question/view-question.component';
import { PageHeaderModule, PageFooterModule } from '../shared';
import { TokenInterceptor, AuthService } from '../shared';
import { FilterPipe } from './view-question/filter/filter.pipe';


@NgModule({
    imports: [
        CommonModule,
        QuestionsRoutingModule,
        FormsModule,
        HttpClientModule,
        PageHeaderModule,
        PageFooterModule,
        CKEditorModule

    ],
    declarations: [
        QuestionsComponent, 
        QuestionsListComponent,
        ViewQuestionsComponent,
        FilterPipe
    ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
    },
    AuthService
    ],    
})
export class QuestionsModule {
}