/// <reference path='../models/org.demo.protractor.security.api/User' />
import 'rxjs/Rx';
import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {APP_SETTINGS} from '../app.settings';

@Injectable()
export class UserService {
    private headers: Headers;

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    getUser() {
        return this.http.get(APP_SETTINGS.basedir + 'login')
            // Call map on the response observable to get the parsed people object
            .map(res => {
                return res.json();
            });
    }

    register(user: User) {
        return this.http.put(APP_SETTINGS.basedir + 'login', JSON.stringify(user), { headers: this.headers });
    }

    logout() {
        return this.http.delete(APP_SETTINGS.basedir + 'login', { headers: this.headers });
    }
}
