import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from '../../game.service';
import { BorderStone } from '../game-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-borderstones',
  templateUrl: './borderstones.component.html',
  styleUrls: ['./borderstones.component.scss']
})
export class BorderstonesComponent implements OnInit {

  @Input()
  clickable: boolean;

  @Output()
  borderStoneSelected: EventEmitter<BorderStone> = new EventEmitter<BorderStone>();
  borderStones$: Observable<Array<BorderStone>>;


  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.borderStones$ = this.gameService.getBorderStones();
  }

  onBorderStoneSelect($event: BorderStone) {
    this.borderStoneSelected.emit($event);
  }
}
