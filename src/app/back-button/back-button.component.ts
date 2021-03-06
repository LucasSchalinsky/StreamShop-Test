import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {
  @Input() isHome: boolean;

  constructor(private _location: Location) {}

  ngOnInit(): void {
  }

  onClickNavigateBack() {
    this._location.back()
  }
}
