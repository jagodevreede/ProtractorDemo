import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {UserService} from '../blocks/user.service';
import {Router} from 'angular2/router';
import {NgForm}    from 'angular2/common';

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.html',
    directives: [CORE_DIRECTIVES, NgForm]
})
export class LoginComponent {
    user: User = {
        username: 'x',
        password: 'x',
    };
    constructor(private userService: UserService, private router: Router) {

    }
    login() {
        this.userService.login(this.user).subscribe(data => {
            this.router.navigate(['Home']);
        }, error => console.error('Could not login user.'));
    }
}
