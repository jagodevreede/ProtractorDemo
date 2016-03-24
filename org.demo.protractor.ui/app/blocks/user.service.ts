/// <reference path='../models/org.demo.protractor.security.api/User' />
import {APP_SETTINGS} from '../app.settings';

export class UserService {
    static $inject = ['$http', '$rootScope'];
    currentUser: User;

    constructor(private $http: angular.IHttpService, private $rootScope) {
    }

    getUser() {
        return this.$http.get(APP_SETTINGS.basedir + 'login').then((res) => {
            return this.changeUser(res.data);
        }, () => {
            this.changeUser(null);
        });
    }

    register(user: User) {
        return this.$http.put(APP_SETTINGS.basedir + 'login', user);
    }

    logout() {
        this.changeUser(null);
        return this.$http.delete(APP_SETTINGS.basedir + 'login');
    }

    login(user: User) {
        return this.$http.post(APP_SETTINGS.basedir + 'login', user).then((res) => {
            return this.changeUser(res.data);
        });
    }

    private changeUser(user: User) {
        if (user === this.currentUser || (user != null && this.currentUser != null && user.email === this.currentUser.email)) {
            return user;
        }
        this.currentUser = user;
        this.$rootScope.$emit('userChange', user);
        return user;
    }
}
