import {TodoList} from './todoList.model';
import {APP_SETTINGS} from '../app.settings';

class TodolistCtrl {
    static $inject = ['Upload'];
    public todos: TodoList[] = [];

    constructor(private Upload) {
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
