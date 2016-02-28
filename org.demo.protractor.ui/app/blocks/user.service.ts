import {Injectable} from 'angular2/core';
import {Http} from 'angular2/src/http/http';
import {APP_SETTINGS} from '../app.settings';

@Injectable()
export class UserService {

    constructor(private APP_SETTINGS, private http: Http) {

    }

    getUser() {
        return this.http.get(APP_SETTINGS.basedir + 'login');
    }

}
