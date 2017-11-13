import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ReadBlogComponent } from './read-blog/read-blog.component';
import { PageHeaderModule, PageFooterModule} from '../shared';



@NgModule({
    imports: [
    	RouterModule,
        CommonModule,
        BlogRoutingModule,
        FormsModule,
        HttpClientModule,
        PageHeaderModule,
        PageFooterModule
        

    ],
    declarations: [
    	BlogComponent, 
    	CategoryListComponent,
    	BlogListComponent,
        ReadBlogComponent
    	]
})
export class BlogModule {
}
