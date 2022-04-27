import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent implements OnInit {
  list = require('../../assets/movies.json').list;
  salasDisponiveis = require('../../assets/salasCinema.json').cinemaList;
  movieId = 0;
  movieInfo = {
    id: 0,
    title: '',
    image: '',
    genres: [],
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.salasDisponiveis = require('../../assets/salasCinema.json').cinemaList;

    this.route.queryParams.subscribe((params) => {
      this.movieId = params.movieId;
    });

    this.list.forEach((element: any) => {
      if (element.id === this.movieId) {
        this.movieInfo = element;
      }
    });

    this.salasDisponiveis.forEach((element: any) => {
      element.rooms.forEach((room: any) => {
        room.types.forEach((type: any) => {
          room.typesFormatted = type.join(' / ');
        });
      });
    });
  }
}
