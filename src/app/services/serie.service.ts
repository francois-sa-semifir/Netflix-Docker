import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resource } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private http = inject(HttpClient);

  getSeries() {
    return resource({
      loader: () => fetch("https://api.themoviedb.org/3/discover/tv?api_key=87dfa1c669eea853da609d4968d294be&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false")
        .then(res => res.json())
        .then(data => data.results)
    });
  }

  getSerieById(id: number) {
    return resource({
      loader: () => fetch("https://api.themoviedb.org/3/tv/" + id + "?api_key=87dfa1c669eea853da609d4968d294be&language=fr-FR")
        .then(res => res.json())
    });
  }
}
