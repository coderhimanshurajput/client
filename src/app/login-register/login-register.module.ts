import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CKEditorModule } from 'ng2-ckeditor';
import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { LoginRegisterComponent } from './login-register.component';
import { PageHeaderModule, PageFooterModule } from '../shared';



@NgModule({
    imports: [
        CommonModule,
        LoginRegisterRoutingModule,
        FormsModule,
        HttpClientModule,
        PageHeaderModule,
        PageFooterModule,
        CKEditorModule
    ],
    declarations: [LoginRegisterComponent]
})
export class LoginRegisterModule {
}