import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component'
import { AdminmoviesComponent } from './adminmovies/adminmovies.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import { MoviesComponent } from './movies/movies.component';
import { SeasonComponent } from './season/season.component';
import { EpisodeComponent } from './episode/episode.component';
import { CanActivate, Router } from '@angular/router';
import { AuthService }   from './auth.service';
export const route: Routes = [
  { path:  '', component:HomeComponent},
  { path: 'userData', component:UserPageComponent},
  { path: 'admin/:userName', component:AdminmoviesComponent, canActivate: [AuthService], data: [{user_type: '1'}]},
  { path: 'user' , component:AdduserComponent},
  { path: 'login' , component:LoginComponent},
  { path: 'movies' , component:LoginComponent},
  { path: 'TV-shows' , component:LoginComponent},
  { path: 'series' , component:UserComponent},
  { path: 'episode/:name' , component:EpisodeComponent},
  { path: 'season/:name' , component:SeasonComponent},
  { path: 'search' , component:SearchComponent}
  ]
  