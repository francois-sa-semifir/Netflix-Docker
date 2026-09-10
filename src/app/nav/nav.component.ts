import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./nav.component.css']
})
export class NavComponent { }
