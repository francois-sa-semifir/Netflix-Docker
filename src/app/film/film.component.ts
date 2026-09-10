/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-inferrable-types */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './film.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./film.component.css']
})
export class FilmComponent {
  @Input() film: any;
}
