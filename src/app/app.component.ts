import {Component} from '@angular/core';
import {ChatExampleData} from "./messenger/dummy-data/chat-example-data";
import {UsersService} from "./messenger/user/users.service";
import {ThreadsService} from "./messenger/thread/threads.service";
import {MessagesService} from "./messenger/message/messages.service";

@Component({
    selector: 'app-root',
    template: `
        <app-nav></app-nav>
        <router-outlet></router-outlet>
        <!--<app-footer></app-footer>-->
    `,
    styles: []
})
export class AppComponent {
    constructor(public messagesService: MessagesService,
                public threadsService: ThreadsService,
                public usersService: UsersService) {
        ChatExampleData.init(messagesService, threadsService, usersService);
    }
}
