import {RouteDefinition} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {TodolistComponent} from './todolist/todolist.component';
import {SimplebindComponent} from './simplebind/simplebind.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

export var APP_ROUTES: RouteDefinition[] = [
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/simplebind', name: 'Simplebind', component: SimplebindComponent },
    { path: '/todolist', name: 'Todolist', component: TodolistComponent },
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/register', name: 'Register', component: RegisterComponent }
];
