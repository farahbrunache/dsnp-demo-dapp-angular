import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer class="footer">
            <p class="text-muted">
                © {{ year }} FMP
            </p>
        </footer>
    `,
    styles: []
})
export class FooterComponent {

    year = new Date().getFullYear();

}
