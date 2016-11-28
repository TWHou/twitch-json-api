import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TwitchComponent } from './twitch.component';
import { TwitchService} from './twitch.service';

@NgModule({
  declarations: [
    AppComponent,
    TwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TwitchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
