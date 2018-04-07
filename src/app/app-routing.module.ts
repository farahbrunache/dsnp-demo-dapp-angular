import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SigninComponent} from "./signin/signin.component";
import {MessengerComponent} from "./messenger/messenger.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'messenger', component: MessengerComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
