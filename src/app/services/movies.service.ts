import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey:string='c6c257a0fa45c9003ee9b1f546013fa6'

  constructor(private http:HttpClient) {}

  getAllMovies():Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}`)
  }

  getMovieById(movieId: number):Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`)
  }
}
