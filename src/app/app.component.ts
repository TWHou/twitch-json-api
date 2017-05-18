import { Component, OnInit } from '@angular/core';
import { TwitchService } from './twitch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  channels = [];

  constructor(private _twitchService: TwitchService) { }

  ngOnInit() {
    sampleChannels.forEach((ele) => {
        this._twitchService.getChannel(ele)
        .subscribe(data => {
            if (data.stream === null) {
                // offline
                let channel = {
                    name: ele,
                    logo: "https://maxcdn.icons8.com/iOS7/PNG/100/Messaging/offline_filled-100.png",
                    status: "Channel is currently offline.",
                    state: "offline",
                    game: "",
                    url: "",
                    visible: true
                };
                this.channels.push(channel);
            } else if (data.error) {
                // no user
                let channel = {
                    name: ele,
                    logo: "https://maxcdn.icons8.com/iOS7/PNG/100/User_Interface/error-100.png",
                    status: data.message,
                    state: "error",
                    game: "",
                    url: "",
                    visible: true
                };
                this.channels.push(channel);
            } else {
                // online
                let channel = {
                    name: data.stream.channel.display_name,
                    logo: data.stream.channel.logo,
                    game: data.stream.game,
                    status: data.stream.channel.status,
                    state: "online",
                    url: data.stream.channel.url,
                    visible: true
                };
                this.channels.push(channel);
            }
        });
    });
  }
}

const sampleChannels: string[] = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];