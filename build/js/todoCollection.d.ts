import { TodoItem } from "./todoitem";
type itemCounts = {
    total: number;
    incomplete: number;
};
export declare class TodoCollection {
    username: string;
    todoItems: TodoItem[];
    private nextId;
    private itemMap;
    constructor(username: string, todoItems?: TodoItem[]);
    addTodo(task: string): number;
    getTodoById(id: number): TodoItem | undefined;
    getTodoItems(includeComplete: boolean): TodoItem[];
    markComplete(id: number, complete: boolean): void;
    removeComplete(): void;
    getItemCounts(): itemCounts;
}
export {};
