import {UserService} from '../blocks/user.service';

class LoginCtrl {
    static $inject = ['userService', '$state'];
    user: User = {
        username: '',
        password: '',
    };
    constructor(private userService: UserService, private $state) {

    }
    login() {
        this.userService.login(this.user).then(data => {
            this.$state.go('Home');
        }, error => console.error('Could not login user.'));
    }
}

export = LoginCtrl
