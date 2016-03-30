import {UserService} from '../blocks/user.service';

class RegisterCtrl {
    user: User = {
        username: '',
        password: '',
        email: ''
    };
    constructor(private userService: UserService) {

    }
    submitted = false;
    onSubmit() {
        if (window.confirm('Are all details correct?')) {
            this.submitted = true;
            this.userService.register(this.user).then(data => {
                // noop
            }, error => console.error('Could not create user.'));
        }
    }
}

export = RegisterCtrl
