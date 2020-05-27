import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BorderStone, Card } from '../../game-state';
import { GameService } from '../../../game.service';

@Component({
  selector: 'app-borderstone',
  templateUrl: './borderstone.component.html',
  styleUrls: ['./borderstone.component.scss']
})
export class BorderstoneComponent implements OnInit {

  @Input()
  borderStone: BorderStone;

  @Input()
  clickable: boolean;

  @Output()
  selected: EventEmitter<BorderStone> = new EventEmitter<BorderStone>();

  opponentCards: Array<Card>;
  myCards: Array<Card>;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.myCards = this.borderStone.playedCards[this.gameService.getMyPlayerNumber()];
    this.opponentCards = this.borderStone.playedCards[this.gameService.getOpponentPlayerNumber()];
  }

  selectBorderStone() {
    this.selected.emit(this.borderStone);
  }

  getStoneClass() {
    if (this.borderStone.winner === null || this.borderStone.winner === undefined) {
      return 'pos-5';
    } else if (this.borderStone.winner === this.gameService.getMyPlayerNumber()) {
      return 'pos-1';
    } else {
      return 'pos-9';
    }
  }
}
