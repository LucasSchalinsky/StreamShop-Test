import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isHome: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.isHome);
  }

  onClick(){
    this.isHome = true;
    this.router.navigate(['/home']);
  }
}
