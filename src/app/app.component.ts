import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { FooterComponent } from './components/footer/footer.component';
//  Decorator
@Component({
  // component directive
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,HomeComponent,MoviesComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


// component
export class AppComponent {
  title:string = 'day1';
}

