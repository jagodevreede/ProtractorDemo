import {Component} from 'angular2/core';
import {UserService} from '../blocks/user.service';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.html',
    styleUrls: [
        'app/home/home.css'
    ]
})
export class HomeComponent {
    user: User;
    constructor(private userService: UserService) {
        userService.getUser().subscribe((u) => {
            this.user = u;
        }, () => this.user = null);
    }
}
