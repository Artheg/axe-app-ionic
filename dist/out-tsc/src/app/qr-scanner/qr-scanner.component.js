import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { AppModel } from '../App.model';
import { Router } from '@angular/router';
var QrScannerComponent = /** @class */ (function () {
    function QrScannerComponent(qrScanner, router) {
        this.qrScanner = qrScanner;
        this.router = router;
        this.rou;
    }
    QrScannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                // start scanning
                _this.qrScanner.show();
                AppModel.QREnabled.next(true);
                window.document.querySelector('ion-app').classList.add('cameraView');
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('Scanned something', text);
                    window.document.querySelector('ion-app').classList.remove('cameraView');
                    _this.qrScanner.hide(); // hide camera preview
                    scanSub_1.unsubscribe(); // stop scanning
                });
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    QrScannerComponent.prototype.ionViewDidEnter = function () {
    };
    QrScannerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-qr-scanner',
            templateUrl: './qr-scanner.component.html',
            styleUrls: ['./qr-scanner.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [QRScanner, Router])
    ], QrScannerComponent);
    return QrScannerComponent;
}());
export { QrScannerComponent };
//# sourceMappingURL=qr-scanner.component.js.map