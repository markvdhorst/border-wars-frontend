import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../game-state';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  card: Card;

  @Output()
  select: EventEmitter<Card> = new EventEmitter<Card>();

  @Input()
  selected: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  selectCard() {
    this.select.emit(this.card);
  }

  getClass() {
    let classList = [];
    classList.push('card-' + this.card.color.toLowerCase());
    if(this.selected) {
      classList.push('card-selected');
    }
    return classList.join(' ');
  }

}
