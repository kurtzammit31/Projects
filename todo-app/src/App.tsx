import React, { useState } from 'react';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import type { Todo } from './types/todo';
import TodoList from './components/TodoList/TodoList';

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(), // Using timestamp as a simple unique ID
            text: text
        };
        setTodos([...todos, newTodo]); //Instantiating a new array with the spread operator
        //So react will detect changes and re-render
    };

    //similar to the spread operator, filter create a new arry
    //So react will detect changes and re-render
    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id)); //Filtering out the todo with the given id
    }

    return (
        <div>
            <h1> Todo App</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <TodoList todos={todos} onDeleteTodo={deleteTodo} />
            Total Todos: {todos.length}
        </div>
    );
};

export default TodoApp;