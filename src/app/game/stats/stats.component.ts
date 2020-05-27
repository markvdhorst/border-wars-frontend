import { Component, OnInit } from '@angular/core';
import { GameStatus } from '../game-state';
import { GameService } from '../../game.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  getTurnText() {
    if (this.gameService.isMyTurn()) {
      return 'Your turn';
    } else {
      return `${this.gameService.getCurrentPlayerName()}'s turn`;
    }
  }

  isPlaying() {
    return this.gameService.getGameStatus() === GameStatus.Playing;
  }

  isFinished() {
    return this.gameService.getGameStatus() === GameStatus.Finished;
  }

  isWaitingForSecondPlayer() {
    return this.gameService.getGameStatus() === GameStatus.WaitingForSecondPlayer;
  }

  getMyName() {
    return this.gameService.getMyName();
  }

  getOpponentName() {
    return this.gameService.getOpponentName();
  }

  getWinnerName() {
    return this.gameService.getWinnerName();
  }
}
