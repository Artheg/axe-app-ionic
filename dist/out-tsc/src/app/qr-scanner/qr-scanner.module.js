import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrScannerComponent } from './qr-scanner.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
var QrScannerModule = /** @class */ (function () {
    function QrScannerModule() {
    }
    QrScannerModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                QrScannerComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                IonicModule
            ],
            exports: [
                QrScannerComponent
            ]
        })
    ], QrScannerModule);
    return QrScannerModule;
}());
export { QrScannerModule };
//# sourceMappingURL=qr-scanner.module.js.map