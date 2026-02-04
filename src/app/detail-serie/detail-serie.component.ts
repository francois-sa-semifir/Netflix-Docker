/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-inferrable-types */
import { Component, inject, OnInit } from '@angular/core';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { SerieService } from '../services/serie.service';

@Component({
  selector: 'app-detail-serie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail-serie.component.html',
  styleUrls: ['./detail-serie.component.css']
})
export class DetailSerieComponent implements OnInit {
  private serieService = inject(SerieService);
  private route = inject(ActivatedRoute);

  serie: any = {};
  id: number = 0;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.serieService.getSerieById(this.id).subscribe(data => {
        this.serie = data;
      });
    });
  }
}
