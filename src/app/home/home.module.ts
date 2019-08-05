import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';
import { QrScannerModule } from '../qr-scanner/qr-scanner.module';
import { ProfileModule } from '../profile/profile.module';
import { FeedModule } from '../feed/feed.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedModule,
    QrScannerModule,
    ProfileModule,
    HomeRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
