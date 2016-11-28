import { Component, Input, OnInit } from '@angular/core';
import { TwitchService } from './twitch.service';

@Component({
  selector: 'twitch',
  templateUrl: 'twitch.component.html',
  styleUrls: ['./twitch.component.css']
})
export class TwitchComponent implements OnInit {
  
  @Input() channel:string;
  stream = {
    name: "",
    logo: "",
    game: "",
    status: "",
    url: ""
  };
  
  constructor(private _twitchService: TwitchService) { }

  ngOnInit() {
    this._twitchService.getChannel(this.channel)
      .subscribe(data => {
        if (data.stream === null) {
          // offline
          this.stream.name = this.channel;
          this.stream.logo = "https://maxcdn.icons8.com/iOS7/PNG/100/Messaging/offline_filled-100.png";
          this.stream.status = "Channel is currently offline.";
        } else if (data.error) {
          // no user
          this.stream.name = this.channel;
          this.stream.logo = "https://maxcdn.icons8.com/iOS7/PNG/100/User_Interface/error-100.png";
          this.stream.status = data.message;
        } else {
          // online
          this.stream.name = data.stream.channel.display_name;
          this.stream.logo = data.stream.channel.logo;
          this.stream.game = data.stream.game;
          this.stream.status = data.stream.channel.status;
          this.stream.url = data.stream.channel.url;
        }
      });
  }
  setClasses() {
    let classes =  {
      offline: this.stream.status === "Channel is currently offline.",
      online: this.stream.game !== "",
      error: this.stream.game === "" && this.stream.status !== "Channel is currently offline.",
    };
    return classes;
  }
}