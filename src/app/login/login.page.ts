import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { environment } from 'environments/environments';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private userProfile;

  constructor(private googlePlus: GooglePlus) { }

  ngOnInit() {
 
  }

  public googleLogin() {
    console.log("tryin some stuff with webclientid");
    this.googlePlus.getSigningCertificateFingerprint().then(
      (result) => {console.log("Received fingerprint", result)}
    );
    this.googlePlus.login({
    }).then(
      (user) => console.log(user)
    );
  }
}
