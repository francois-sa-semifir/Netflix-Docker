/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-inferrable-types */
import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { FilmService } from '../services/film.service';
import { FilmComponent } from '../film/film.component';

@Component({
  selector: 'app-list-film',
  standalone: true,
  imports: [FilmComponent],
  templateUrl: './list-film.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {
  private filmService = inject(FilmService);
  films: any[] = [];

  ngOnInit() {
    this.filmService.getFilms().subscribe(data => this.films = data['results']);
  }
}
