import {Component, OnChanges} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  startWidth: number = 0;
  rating: number = 4;

  constructor() {
    this.startWidth = this.rating * 75 / 5;
  }

  ngOnChanges(): void {
    this.startWidth = this.rating * 75 / 5;
  }
}
