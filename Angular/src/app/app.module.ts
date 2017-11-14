import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { route } from './app.route';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminmoviesComponent } from './adminmovies/adminmovies.component';
import { HttpModule } from '@angular/http';
import { SeriesService } from './app.service';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { UserComponent } from './user/user.component';
import { UserPageComponent } from './user-page/user-page.component';

import { MoviesComponent } from './movies/movies.component';
import { SeasonComponent } from './season/season.component';
import { EpisodeComponent } from './episode/episode.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminmoviesComponent,
    AdduserComponent,
    LoginComponent,
    UserPageComponent,
    UserComponent,
    
    MoviesComponent,
    SeasonComponent,
    EpisodeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [SeriesService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
