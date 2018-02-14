import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CheckIsLoggedService {
    public IsUserLoggedIn: Subject<boolean> = new Subject<boolean>();
}