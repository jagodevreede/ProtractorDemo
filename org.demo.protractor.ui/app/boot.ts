///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component';
import {LoggerService} from './blocks/logger.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {BrowserXhr} from 'angular2/http';
import {provide} from 'angular2/core';
import {CORSBrowserXHR} from './blocks/CORSBrowserXHR';

bootstrap(AppComponent, [
    LoggerService, ROUTER_PROVIDERS, HTTP_PROVIDERS,
    provide(BrowserXhr, {useClass: CORSBrowserXHR})
]);
