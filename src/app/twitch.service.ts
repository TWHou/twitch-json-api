import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TwitchService {

    constructor(private _http: Http) { }

    getChannel(channel: string) {
        return this._http.get(`https://wind-bow.glitch.me/twitch-api/streams/${channel}`)
            .map((response: Response) => response.json());
    }

}