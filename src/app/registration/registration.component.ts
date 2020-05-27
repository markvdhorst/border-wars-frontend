import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  name: string;
  playerUUID: string;

  constructor(private gameService: GameService,
              private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.gameService.register(this.name).subscribe(playerUUID => this.router.navigate([`/game/${playerUUID}`]));
  }

  rejoinGame() {
    this.router.navigate([`/game/${this.playerUUID}`]);
  }

}
