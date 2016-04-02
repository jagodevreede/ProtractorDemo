import {UserService} from '../blocks/user.service';
class NavbarController {

    static $inject = ['$state', '$rootScope', '$scope', 'userService'];
    states;
    user: User;
    constructor(private $state, $rootScope, $scope, private userService: UserService) {
        this.states = $state.get();
        userService.getUser().then((u) => {
            this.user = u;
        });
        $rootScope.$on('userChange', () => {
            this.user = userService.currentUser;
        });

        $scope.stateFilter = (item) => {
            if (item.abstract) {
                return false;
            }
            if (!item.showWhen) {
                return true;
            }
            switch (item.showWhen) {
                case 'always':
                    return true;
                case 'loggedIn':
                    return !!this.user;
                case 'loggedOut':
                    return !this.user;
            }
            return false;
        };
    }

    signout() {
        this.userService.logout().then(data => {
            this.$state.go('Home');
        }, error => console.error('Could not logout user.'));
    }

    signin() {
        this.$state.go('Login');
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

