import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './components/header/header.component';
import {SideMenuComponent} from './components/side-menu/side-menu.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {EntryPageComponent} from './components/entry-page/entry-page.component';
import {UsersComponent} from './components/users/users.component';
import {TweetsComponent} from './components/tweets/tweets.component';
import {PlacesComponent} from './components/places/places.component';
import {CommonModule, DatePipe} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgbdModalContentComponent } from './components/ngbd-modal-content/ngbd-modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    EntryPageComponent,
    UsersComponent,
    TweetsComponent,
    PlacesComponent,
    NgbdModalContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    NgxChartsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
