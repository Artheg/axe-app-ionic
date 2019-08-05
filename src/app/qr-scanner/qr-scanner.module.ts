import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrScannerComponent } from './qr-scanner.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
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
export class QrScannerModule { }
