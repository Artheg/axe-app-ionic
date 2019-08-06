import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { FeedComponent } from '../feed/feed.component';
import { QrScannerComponent } from '../qr-scanner/qr-scanner.component';
import { ProfileComponent } from '../profile/profile.component';
var routes = [
    {
        path: '',
        component: HomePage,
        children: [
            {
                path: '',
                redirectTo: 'feed',
                pathMatch: 'full'
            },
            {
                path: 'feed',
                component: FeedComponent
            },
            {
                path: 'qr',
                component: QrScannerComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            }
        ]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
export { HomeRoutingModule };
//# sourceMappingURL=home-routing.module.js.map