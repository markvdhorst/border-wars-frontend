import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegistrationComponent} from "./registration/registration.component";
import {GameComponent} from "./game/game.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'registration'},
  {path: 'registration', component: RegistrationComponent},
  {path: 'game/:playerUUID', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
