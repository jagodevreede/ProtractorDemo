import {UserService} from "../blocks/user.service";
class NavbarController {

    static $inject = ['$state', '$rootScope', 'userService'];
    states;
    user: User;
    constructor($state, $rootScope, userService: UserService) {
        this.states = $state.get();
        userService.getUser().then((u) => {
            this.user = u;
        });
    }

}

export class Navbar {
    constructor() {
        let directive: angular.IDirective = {};
        directive.restrict = 'E';
        directive.templateUrl = 'app/navbar/navbar.html';
        directive.controller = NavbarController;
        directive.controllerAs = 'navCtrl';
        directive.link = function($scope, element, attrs) {
          //  userService.getUser().subscribe(user => this.user = user, error => this.user = null);
          //  userService.userChangeEvent.subscribe((newUser) => this.user = newUser);
        };
        return directive;
    }
}
/*
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
*/
