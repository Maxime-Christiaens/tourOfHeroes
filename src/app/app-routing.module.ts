import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Component
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';
//Guards
import { LoginGuard } from './guards/login/login.guard';


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
    path: '**',
    component: DashboardComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
