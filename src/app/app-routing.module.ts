import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntryPageComponent} from "./components/entry-page/entry-page.component";
import {TweetsComponent} from "./components/tweets/tweets.component";
import {UsersComponent} from "./components/users/users.component";
import {PlacesComponent} from "./components/places/places.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: EntryPageComponent},
  {path: 'tweets', component: TweetsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'places', component: PlacesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
