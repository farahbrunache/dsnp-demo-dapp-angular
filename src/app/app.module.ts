import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SigninComponent} from './signin/signin.component';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {MessengerComponent} from './messenger/messenger.component';
import {VideoComponent} from './messenger/video/video.component';
import {ChatMessageComponent} from './messenger/chat-message/chat-message.component';
import {ChatThreadComponent} from './messenger/chat-thread/chat-thread.component';
import {ChatThreadsComponent} from './messenger/chat-threads/chat-threads.component';
import {ChatWindowComponent} from './messenger/chat-window/chat-window.component';
import {FromNowPipe} from './messenger/pipes/from-now.pipe';
import {MessagesService} from "./messenger/message/messages.service";
import {ThreadsService} from "./messenger/thread/threads.service";
import {UsersService} from "./messenger/user/users.service";

import {RtcService} from './services/rtc.service';

@NgModule({
    declarations: [
        AppComponent,
        SigninComponent,
        PageNotFoundComponent,
        MessengerComponent,
        FooterComponent,
        NavComponent,
        HomeComponent,
        VideoComponent,
        ChatMessageComponent,
        ChatThreadComponent,
        ChatThreadsComponent,
        ChatWindowComponent,
        FromNowPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [
        RtcService,
        MessagesService,
        ThreadsService,
        UsersService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
