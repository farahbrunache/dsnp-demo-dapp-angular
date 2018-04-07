import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SigninComponent} from './signin/signin.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChatComponent} from './chat/chat.component';


@NgModule({
    declarations: [
        AppComponent,
        SigninComponent,
        PageNotFoundComponent,
        DashboardComponent,
        ChatComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
