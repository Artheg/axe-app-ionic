import { Observable, BehaviorSubject } from 'rxjs';

export class AppModel {
    public static QREnabled: BehaviorSubject<boolean> = new BehaviorSubject(false);
}