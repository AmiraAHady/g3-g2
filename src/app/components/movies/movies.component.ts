import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  // component directive
  selector: 'app-movies',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  searchMovie:string='data'
  movieDetail:any = {
    title: 'Spider-Man Unlimited ',
    image:
      'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/fvmC5QzQwkI5ZNJauE4xpF24PTB.jpg',
    description:
      'Spider-Man travels to Counter-Earth to rescue a Terran shuttle crew trapped there and discovers a tyrannical & warped version of his world.',
    isAvaliable:false  
  };

  watchMovie(title:string){
    console.log(`user want to watch ${title}`);
    
  }
}
