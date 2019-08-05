import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { environment } from 'environments/environments';
import { Router } from '@angular/router';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private userProfile;

  constructor(private googlePlus: GooglePlus, private router: Router, private facebook: Facebook) { }

  ngOnInit() {
 
  }

  public facebookLogin(): void {
    this.facebook.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    .catch(e => console.log('Error logging into Facebook', e));
  
  
  this.facebook.logEvent(this.facebook.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }

  public fakeLogin(): void {
    this.router.navigate(["/home"])
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
