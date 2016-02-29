/// <reference path='../models/org.demo.protractor.security.api/User' />
import 'rxjs/Rx';
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {APP_SETTINGS} from '../app.settings';

@Injectable()
export class UserService {

    constructor(private http: Http) {
    }

    getUser() {
        return this.http.get(APP_SETTINGS.basedir + 'login')
            // Call map on the response observable to get the parsed people object
            .map(res => {
                return res.json();
            });
    }

}
