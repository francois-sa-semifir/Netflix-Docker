import { Component, inject } from '@angular/core';
import { SerieService } from '../services/serie.service';
import { SerieComponent } from '../serie/serie.component';

@Component({
  selector: 'app-list-serie',
  imports: [SerieComponent],
  templateUrl: './list-serie.component.html',
  styleUrl: './list-serie.component.css'
})
export class ListSerieComponent {
  private serieService = inject(SerieService);

  // resource() interroge l'API automatiquement au chargement du composant
  seriesResource = this.serieService.getSeries();
}
