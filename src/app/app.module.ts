import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//Dashboard
import { DashboardComponent } from './dashboard/dashboard.component';
//Heroes
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';
//Pipe
import { FilterArrayPipe } from './pipes/filterArray.pipe';
import { HappyComponent } from './happy/happy.component';
//guard

// providers
import { ApiModule } from './providers/api.module';
import { ApiPostComponent } from './api-post/api-post.component';
import { ParentComponent } from './parent/parent.component';
import { EnfantComponent } from './parent/enfant/enfant.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroComponent,
    FilterArrayPipe,
    LoginComponent,
    HappyComponent,
    ApiPostComponent,
    ParentComponent,
    EnfantComponent
  ],
  imports: [
    ApiModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
