import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  startWidth: number = 0;
  @Input() rating: number = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.startWidth = this.rating * 75 / 5;
  }

  ngOnChanges(): void {
    this.startWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
  }
}
