import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ReadBlogComponent } from './read-blog/read-blog.component';

const routes: Routes = [
    { 
    	path: '', component: BlogComponent, children: [
        {
            path: 'categories', 
            component: CategoryListComponent 
        },
        {
            path: ':id/:name', 
            component: BlogListComponent 
        },
        {
    		path: 'pro/:id/:name', 
    		component: ReadBlogComponent 
    	}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BlogRoutingModule { }
