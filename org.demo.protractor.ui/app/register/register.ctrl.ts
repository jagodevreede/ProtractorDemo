import {UserService} from '../blocks/user.service';

class RegisterCtrl {
    user: User = {
        username: 'x',
        password: 'x',
        email: 'x@x.com'
    };
    constructor(private userService: UserService) {

    }
    submitted = false;
    onSubmit() {
        this.submitted = true;
        this.userService.register(this.user).then(data => {
            // noop
        }, error => console.error('Could not create user.'));
    }
}

export = RegisterCtrl
