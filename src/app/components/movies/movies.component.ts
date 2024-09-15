import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';
import { RouterLink } from '@angular/router';

@Component({
  // component directive
  selector: 'app-movies',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  movieList: any[] = [];
  constructor(private movServ: MoviesService) {}

  ngOnInit() {
    this.movServ.getAllMovies().subscribe((moviesData)=>{
       this.movieList=moviesData.results
      //  console.log(moviesData.results);
       
       
    })
  }
}
