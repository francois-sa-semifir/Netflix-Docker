import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-detail-film',
  imports: [RouterLink],
  templateUrl: './detail-film.component.html',
  styleUrl: './detail-film.component.css'
})
export class DetailFilmComponent {
  private filmService = inject(FilmService);
  private route = inject(ActivatedRoute);

  // Récupération de l'ID depuis le snapshot de la route
  id = Number(this.route.snapshot.params['id']);

  // resource() charge automatiquement le film par son ID
  filmResource = this.filmService.getFilmById(this.id);
}
