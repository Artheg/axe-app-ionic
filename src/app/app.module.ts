import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';

import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { QROverlay } from './qr-overlay/qr-overlay.component';

export const firebaseConfig = environment;

@NgModule({
  declarations: [AppComponent, QROverlay],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Facebook,
    QRScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
