import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { TvListComponent } from './components/tv-list/tv-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tv', component: TvListComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'moviedetails/:id', component: MovieDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];
