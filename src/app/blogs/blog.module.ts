// import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule} from '@angular/common/http';
// import { BlogComponent } from './blog.component';


// @NgModule({
//     imports: [
//         CommonModule,
//         FormsModule,
//         HttpClientModule
//     ],
//     declarations: [BlogComponent]
// })
// export class BlogModule {
// }


import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';


@NgModule({
    imports: [
        CommonModule,
        BlogRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [BlogComponent]
})
export class BlogModule {
}
