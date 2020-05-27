import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegistrationComponent} from './registration/registration.component';
import {GameComponent} from './game/game.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CardComponent } from './game/card/card.component';
import { BorderstoneComponent } from './game/borderstones/borderstone/borderstone.component';
import { MyHandComponent } from './game/my-hand/my-hand.component';
import { BorderstonesComponent } from './game/borderstones/borderstones.component';
import { StatsComponent } from './game/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    GameComponent,
    CardComponent,
    BorderstoneComponent,
    MyHandComponent,
    BorderstonesComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
