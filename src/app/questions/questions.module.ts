import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CKEditorModule } from 'ng2-ckeditor';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { PageHeaderModule, PageFooterModule } from '../shared';



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
    declarations: [QuestionsComponent]
})
export class QuestionsModule {
}