import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Observable, ReplaySubject} from 'rxjs';
import {BorderStone, Card, GameState, GameStatus, PlayerNumber} from './game/game-state';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private readonly REFRESH_DELAY = 1000;
  private readonly baseUrl = 'api/';

  playerUUID = '';

  gameState$: ReplaySubject<GameState> = new ReplaySubject<GameState>(1);
  myPlayerNumber: PlayerNumber;
  currentPlayer: PlayerNumber;
  gameStatus: GameStatus;
  playerNames: { 'ONE': string, 'TWO'?: string };

  winner: string;

  constructor(private http: HttpClient) {
  }

  register(name: string): Observable<string> {
    return this.http.post<{ playerUUID: string }>(this.baseUrl + 'game/register', {playerName: name})
      .pipe(map(body => body.playerUUID));
  }

  setActiveGame(playerUUID: string) {
    this.setPlayerUUIDAndStartInterval(playerUUID);
  }

  setPlayerUUIDAndStartInterval(playerUUID: string) {
    if (this.playerUUID === '') {
      setInterval(() => this.updateGameState(), this.REFRESH_DELAY);
      this.initializeLookupVariables();
    }
    this.playerUUID = playerUUID;
    this.updateGameState();
  }

  private initializeLookupVariables() {
    this.gameState$.subscribe(gameState => {
      this.myPlayerNumber = gameState.yourPlayerNumber;
      this.currentPlayer = gameState.currentPlayer;
      this.gameStatus = gameState.gameStatus;
      this.playerNames = gameState.playerNames;
      this.winner = gameState.winner;
    });
  }

  updateGameState() {
    console.log(this.http);
    this.http.get<GameState>(this.baseUrl + `game/${this.playerUUID}`).subscribe(value => this.gameState$.next(value));
  }

  getState(): Observable<GameState> {
    return this.gameState$;
  }

  getMyPlayerNumber(): PlayerNumber {
    return this.myPlayerNumber;
  }

  playCard(selectedCard: Card, borderStone: BorderStone) {
    return this.http.post(this.baseUrl + `game/${this.playerUUID}/playCard`, {
      card: selectedCard,
      borderStone: borderStone.stoneNumber
    }).pipe(tap(() => this.updateGameState()));
  }

  getBorderStones() {
    return this.gameState$.pipe(map(gameState => gameState.borderStones));
  }

  getOpponentPlayerNumber(): PlayerNumber {
    if (this.myPlayerNumber === PlayerNumber.Two) {
      return PlayerNumber.One;
    } else {
      return PlayerNumber.Two;
    }
  }

  isMyTurn() {
    return this.currentPlayer === this.myPlayerNumber;
  }

  getGameStatus() {
    return this.gameStatus;
  }

  getWinner() {
    return this.winner;
  }

  getWinnerName() {
    return this.playerNames[this.winner];
  }

  getCurrentPlayerName() {
    return this.playerNames[this.currentPlayer];
  }

  getOpponentName() {
    return this.playerNames[this.getOpponentPlayerNumber()];
  }

  getMyName() {
    return this.playerNames[this.myPlayerNumber];
  }
}
