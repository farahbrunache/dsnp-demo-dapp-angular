import {Component} from '@angular/core';
import {RtcService} from "../services/rtc.service";

declare const RTCMultiConnection: any;

@Component({
    selector: 'app-messenger',
    templateUrl: './messenger.component.html',
    styleUrls: ['./messenger.component.css']
})
export class MessengerComponent {

    constructor(rtcService: RtcService) {
        const connection = new RTCMultiConnection();
        connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';
    }

    openRoom() {
        new RTCMultiConnection().open();
    }

    joinRoom() {
        new RTCMultiConnection().connect();
    }


}
