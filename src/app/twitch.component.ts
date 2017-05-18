import { Component, Input } from '@angular/core';

@Component({
  selector: 'twitch',
  templateUrl: 'twitch.component.html',
  styleUrls: ['./twitch.component.css']
})
export class TwitchComponent {

  @Input() channel;

}