import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'blogs',
        loadChildren: './blogs/blog.module#BlogModule'
    },
    {
        path: 'deposit',
        loadChildren: './account-detail/account-detail.module#AccountDetailModule'
    },
    {
        path: 'questions',
        loadChildren: './questions/questions.module#QuestionsModule'
    },
    {
        path: 'entry',
        loadChildren: './login-register/login-register.module#LoginRegisterModule'
    },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
