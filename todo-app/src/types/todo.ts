export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface TodoItemProps {
    todo: Todo;
    onDelete: (id: number) => void;
    onToggleComplete: (id: number) => void;
    onUpdate: (id: number, newText: string) => void;
}

export interface TodoListProps {
    todos: Todo[];
    onDeleteTodo: (id: number) => void;
    onToggleCompleteTodo: (id: number) => void;
    onUpdateTodo: (id: number, newText: string) => void;
}

export interface AddTodoFormProps {
    onAddTodo: (text: string) => void;
}

