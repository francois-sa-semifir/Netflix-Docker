import { Component, inject } from '@angular/core';
import { FilmService } from '../services/film.service';
import { FilmComponent } from '../film/film.component';

@Component({
  selector: 'app-list-film',
  imports: [FilmComponent],
  templateUrl: './list-film.component.html',
  styleUrl: './list-film.component.css'
})
export class ListFilmComponent {
  private filmService = inject(FilmService);

  // resource() interroge l'API automatiquement au chargement du composant
  filmsResource = this.filmService.getFilms();
}
