import {Component, AfterViewInit} from '@angular/core';

@Component({
    selector: 'app-messenger',
    templateUrl: './messenger.component.html',
    styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements AfterViewInit {
    localVideo: any;
    localStream: any;
    remoteVideo: any;
    peerConnection: any;
    uuid: any;
    serverConnection: any;

    peerConnectionConfig = {
        'iceServers': [
            {'urls': 'stun:stun.stunprotocol.org:3478'},
            {'urls': 'stun:stun.l.google.com:19302'},
        ]
    };

    constructor() {

    }

    ngAfterViewInit() {
        this.uuid = this.createUUID();

        this.localVideo = document.getElementById('localVideo');
        this.remoteVideo = document.getElementById('remoteVideo');

        this.serverConnection = new WebSocket('ws://192.241.198.125:12034');
        this.serverConnection.onmessage = this.gotMessageFromServer.bind(this);

        const constraints = {
            video: true,
            audio: true,
        };

        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia(constraints).then(this.getUserMediaSuccess.bind(this)).catch(this.errorHandler);
        } else {
            alert('Your browser does not support getUserMedia API');
        }
    }

    start(isCaller) {
        this.peerConnection = new RTCPeerConnection(this.peerConnectionConfig);
        this.peerConnection.onicecandidate = this.gotIceCandidate.bind(this);
        this.peerConnection.ontrack = this.gotRemoteStream.bind(this);
        this.peerConnection.addStream(this.localStream);

        if (isCaller) {
            this.peerConnection.createOffer().then(this.createdDescription.bind(this)).catch(this.errorHandler);
        }
    }

    getUserMediaSuccess(stream) {
        this.localStream = stream;
        this.localVideo.srcObject = stream;
        this.localVideo.muted = true;
    }


    gotMessageFromServer(message) {
        if (!this.peerConnection) this.start(false);

        var signal = JSON.parse(message.data);

        // Ignore messages from ourself
        if (signal.uuid == this.uuid) return;
        const self = this;
        if (signal.sdp) {
            self.peerConnection.setRemoteDescription(new RTCSessionDescription(signal.sdp)).then(function () {
                // Only create answers in response to offers
                if (signal.sdp.type == 'offer') {
                    self.peerConnection.createAnswer().then(self.createdDescription.bind(self)).catch(self.errorHandler);
                }
            }).catch(self.errorHandler);
        } else if (signal.ice) {
            self.peerConnection.addIceCandidate(new RTCIceCandidate(signal.ice)).catch(self.errorHandler);
        }
    }

    gotIceCandidate(event) {
        if (event.candidate != null) {
            this.serverConnection.send(JSON.stringify({'ice': event.candidate, 'uuid': this.uuid}));
        }
    }

    createdDescription(description) {
        console.log('got description');
        const self = this;
        this.peerConnection.setLocalDescription(description).then(function () {
            self.serverConnection.send(JSON.stringify({
                'sdp': self.peerConnection.localDescription,
                'uuid': self.uuid
            }));
        }).catch(self.errorHandler);
    }

    gotRemoteStream(event) {
        console.log('got remote stream');
        this.remoteVideo.srcObject = event.streams[0];
    }

    errorHandler(error) {
        console.log(error);
    }


    createUUID() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

}
