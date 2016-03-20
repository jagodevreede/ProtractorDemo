import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouterLink, RouteDefinition, Router} from 'angular2/router';
import {UserService} from '../blocks/user.service';

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar/navbar.html',
    styleUrls: [
        'app/navbar/navbar.css'
    ],
    directives: [RouterLink, CORE_DIRECTIVES]
})
export class NavbarComponent {
    @Input() brand: string;
    @Input() routes: RouteDefinition[];
    user: User;

    constructor(private userService: UserService, private router: Router) {
        userService.getUser().subscribe(user => this.user = user, error => this.user = null);
        userService.userChangeEvent.subscribe((newUser) => this.user = newUser);
    }

    signout() {
        this.userService.logout().subscribe(data => {
            this.router.navigate(['Home']);
        }, error => console.error('Could not logout user.'));
    }

    signin() {
        this.router.navigate(['Login']);
    }
}
