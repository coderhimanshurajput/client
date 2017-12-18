import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AccountDetailRoutingModule } from './account-detail-routing.module';
import { AccountDetailComponent } from './account-detail.component';
import { PageHeaderModule, PageFooterModule } from '../shared';


@NgModule({
    imports: [
        CommonModule,
        AccountDetailRoutingModule,
        FormsModule,
        HttpClientModule,
        PageHeaderModule,
        PageFooterModule
    ],
    declarations: [AccountDetailComponent]
})
export class AccountDetailModule {
}
