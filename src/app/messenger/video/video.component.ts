import {Component, AfterViewInit, OnDestroy, OnInit} from '@angular/core';

declare const videojs: any;

@Component({
    selector: 'app-video',
    template: `
        <video *ngIf="videoUrl" id="video_player_id"
               class="video-js vjs-big-play-centered"
               controls preload="auto">
            <source src="{{listing.url}}" type="video/mp4">
        </video>
    `,
    styles: []
})
export class VideoComponent implements AfterViewInit, OnDestroy {

    id: string;
    private videoJSplayer: any;

    constructor() {
    }

    ngAfterViewInit() {
        this.videoJSplayer = videojs(document.getElementById('video_player_id'), {}, function () {
            this.play();
        });
    }

    ngOnDestroy() {
        this.videoJSplayer.dispose();
    }

}
