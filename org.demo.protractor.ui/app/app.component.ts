import {Component} from 'angular2/core';
import {RouterOutlet, RouteConfig, RouteDefinition} from 'angular2/router';
import {APP_ROUTES} from './app.routes';
import {NavbarComponent} from './navbar/navbar.component';
import {LoggerService} from './blocks/logger.service';
import {UserService} from './blocks/user.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RegisterComponent} from './register/register.ctrl.ts';

@Component({
    selector: 'main-app',
    templateUrl: 'app/app.html',
    directives: [RouterOutlet, NavbarComponent, RegisterComponent],
    providers: [UserService],
    viewProviders: [HTTP_PROVIDERS]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
    public appRoutes: RouteDefinition[];
    private logger: LoggerService;

    constructor(logger: LoggerService) {
        this.logger = logger;
        this.appRoutes = APP_ROUTES;
    }
}
