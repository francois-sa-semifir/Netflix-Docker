/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-inferrable-types */
import { Component, inject, OnInit } from '@angular/core';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-detail-film',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {
  private filmService = inject(FilmService);
  private route = inject(ActivatedRoute);

  film: any = {};
  id: number = 0;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.filmService.getFilmById(this.id).subscribe(data => {
        this.film = data;
      });
    });
  }
}
