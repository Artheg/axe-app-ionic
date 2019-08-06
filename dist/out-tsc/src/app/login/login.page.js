import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Router } from '@angular/router';
import { Facebook } from '@ionic-native/facebook/ngx';
var LoginPage = /** @class */ (function () {
    function LoginPage(googlePlus, router, facebook) {
        this.googlePlus = googlePlus;
        this.router = router;
        this.facebook = facebook;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.facebookLogin = function () {
        this.facebook.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) { return console.log('Logged into Facebook!', res); })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
        this.facebook.logEvent(this.facebook.EVENTS.EVENT_NAME_ADDED_TO_CART);
    };
    LoginPage.prototype.fakeLogin = function () {
        this.router.navigate(["/home"]);
    };
    LoginPage.prototype.googleLogin = function () {
        console.log("tryin some stuff with webclientid");
        this.googlePlus.getSigningCertificateFingerprint().then(function (result) { console.log("Received fingerprint", result); });
        this.googlePlus.login({}).then(function (user) { return console.log(user); });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [GooglePlus, Router, Facebook])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map