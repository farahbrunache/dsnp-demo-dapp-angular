import {Injectable} from '@angular/core';
declare const RTCMultiConnection: any;

@Injectable()
export class RtcService {

    // https://github.com/muaz-khan/MultiRTC/blob/master/MultiRTC-websocket/ui.peer-connection.js

    SIGNALING_SERVER: string;

    constructor() {
    }

    // rtcMultiConnection = new RTCMultiConnection();
    //
    // rtcMultiConnection.session = { data: true };
    //
    // rtcMultiConnection.sdpConstraints.mandatory = {
    //     OfferToReceiveAudio: true,
    //     OfferToReceiveVideo: true
    // };
    //
    // const SIGNALING_SERVER = 'wss://www.webrtcweb.com:9449'; // change this url
    // rtcMultiConnection.openSignalingChannel = function(config) {
    //     config.channel = config.channel || this.channel;
    //     var websocket = new WebSocket(SIGNALING_SERVER);
    //     websocket.channel = config.channel;
    //     websocket.onopen = function() {
    //         websocket.push(JSON.stringify({
    //             open: true,
    //             channel: config.channel
    //         }));
    //         if (config.callback)
    //             config.callback(websocket);
    //     };
    //     websocket.onmessage = function(event) {
    //         config.onmessage(JSON.parse(event.data));
    //     };
    //     websocket.push = websocket.send;
    //     websocket.send = function(data) {
    //         if (websocket.readyState != 1) {
    //             return setTimeout(function() {
    //                 websocket.send(data);
    //             }, 1000);
    //         }
    //
    //         websocket.push(JSON.stringify({
    //             data: data,
    //             channel: config.channel
    //         }));
    //     };
    // };
    // rtcMultiConnection.customStreams = { };


}
