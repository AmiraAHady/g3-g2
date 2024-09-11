import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [NgClass],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  // activatedRoute
  movie: any = {};
  // late
  id!: number;
  constructor(
    private movieServ: MoviesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieServ.getMovieById(this.id).subscribe((movieData) => {
      this.movie = movieData;
      console.log(movieData);
      
    });
  }
}
