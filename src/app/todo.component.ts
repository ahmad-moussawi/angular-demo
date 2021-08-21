import { Component } from "@angular/core";

@Component({
    selector: 'todo',
    template: `

        <input type="text" #todoInput>
        <button (click)="addTodo(todoInput)">Add Todo</button>

        <div class="item" *ngFor="let todo of todos">
            {{ todo }}
            <button class="btn-del" (click)="deleteItem(todo)">Delete</button>
        </div>
    `,
    styles: [`
    .item {
        border: 1px solid #0072bc;
        padding: 10px;
        margin-top: 10px;
    }

    .btn-del {
        float: right;
    }
    `]
})
export class TodoComponent {

    todos: string[] = [
        'Learn Angular',
        'Learn JavaScript',
        'Learn CSS',
    ];

    deleteItem(todo: string) {
        this.todos = this.todos.filter(x => x !== todo);
    }

    addTodo(todo: HTMLInputElement) {
        this.todos.push(todo.value);
        todo.value = '';
    }



}