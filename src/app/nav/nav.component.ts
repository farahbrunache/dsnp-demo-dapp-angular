import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-nav',
    template: `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <!--<a class="navbar-brand" href="#">Home</a>-->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <!--<li class="nav-item active">-->
                    <!--<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>-->
                    <!--</li>-->
                    <li class="nav-item active">
                        <a routerLink="/" class="nav-link" href="#">FMP</a>
                    </li>
                    <li class="nav-item">
                        <a routerLink="messenger" class="nav-link" href="#">Messenger</a>
                    </li>
                    <li class="nav-item">
                        <a routerLink="signin" class="nav-link" href="#">Sign In</a>
                    </li>
                </ul>
            </div>
        </nav>
    `,
    styles: []
})
export class NavComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
