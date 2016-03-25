import {TodoList} from './todoList.model';
import {APP_SETTINGS} from '../app.settings';
import {UserService} from '../blocks/user.service';

class TodolistCtrl {
    static $inject = ['Upload', 'userService'];
    public todos: TodoList[] = [];
    public user: User;

    constructor(private Upload, private userService: UserService) {
        userService.getUser().then((u) => {
            this.user = u;
        });
        this.addNewList();
    }

    public addNewList() {
        this.todos.push(new TodoList());
    }

    public removeList(index: number) {
        this.todos.splice(index, 1);
    }

    public upload(todoList: TodoList) {
        this.Upload.upload({
            url: APP_SETTINGS.basedir + 'upload',
            data: {file: todoList.file}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
            todoList.imageid = APP_SETTINGS.basedir + 'upload/' + resp.data.id;
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        });
    }
}

export = TodolistCtrl;
