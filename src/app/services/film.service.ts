import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resource } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private http = inject(HttpClient);

  getFilms() {
    return resource({
      loader: () => fetch("https://api.themoviedb.org/3/movie/top_rated?sort_by=popularity.desc&language=fr-FR&api_key=87dfa1c669eea853da609d4968d294be")
        .then(res => res.json())
        .then(data => data.results)
    });
  }

  getFilmById(id: number) {
    return resource({
      loader: () => fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=87dfa1c669eea853da609d4968d294be&language=fr-FR")
        .then(res => res.json())
    });
  }
}
