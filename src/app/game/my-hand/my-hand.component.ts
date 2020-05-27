import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../game-state';
import { Observable } from 'rxjs';
import { GameService } from '../../game.service';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-my-hand',
  templateUrl: './my-hand.component.html',
  styleUrls: ['./my-hand.component.scss']
})
export class MyHandComponent implements OnInit {

  myHand$: Observable<Array<Card>>;

  @Output()
  cardSelect: EventEmitter<Card> = new EventEmitter<Card>();

  selectedCard: Card;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.myHand$ = this.gameService.getState().pipe(map(gameState => gameState.myHand)).pipe(distinctUntilChanged(this.compare));
  }

  private compare(x: Array<Card>, y: Array<Card>) {
    return JSON.stringify(x) === JSON.stringify(y);
  }

  selectCard(card: Card) {
    this.selectedCard = card;
    this.cardSelect.emit(card);
  }

  isSelectedCard(card: Card): boolean {
    return JSON.stringify(card) === JSON.stringify(this.selectedCard);
  }
}
