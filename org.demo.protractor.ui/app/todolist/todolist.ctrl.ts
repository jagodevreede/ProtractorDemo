import {TodoList} from './todoList.model';

class TodolistCtrl {
    public todos: TodoList[] = [];

    constructor() {
        this.addNewList();
    }

    public addNewList() {
        this.todos.push(new TodoList());
    }

    public removeList(index: number) {
        this.todos.splice(index, 1);
    }
}

export = TodolistCtrl;
