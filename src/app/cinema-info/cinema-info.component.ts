import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cinema-info',
  templateUrl: './cinema-info.component.html',
  styleUrls: ['./cinema-info.component.scss']
})
export class CinemaInfoComponent implements OnInit {

  @Input() name: string;
  @Input() address: string;
  @Input() addressComplement: string;
  @Input() rooms: any;

  constructor(private router: Router) { }

  onClick(){
    this.router.navigate(['/register']);
  }

  ngOnInit(): void {
    
  }

}
