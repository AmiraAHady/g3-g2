import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';

@Component({
  // component directive
  selector: 'app-movies',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  movieList: any[] = [];
  constructor(private movServ: MoviesService) {}

  ngOnInit() {
    this.movieList = this.movServ.getAllMovies();
  }
}
