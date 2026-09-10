import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SerieService } from '../services/serie.service';

@Component({
  selector: 'app-detail-serie',
  imports: [RouterLink],
  templateUrl: './detail-serie.component.html',
  styleUrl: './detail-serie.component.css'
})
export class DetailSerieComponent {
  private serieService = inject(SerieService);
  private route = inject(ActivatedRoute);

  // Récupération de l'ID depuis le snapshot de la route
  id = Number(this.route.snapshot.params['id']);

  // resource() charge automatiquement la série par son ID
  serieResource = this.serieService.getSerieById(this.id);
}
