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
    firebase.initializeApp(environment.firebaseConfig);
    console.log(environment.firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("LOGIN STATUS == ", user);
      } else {
        this.userProfile = null;
        console.log("LOGIN STATUS === ", user);

      }
    });
  }

  public async googleLogin() {

    try {
      await this.googlePlus.login({
        'webClientId': '613245655462-ung2gd4e13515jviju7u8agfvotng8jf.apps.googleusercontent.com',
        'offline': true
      }).then(
        (result) => {
          console.log("LOGIN SUCCESS!!!", result)
        }
      );
      
    } catch (error) {
      console.log("ERROR: " + error);
    }
   
  }
}
