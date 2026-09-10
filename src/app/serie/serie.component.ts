import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-serie',
  imports: [RouterLink],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.css'
})
export class SerieComponent {
  serie = input<any>();
}
