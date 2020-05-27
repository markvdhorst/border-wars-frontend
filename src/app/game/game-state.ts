export class GameState {
  currentTurn: number;
  currentPlayer: PlayerNumber;
  gameStatus: GameStatus;
  playerNames: {'ONE': string, 'TWO'?: string};
  yourPlayerNumber: PlayerNumber;
  myHand: Array<Card>;
  borderStones: Array<BorderStone>;
  winner: PlayerNumber;
}

export class BorderStone {
  stoneNumber: number;
  winner: PlayerNumber;
  playedCards: object;
}

export class Card {
  color: string;
  number: number;
}

export enum GameStatus {
  WaitingForSecondPlayer = 'WAITING_FOR_SECOND_PLAYER',
  Playing = 'PLAYING',
  Finished = 'FINISHED'
}

export enum PlayerNumber {
  One = 'ONE',
  Two = 'TWO'
}
