import {Todo} from './todo.model';

export class TodoList {
    public list: Todo[] = [];
    public todo: Todo;

    constructor() {
        this.todo = new Todo('Add me to list!', false);
    }

    addTodo() {
        this.list.push(Todo.clone(this.todo));
        this.todo.clear();
    }

    delTodo(index: number) {
        this.list.splice(index, 1);
    }
}
