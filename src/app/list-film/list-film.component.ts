/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-inferrable-types */
import { Component, inject, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FilmService } from '../services/film.service';
import { FilmComponent } from '../film/film.component';

@Component({
  selector: 'app-list-film',
  standalone: true,
  imports: [NgFor, NgIf, FilmComponent],
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {
  private filmService = inject(FilmService);
  films: any[] = [];

  ngOnInit() {
    this.filmService.getFilms().subscribe(data => this.films = data['results']);
  }
}
