import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { FeedComponent } from '../feed/feed.component';
import { QrScannerComponent } from '../qr-scanner/qr-scanner.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
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

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
