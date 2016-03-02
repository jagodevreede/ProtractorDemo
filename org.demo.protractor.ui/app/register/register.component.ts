import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {UserService} from '../blocks/user.service';
import {NgForm}    from 'angular2/common';

@Component({
    selector: 'register',
    templateUrl: 'app/register/register.html',
    directives: [CORE_DIRECTIVES, NgForm]
})
export class RegisterComponent {
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
        this.userService.register(this.user).subscribe(data => {
            // noop
        }, error => console.error('Could not create user.'));
    }
}
