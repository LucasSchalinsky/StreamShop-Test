import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  list:any;

  ngOnInit(): void {
    this.list = require('../../assets/movies.json').list;

    this.list.forEach((element: any) => {
      element.genresFormatted = element.genres.join(' - ');
    });

  }

  onClick(item: any) {
    this.router.navigate(['/movie'], { queryParams: { movieId: item.id } });
  }

  constructor(private router: Router) {}
}
