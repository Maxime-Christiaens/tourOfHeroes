import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Component
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';
import { HappyComponent } from './happy/happy.component';
import { ApiPostComponent } from './api-post/api-post.component';
import { ParentComponent } from './parent/parent.component';
//Guards
import { LoginGuard } from './guards/login/login.guard';

import { TodoResolver } from './app.resolver';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent,
    canActivate : [LoginGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate : [LoginGuard]
  },
  {
    path: 'hero/:id',
    component: HeroComponent,
    canActivate : [LoginGuard]
  },
  {
    path: 'api',
    component: HappyComponent,
    canActivate : [LoginGuard],
    resolve: {
      todos: TodoResolver
    }
  },
  {
    path: 'api/:id',
    component: HappyComponent,
    canActivate : [LoginGuard],
    resolve: {
      todo: TodoResolver
    },
  },
  {
    path: 'api-post',
    component: ApiPostComponent,
    canActivate : [LoginGuard]
  },
  {
    path: 'parent',
    canActivate : [LoginGuard],
    component: ParentComponent
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [TodoResolver]
})
export class AppRoutingModule { }
