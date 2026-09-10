/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-inferrable-types */
import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { SerieService } from '../services/serie.service';
import { SerieComponent } from '../serie/serie.component';

@Component({
  selector: 'app-list-serie',
  standalone: true,
  imports: [SerieComponent],
  templateUrl: './list-serie.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./list-serie.component.css']
})
export class ListSerieComponent implements OnInit {
  private serieService = inject(SerieService);
  series: any[] = [];

  ngOnInit() {
    this.serieService.getSeries().subscribe(data => this.series = data['results']);
  }
}
