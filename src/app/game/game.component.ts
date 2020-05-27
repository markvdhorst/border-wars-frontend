import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { ActivatedRoute } from '@angular/router';
import { BorderStone, Card, GameStatus } from './game-state';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  private selectedCard: Card;

  constructor(private gameService: GameService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => this.gameService.setActiveGame(params.get('playerUUID')));
  }

  onCardSelect(card: Card) {
    this.selectedCard = card;
  }

  canPlayCard(): boolean {
    return this.isCardSelected() && this.gameService.isMyTurn() && this.gameService.getGameStatus() === GameStatus.Playing;
  }

  private isCardSelected(): boolean {
    return this.selectedCard !== null && this.selectedCard !== undefined;
  }

  onBorderStoneSelect(borderStone: BorderStone) {
    this.gameService.playCard(this.selectedCard, borderStone).subscribe(() => this.selectedCard = null);
  }


  isGamePlayingOrFinished() {
    const gameStatus = this.gameService.getGameStatus();
    return gameStatus === GameStatus.Playing || gameStatus === GameStatus.Finished;
  }
}
